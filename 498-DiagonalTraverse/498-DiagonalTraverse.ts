// Last updated: 11/17/2025, 4:37:39 PM
function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = [];
  let row = 0;
  let col = 0;

  while (row < mat.length && col < mat[0].length) {
    result.push(mat[row][col]);
    mat[row][col] = undefined;

    // go up
    if (mat[row - 1]?.[col + 1] != undefined) {
      row--;
      col++;
      // go down
    } else if (mat[row + 1]?.[col - 1] != undefined) {
      row++;
      col--;
    } // go right
    else if (
      mat[row]?.[col + 1] != undefined &&
      (row == 0 || row == mat.length - 1)
    ) {
      col++;
    } else {
      row++;
    }
  }

  return result;
}