// Last updated: 11/17/2025, 4:37:48 PM
class MedianFinder {
  private maxHeap: MyPriorityQueue<number>;
  private minHeap: MyPriorityQueue<number>;

  constructor() {
    this.maxHeap = new MyPriorityQueue<number>((a, b) => a > b);
    this.minHeap = new MyPriorityQueue<number>((a, b) => a < b);
  }

  addNum(num: number): void {
    if (this.maxHeap.size() == 0 || num <= this.maxHeap.peak()!) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop()!);
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop()!);
    }
  }

  findMedian(): number {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peak()!;
    } else {
      return (this.maxHeap.peak()! + this.minHeap.peak()!) / 2;
    }
  }
}

class MyPriorityQueue<T> {
  private data: T[] = [];

  constructor(private comparator: (a: T, b: T) => boolean) {}

  size() {
    return this.data.length;
  }

  peak(): T | undefined {
    return this.data[0];
  }

  push(val: T) {
    this.data.push(val);
    this.bubbleUp();
  }

  pop() {
    const top = this.peak();
    const last = this.data.pop();

    if (this.data.length && last != undefined) {
      this.data[0] = last;
      this.bubbleDown();
    }

    return top;
  }

  private bubbleUp() {
    let index = this.data.length - 1;
    const element = this.data[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.data[parentIndex];

      if (this.comparator(element, parent)) {
        this.data[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }

    this.data[index] = element;
  }

  private bubbleDown() {
    let index = 0;
    const element = this.data[0];

    while (true) {
      let left = index * 2 + 1,
        right = index * 2 + 2,
        swap = index;

      if (
        left < this.data.length &&
        this.comparator(this.data[left], element)
      ) {
        swap = left;
      }

      if (
        right < this.data.length && 
        this.comparator(this.data[right], this.data[left])
      ) {
        swap = right;
      }

      if (swap == index) break;

      this.data[index] = this.data[swap];
      index = swap;
    }

    this.data[index] = element;
  }
}