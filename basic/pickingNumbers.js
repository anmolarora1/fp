// Given an array of integers, find and print the maximum number of integers you can select from the array
// such that the absolute difference between any two of the chosen integers is less than or equal to .
// For example, if your array is a = [1, 1, 2, 2, 4, 4, 5, 5, 5], you can create two subarrays meeting
// the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements

const getMaxSubArrayLengthWithGivenDiff = (arr, diff = 1) => {
  return arr.reduce((acc, i) => (i - arr[0] <= diff ? [...acc, i] : acc), [])
    .length;
};

const getMaxArrayLengthWithGivenDiff = arr => {
  return arr.sort().reduce((maxLength, el, index, input) => {
    const maxSubArrayLengthWithGivenDiff = getMaxSubArrayLengthWithGivenDiff(
      input.slice(el),
      1
    );
    return maxSubArrayLengthWithGivenDiff > maxLength
      ? maxSubArrayLengthWithGivenDiff
      : maxLength;
  }, 0);
};

export default getMaxArrayLengthWithGivenDiff;
