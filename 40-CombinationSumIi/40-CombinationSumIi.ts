// Last updated: 11/17/2025, 4:38:37 PM
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const list = candidates.sort((a, b) => a - b);

  function backtrack(path: number[], start: number, total: number) {
    if (total == target) {
      res.push([...path]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < list.length; i++) {
      if (i > start && list[i] === list[i - 1]) continue;

      path.push(list[i]);
      backtrack(path, i + 1, total + list[i]);
      path.pop();
    }
  }

  backtrack([], 0, 0);

  return res;
}