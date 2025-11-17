// Last updated: 11/17/2025, 4:37:14 PM
function totalFruit(fruits: number[]): number {
  const count = Array(fruits.length).fill(0);
  let left = 0,
    selected = 0,
    max = 0;

  for (let right = 0; right < fruits.length; right++) {
    const num = fruits[right];
    count[num]++;

    if (count[num] == 1) {
      selected++;
    }

    if (selected <= 2) {
      max = Math.max(max, right - left + 1);
    }

    while (selected > 2) {
      const n = fruits[left];

      left++;
      count[n]--;

      if (count[n] == 0) {
        selected--;
      }
    }
  }

  return max;
}