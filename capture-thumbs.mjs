import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const BASE = 'https://boreescope.github.io/daily-ai-typography';
const OUT = './thumbs';

const pages = [
  { folder: '2025-04-15', title: 'cassette' },
  { folder: '2025-04-16', title: 'cat' },
  { folder: '2025-04-17', title: 'redsea' },
  { folder: '2025-04-20', title: 'terms' },
  { folder: '2025-04-21', title: 'bread' },
  { folder: '2025-04-22', title: 'numerology' },
  { folder: '2025-04-23', title: 'green' },
  { folder: '2025-04-24', title: 'twoworlds' },
  { folder: '2025-04-27', title: 'garden' },
  { folder: '2025-04-28', title: 'dataflight' },
  { folder: '2025-04-29', title: 'threetenses' },
  { folder: '2025-04-30', title: 'atc' },
  { folder: '2025-05-04', title: 'morningsun' },
  { folder: '2025-05-06', title: 'freedom' },
  { folder: '2025-05-07', title: 'wardrobe' },
  { folder: '2026-05-08', title: 'colleague' },
  { folder: '2026-05-11', title: 'scatter' },
  { folder: '2026-05-12', title: 'brainfog' },
  { folder: '2025-05-13', title: 'stripe' },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });

for (const p of pages) {
  const url = `${BASE}/${p.folder}/index.html?preview=1`;
  console.log(`Capturing ${p.title}...`);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000)); // 애니메이션 대기
    await page.screenshot({ path: join(OUT, `${p.title}.png`), type: 'png' });
    console.log(`  ✓ ${p.title}.png`);
  } catch (e) {
    console.log(`  ✗ ${p.title} failed: ${e.message}`);
  }
}

await browser.close();
console.log('Done!');
