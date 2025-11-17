// Last updated: 11/17/2025, 4:38:09 PM
function partition(s: string): string[][] {
  const res: string[][] = [];
  const memo: (boolean | undefined)[][] = Array.from(
    { length: s.length },
    () => {
      return Array(s.length).fill(undefined);
    }
  );

  function isPalindrome(start: number, end: number): boolean {
    if (memo[start][end] !== undefined) memo[start][end];

    while (start < end) {
      if (s[start] != s[end]) {
        memo[start][end] = false;
        return false;
      }
      start++;
      end--;
    }

    memo[start][end] = true;
    return true;
  }

  function backtrack(start: number, path: string[]) {
    if (start == s.length) {
      res.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(start, end)) {
        path.push(s.slice(start, end + 1));
        backtrack(end + 1, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);

  return res;
}