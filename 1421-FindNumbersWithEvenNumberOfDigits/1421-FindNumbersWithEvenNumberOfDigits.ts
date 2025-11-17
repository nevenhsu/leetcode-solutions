// Last updated: 11/17/2025, 4:36:57 PM
function findNumbers(nums: number[]): number {
    let res = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (`${nums[i]}`.length % 2 == 0) {
            res++
        }
    }
    
    return res
};