// Last updated: 11/17/2025, 4:37:12 PM
function sortedSquares(nums: number[]): number[] {
    return nums.map(o => o * o).sort((a,b) => a - b)
};