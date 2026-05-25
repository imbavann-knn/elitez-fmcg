const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') return send(res, 200, 'ok', { 'content-type': 'text/plain' });

  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  let filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) return send(res, 403, 'forbidden');

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      // try urlPath + .html (clean URLs)
      const htmlPath = filePath + '.html';
      fs.stat(htmlPath, (e2, s2) => {
        if (!e2 && s2.isFile()) return stream(htmlPath, res);
        return send(res, 404, 'Not Found', { 'content-type': 'text/plain' });
      });
      return;
    }
    stream(filePath, res);
  });
});

function stream(file, res) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {
    'content-type': MIME[ext] || 'application/octet-stream',
    'cache-control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
  });
  fs.createReadStream(file).pipe(res);
}

server.listen(PORT, () => {
  console.log(`elitez-fmcg static server listening on :${PORT}`);
});
