const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe('calculateNumber', () => {
  //SUM TEST
  describe('SUM TEST', () => {
    it('test arguments are rounded', () => {
      const answer = calculateNumber('SUM', 1.1, 2.8);
      assert.strictEqual(answer, 4);
    });
    it('test correct output', () => {
      const answer = calculateNumber('SUM', 1, 2);
      assert.strictEqual(answer, 3);
	});
    it('test fractional numbers with trailing 9', () => {
      const answer = calculateNumber('SUM', 2.499999, 3.49999);
      assert.strictEqual(answer, 5);
    });
  });

  //SUBTRACT TEST
  describe('SUBTRACT TEST', () => {
    it('test arguments are rounded', () => {
      const answer = calculateNumber('SUBTRACT', 1.1, 2.8);
      assert.strictEqual(answer, -2);
    });
    it('test correct output', () => {
      const answer = calculateNumber('SUBTRACT', 3, 2);
      assert.strictEqual(answer, 1);
	});
    it('test fractional numbers with trailing 9', () => {
      const answer = calculateNumber('SUBTRACT', 2.499999, 3.49999);
      assert.strictEqual(answer, -1);
    });
  });


  describe('DIVIDE TEST', () => {
    it('test arguments are rounded', () => {
      const answer = calculateNumber('DIVIDE', 2.8, 1.1);
      assert.strictEqual(answer, 3);
    });
    it('test correct output', () => {
      const answer = calculateNumber('DIVIDE', 2, 2);
      assert.strictEqual(answer, 1);
	});
    it('test fractional numbers with trailing 9', () => {
      const answer = calculateNumber('DIVIDE', 6.499999, 2.49999);
      assert.strictEqual(answer, 3);
    });
    it('test when b is rounded to 0', () => {
      const answer = calculateNumber('DIVIDE', 2.499999, 0.49999);
      assert.strictEqual(answer, 'ERROR');
    });
  });
});
