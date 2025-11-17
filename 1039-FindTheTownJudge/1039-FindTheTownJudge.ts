// Last updated: 11/17/2025, 4:37:08 PM
function findJudge(n: number, trust: number[][]): number {
  const arr = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of trust) {
    arr[a]--;
    arr[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (arr[i] == n - 1) {
      return i;
    }
  }

  return -1;
}