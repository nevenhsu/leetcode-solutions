// Last updated: 11/17/2025, 4:38:14 PM
function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const a = Array(i + 1).fill(1);
    result[i] = a;

    if (i > 1) {
      for (let j = 1; j < i; j++) {
        a[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result;
}