const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/hello`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('test POST /login', () => {
    const data = {json: {userName: 'Betty'}};
    const header = {'Content-Type': 'application/json'};
    const url = `${API_URL}/login`;
    request.post(url, data, (error, res, body) => {
		expect(res.statusCode).to.be.equal(200);
		expect(body).to.be.equal('Welcome Betty');
	});
  });
  it('test GET /available_payments', () => {
    const url = `${API_URL}/available_payments`;
    request.get(url, (error, res, body) => {
		expect(res.statusCode).to.be.equal(200);
		expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
	});
  });
});
