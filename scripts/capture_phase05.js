const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

console.log('Capturing phase05-full-desktop.png (Full page desktop)...');
execSync('npx playwright screenshot --full-page --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1500 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase05-full-desktop.png"');

console.log('Capturing phase05-full-mobile-preview.png (390x844)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "390, 844" --wait-for-timeout 1500 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase05-full-mobile-preview.png"');

fs.copyFileSync('reports/phase05-full-desktop.png', path.join(targetDir, 'phase05-full-desktop.png'));
fs.copyFileSync('reports/phase05-full-mobile-preview.png', path.join(targetDir, 'phase05-full-mobile-preview.png'));
console.log('Phase 05 screenshots captured and copied successfully!');
