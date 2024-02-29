const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const spy = sinon.spy;
const expect = require('chai').expect;
describe('sendPaymentRequestToApi', function () {
  it('calculateNumber method of Utils has been used', () => {
    const result = spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(result.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(result.calculateNumber.callCount).to.be.equal(1);
    result.calculateNumber.restore();
  });
});
