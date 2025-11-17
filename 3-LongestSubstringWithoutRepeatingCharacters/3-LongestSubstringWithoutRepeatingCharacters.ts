// Last updated: 11/17/2025, 4:38:52 PM
function lengthOfLongestSubstring(s: string): number {
    let max = 0
    let i = 0
    let set = new Set()

    while (s[i]) {

        if (!set.has(s[i])) {
            set.add(s[i])
            i++
        } else {
            max = Math.max(set.size, max)
            i = s.indexOf(s[i], i - set.size) + 1
            set.clear()
        }

    }

    return Math.max(set.size, max)
};