// Last updated: 11/17/2025, 4:37:22 PM
class KthLargest {
  k: number;
  data: number[] = [];

  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.sort((a, b) => a - b);

    this.data = nums;

    if (k < nums.length) {
      const n = nums.length - k;
      this.data.splice(0, n);
    }
  }

  add(val: number): number {
    if (val <= this.data[0] && this.data.length == this.k) {
      return this.data[0];
    }

    const i = this.data.findIndex((value) => value > val);

    if (i == -1) {
      this.data.push(val);
    } else {
      this.data.splice(i, 0, val);
    }

    if (this.data.length > this.k) {
      this.data.shift();
    }

    return this.data[0];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */