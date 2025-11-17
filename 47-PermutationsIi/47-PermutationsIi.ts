// Last updated: 11/17/2025, 4:38:34 PM
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];

  const list = nums.sort((a, b) => a - b);

  function backtrack(path: number[], used: boolean[]) {
    if (path.length == list.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < used.length; i++) {
      if (i > 0 && list[i - 1] == list[i] && !used[i - 1]) {
        continue;
      }

      if (!used[i]) {
        path.push(list[i]);
        used[i] = true;

        backtrack(path, used);

        path.pop();
        used[i] = false;
      }
    }
  }

  backtrack([], Array(nums.length).fill(false));

  return res;
}