// Last updated: 11/17/2025, 4:37:24 PM
function dominantIndex(nums: number[]): number {
    let max = 0, maxIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            maxIndex = i
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != max && nums[i] * 2 > max) {
            return -1
        }
    }
    
    return maxIndex
};