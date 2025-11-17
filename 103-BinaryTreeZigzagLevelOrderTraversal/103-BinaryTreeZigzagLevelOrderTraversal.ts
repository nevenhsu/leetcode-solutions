// Last updated: 11/17/2025, 4:38:22 PM
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const numbers: number[] = [];
    const size = queue.length;
    const toLeft = res.length % 2 == 0;

    for (let i = 0; i < size; i++) {
      const node = toLeft ? queue.shift() : queue.pop();
      numbers.push(node.val);

       if (!toLeft) {
        if (node.right) {
          queue.unshift(node.right);
        }

        if (node.left) {
          queue.unshift(node.left);
        }
      } else {
        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }

     
    }

    res.push(numbers);
  }

  return res;
}