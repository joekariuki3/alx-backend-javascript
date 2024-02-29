const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test arguments are rounded', () => {
    const answer = calculateNumber(1.1, 2.8);
    assert.strictEqual(answer, 4);
  });
  it('test correct output', () => {
    const answer = calculateNumber(1, 2);
    assert.strictEqual(answer, 3);
  });
  it('test fractional numbers with trailing 9', () => {
    const answer = calculateNumber(2.499999, 3.49999);
    assert.strictEqual(answer, 5);
  });
});
