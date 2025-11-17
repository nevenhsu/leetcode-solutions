// Last updated: 11/17/2025, 4:37:18 PM
function canVisitAllRooms(rooms: number[][]): boolean {
  const keys: number[] = Array(rooms.length).fill(0);
  keys[0] = 1;

  function dfs(n: number) {
    for (let next of rooms[n]) {
      if (keys[next] === 0) {
        keys[next] = 1;
        dfs(next);
      }
    }
  }

  dfs(0);

  return keys.every((i) => i === 1);
}