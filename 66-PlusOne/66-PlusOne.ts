// Last updated: 11/17/2025, 4:38:32 PM
function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    
    while(i >= 0) {
        const n = digits[i] + 1
        if (n > 9) {
            digits[i] = 0
            if (i == 0) {
              digits.unshift(1)
            }
            i -= 1
        } else {
            digits[i] = n
            i = -1
        }
    }
    
    return digits
};