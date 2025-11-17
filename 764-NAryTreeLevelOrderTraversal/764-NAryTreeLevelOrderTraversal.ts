// Last updated: 11/17/2025, 4:37:23 PM
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  const queue: _Node[] = [root];

  while (queue.length) {
    const size = queue.length;
    const numbers: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      numbers.push(node.val);

      for (let child of node.children) {
        queue.push(child);
      }
    }

    res.push(numbers);
  }

  return res;
}