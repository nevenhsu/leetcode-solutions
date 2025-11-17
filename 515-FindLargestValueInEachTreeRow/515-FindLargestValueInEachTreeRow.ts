// Last updated: 11/17/2025, 4:37:38 PM
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const size = queue.length;
    let max: number = queue[0].val;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(max);
  }

  return res;
}