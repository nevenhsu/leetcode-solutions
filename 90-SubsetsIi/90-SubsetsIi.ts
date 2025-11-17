// Last updated: 11/17/2025, 4:38:26 PM
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [[]];
  const list = nums.sort((a, b) => a - b);
  const wordSet = new Map<String, Boolean>();

  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    const length = res.length;
    for (let j = 0; j < length; j++) {
      const arr = res[j].concat(num);
      const key = arr.join("");
      if (!wordSet.get(key)) {
        res.push(arr);
        wordSet.set(key, true);
      }
    }
  }

  return res;
}