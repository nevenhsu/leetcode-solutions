// Last updated: 11/17/2025, 4:37:01 PM
function longestStrChain(words: string[]): number {
  let maxLen = 0;

  const wordSet = new Map<string, number>();
  const list = words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    let max = 0;

    for (let j = 0; j < word.length; j++) {
      const prev = word.slice(0, j) + word.slice(j + 1);
      const prevCount = wordSet.get(prev) ?? 0;
      max = Math.max(max, prevCount + 1);
    }

    wordSet.set(word, max);
    maxLen = Math.max(maxLen, max);
  }

  return maxLen;
}