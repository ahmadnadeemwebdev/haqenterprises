import sharp from 'sharp';
import path from 'path';

async function generate() {
  const repoRoot = process.cwd();
  const src = path.join(repoRoot, 'public', 'images', 'haq-logo.png');
  const outDir = path.join(repoRoot, 'public', 'images');

  const sizes = [64, 96, 128, 192, 256];

  const srcImg = sharp(src).ensureAlpha();
  const meta = await srcImg.metadata();

  for (const size of sizes) {
    const resized = await srcImg.resize(size, size, { fit: 'contain' }).toBuffer();
    const resizedMeta = await sharp(resized).metadata();

    // create a binary mask from alpha channel (threshold) to avoid semi-transparent edges
    const alphaMask = await sharp(resized).extractChannel('alpha').threshold(128).toBuffer();

    // create white canvas and apply mask (dest-in) so white is fully opaque where mask is set
    const white = sharp({ create: { width: resizedMeta.width, height: resizedMeta.height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } }).png();
    const out = path.join(outDir, `haq-logo-white-${size}.png`);
    await white.composite([{ input: alphaMask, blend: 'dest-in' }]).png().toFile(out);
    console.log('Written', out);
  }

  // favicon 64
  const resized64 = await srcImg.resize(64, 64, { fit: 'contain' }).toBuffer();
  const alphaMask64 = await sharp(resized64).extractChannel('alpha').threshold(128).toBuffer();
  const white64 = sharp({ create: { width: 64, height: 64, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } }).png();
  const icoOut = path.join(outDir, 'favicon-64.png');
  await white64.composite([{ input: alphaMask64, blend: 'dest-in' }]).png().toFile(icoOut);
  console.log('Written', icoOut);

  const rootFaviconOut = path.join(repoRoot, 'public', 'favicon.png');
  await sharp(src)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(rootFaviconOut);
  console.log('Written', rootFaviconOut);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
