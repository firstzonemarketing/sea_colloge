import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const isGhPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGhPages ? '/sea_colloge/' : '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    {
      name: 'gh-pages-asset-rewriter',
      transform(code, id) {
        if (!isGhPages) return null;
        if (id.includes('node_modules')) return null;
        if (/\.(ts|tsx|js|jsx)$/.test(id) && code.includes('/assets/')) {
          return {
            code: code
              .replace(/(['"`])\/assets\//g, `$1${basePath}assets/`),
            map: null,
          };
        }
        return null;
      },
      closeBundle() {
        if (!isGhPages) return;
        const distDir = path.resolve(process.cwd(), 'dist');
        const indexHtml = path.join(distDir, 'index.html');
        const notFoundHtml = path.join(distDir, '404.html');
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
        }
      },
    },
    {
      name: 'frame-saver-middleware',
      configureServer(server) {
        server.middlewares.use('/__frames-status', (_req, res) => {
          const outDir = path.resolve(process.cwd(), 'public/assets/campus-photos');
          const exists = fs.existsSync(path.join(outDir, 'dept-24.jpg'));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ extracted: exists }));
        });

        server.middlewares.use('/__save-frame', (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end('Method Not Allowed');
            return;
          }
          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const { filename, dataUrl } = JSON.parse(body);
              const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
              const outDir = path.resolve(process.cwd(), 'public/assets/campus-photos');
              fs.mkdirSync(outDir, { recursive: true });
              const outPath = path.join(outDir, path.basename(filename));
              fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true, saved: outPath }));
            } catch (e) {
              res.statusCode = 500;
              res.end(JSON.stringify({ ok: false, error: String(e) }));
            }
          });
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
