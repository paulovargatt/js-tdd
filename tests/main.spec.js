var expect = require("chai").expect;
var calc = require("../src/main.js");

describe("Calc", () => {
  //smoke

  describe("Smoke", () => {
    it("Should exist the calc lib", () => {
      expect(calc).to.exist;
    });

    it("Should exist the method `sum`", () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a("function");
    });

    it("Should exist the method `mult`", () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a("function");
    });

    it("Should exist the method `Div`", () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a("function");
    });

    it("Should exist the method `sub`", () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a("function");
    });
  });

  describe("Sum", function(params) {
    it("Should return 4 when sum (2,2)", function() {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", function(params) {
    it("Should return 5 when DIV (10,5)", function() {
      expect(calc.div(10, 2)).to.be.equal(5);
    });
  });

  describe("Mult", function(params) {
    it("Should return 4 when sum (2,2)", function() {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", function(params) {
    it("Should return 4 when subtraction (2,2)", function() {
      expect(calc.sub(2, 2)).to.be.equal(0);
    });
  });
});
