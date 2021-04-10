/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  const height = matrix.length;
  const width = matrix[0].length;
  for (let i = 0; i < height; i++) {
    const newArr = [];
    for (let j = 0; j < width; j++) {
      let counter = 0;
      if (matrix[i][j]) {
        newArr.push(1);
      } else if (j === 0) {
        if (i === 0) {
          counter += matrix[i][j + 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j + 1] ? 1 : 0;
        } else if (i === height - 1) {
          counter += matrix[i][j + 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j + 1] ? 1 : 0;
        } else {
          counter += matrix[i][j + 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j + 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j + 1] ? 1 : 0;
        }
        newArr.push(counter);
      } else if (j === width - 1) {
        if (i === 0) {
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j - 1] ? 1 : 0;
        } else if (i === height - 1) {
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j - 1] ? 1 : 0;
        } else {
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j - 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j - 1] ? 1 : 0;
        }
        newArr.push(counter);
      } else {
        if (i === 0) {
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i][j + 1] ? 1 : 0;
          counter += matrix[i + 1][j - 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j + 1] ? 1 : 0;
        } else if (i === height - 1) {
          counter += matrix[i - 1][j - 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j + 1] ? 1 : 0;
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i][j + 1] ? 1 : 0;
        } else {
          counter += matrix[i - 1][j - 1] ? 1 : 0;
          counter += matrix[i - 1][j] ? 1 : 0;
          counter += matrix[i - 1][j + 1] ? 1 : 0;
          counter += matrix[i][j - 1] ? 1 : 0;
          counter += matrix[i][j + 1] ? 1 : 0;
          counter += matrix[i + 1][j - 1] ? 1 : 0;
          counter += matrix[i + 1][j] ? 1 : 0;
          counter += matrix[i + 1][j + 1] ? 1 : 0;
        }
        newArr.push(counter);
      }
    }
    arr.push(newArr);
  }
  return arr;
}

module.exports = minesweeper;
