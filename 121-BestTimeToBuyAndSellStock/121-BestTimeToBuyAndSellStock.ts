// Last updated: 11/17/2025, 4:38:12 PM
function maxProfit(prices: number[]): number {
  let min = Infinity;
  let max = 0;

  for (let price of prices) {
    if (price < min) {
      min = price;
    } else {
      if (price - min > max) {
        max = price - min;
      }
    }
  } 

  return max;
}