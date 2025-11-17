// Last updated: 11/17/2025, 4:38:28 PM
function search(nums: number[], target: number): boolean {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return true;
    }

    if (nums[left] == nums[mid] && nums[right] == nums[mid]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}