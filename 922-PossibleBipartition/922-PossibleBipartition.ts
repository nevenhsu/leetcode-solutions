// Last updated: 11/17/2025, 4:37:16 PM
function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const relation: number[][] = Array.from({ length: n + 1 }, () => []);

  for (let [a, b] of dislikes) {
    relation[a].push(b);
    relation[b].push(a);
  }

  const colors: number[] = Array.from({ length: n + 1 }, () => 0);

  function dfs(c: number, color: number): boolean {
    colors[c] = color;

    for (let next of relation[c]) {
      if (colors[next] === 0) {
        if (!dfs(next, -color)) return false;
      } else if (colors[next] === color) {
        return false;
      }
    }

    return true;
  }

  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }

  return true;
}