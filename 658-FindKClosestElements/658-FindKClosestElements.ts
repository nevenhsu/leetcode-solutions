// Last updated: 11/17/2025, 4:37:30 PM
type Point = {
  num: number;
  dis: number;
};

function findClosestElements(arr: number[], k: number, x: number): number[] {
  const heap = new GenericHeap<Point>((a, b) => {
    if (b.dis == a.dis) {
      return b.num - a.num;
    }
    return b.dis - a.dis;
  });

  for (let num of arr) {
    heap.insert({ num, dis: Math.abs(num - x) });

    if (heap.size() > k) {
      heap.extract();
    }
  }

  return heap.data.map((o) => o.num).sort((a, b) => a - b);
}

class GenericHeap<T> {
  data: T[] = [];
  private compare: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.compare = compareFn;
  }

  insert(val: T): void {
    this.data.push(val);
    this.bubbleUp();
  }

  extract(): T | void {
    if (!this.data.length) return undefined;
    const root = this.data[0];
    const end = this.data.pop()!;
    if (this.data.length) {
      this.data[0] = end;
      this.bubbleDown();
    }
    return root;
  }

  peek(): T | void {
    return this.data[0];
  }

  size(): number {
    return this.data.length;
  }

  private bubbleUp(): void {
    let index = this.data.length - 1;
    const element = this.data[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.data[parentIndex];

      if (this.compare(element, parent) >= 0) break;

      this.data[parentIndex] = element;
      this.data[index] = parent;
      index = parentIndex;
    }
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.data.length;

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swapIdx = index;

      if (
        leftIdx < length &&
        this.compare(this.data[leftIdx], this.data[swapIdx]) < 0
      ) {
        swapIdx = leftIdx;
      }

      if (
        rightIdx < length &&
        this.compare(this.data[rightIdx], this.data[swapIdx]) < 0
      ) {
        swapIdx = rightIdx;
      }

      if (index === swapIdx) break;

      [this.data[index], this.data[swapIdx]] = [
        this.data[swapIdx],
        this.data[index],
      ];

      index = swapIdx;
    }
  }
}