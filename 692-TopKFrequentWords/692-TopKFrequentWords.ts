// Last updated: 11/17/2025, 4:37:28 PM
function topKFrequent(words: string[], k: number): string[] {
  const freqMap = new Map<string, number>();

  for (const word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  const sortedWords = Array.from(freqMap.entries())
    .sort((a, b) => {
      const [wordA, countA] = a;
      const [wordB, countB] = b;
      if (countA !== countB) return countB - countA;
      return wordA.localeCompare(wordB);
    });

  return sortedWords.slice(0, k).map(([word]) => word);
}