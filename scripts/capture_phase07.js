const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

console.log('Capturing phase07-1440.png (1440x900)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase07-1440.png"');

console.log('Capturing phase07-1024.png (1024x768)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "1024, 768" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase07-1024.png"');

console.log('Capturing phase07-768.png (768x1024)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "768, 1024" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase07-768.png"');

console.log('Capturing phase07-390.png (390x844)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "390, 844" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase07-390.png"');

fs.copyFileSync('reports/phase07-1440.png', path.join(targetDir, 'phase07-1440.png'));
fs.copyFileSync('reports/phase07-1024.png', path.join(targetDir, 'phase07-1024.png'));
fs.copyFileSync('reports/phase07-768.png', path.join(targetDir, 'phase07-768.png'));
fs.copyFileSync('reports/phase07-390.png', path.join(targetDir, 'phase07-390.png'));

console.log('Phase 07 responsive screenshots captured and copied successfully!');
