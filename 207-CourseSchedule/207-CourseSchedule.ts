// Last updated: 11/17/2025, 4:37:59 PM
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const arr = Array.from<undefined, number[]>({ length: numCourses }, () => []);

  for (let [course, pre] of prerequisites) {
    arr[pre].push(course);
  }

  const visited = Array.from({ length: numCourses }, () => 0);

  function dfs(c: number) {
    if (visited[c] == 1) return false;
    if (visited[c] == 2) return true;

    visited[c] = 1;

    for (let next of arr[c]) {
      if (!dfs(next)) return false;
    }

    visited[c] = 2;

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
}