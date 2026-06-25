const http = require('http');

const PORT = process.env.PORT || 3000;
const TARGET = 'https://fmcg.elitez.ai';

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    return res.end('ok');
  }
  res.writeHead(301, { 'location': TARGET + (req.url || '/') });
  res.end();
});

server.listen(PORT, () => {
  console.log(`fmcg.elitez.asia → redirecting to ${TARGET}`);
});
