const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

console.log('Capturing production-desktop.png (1440x900)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1500 "http://localhost:3000" "reports/production-desktop.png"');

console.log('Capturing production-mobile.png (390x844)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "390, 844" --wait-for-timeout 1500 "http://localhost:3000" "reports/production-mobile.png"');

console.log('Capturing production-full-desktop.png (1440 full-page)...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1500 "http://localhost:3000?full=1" "reports/production-full-desktop.png"');

console.log('Capturing production-full-mobile.png (390 full-page)...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "390, 844" --wait-for-timeout 1500 "http://localhost:3000?full=1" "reports/production-full-mobile.png"');

fs.copyFileSync('reports/production-desktop.png', path.join(targetDir, 'production-desktop.png'));
fs.copyFileSync('reports/production-mobile.png', path.join(targetDir, 'production-mobile.png'));
fs.copyFileSync('reports/production-full-desktop.png', path.join(targetDir, 'production-full-desktop.png'));
fs.copyFileSync('reports/production-full-mobile.png', path.join(targetDir, 'production-full-mobile.png'));

console.log('Production screenshots captured and synced successfully!');
