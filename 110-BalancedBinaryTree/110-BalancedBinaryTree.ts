// Last updated: 11/17/2025, 4:38:19 PM
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const left = calc(root.left);
  const right = calc(root.right);

  if (Math.abs(left - right) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

function calc(root: TreeNode | null) {
  if (!root) return 0;

  const left = calc(root.left);
  const right = calc(root.right);

  return Math.max(left, right) + 1;
}