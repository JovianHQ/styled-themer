var styledThemer = require(".");
var expect = require("expect");

const t = styledThemer.default;
const color = styledThemer.color;
const bgColor = styledThemer.bgColor;
const fontSize = styledThemer.fontSize;

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

expect(color("white")(props)).toEqual("color: #fff");

expect(bgColor("white")(props)).toEqual("background-color: #fff");

expect(fontSize("default")(props)).toEqual("font-size: 14px");
