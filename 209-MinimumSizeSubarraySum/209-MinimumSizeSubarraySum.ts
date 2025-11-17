// Last updated: 11/17/2025, 4:37:58 PM
function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength == Infinity ? 0 : minLength;
}