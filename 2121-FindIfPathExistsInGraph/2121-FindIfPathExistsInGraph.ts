// Last updated: 11/17/2025, 4:36:50 PM
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const uf = new UnionFind(n);

  for (let edge of edges) {
    const [x, y] = edge;
    uf.union(x, y);
  }

  return uf.connect(source, destination);
}

class UnionFind {
  parent: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (v, i) => i);
  }

  find(n: number): number {
    if (this.parent[n] !== n) {
      this.parent[n] = this.find(this.parent[n]);
    }
    return this.parent[n];
  }

  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX != rootY) {
      this.parent[rootY] = rootX;
    }
  }

  connect(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}