// Last updated: 11/17/2025, 4:37:05 PM
function shipWithinDays(weights: number[], days: number): number {
  let min = Math.max(...weights);
  let max = weights.reduce((a, b) => a + b, 0);

  while (min < max) {
    const mid = Math.floor((min + max) / 2);

    let needed = 1;
    let carry = 0;

    for (let w of weights) {
      if (carry + w > mid) {
        needed += 1;
        carry = w;
      } else {
        carry += w;
      }
    }

    if (needed <= days) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
}