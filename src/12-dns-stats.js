/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const reversed = [];
  domains.forEach((el) => reversed.push(String(el).split('.').reverse().join('.')));
  const res = {};
  reversed.forEach((item) => {
    let str = '';
    String(item).split('.').forEach((el) => {
      str += `.${el}`;
      if (Object.prototype.hasOwnProperty.call(res, str)) {
        res[str]++;
      } else {
        res[str] = 1;
      }
    });
  });
  return res;
}

module.exports = getDNSStats;
