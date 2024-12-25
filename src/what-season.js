const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!Date.parse(date) || Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();

  if (2 <= month && month <= 4) {
    return "spring";
  } else if (5 <= month && month <= 7) {
    return "summer";
  } else if (8 <= month && month <= 10) {
    return "autumn";
  } else {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
