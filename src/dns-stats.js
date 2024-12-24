const { NotImplementedError } = require("../extensions/index.js");

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
  let res = {};
  let subdomainsArrays = domains.map((domain) => domain.split(".").reverse());

  for (let i = 0; i < subdomainsArrays.length; i += 1) {
    let domainName = "";

    for (let j = 0; j < subdomainsArrays[i].length; j += 1) {
      domainName += `.${subdomainsArrays[i][j]}`;

      if (res[domainName] === undefined) {
        res[domainName] = 1;
      } else {
        res[domainName] += 1;
      }
    }
  }

  return res;
}

module.exports = {
  getDNSStats,
};
