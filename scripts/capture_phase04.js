const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\51562ee7-2b5a-4b72-a8de-a028e25a3b3e';

if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}

console.log('Capturing phase04-design-system-desktop.png (1440x900)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "1440, 900" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase04-design-system-desktop.png"');

console.log('Capturing phase04-design-system-mobile.png (390x844)...');
execSync('npx playwright screenshot --channel msedge --viewport-size "390, 844" --wait-for-timeout 1000 "file:///c:/cli/LF%20Clinica%20Est%C3%A9tica/index.html" "reports/phase04-design-system-mobile.png"');

fs.copyFileSync('reports/phase04-design-system-desktop.png', path.join(targetDir, 'phase04-design-system-desktop.png'));
fs.copyFileSync('reports/phase04-design-system-mobile.png', path.join(targetDir, 'phase04-design-system-mobile.png'));
console.log('Phase 04 screenshots captured and copied successfully!');
