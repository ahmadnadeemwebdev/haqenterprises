import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

if (rawPort && (Number.isNaN(port) || port <= 0)) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

const plugins = [react(), tailwindcss()];

try {
  const compression = (await import('vite-plugin-compression')).default;
  plugins.push(
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
    }),
  );
} catch {
  console.warn('vite-plugin-compression not available; continuing without compression plugin.');
}

try {
  const imagemin = (await import('vite-plugin-imagemin')).default;
  plugins.push(
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      mozjpeg: { quality: 75 },
      svgo: { plugins: [{ removeViewBox: false }] },
      webp: { quality: 75 },
    }),
  );
} catch {
  console.warn('vite-plugin-imagemin not available; continuing without image optimization plugin.');
}

export default defineConfig({
  base: basePath,
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
