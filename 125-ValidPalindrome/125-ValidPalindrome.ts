// Last updated: 11/17/2025, 4:38:11 PM
function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    while (start < end && !/[a-zA-Z0-9]/.test(s[start])) {
      start++;
    }
    while (start < end && !/[a-zA-Z0-9]/.test(s[end])) {
      end--;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}