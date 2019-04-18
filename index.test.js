var t = require(".");
var expect = require("expect");

const props = {
  theme: {
    color: {
      white: "#fff",
      black: "#000"
    },
    fontSize: {
      default: "14px",
      large: "16px",
      subtitle: "12px"
    }
  }
};

expect(t("color", "white")(props)).toEqual("#fff");

expect(() => t("hello", "world")(props)).toThrow();
