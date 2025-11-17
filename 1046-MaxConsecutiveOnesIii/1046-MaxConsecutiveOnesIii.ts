// Last updated: 11/17/2025, 4:37:07 PM
function longestOnes(nums: number[], k: number): number {
  let flip = 0,
    left = 0,
    max = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == 0) {
      flip++;
    }
    while (flip > k) {
      if (nums[left] == 0) {
        flip--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}