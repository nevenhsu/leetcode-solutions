// Last updated: 11/17/2025, 4:37:21 PM
function search(nums: number[], target: number): number {
  let result = -1,
    left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];
    if (n == target) {
      result = mid;
      break;
    } else if (n > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}