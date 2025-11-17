// Last updated: 11/17/2025, 4:38:38 PM
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  if (target < nums[left]) {
    return left;
  }

  if (target > nums[right]) {
    return nums.length;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num == target) {
      return mid;
    } else if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left
}