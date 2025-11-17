// Last updated: 11/17/2025, 4:38:48 PM
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(target - closestSum);

  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (i > 0 && num == nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];
      const d = Math.abs(target - sum);

      if (d < diff) {
        closestSum = sum;
        diff = d;
      }

      if (sum == target) {
        return sum;
      } else if (sum > target) {
        right--;
        while (left < right && nums[right + 1] == nums[right]) right--;
      } else {
        left++;
        while (left < right && nums[left - 1] == nums[left]) left++;
      }
    }
  }

  return closestSum;
}