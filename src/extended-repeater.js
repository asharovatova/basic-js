const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition =
    typeof options.addition !== "undefined"
      ? new Array(options.additionRepeatTimes)
          .fill(String(options.addition))
          .join(options.additionSeparator || "|")
      : "";

  let res = new Array(options.repeatTimes)
    .fill(str + addition)
    .join(options.separator || "+");

  return res;
}

module.exports = {
  repeater,
};
