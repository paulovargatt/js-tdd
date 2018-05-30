import { expect } from "chai";
import FizzBuzz from "../src/main";

describe("Main", () => {
  //smoke
  it("Multiple of 3", function() {
    expect(FizzBuzz(3)).to.be.equal("Fizz");
    expect(FizzBuzz(6)).to.be.equal("Fizz");
  });

  it("Multiple of 5", function() {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
    expect(FizzBuzz(10)).to.be.equal("Buzz");
  });

  it("Multiple of 5 and 3", function() {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
  });
});
