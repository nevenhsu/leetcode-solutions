// Last updated: 11/17/2025, 4:38:53 PM
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
       const pair = nums.indexOf(target - nums[i], i + 1)
       if (pair != -1) {
            return [i, pair]
       }
    }
};