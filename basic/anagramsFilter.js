// given an array  's' of strings which may or may not be anagrams,
// return an array by removing all the anagrams but first from the array
// example input ['code', 'doec', 'flatter', 'chap', 'listen', 'silent']
// output for this should be ['code', 'flatter', 'chap', 'listen']

function anagramsFilter(s) {
  const isAnagram = (strA, strB) =>
    strA.length === strB.length &&
    strA
      .split('')
      .sort()
      .join('') ===
      strB
        .split('')
        .sort()
        .join('');

  return s.reduce((acc, curr) => {
    if (!acc.some(i => isAnagram(curr, i))) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
