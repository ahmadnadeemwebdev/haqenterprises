const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(process.cwd(), 'artifacts', 'haq-enterprises', 'public', 'images');
const srcTransparent = path.join(dir, 'haq-logo-transparent.png');
const out = path.join(dir, 'footer-logo.png');
const faviconOut = path.join(dir, 'favicon-64.png');

async function run() {
  if (!fs.existsSync(srcTransparent)) {
    console.error('Source transparent logo not found:', srcTransparent);
    process.exit(1);
  }

  const img = sharp(srcTransparent).ensureAlpha();
  const meta = await img.metadata();
  const { width, height } = meta;

  // Create mask where pixels are NOT black (threshold low)
  const mask = await img.clone().greyscale().threshold(10).toBuffer();

  // Create solid white image
  const white = await sharp({ create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } }).png().toBuffer();

  // Apply mask as alpha to white image
  await sharp(white).composite([{ input: mask, blend: 'dest-in' }]).png().toFile(out);

  // Create favicon
  await sharp(out).resize(64, 64, { fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(faviconOut);

  console.log('Wrote', out);
  console.log('Wrote', faviconOut);
}

run().catch(err => { console.error(err); process.exit(1); });
