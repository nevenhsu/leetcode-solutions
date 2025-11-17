// Last updated: 11/17/2025, 4:37:40 PM
function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const memo = new Set<string>();

  function backtrack(path: number[], start: number) {
    if (path.length >= 2) {
      const key = path.join(",");
      if (!memo.has(key)) {
        res.push([...path]);
        memo.add(key);
      }
    }

    for (let i = start; i < nums.length; i++) {
      const num = nums[i];

      if (path.length == 0 || num >= path[path.length - 1]) {
        path.push(num);
        backtrack(path, i + 1);
        path.pop();
      }
    }
  }

  backtrack([], 0);

  return res;
}