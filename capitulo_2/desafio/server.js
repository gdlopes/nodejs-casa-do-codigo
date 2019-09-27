const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const router = pathName => {
  if (pathName && pathName !== '/') {
    const file = path.join(__dirname, `${pathName}.html`);  
    const exists = fs.existsSync(file);

    if (exists) {
      return file;
    } else {
      return path.join(__dirname, 'erro.html');
    }
  }

  return path.join(__dirname, 'artigos.html');
}

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  const page = router(pathName);

  fs.readFile(page, (error, html) => {
    if (error) {
      res.write(`Error: ${error}`)
    }

    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
});

server.listen(3000, () => {
  console.log('Running ...');
});