// Last updated: 11/17/2025, 4:37:11 PM
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


function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  const queue: Array<Array<TreeNode | null>> = [[root, null]];

  while (queue.length) {
    let xParent: TreeNode | null = null;
    let yParent: TreeNode | null = null;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const [node, parent] = queue.shift();

      if (node.val == x) xParent = parent;
      if (node.val == y) yParent = parent;

      if (node.left) queue.push([node.left, node]);
      if (node.right) queue.push([node.right, node]);
    }

    if (xParent && yParent) return xParent != yParent;
    if ((xParent && !yParent) || (!xParent && yParent)) return false;
  }

  return false;
}