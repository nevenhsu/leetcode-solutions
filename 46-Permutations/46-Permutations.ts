// Last updated: 11/17/2025, 4:38:35 PM
function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  function backtrack(path: number[], used: boolean[]) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));

  return res;
}