// Last updated: 11/17/2025, 4:37:17 PM
function minEatingSpeed(piles: number[], h: number): number {
  let min = 1,
    max = Math.max(...piles);

  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    let needed = 0;

    for (let i = 0; i < piles.length; i++) {
      needed += Math.ceil(piles[i] / mid);
    }

    if (needed > h) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return min;
}