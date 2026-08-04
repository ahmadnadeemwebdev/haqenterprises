#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const imagesDir = path.join(root, 'public', 'images');
const logoPath = path.join(imagesDir, 'haq-logo-transparent.png');
const outPath = path.join(imagesDir, 'haq-logo-transparent.png');

if (!fs.existsSync(logoPath)) {
  console.error('Logo not found at', logoPath);
  process.exit(1);
}

(async () => {
  try {
    // Create a mask where dark pixels become transparent
    const logo = sharp(logoPath).ensureAlpha();
    const { width, height } = await logo.metadata();

    const mask = await sharp(logoPath)
      .greyscale()
      .linear(1, 0)
      .threshold(120)
      .toBuffer();

    // Apply mask using dest-in to keep white parts
    await logo
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(outPath.replace('.png', '.tmp.png'));

    fs.renameSync(outPath.replace('.png', '.tmp.png'), outPath);
    console.log('Cleaned logo saved to', outPath);
  } catch (err) {
    console.error('Failed to clean logo', err);
    process.exit(1);
  }
})();
