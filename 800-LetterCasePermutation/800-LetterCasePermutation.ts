// Last updated: 11/17/2025, 4:37:20 PM
function letterCasePermutation(s: string): string[] {
  let res: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[0-9]/.test(char)) {
      res = merge(res, [char]);
    } else {
      res = merge(res, [char.toLowerCase(), char.toUpperCase()]);
    }
  }

  return res;
}

function merge(a1: string[], a2: string[]): string[] {
  if (!a1.length) return a2;

  let res: string[] = [];

  for (let s1 of a1) {
    for (let s2 of a2) {
      res.push(s1 + s2);
    }
  }

  return res;
}