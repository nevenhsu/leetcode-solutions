// Last updated: 11/17/2025, 4:38:51 PM
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const lgtr = height[left] > height[right];
    const w = right - left;
    const h = lgtr ? height[right] : height[left];
    const amount = w * h;

    if (amount > max) {
      max = amount;
    }

    if (lgtr) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}