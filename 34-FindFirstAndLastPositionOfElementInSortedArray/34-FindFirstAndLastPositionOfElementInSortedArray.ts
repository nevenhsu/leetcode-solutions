// Last updated: 11/17/2025, 4:38:39 PM
function searchRange(nums: number[], target: number): number[] {
  let l = 0,
    r = nums.length - 1,
    res = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) {
      res = mid;
      break;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (res == -1) {
    return [-1, -1];
  }

  let lx = 0,
    ly = res,
    rx = res,
    ry = nums.length - 1;

  while (lx < ly) {
    const mid = Math.floor((lx + ly) / 2);
    if (nums[mid] == target && nums[mid - 1] != target) {
      lx = mid;
      break;
    } else if (nums[mid] == target) {
      ly = mid - 1;
    } else {
      lx = mid + 1;
    }
  }

  while (rx < ry) {
    const mid = Math.floor((rx + ry) / 2);
    if (nums[mid] == target && nums[mid + 1] != target) {
      ry = mid;
      break;
    } else if (nums[mid] == target) {
      rx = mid + 1;
    } else {
      ry = mid - 1;
    }
  }

  return [lx, ry];
}