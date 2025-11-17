// Last updated: 11/17/2025, 4:38:24 PM
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  return isMirror(root.left, root.right);
}

function isMirror(n1: TreeNode | null, n2: TreeNode | null) {
  if (n1 === null && n2 === null) return true;
  if (n1 === null || n2 === null) return false;

  return (
    n1.val === n2.val &&
    isMirror(n1.right, n2.left) &&
    isMirror(n1.left, n2.right)
  );
}