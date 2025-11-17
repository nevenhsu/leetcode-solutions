// Last updated: 11/17/2025, 4:38:23 PM
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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;

  const queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const size = queue.length;
    const numbers: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      numbers.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(numbers);
  }

  return res;
}