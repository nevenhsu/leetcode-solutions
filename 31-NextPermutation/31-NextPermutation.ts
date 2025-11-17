// Last updated: 11/17/2025, 4:38:42 PM
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // Start from the rightmost element and move leftward to find the pivot
  let pivot = nums.length - 2;
  while (nums[pivot] >= nums[pivot + 1]) {
    pivot--;
  }

  if (pivot < 0) {
    nums.reverse();
    return;
  }

  // Find the successor of the pivot
  let successor = nums.length - 1;
  while (nums[pivot] >= nums[successor]) {
    successor--;
  }

  [nums[pivot], nums[successor]] = [nums[successor], nums[pivot]];

  // Reverse the subarray to the right of the pivot to get the next smallest lexicographical order
  let left = pivot + 1,
    right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    right--;
    left++;
  }
}