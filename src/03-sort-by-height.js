/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const newArr = arr.filter((el) => el !== -1);
  newArr.sort((a, b) => a - b);
  let i = 0;
  const res = [];
  arr.forEach((el) => {
    if (el === -1) {
      res.push(el);
    } else {
      res.push(newArr[i]);
      i++;
    }
  });
  return res;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = sortByHeight;
