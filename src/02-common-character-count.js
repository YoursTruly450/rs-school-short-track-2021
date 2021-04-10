/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const m1 = s1.split('');
  const m2 = s2.split('');
  m1.forEach((el) => {
    const index = m2.indexOf(el);
    if (index >= 0) {
      m2.splice(index, 1);
      count++;
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
