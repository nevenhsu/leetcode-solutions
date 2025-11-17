// Last updated: 11/17/2025, 4:38:18 PM
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const right = minDepth(root.right) + 1;
  const left = minDepth(root.left) + 1;

  if (!root.right) return left
  if (!root.left) return right

  return Math.min(right, left);
}