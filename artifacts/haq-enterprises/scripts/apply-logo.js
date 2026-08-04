#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(workspaceRoot, 'public', 'images');
const articlesPath = path.join(workspaceRoot, 'src', 'content', 'blog', 'articles.json');
const logoPath = path.join(imagesDir, 'haq-logo-transparent.png');

if (!fs.existsSync(logoPath)) {
  console.error('Logo file not found at', logoPath);
  process.exit(1);
}

let articleImages = [];
try {
  const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
  articleImages = articles
    .map((a) => a.image)
    .filter(Boolean)
    .map((p) => p.replace(/^\//, '').replace(/^images\//, ''));
  // build map for labels
  var articleMap = {};
  articles.forEach((a) => {
    if (a.image) {
      const key = a.image.replace(/^[\/]?images\//, '').replace(/^\//, '');
      articleMap[key] = { category: a.category || '', date: a.date || '' };
    }
  });
} catch (e) {
  console.error('Error reading articles.json', e);
}

// Also include giveaway / gift images
const extraImages = ['gift-package.jpg', 'product-2_2-branded.jpg', 'product-3_2-branded.jpg', 'product-4_2-branded.jpg', 'product-5_2-branded.jpg'];

const targets = Array.from(new Set([...articleImages, ...extraImages])).map(p => path.join(imagesDir, p));

async function applyLogoToImage(imagePath) {
  if (!fs.existsSync(imagePath)) {
    console.warn('Image not found, skipping:', imagePath);
    return;
  }
  try {
    const img = sharp(imagePath);
    const meta = await img.metadata();
    const imgW = meta.width || 800;
    const imgH = meta.height || 600;

    // Choose visual treatment based on filename hash
    const basename = path.basename(imagePath);
    const idx = Math.abs(basename.split('').reduce((s, c) => s + c.charCodeAt(0), 0)) % 5;

    const overlayColors = [null, 'rgba(0,0,0,0.18)', 'rgba(255,255,255,0.12)', 'rgba(0,0,0,0.35)', 'rgba(10,25,40,0.22)'];
    const logoPositions = ['southeast', 'southwest', 'northeast', 'northwest', 'center'];
    const logoScales = [0.14, 0.18, 0.12, 0.22, 0.16];

    const overlay = overlayColors[idx];
    const logoScale = logoScales[idx];
    const logoPos = logoPositions[idx];

    const composites = [];
    if (overlay) {
      const overlaySvg = `<svg width="${imgW}" height="${imgH}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${overlay}"/></svg>`;
      composites.push({ input: Buffer.from(overlaySvg), blend: 'over' });
    }

    // Add small category label from articleMap if available
    const key = basename;
    const metaLabel = typeof articleMap !== 'undefined' && articleMap[key] ? articleMap[key].category : null;
    if (metaLabel) {
      const labelSvg = `\n        <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">\n          <rect rx="8" ry="8" width="300" height="60" fill="rgba(0,0,0,0.55)"/>\n          <text x="24" y="38" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#ffffff">${metaLabel}</text>\n        </svg>`;
      composites.push({ input: Buffer.from(labelSvg), left: 20, top: 20 });
    }

    // Prepare logo
    const logoTargetWidth = Math.max(80, Math.round(imgW * logoScale));
    const resizedLogo = sharp(logoPath).resize({ width: logoTargetWidth });
    const logoBuffer = await resizedLogo.toBuffer();
    const logoMeta = await sharp(logoBuffer).metadata();
    const logoH = logoMeta.height || Math.round(logoTargetWidth * 0.6);

    // Compute numeric position for logo
    let logoComposite = { input: logoBuffer };
    const margin = Math.max(8, Math.round(imgW * 0.03));
    if (logoPos === 'center') {
      logoComposite.top = Math.round((imgH - logoH) / 2);
      logoComposite.left = Math.round((imgW - logoTargetWidth) / 2);
    } else if (logoPos === 'southeast') {
      logoComposite.top = Math.round(imgH - logoH - margin);
      logoComposite.left = Math.round(imgW - logoTargetWidth - margin);
    } else if (logoPos === 'southwest') {
      logoComposite.top = Math.round(imgH - logoH - margin);
      logoComposite.left = Math.round(margin);
    } else if (logoPos === 'northeast') {
      logoComposite.top = Math.round(margin);
      logoComposite.left = Math.round(imgW - logoTargetWidth - margin);
    } else if (logoPos === 'northwest') {
      logoComposite.top = Math.round(margin);
      logoComposite.left = Math.round(margin);
    }

    composites.push(logoComposite);

    const tmpPath = imagePath + '.tmp';

    await img.composite(composites).toFile(tmpPath);
    fs.renameSync(tmpPath, imagePath);
    console.log('Patched:', path.basename(imagePath));
  } catch (err) {
    console.error('Failed to process', imagePath, err);
  }
}

async function run() {
  for (const t of targets) {
    await applyLogoToImage(t);
  }
  console.log('Done applying logo to images.');
}

run();
