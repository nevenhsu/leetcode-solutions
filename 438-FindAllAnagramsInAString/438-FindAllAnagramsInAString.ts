// Last updated: 11/17/2025, 4:37:42 PM
function findAnagrams(s: string, p: string): number[] {
  const count = Array(26).fill(0);
  for (let c of p) {
    count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  let needed = p.length;
  const ans: number[] = [];

  let left = 0,
    right = 0;

  while (right < s.length) {
    const rightCode = s.charCodeAt(right) - "a".charCodeAt(0);
    if (count[rightCode] > 0) needed--;
    count[rightCode]--;
    right++;

    if (needed === 0) {
      ans.push(left);
    }

    if (right - left === p.length) {
      const leftIndex = s.charCodeAt(left) - "a".charCodeAt(0);
      if (count[leftIndex] >= 0) needed++;
      count[leftIndex]++;
      left++;
    }
  }

  return ans;
}