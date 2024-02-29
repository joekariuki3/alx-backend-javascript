const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(function () {
    if (!spy) {
    spy = sinon.spy(console);
	}
  });
  afterEach(function () { 
    spy.log.resetHistory();
  });
  it('call sendPaymentRequestToAPI with 100, and 20', () => {

    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
  });
  it('call sendPaymentRequestToAPI with 10, and 10', () => {

    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
  });
});
