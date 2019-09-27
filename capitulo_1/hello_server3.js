const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-type': 'text/html'});
  if (request.url === '/') {
    response.write('<h1>Página Principal</h1>');
  } else if (request.url === '/bemvindo') {
    response.write('<h1>Bem vindo :)</h1>');
  } else {
    response.write('<h1>Página não encontrada :(</h1>');
  }
  response.end();
});

server.listen(3000, () => {
  console.log('O servidor está rodando !');
})