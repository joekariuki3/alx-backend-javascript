const {expect} = require("chai");
const calculateNumber = require("./1-calcul");
describe("calculateNumber", function () {
  //SUM TEST
  describe("SUM TEST", function () {
    it("test arguments are rounded", function () {
      const answer = calculateNumber("SUM", 1.1, 2.8);
      expect(answer).to.equal(4);
    });
    it("test correct output", function () {
      const answer = calculateNumber("SUM", 1, 2);
      expect(answer).to.equal(3);
    });
    it("test fractional numbers with trailing 9", function () {
      const answer = calculateNumber("SUM", 2.499999, 3.49999);
      expect(answer).to.equal(5);
    });
  });

  //SUBTRACT TEST
  describe("SUBTRACT TEST", function () {
    it("test arguments are rounded", function () {
      const answer = calculateNumber("SUBTRACT", 1.1, 2.8);
      expect(answer).to.equal(-2);
    });
    it("test correct output", function () {
      const answer = calculateNumber("SUBTRACT", 3, 2);
      expect(answer).to.equal(1);
    });
    it("test fractional numbers with trailing 9", function () {
      const answer = calculateNumber("SUBTRACT", 2.499999, 3.49999);
      expect(answer).to.equal(-1);
    });
  });

  describe("DIVIDE TEST", function () {
    it("test arguments are rounded", function () {
      const answer = calculateNumber("DIVIDE", 2.8, 1.1);
      expect(answer).to.equal(3);
    });
    it("test correct output", function () {
      const answer = calculateNumber("DIVIDE", 2, 2);
      expect(answer).to.equal(1);
    });
    it("test fractional numbers with trailing 9", function () {
      const answer = calculateNumber("DIVIDE", 6.499999, 2.49999);
      expect(answer).to.equal(3);
    });
    it("test when b is rounded to 0", function () {
      const answer = calculateNumber("DIVIDE", 2.499999, 0.49999);
      expect(answer).to.equal("ERROR");
    });
  });
});
