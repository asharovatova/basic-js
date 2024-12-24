const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",

  getLength() {
    return this.chain === "" ? 0 : this.chain.split("~~").length;
  },

  addLink(value) {
    this.chain += this.getLength() === 0 ? "" : "~~";
    this.chain += `( ${String(value) || ""} )`;
    return this;
  },

  removeLink(position) {
    console.log(position);
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.getLength() ||
      !Number.isInteger(+position)
    ) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain
      .split("~~")
      .filter((_, i) => i !== position - 1)
      .join("~~");

    return this;
  },

  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");

    return this;
  },

  finishChain() {
    let res = this.chain;
    this.chain = "";

    return res;
  },
};

module.exports = {
  chainMaker,
};
