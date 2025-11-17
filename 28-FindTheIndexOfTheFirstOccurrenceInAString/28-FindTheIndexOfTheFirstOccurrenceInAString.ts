// Last updated: 11/17/2025, 4:38:43 PM
function strStr(haystack: string, needle: string): number {
    let a = 0;
    let index = -1;
    
    while (a < haystack.length && index == -1) {
        let current = 0;
        
        while(haystack[a + current] == needle[current] && current < needle.length) {
            current++;
        }
        
        if (current == needle.length) {
            index = a;
        } else {
            a += 1;
        }
    }
    
    return index;
};