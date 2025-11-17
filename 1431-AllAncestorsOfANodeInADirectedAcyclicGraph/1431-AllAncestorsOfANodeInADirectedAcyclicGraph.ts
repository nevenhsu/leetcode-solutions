// Last updated: 11/17/2025, 4:36:56 PM
function getAncestors(n: number, edges: number[][]): number[][] {
  const rel: number[][] = Array.from({ length: n }, () => []);

  for (let [a, b] of edges) {
    rel[b].push(a);
  }

  const res: number[][] = [];

  for (let i = 0; i < n; i++) {
    const memo = new Set();
    const ancestors: number[] = [];
    const queue: number[] = [...rel[i]];

    while (queue.length) {
      const a = queue.shift()!;
      if (!memo.has(a)) {
        memo.add(a);
        ancestors.push(a);

        for (let prev of rel[a]) {
          queue.push(prev);
        }
      }
    }

    ancestors.sort((a, b) => a - b);
    res.push(ancestors);
  }

  return res;
}