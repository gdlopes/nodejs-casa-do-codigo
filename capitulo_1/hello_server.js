const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-type': 'text/html'});
  response.write('<h1>Hello World!</h1>');
  response.end();
});

server.listen(3000, () => {
  console.log('Servidor está rodando...')
});