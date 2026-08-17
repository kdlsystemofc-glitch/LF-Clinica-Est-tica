const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

console.log('Capturing final-full-desktop-1440.png...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1500 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html?full=1" "reports/final-full-desktop-1440.png"');

console.log('Capturing final-full-tablet-768.png...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "768, 1024" --wait-for-timeout 1500 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html?full=1" "reports/final-full-tablet-768.png"');

console.log('Capturing final-full-mobile-390.png...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "390, 844" --wait-for-timeout 1500 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html?full=1" "reports/final-full-mobile-390.png"');

fs.copyFileSync('reports/final-full-desktop-1440.png', path.join(targetDir, 'final-full-desktop-1440.png'));
fs.copyFileSync('reports/final-full-tablet-768.png', path.join(targetDir, 'final-full-tablet-768.png'));
fs.copyFileSync('reports/final-full-mobile-390.png', path.join(targetDir, 'final-full-mobile-390.png'));

console.log('Phase 08 final full-page screenshots captured and synced successfully!');
