// Last updated: 11/17/2025, 4:37:32 PM
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
 
function averageOfLevels(root: TreeNode | null): number[] {
  let nodes: TreeNode[] = root ? [root] : [];
  const res: number[] = [];

  while (nodes.length) {
    const children: TreeNode[] = [];
    nodes.forEach((n) => {
      if (n.left) children.push(n.left);
      if (n.right) children.push(n.right);
    });

    const sum = nodes.reduce((prev, curr) => prev + curr.val, 0);
    res.push(sum / nodes.length);

    nodes = children;
  }

  return res;
}