// Last updated: 11/17/2025, 4:37:41 PM
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let current = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            current++
        } else {
            max = current > max ? current : max
            current = 0
        }
    }
    
    return current > max ? current : max
};