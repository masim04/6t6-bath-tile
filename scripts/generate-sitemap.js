import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const baseUrl = process.env.SITE_URL || 'https://example.com';

const routes = [
  '/',
  '/services',
  '/projects',
  '/about',
  '/gallery',
  '/locations',
  '/blog',
  '/contact'
];

const urls = routes.map((r) => `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log('Sitemap written to public/sitemap.xml');
