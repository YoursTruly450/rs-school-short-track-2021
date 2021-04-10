/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const transposedMatrix = matrix[0].map((el, index) => matrix.map((row) => row[index]));
  let sum = 0;
  transposedMatrix.forEach((row, index) => transposedMatrix[index].every((el) => {
    if (el <= 0) {
      return false;
    }
    sum += el;
    return true;
  }));
  return sum;
}

module.exports = getMatrixElementsSum;
