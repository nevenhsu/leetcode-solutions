// Last updated: 11/17/2025, 4:36:58 PM
function balancedString(s: string): number {
  const count: Record<string, number> = { Q: 0, W: 0, E: 0, R: 0 };
  let left = 0,
    res = s.length,
    target = s.length / 4;

  for (let c of s) {
    count[c]++;
  }

  for (let right = 0; right < s.length; right++) {
    count[s[right]]--;

    while (
      left < s.length &&
      count["Q"] <= target &&
      count["W"] <= target &&
      count["E"] <= target &&
      count["R"] <= target
    ) {
      res = Math.min(res, right - left + 1);
      count[s[left]]++;
      left++;
    }
  }

  return res;
}