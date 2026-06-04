/**
 * Build-time raster asset generator (Sharp).
 *   1. favicon/manifest icon set (from favicon.svg)
 *   2. a branded 1200×630 OG image PER PAGE (static routes + each published
 *      Insights article), plus a shared default.png fallback.
 *
 * Run via `pnpm gen:assets` (also wired into prebuild). OG filenames are the
 * contract with the pages: each page passes the matching `image` to <Seo>.
 *
 * Note: OG text uses a geometric-grotesk system fallback. Swapping in the real
 * Space Grotesk face is a future enhancement; the layout/colors are on-brand.
 */
import sharp from 'sharp';
import { mkdir, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const ogDir = join(pub, 'og');
const insightsDir = join(root, 'src', 'content', 'insights');

const INK = '#08211B';
const ONCHAIN = '#36E2B4';
const FOG = '#AEC2BA';
const COPPER = '#C9743D';
const MOSS = '#1C5E4A';

const CLUSTER_LABELS = {
  'enterprise-strategy': 'Enterprise blockchain strategy',
  'tokenization-rwa': 'Tokenization & RWA',
  'crypto-tradfi': 'Crypto for TradFi & investors',
};

const escapeXml = (s) =>
  s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

/** Greedy word-wrap into at most `maxLines` lines of ~`max` chars. */
function wrap(text, max = 24, maxLines = 3) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max && line) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
    if (lines.length === maxLines - 1 && line.length > max) break;
  }
  if (line) lines.push(line.trim());
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/.{1}$/, '…');
  }
  return lines;
}

/** The peak-as-network mark. */
function peakMark(stroke = FOG) {
  return `
    <path d="M3 25 L12 8 L18 17 L22 12 L29 25" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M3 25 L29 25" stroke="${ONCHAIN}" stroke-width="1.4" opacity=".6"/>
    <circle cx="12" cy="8" r="2.1" fill="${ONCHAIN}"/>
    <circle cx="18" cy="17" r="1.7" fill="${ONCHAIN}"/>
    <circle cx="22" cy="12" r="1.7" fill="${ONCHAIN}"/>`;
}

function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="7" fill="${INK}"/>${peakMark()}</svg>`;
}

/** 1200×630 social card for a given page. */
function ogSvg({ eyebrow, title, subtitle }) {
  const sans = "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif";
  const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace";
  const titleLines = wrap(title, 24, 3);
  const titleSize = titleLines.length >= 3 ? 56 : 64;
  const titleSpan = titleLines
    .map((l, i) => `<tspan x="92" dy="${i === 0 ? 0 : titleSize + 8}">${escapeXml(l)}</tspan>`)
    .join('');
  const titleY = 300 - (titleLines.length - 2) * 30;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <radialGradient id="bg" cx="80%" cy="-10%" r="120%">
        <stop offset="0%" stop-color="#0c3127"/>
        <stop offset="55%" stop-color="${INK}"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <g fill="none" stroke="${MOSS}" stroke-width="1.5" opacity="0.28">
      <path d="M-50 470 C250 410 430 540 660 460 S1080 370 1320 450"/>
      <path d="M-50 530 C270 470 450 590 680 510 S1090 420 1320 500"/>
      <path d="M-50 410 C230 350 410 480 660 400 S1100 300 1320 390" stroke="${ONCHAIN}" opacity="0.4"/>
    </g>
    <g transform="translate(90,96) scale(2.1)">${peakMark()}</g>
    <text x="158" y="148" font-family="${sans}" font-size="40" font-weight="700" fill="#EEF2EF" letter-spacing="-1">Northwest <tspan fill="${ONCHAIN}">Onchain</tspan></text>
    <text x="92" y="${titleY}" font-family="${sans}" font-size="${titleSize}" font-weight="600" fill="#EEF2EF" letter-spacing="-1">${titleSpan}</text>
    <text x="92" y="500" font-family="${sans}" font-size="26" fill="${FOG}">${escapeXml(subtitle)}</text>
    <rect x="92" y="540" width="46" height="3" fill="${ONCHAIN}"/>
    <text x="92" y="576" font-family="${mono}" font-size="20" fill="${ONCHAIN}" letter-spacing="2">// ${escapeXml(eyebrow.toUpperCase())}</text>
    <circle cx="1108" cy="572" r="4" fill="${COPPER}"/>
    <text x="1010" y="578" font-family="${mono}" font-size="18" fill="${FOG}" text-anchor="end">northwestonchain.com</text>
  </svg>`;
}

async function writeOg(name, opts) {
  await sharp(Buffer.from(ogSvg(opts))).png().toFile(join(ogDir, `${name}.png`));
  console.log('  ✓ og/' + name + '.png');
}

/** Parse simple scalar frontmatter (title, cluster, draft) from raw MDX. */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = {};
  if (!m) return fm;
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^(\w+):\s*(.*)$/);
    if (mm) fm[mm[1]] = mm[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return fm;
}

// Static-route OG pages. The `name` is the OG filename the page passes to <Seo>.
const STATIC_PAGES = [
  { name: 'default', eyebrow: 'Onchain, on purpose', title: 'The bridge from boardroom to blockchain.', subtitle: 'Blockchain strategy & proof-of-concept consulting.' },
  { name: 'home', eyebrow: 'TradFi rigor · Onchain fluency', title: 'The bridge from boardroom to blockchain.', subtitle: 'Diagnose, assemble, deliver — to metrics, cost, and ROI.' },
  { name: 'services', eyebrow: 'Services & pricing', title: 'Paid front door. Managed delivery. A standing seat.', subtitle: 'A $1,500 Audit, a Diagnostic Sprint, PoC delivery, advisory.' },
  { name: 'process', eyebrow: 'The expedition', title: 'Survey. Chart. Assemble. Summit.', subtitle: 'A simple, honest, metrics-first path to a measured PoC.' },
  { name: 'about', eyebrow: 'About', title: 'Built on both sides of the ledger.', subtitle: 'TradFi rigor, onchain fluency — grounded in the Pacific Northwest.' },
  { name: 'insights', eyebrow: 'Insights', title: 'Field notes from the bridge.', subtitle: 'Enterprise strategy, tokenization & RWA, crypto diligence.' },
  { name: 'contact', eyebrow: 'Book the Meet', title: "Tell us the ambition. We'll bring the path.", subtitle: 'One call. Then a fixed-fee sprint and a costed answer.' },
  { name: 'privacy', eyebrow: 'Privacy', title: 'Privacy policy', subtitle: 'No ad tracking, no cookie banners. Just what we need to talk.' },
];

async function main() {
  await mkdir(ogDir, { recursive: true });

  let baseIcon;
  try {
    baseIcon = await readFile(join(pub, 'favicon.svg'));
  } catch {
    baseIcon = Buffer.from(iconSvg(512));
  }

  for (const [name, size] of [
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512],
    ['og/logo.png', 512],
  ]) {
    await sharp(baseIcon).resize(size, size).png().toFile(join(pub, name));
    console.log('  ✓', name, `${size}×${size}`);
  }

  for (const p of STATIC_PAGES) {
    await writeOg(p.name, p);
  }

  // Per-article OG images (published only).
  let files = [];
  try {
    files = (await readdir(insightsDir)).filter((f) => /\.mdx?$/.test(f));
  } catch {
    /* no insights yet */
  }
  for (const file of files) {
    const raw = await readFile(join(insightsDir, file), 'utf8');
    const fm = parseFrontmatter(raw);
    if (fm.draft === 'true' || !fm.title) continue;
    const slug = file.replace(/\.mdx?$/, '');
    await writeOg(`insight-${slug}`, {
      eyebrow: CLUSTER_LABELS[fm.cluster] || 'Insights',
      title: fm.title,
      subtitle: 'Northwest Onchain · Insights',
    });
  }
}

main().then(() => console.log('Assets generated.'));
