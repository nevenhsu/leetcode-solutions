// Last updated: 11/17/2025, 4:38:00 PM
function isIsomorphic(s: string, t: string): boolean {
  if (s.length != t.length) false;

  const mapST = new Map<string, string>();
  const mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const a = s[i],
      b = t[i];

    if (
      (mapST.has(a) && mapST.get(a) != b) ||
      (mapTS.has(b) && mapTS.get(b) != a)
    ) {
      return false;
    }

    mapST.set(a, b);
    mapTS.set(b, a);
  }

  return true;
}