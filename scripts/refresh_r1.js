const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

console.log('Capturing hero-desktop-r2.png (1440x900)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/hero-desktop-r2.png"');

console.log('Capturing hero-mobile-r2.png (390x844)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "390, 844" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/hero-mobile-r2.png"');

fs.copyFileSync('reports/hero-desktop-r2.png', path.join(targetDir, 'hero-desktop-r2.png'));
fs.copyFileSync('reports/hero-mobile-r2.png', path.join(targetDir, 'hero-mobile-r2.png'));
console.log('R2 screenshots captured and copied successfully!');
