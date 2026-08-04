import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'artifacts', 'haq-enterprises', 'public', 'images');
const input = path.join(dir, 'haq-logo.png');
const out = path.join(dir, 'footer-logo.png');
const faviconOut = path.join(dir, 'favicon-64.png');

async function generate() {
  // Prefer a supplied transparent PNG if available
  const transparentInput = path.join(dir, 'haq-logo-transparent.png');
  let width, height;

  if (fs.existsSync(transparentInput)) {
    const src = sharp(transparentInput).ensureAlpha();
    const meta = await src.metadata();
    width = meta.width; height = meta.height;

    // Extract alpha channel as mask and apply to a solid white image
    const alpha = await src.extractChannel('alpha').toBuffer();
    const white = await sharp({ create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } }).png().toBuffer();

    await sharp(white).composite([{ input: alpha, blend: 'dest-in' }]).png().toFile(out);
  } else {
    if (!fs.existsSync(input)) {
      console.error('Input logo not found:', input);
      process.exit(1);
    }

    const img = sharp(input);
    const meta = await img.metadata();
    width = meta.width; height = meta.height;

    // Create a binary mask from luminance (threshold).
    const mask = await img.clone().greyscale().normalise().threshold(120).toBuffer();

    // Create a solid white image the same size.
    const white = await sharp({ create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } }).png().toBuffer();

    // Composite white with mask as alpha using dest-in to keep white where mask is white.
    await sharp(white).composite([{ input: mask, blend: 'dest-in' }]).png().toFile(out);
  }

  // Also write a favicon-sized PNG (64x64)
  await sharp(out).resize(64, 64, { fit: 'contain' }).png().toFile(faviconOut);

  console.log('Generated footer logo at', out);
  console.log('Generated favicon at', faviconOut);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
