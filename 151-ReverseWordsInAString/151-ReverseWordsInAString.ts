// Last updated: 11/17/2025, 4:38:08 PM
function reverseWords(s: string): string {
    return s.trim().split(' ').filter(o => !!o).reverse().join(' ');
};