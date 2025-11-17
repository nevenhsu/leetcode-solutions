// Last updated: 11/17/2025, 4:38:13 PM
function getRow(rowIndex: number): number[] {
  if (rowIndex == 0) return [1]; // 0

  let arr = [1,1];
  for (let i = 1; i < rowIndex; i++) {
    const temp = [1];
    for (let j = 1; j < arr.length; j++) {
      temp.push(arr[j - 1] + arr[j]);
    }
    temp.push(1);
    arr = temp;
  }

  return arr;
};