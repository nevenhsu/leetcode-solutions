// Last updated: 11/17/2025, 4:36:59 PM
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

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0;

  let res = 0;

  const queue: Array<TreeNode> = [root];

  while (queue.length) {
    let sum = 0;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!queue.length) {
      return sum
    }
  }

  return res;
}