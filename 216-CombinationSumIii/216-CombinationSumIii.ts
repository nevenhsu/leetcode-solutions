// Last updated: 11/17/2025, 4:37:55 PM
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];

  function backtrack(start: number, path: number[], sum: number) {
    if (path.length == k) {
      if (sum == n) {
        res.push([...path]);
      }

      return;
    }

    for (let i = start; i <= 9; i++) {
      if (sum + i > n) break;

      path.push(i);
      backtrack(i + 1, path, sum + i);
      path.pop();
    }
  }

  backtrack(1, [], 0);

  return res;
}