// Last updated: 11/17/2025, 4:36:53 PM
function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const arr: number[] = Array(n).fill(0);

  for (const [from, to] of edges) {
    arr[to]++;
  }

  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      result.push(i);
    }
  }

  return result;
}