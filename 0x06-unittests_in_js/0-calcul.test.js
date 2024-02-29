const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
describe("Calculate Test Suit", function() {
	it("test arguments are rounded", function() {
		const answer = calculateNumber(1.1, 2.8);
		assert.equal(answer, 4)
	});
	it("test correct output", function() {
		const answer = calculateNumber(1,2);
		assert.equal(answer, 3);
	});
});
