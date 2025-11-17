// Last updated: 11/17/2025, 4:37:29 PM
function validPalindrome(s: string): boolean {
  const result = checkPalindrome(s);

  if (result.length) {
     const isValid = result.some(
      (o) => checkPalindrome(s.slice(0, o) + s.slice(o + 1)).length == 0
    );
    return isValid;
  }

  return true;
}

function checkPalindrome(s: string) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] != s[end]) {
      return [start, end];
    }
    start++;
    end--;
  }

  return [];
}