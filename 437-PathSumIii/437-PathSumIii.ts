// Last updated: 11/17/2025, 4:37:43 PM
function pathSum(root: TreeNode | null, targetSum: number): number {
  let result = 0;
  const prevSum = new Map<number, number>();
  prevSum.set(0, 1);

  function dfs(root: TreeNode | null, curr: number) {
    if (!root) return;

    curr += root.val;
    result += prevSum.get(curr - targetSum) || 0;

    prevSum.set(curr, (prevSum.get(curr) || 0) + 1);

    dfs(root.left, curr);
    dfs(root.right, curr);

    prevSum.set(curr, prevSum.get(curr)! - 1);
    curr -= root.val;
  }

  dfs(root, 0);

  return result;
}