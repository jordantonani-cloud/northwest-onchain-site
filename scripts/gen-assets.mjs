/**
 * Build-time raster asset generator.
 * Produces the favicon/manifest icon set and a branded default OG image
 * from inline SVG via Sharp. Run with `pnpm gen:assets` (also wired into the
 * build). Per-page dynamic OG images are added in Milestone 7; this provides
 * the shared fallback and all PWA/touch icons.
 *
 * Note: OG text uses a geometric-grotesk system fallback here. Milestone 7's
 * per-page pipeline embeds the actual Space Grotesk face.
 */
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const ogDir = join(pub, 'og');

const INK = '#08211B';
const ONCHAIN = '#36E2B4';
const FOG = '#AEC2BA';
const COPPER = '#C9743D';
const MOSS = '#1C5E4A';

/** The peak-as-network mark, parameterized so it scales cleanly. */
function peakMark({ stroke = FOG } = {}) {
  return `
    <path d="M3 25 L12 8 L18 17 L22 12 L29 25" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M3 25 L29 25" stroke="${ONCHAIN}" stroke-width="1.4" opacity=".6"/>
    <circle cx="12" cy="8" r="2.1" fill="${ONCHAIN}"/>
    <circle cx="18" cy="17" r="1.7" fill="${ONCHAIN}"/>
    <circle cx="22" cy="12" r="1.7" fill="${ONCHAIN}"/>`;
}

/** Square app icon (rounded, ink bg) — used only as a fallback if favicon.svg is missing. */
function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="7" fill="${INK}"/>
    ${peakMark()}
  </svg>`;
}

/** 1200×630 social card. */
function ogSvg() {
  const sans = "'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif";
  const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace";
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
    <g transform="translate(90,110) scale(2.4)">${peakMark()}</g>
    <text x="172" y="170" font-family="${sans}" font-size="64" font-weight="700" fill="#EEF2EF" letter-spacing="-1">Northwest <tspan fill="${ONCHAIN}">Onchain</tspan></text>
    <text x="92" y="300" font-family="${sans}" font-size="52" font-weight="600" fill="#EEF2EF" letter-spacing="-1">The bridge from boardroom</text>
    <text x="92" y="362" font-family="${sans}" font-size="52" font-weight="600" fill="#EEF2EF" letter-spacing="-1">to blockchain.</text>
    <text x="92" y="438" font-family="${sans}" font-size="27" fill="${FOG}">Blockchain strategy &amp; proof-of-concept consulting — TradFi rigor, onchain fluency.</text>
    <rect x="92" y="500" width="46" height="3" fill="${ONCHAIN}"/>
    <text x="92" y="540" font-family="${mono}" font-size="22" fill="${ONCHAIN}" letter-spacing="2">// ONCHAIN, ON PURPOSE</text>
    <circle cx="1108" cy="540" r="4" fill="${COPPER}"/>
    <text x="1010" y="546" font-family="${mono}" font-size="20" fill="${FOG}" text-anchor="end">northwestonchain.com</text>
  </svg>`;
}

async function main() {
  await mkdir(ogDir, { recursive: true });

  // Prefer the committed favicon for icon rasterization; fall back to generated SVG.
  let baseIcon;
  try {
    baseIcon = await readFile(join(pub, 'favicon.svg'));
  } catch {
    baseIcon = Buffer.from(iconSvg(512));
  }

  const icons = [
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512],
    ['og/logo.png', 512],
  ];
  for (const [name, size] of icons) {
    await sharp(baseIcon).resize(size, size).png().toFile(join(pub, name));
    console.log('  ✓', name, `${size}×${size}`);
  }

  await sharp(Buffer.from(ogSvg())).png().toFile(join(ogDir, 'default.png'));
  console.log('  ✓ og/default.png 1200×630');
}

main().then(() => console.log('Assets generated.'));
