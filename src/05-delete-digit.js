/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('');
  arr.forEach((el, index) => {
    const newArr = arr.filter((item, ind) => ind !== index);
    if (Number.parseInt(newArr.join(''), 10) > max) {
      max = Number.parseInt(newArr.join(''), 10);
    }
  });
  return max;
}

module.exports = deleteDigit;
