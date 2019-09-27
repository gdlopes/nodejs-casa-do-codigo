const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  fs.readFile(`${__dirname}/index.html`, (erro, html) => {
    response.writeHeader(200, {'Content-type': 'text/html'});
    response.write(html);
    response.end();
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando ...');
})