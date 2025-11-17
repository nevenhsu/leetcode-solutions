// Last updated: 11/17/2025, 4:38:31 PM
function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const digiA = i >= 0 ? Number(a[i]) : 0;
    const digiB = j >= 0 ? Number(b[j]) : 0;
    const sum = digiA + digiB + carry;
    result = `${sum % 2}${result}`;
    carry = sum > 1 ? 1 : 0;

    i--;
    j--;
  }

  return result;
}