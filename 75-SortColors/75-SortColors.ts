// Last updated: 11/17/2025, 4:38:30 PM
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0,
    mid = 0,
    right = nums.length - 1;

  while (mid <= right) {
    const num = nums[mid];

    if (num == 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    } else if (num == 2) {
      [nums[right], nums[mid]] = [nums[mid], nums[right]];
      right--;
    } else {
      mid++;
    }
  }
}