// Last updated: 11/17/2025, 4:37:34 PM
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const charMap = countChar(s1);
  const curr = new Map<string, number>();

  let matchCount = 0;

  for (let right = 0; right < s2.length; right++) {
    const char = s2[right];
    curr.set(char, (curr.get(char) || 0) + 1);

    if (right >= s1.length) {
      const leftChar = s2[right - s1.length];
      if (curr.get(leftChar)! == 1) {
        curr.delete(leftChar);
      } else {
        curr.set(leftChar, curr.get(leftChar)! - 1);
      }
    }

    if (compareMaps(charMap, curr)) {
      return true;
    }
  }

  return false;
}

function countChar(s: string) {
  const charMap = new Map<string, number>();

  for (let char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  return charMap;
}

function compareMaps(
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean {
  if (map1.size !== map2.size) return false;
  for (const [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }
  return true;
}