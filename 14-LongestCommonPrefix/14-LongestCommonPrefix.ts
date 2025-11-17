// Last updated: 11/17/2025, 4:38:50 PM
function longestCommonPrefix(strs: string[]): string {
    let result = "";
    let limit = min(strs.map(o => o.length));
    
    for (let i = 0; i < limit; i++) {
        const current = strs[0][i];
        const isSame = strs.every(o => o[i] === current);
        if (isSame) {
            result = result + current;
        } else {
            break;
        }
    }
    
    return result;
};

function min(numbers: number[]) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}