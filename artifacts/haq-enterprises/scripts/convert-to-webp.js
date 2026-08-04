import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const base = path.resolve(process.cwd(), 'public', 'images');
const files = [
  'hero-studio.jpg',
  'mission-bg.jpg',
  'event-1.jpg',
  'event-2.jpg',
  'event-3.jpg',
  'event-4.jpg',
  'event-conf1.jpg',
  'event-conf2.jpg',
  'product-2_2.jpg',
  'product-2_2-branded.jpg',
  'product-3.jpg',
  'product-4_2.jpg',
];

const run = async () => {
  for (const name of files) {
    const src = path.join(base, name);
    const ext = path.extname(name);
    const out = path.join(base, name.replace(ext, '.webp'));
    if (!fs.existsSync(src)) {
      console.warn('missing', src);
      continue;
    }
    await sharp(src).webp({ quality: 75 }).toFile(out);
    console.log('created', out);
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
