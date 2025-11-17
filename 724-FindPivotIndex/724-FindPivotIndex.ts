// Last updated: 11/17/2025, 4:37:25 PM
function pivotIndex(nums: number[]): number {
    const total = sum(nums)
    
    let leftSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            leftSum += nums[i - 1]
        }
        
        const rightSum = total - leftSum - nums[i]
        if (leftSum === rightSum) {
            return i
        }
    }
    
    return -1
};


function sum(nums: number[]) {
    return nums.reduce((curr, result, index) => curr + result, 0)
}