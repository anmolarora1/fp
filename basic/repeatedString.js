// Lilah has a string s, of lowercase English letters that she repeated
// infinitely many times. Given an integer, n, find and print the number of
// letter a's in the first n letters of Lilah's infinite string.

// For example, if the string s='abcac' and n = 10, the substring we consider
// is 'abcacabcac', the first 10 characters of her infinite string. There are 4
// occurrences of a in the substring.

const repeatedString = (s, n) => {
  const characterOccurences = (str, c) => str.split(c).length - 1;
  const size = s.length;
  return (
    parseInt(n / size) * characterOccurences(s, 'a') +
    characterOccurences(s.slice(0, n % size), 'a')
  );
};

export default repeatedString;
