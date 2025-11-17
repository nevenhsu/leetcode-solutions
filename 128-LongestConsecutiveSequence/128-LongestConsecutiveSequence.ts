// Last updated: 11/17/2025, 4:38:10 PM
function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let max = 0

    for (const num of nums) {
        if (!set.has(num - 1)) {
            let count = 1, current = num

            while(set.has(++current)) {
                count++
            }

            max = Math.max(max, count)
        }
    }

    return max
};