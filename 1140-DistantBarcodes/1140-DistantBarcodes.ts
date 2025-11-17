// Last updated: 11/17/2025, 4:37:00 PM
type Bar = {
  bar: number;
  count: number;
};

// @lc code=start
function rearrangeBarcodes(barcodes: number[]): number[] {
  const counts = new Map<number, number>();
  const heap = new GenericHeap<Bar>((a, b) => b.count - a.count);
  const res: number[] = [];

  for (let bar of barcodes) {
    counts.set(bar, (counts.get(bar) || 0) + 1);
  }

  for (let entry of counts.entries()) {
    const [bar, count] = entry;
    heap.insert({ bar, count });
  }

  while (heap.size() >= 2) {
    const first = heap.extract()!;
    const second = heap.extract()!;
    if (first && second) {
    res.push(first.bar);
    res.push(second.bar);
    first.count -= 1;
    second.count -= 1;
    if (first.count > 0) heap.insert(first);
    if (second.count > 0) heap.insert(second);
    }
  }

  const last = heap.extract()
  if (last) {
    res.push(last.bar);
  }

  return res;
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
