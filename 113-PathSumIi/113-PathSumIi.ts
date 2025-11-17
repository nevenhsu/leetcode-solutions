// Last updated: 11/17/2025, 4:38:15 PM
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result: number[][] = [];
  let arr: number[] = [];
  let curr = 0;

  function calc(root: TreeNode | null) {
    if (!root) return;

    curr += root.val;
    arr.push(root.val);

    if (!root.left && !root.right) {
      if (curr == targetSum) {
        result.push([...arr]);
      }
    }

    calc(root.left);
    calc(root.right);

    curr -= root.val;
    arr.pop();
  }

  calc(root);

  return result;
}