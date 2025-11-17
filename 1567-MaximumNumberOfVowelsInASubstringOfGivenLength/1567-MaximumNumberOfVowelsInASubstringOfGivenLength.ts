// Last updated: 11/17/2025, 4:36:51 PM
function maxVowels(s: string, k: number): number {
  let max = 0,
    curr = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      curr++;
    }
  }

  max = curr;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) {
      curr++;
    }
    if (isVowel(s[i - k])) {
      curr--;
    }
    if (curr > max) {
      max = curr;
    }
  }

  return max;
}

function isVowel(s: string) {
  return ["a", "e", "i", "o", "u"].includes(s);
}