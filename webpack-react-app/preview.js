const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 7777;
const servedDir = path.join(__dirname, 'dist')

const server = http.createServer((req, res) => {
  
  const filePath = path.join(servedDir, getUrl(req.url));
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }

  // 设置跨域响应头
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许任何域
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 not found', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
        res.end();
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

function getUrl(url) {
  if(url==='/'){
    return '/index.html'
  }else{
    return url
  }
}

server.listen(port, hostname, () => {
  console.log('\x1b[32m', ' ➜  Server running at', '\x1b[34m', `http://${hostname}:${port}/`, '\x1b[0m');
  console.log('\x1b[32m', ' ➜  Server is served from', '\x1b[34m', servedDir, '\x1b[0m');
});