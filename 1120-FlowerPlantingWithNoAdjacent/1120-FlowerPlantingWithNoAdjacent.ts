// Last updated: 11/17/2025, 4:37:03 PM
function gardenNoAdj(n: number, paths: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (let [a, b] of paths) {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  }

  const gardens = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const used = new Set<number>();

    for (let next of graph[i]) {
      if (gardens[next] !== 0) {
        used.add(gardens[next]);
      }
    }

    for (let j = 1; j <= 4; j++) {
      if (!used.has(j)) {
        gardens[i] = j;
        break;
      }
    }
  }

  return gardens;
}