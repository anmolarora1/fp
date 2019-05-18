// A super digit of an integer is defined using following rules:

// If  has only  digit, then its super digit is .
// Otherwise, the super digit of  is equal to the super digit of the digit-sum of . Here, digit-sum of a number is defined as the sum of its digits.
// For example, super digit of  will be calculated as:

// super_digit(9875) = super_digit(9+8+7+5)
//                   = super_digit(29)
//                   = super_digit(2+9)
//                   = super_digit(11)
//                   = super_digit(1+1)
//                   = super_digit(2)
//                   = 2.
// You are given a number n and you have to calculate the super digit of n.

function superDigit(n) {
  const sumOfDigits = x => {
    return x
      .toString()
      .split('')
      .reduce((sum, i) => sum + Number(i), 0);
  };
  return n / 10 < 1 ? n : superDigit(sumOfDigits(n));
}

export default superDigit;
