// Last updated: 11/17/2025, 4:36:49 PM
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


function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root) return false;

  let level = 0;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const size = queue.length;
    let num: number = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i > 0) {
        if (level % 2 == 0) {
          if (num >= node.val) return false;
        } else {
          if (num <= node.val) return false;
        }
      }

      num = node.val;
      if ((level % 2 == 0 && num % 2 == 0) || (level % 2 != 0 && num % 2 != 0))
        return false;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return true;
}