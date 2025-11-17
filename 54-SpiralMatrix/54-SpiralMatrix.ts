// Last updated: 11/17/2025, 4:38:33 PM
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  let col = 0;
  let row = 0;
  let end = false;

  while (!end) {
    result.push(matrix[row][col]);
    // @ts-ignore
    matrix[row][col] = undefined;

    // go right
    if (
      matrix[row][col + 1] != undefined &&
      matrix[row - 1]?.[col] == undefined
    ) {
      col++;
    } // go down
    else if (
      matrix[row + 1]?.[col] != undefined &&
      matrix[row][col + 1] == undefined
    ) {
      row++;
    } // go left
    else if (
      matrix[row][col - 1] != undefined &&
      matrix[row + 1]?.[col] == undefined
    ) {
      col--;
    } // go up
    else if (
      matrix[row - 1]?.[col] != undefined &&
      matrix[row][col - 1] == undefined
    ) {
      row--;
    } else {
      end = true;
    }
  }

  return result;
}