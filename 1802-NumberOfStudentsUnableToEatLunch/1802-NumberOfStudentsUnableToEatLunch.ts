// Last updated: 11/17/2025, 4:36:54 PM
function countStudents(students: number[], sandwiches: number[]): number {
  const counts = [0, 0];

  for (let student of students) {
    counts[student] += 1;
  }

  for (let sandwich of sandwiches) {
    if (!counts[sandwich]) {
      return counts[0] || counts[1];
    }

    counts[sandwich] -= 1;
  }

  return 0;
}