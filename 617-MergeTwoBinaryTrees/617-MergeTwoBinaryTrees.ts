// Last updated: 11/17/2025, 4:37:33 PM
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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 && root2) {
    const val = root1.val + root2.val;
    const left = mergeTrees(root1.left, root2.left);
    const right = mergeTrees(root1.right, root2.right);
    const root = new TreeNode(val, left, right);
    return root;
  } else if (!root1 && !root2) {
    return null;
  } else {
    return root1 || root2;
  }
}