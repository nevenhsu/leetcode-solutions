// Last updated: 11/17/2025, 4:38:36 PM
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  function backtrack(path: number[], start: number, total: number) {
    if (total == target) {
      res.push([...path]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(path, i, total + candidates[i]);
      path.pop();
    }
  }

  backtrack([], 0, 0);

  return res;
}