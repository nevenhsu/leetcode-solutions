// Last updated: 11/17/2025, 4:37:57 PM
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const arr: number[][] = Array.from({ length: numCourses }, () => []);

  for (let [course, pre] of prerequisites) {
    arr[pre].push(course);
  }

  let order: number[] = [];
  const visited = Array(numCourses).fill(0);
  let hasCycle = false;

  function dfs(c: number) {
    if (hasCycle) return;

    visited[c] = 1;

    for (let next of arr[c]) {
      if (visited[next] === 0) {
        dfs(next);
      } else if (visited[next] === 1) {
        hasCycle = true;
        return;
      }
    }

    visited[c] = 2;
    order.push(c);
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  return hasCycle ? [] : order.reverse();
}