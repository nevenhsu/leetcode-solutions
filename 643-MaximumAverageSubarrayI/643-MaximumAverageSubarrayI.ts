// Last updated: 11/17/2025, 4:37:31 PM
function findMaxAverage(nums: number[], k: number): number {
  let current = 0;

  for (let i = 0; i < k; i++) {
    current += nums[i];
  }

  let max = current;

  for (let right = k; right < nums.length; right++) {
    current = current + nums[right] - nums[right - k];
    max = Math.max(max, current);
  }

  return max / k;
}