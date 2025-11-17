// Last updated: 11/17/2025, 4:38:05 PM
function findPeakElement(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}