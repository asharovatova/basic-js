const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  abc = "abcdefghijklmnopqrstuvwxyz";

  encrypt(message, key) {
    // console.debug("ENCRYPT", this.direct, message, key);
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let mesStr = message.toLowerCase();
    let keyStr = key
      .padEnd(mesStr.split(" ").join("").length, key)
      .toLowerCase();

    mesStr.split("").forEach((el, i) => {
      // console.log(el, i);
      if (el === " ") {
        keyStr = keyStr.split("");
        keyStr.splice(i, 0, " ");
        keyStr = keyStr.join("");
      }
    });
    let res = "";
    mesStr.split("").forEach((char, i) => {
      if (this.abc.includes(char)) {
        let mesNum = this.abc.indexOf(char);
        let keyNum = this.abc.indexOf(keyStr[i]);
        let resNum = (mesNum + keyNum) % 26;
        res += this.abc[resNum];
      } else {
        res += char;
      }
    });

    if (!this.direct) res = res.split("").reverse().join("");
    return this.direct
      ? res.toUpperCase()
      : res.split("").reverse().join("").toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    // console.debug("DECRYPT", this.direct, encryptedMessage, key);
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let mesStr = encryptedMessage.toLowerCase();
    let keyStr = key
      .padEnd(mesStr.split(" ").join("").length, key)
      .toLowerCase();
    mesStr.split("").forEach((el, i) => {
      if (el === " ") {
        keyStr = keyStr.split("");
        keyStr.splice(i, 0, " ");
        keyStr = keyStr.join("");
      }
    });

    let res = "";

    mesStr.split("").forEach((char, i) => {
      if (this.abc.includes(char)) {
        let mesNum = this.abc.indexOf(char);
        let keyNum = this.abc.indexOf(keyStr[i]);
        let resNum = (mesNum - keyNum) % 26;
        if (resNum < 0) {
          resNum = resNum + 26;
        }
        res += this.abc[resNum];
      } else {
        res += char;
      }
    });

    if (!this.direct) res = res.split("").reverse().join("");
    return res.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
