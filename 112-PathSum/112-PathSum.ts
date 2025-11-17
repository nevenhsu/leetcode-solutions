// Last updated: 11/17/2025, 4:38:16 PM
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let curr = 0;
  let result = false;

  function calc(root: TreeNode | null) {
    if (!root || result) {
      return;
    }

    curr += root.val;

    if (!root.left && !root.right) {
      if (curr == targetSum) {
        result = true;
      }
    }

    calc(root.left);
    calc(root.right);

    curr -= root.val;
  }

  calc(root);

  return result;
}