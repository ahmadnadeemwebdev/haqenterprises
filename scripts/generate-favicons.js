import sharp from 'sharp';
import path from 'path';

async function generate() {
  const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..', '..');
  const src = path.join(repoRoot, 'artifacts', 'haq-enterprises', 'public', 'images', 'haq-logo-transparent.png');
  const outDir = path.join(repoRoot, 'artifacts', 'haq-enterprises', 'public', 'images');

  const sizes = [64, 96, 128, 192, 256];

  for (const size of sizes) {
    const out = path.join(outDir, `haq-logo-white-${size}.png`);
    await sharp(src)
      .resize(size, size, { fit: 'contain' })
      .png()
      .tint('#ffffff')
      .toFile(out);
    console.log('Written', out);
  }

  // also write a 48x48 favicon.ico compatible PNG set (single 64x64 is fine)
  const icoOut = path.join(outDir, 'favicon-64.png');
  await sharp(src).resize(64, 64).png().tint('#ffffff').toFile(icoOut);
  console.log('Written', icoOut);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
