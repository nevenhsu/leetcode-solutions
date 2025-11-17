// Last updated: 11/17/2025, 4:37:53 PM
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const right = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(right);

  return root;
}