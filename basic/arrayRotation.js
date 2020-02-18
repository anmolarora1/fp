// Given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// example input [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// example output [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

function rotate90(matrix) {
    const length = m.length;
    return m.reduce(
      (acc, _, i) => [
        ...acc,
        m.reduce((a, _, j) => [...a, matrix[length - j - 1][i]], [])
      ],
      []
    );
  };
  
  export default rotate90;
  