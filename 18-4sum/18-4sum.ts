// Last updated: 11/17/2025, 4:38:47 PM
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);

  const results: number[][] = [];
  
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = nums.length - 1; j > i + 2; j--) {
      if (j < nums.length - 1 && nums[j] === nums[j + 1]) {
        continue;
      }

      let left = i + 1;
      let right = j - 1;

      while (left < right) {
        const num = nums[left] + nums[right] + nums[i] + nums[j];
        if (num == target) {
          results.push([nums[left], nums[right], nums[i], nums[j]]);
          left++;
          right--;

          while (left < right && nums[left - 1] == nums[left]) left++;
          while (left < right && nums[right + 1] == nums[right]) right--;
        } else if (num > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return results;
}