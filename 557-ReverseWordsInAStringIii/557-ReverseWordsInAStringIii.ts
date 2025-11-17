// Last updated: 11/17/2025, 4:37:35 PM
function reverseWords(s: string): string {
    const a = s.split(' ')
    return a.map(o => o.split('').reverse().join('')).join(' ')
};