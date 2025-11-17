// Last updated: 11/17/2025, 4:38:41 PM
function search(nums: number[], target: number): number {
  let lk = 0,
    rk = nums.length - 1;

  while (lk < rk) {
    const mid = Math.floor((lk + rk) / 2);
    if (nums[mid] > nums[rk]) {
      lk = mid + 1;
    } else {
      rk = mid;
    }
  }

  const pivot = lk;

  if (nums[pivot] <= target && target <= nums[nums.length - 1]) {
    lk = pivot;
    rk = nums.length - 1;
  } else {
    lk = 0;
    rk = pivot - 1;
  }

  while (lk <= rk) {
    const mid = Math.floor((lk + rk) / 2);
    const n = nums[mid];

    if (n == target) {
      return mid;
    } else if (n > target) {
      rk = mid - 1;
    } else {
      lk = mid + 1;
    }
  }

  return -1;
}
