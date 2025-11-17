// Last updated: 11/17/2025, 4:36:55 PM
function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  const arr: number[][] = Array.from({ length: numCourses }, () => []);

  for (let [a, b] of prerequisites) {
    arr[a].push(b);
  }

  const memo: number[][] = Array.from({ length: numCourses }, () =>
    Array(numCourses).fill(0)
  );

  function dfs(c: number, target: number) {
    if (memo[c][target] !== 0) return memo[c][target] === 1;

    for (let next of arr[c]) {
      if (next == target || dfs(next, target)) {
        memo[c][target] = 1;
        return true;
      }
    }

    memo[c][target] = -1;
    return false;
  }

  const res = queries.map((n) => dfs(n[0], n[1]));

  return res;
}