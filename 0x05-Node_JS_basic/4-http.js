const http = require('http');

const port = '1245';
const hostname = '127.0.0.1';
const responseText = 'Hello Holberton School!';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.end(responseText);
});
app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
module.exports = app;
