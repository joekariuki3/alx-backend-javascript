const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = '7865'
app.use(bodyParser.json());
app.get('/', function (req, res) {
	res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
	const object = {
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	}
	res.statusCode = 200;
	res.send(object);
});

app.post('/login', (req, res) => {
	res.statusCode = 200;
	res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, function () {
	console.log(`API available on localhost port ${port}`);
});
