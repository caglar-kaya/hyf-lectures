const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';

const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(html);
    response.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server started on port ${port}`);
  });
});
