const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', reqPath === '/' ? 'index.html' : reqPath);
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.css') contentType = 'text/css';
  if (ext === '.js') contentType = 'application/javascript';
  if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.svg') contentType = 'image/svg+xml';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(4173, () => {
  console.log('Server running on port 4173');
  
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  
  // Desktop screenshot: 1440x900
  console.log('Capturing Desktop screenshot (1440x900)...');
  const desktopOut = path.resolve('reports', 'phase03-desktop.png');
  execSync(`"${edgePath}" --headless --disable-gpu --window-size=1440,900 --screenshot="${desktopOut}" http://localhost:4173`);
  
  // Mobile screenshot: 390x844
  console.log('Capturing Mobile screenshot (390x844)...');
  const mobileOut = path.resolve('reports', 'phase03-mobile.png');
  execSync(`"${edgePath}" --headless --disable-gpu --window-size=390,844 --screenshot="${mobileOut}" http://localhost:4173`);
  
  console.log('Screenshots captured successfully!');
  server.close(() => process.exit(0));
});
