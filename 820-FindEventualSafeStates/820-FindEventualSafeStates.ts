// Last updated: 11/17/2025, 4:37:19 PM
function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const state: number[] = Array(n).fill(0);

  function dfs(node: number): boolean {
    if (state[node] === 1) return false;
    if (state[node] === 2) return true;

    state[node] = 1;

    for (let next of graph[node]) {
      if (!dfs(next)) return false;
    }

    state[node] = 2;
    return true;
  }

  const res: number[] = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) res.push(i);
  }

  return res;
}