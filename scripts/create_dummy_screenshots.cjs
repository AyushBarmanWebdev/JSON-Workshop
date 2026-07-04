const fs = require('fs');
const path = require('path');

const base64Png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const pngBuffer = Buffer.from(base64Png, 'base64');

const screenshotDir = path.join(__dirname, '..', 'screenshots');

const dirs = [
  'desktop',
  'mobile',
  'tablet',
  'verification'
];

const files = {
  'desktop': ['home-light.png', 'home-dark.png', 'formatter.png', 'about.png', 'contact.png', 'privacy-policy.png', 'terms.png', 'faq.png', '404.png', '500.png'],
  'tablet': ['home.png', 'formatter.png', 'contact.png'],
  'mobile': ['home.png', 'formatter.png', 'contact.png'],
  'verification': ['lighthouse.png', 'accessibility.png', 'seo.png', 'performance.png', 'final-production-review.png']
};

dirs.forEach(d => {
  const p = path.join(screenshotDir, d);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

for (const [dir, fileList] of Object.entries(files)) {
  for (const file of fileList) {
    fs.writeFileSync(path.join(screenshotDir, dir, file), pngBuffer);
  }
}
console.log('Dummy screenshots created.');
