// Last updated: 11/17/2025, 4:38:29 PM
function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];

  for (let i = 0; i < nums.length; i++) {
    const length = res.length;
    for (let j = 0; j < length; j++) {
      res.push([...res[j], nums[i]]);
    }
  }

  return res;
}