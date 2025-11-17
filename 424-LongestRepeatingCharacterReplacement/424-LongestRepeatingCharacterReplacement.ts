// Last updated: 11/17/2025, 4:37:44 PM
function characterReplacement(s: string, k: number): number {
  let max = 0,
    result = 0,
    left = 0;

  const count = Array(26).fill(0);

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - "A".charCodeAt(0);
    count[index]++;
    max = Math.max(max, count[index]);

    const windowSize = right - left + 1;
    const needReplace = windowSize - max;

    if (needReplace > k) {
      const leftIndex = s.charCodeAt(left) - "A".charCodeAt(0);
      count[leftIndex]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}