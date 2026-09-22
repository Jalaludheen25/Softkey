/**
 * Generates the Softkey brand assets from vector sources.
 *
 * - The icon geometry (scripts/brand/icon-geometry.json) was traced once from the
 *   client's business card (reference/softkey-card-dark.jpeg) and rebuilt as clean
 *   polygons + exact ring arcs.
 * - The wordmark is set in Montserrat (the typeface used on the client's card) and
 *   converted to outlines so the logo never depends on a web font.
 *
 * Outputs:
 *   src/data/brand-geometry.ts   – path data used by <Logo /> (inline SVG)
 *   public/brand/*.svg           – standalone logo files
 *   public/*.png, favicon.svg    – favicons / touch icons
 *   public/og-default.png        – social share image
 *
 * Run: node scripts/generate-brand.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const r = (...p) => path.join(root, ...p);

const NAVY = '#061731';
const GOLD = '#B98D36';
const GOLD_LIGHT = '#D9B870';
const LIME = '#99EB26';
const WHITE = '#FFFFFF';

const f2 = (v) => (+v.toFixed(2)).toString();

/* ------------------------------------------------------------------ icon */
const geo = JSON.parse(fs.readFileSync(r('scripts/brand/icon-geometry.json'), 'utf8'));
// Content bounds: ring outer radius 81.03 around (95,95)
const ICON_VB = { x: 13.5, y: 13.5, w: 163, h: 163 };

/* -------------------------------------------------------------- wordmark */
function loadFont(weight) {
  const buf = fs.readFileSync(r(`node_modules/@fontsource/montserrat/files/montserrat-latin-${weight}-normal.woff`));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}
const bold = loadFont(700);
const semi = loadFont(600);

/** Serialise opentype path commands (opentype's own toPathData emits NaN for some values). */
function toD(cmds) {
  return cmds
    .map((c) => {
      switch (c.type) {
        case 'M': case 'L': return `${c.type}${f2(c.x)} ${f2(c.y)}`;
        case 'Q': return `Q${f2(c.x1)} ${f2(c.y1)} ${f2(c.x)} ${f2(c.y)}`;
        case 'C': return `C${f2(c.x1)} ${f2(c.y1)} ${f2(c.x2)} ${f2(c.y2)} ${f2(c.x)} ${f2(c.y)}`;
        case 'Z': return 'Z';
        default: throw new Error('Unknown path command ' + c.type);
      }
    })
    .join('');
}

/** Lay out text at fontSize with extra tracking so the ink spans exactly targetWidth. */
function setText(font, text, fontSize, targetWidth) {
  const glyphs = font.stringToGlyphs(text);
  const scale = fontSize / font.unitsPerEm;
  const layout = (tracking) => {
    let x = 0;
    const parts = [];
    glyphs.forEach((g, i) => {
      parts.push({ g, x });
      let adv = g.advanceWidth * scale;
      if (i < glyphs.length - 1) adv += font.getKerningValue(g, glyphs[i + 1]) * scale + tracking;
      x += adv;
    });
    const p = new opentype.Path();
    parts.forEach(({ g, x }) => p.extend(g.getPath(x, 0, fontSize)));
    return p;
  };
  // ink bounds at zero tracking, then solve for tracking linearly
  const p0 = layout(0);
  const b0 = p0.getBoundingBox();
  const gaps = glyphs.length - 1;
  const tracking = targetWidth ? (targetWidth - (b0.x2 - b0.x1)) / gaps : 0;
  const p = layout(tracking);
  const b = p.getBoundingBox();
  // normalise so ink starts at x=0 and baseline at y=0
  const cmds = p.commands.map((c) => {
    const o = { ...c };
    for (const k of ['x', 'y', 'x1', 'y1', 'x2', 'y2']) if (k in o) o[k] = k.startsWith('x') ? o[k] - b.x1 : o[k];
    return o;
  });
  return { d: toD(cmds), width: b.x2 - b.x1, capTop: -font.tables.os2.sCapHeight * (fontSize / font.unitsPerEm), tracking };
}

// Proportions measured from the client's card (reference/softkey-card-partners.jpeg)
const W = 575; // wordmark width
const softkey = setText(bold, 'SOFTKEY', 100, W); // cap height 70
const tech = setText(bold, 'TECHNOLOGIES', 57, W); // cap height ~40
const pvtSize = 24.5;
const pvtTracked = setText(semi, 'PRIVATE LIMITED', pvtSize, W * 0.7);

const CAP1 = 70, CAP2 = 57 * 0.7, CAP3 = pvtSize * 0.7;
const GAP12 = 22, GAP23 = 24;
// y positions are baselines
const y1 = CAP1;
const y2 = y1 + GAP12 + CAP2;
const y3 = y2 + GAP23 + CAP3;

/* ------------------------------------------------------------- builders */
function iconGroup({ fg, dot = LIME, x = 0, y = 0, size = 163 }) {
  const s = size / ICON_VB.w;
  return `<g transform="translate(${f2(x)} ${f2(y)}) scale(${f2(s * 1000) / 1000}) translate(${-ICON_VB.x} ${-ICON_VB.y})">` +
    `<path d="${geo.ringD}" fill="${fg}"/>` +
    `<path d="${geo.polyD}" fill="${fg}" stroke="${fg}" stroke-width="0.8" stroke-linejoin="round"/>` +
    `<circle cx="${geo.dot.cx}" cy="${geo.dot.cy}" r="${geo.dot.r}" fill="${dot}"/></g>`;
}

function stackedWordmark({ primary, gold, x = 0, y = 0 }) {
  const ruleGap = 20;
  const ruleInset = 14;
  const pvtX = (W - pvtTracked.width) / 2;
  const ruleW = pvtX - ruleGap - ruleInset;
  const ruleY = y3 - CAP3 / 2;
  return `<g transform="translate(${f2(x)} ${f2(y)})">` +
    `<path transform="translate(0 ${f2(y1)})" d="${softkey.d}" fill="${primary}"/>` +
    `<path transform="translate(0 ${f2(y2)})" d="${tech.d}" fill="${gold}"/>` +
    `<path transform="translate(${f2(pvtX)} ${f2(y3)})" d="${pvtTracked.d}" fill="${primary}"/>` +
    `<rect x="${ruleInset}" y="${f2(ruleY - 1.5)}" width="${f2(ruleW)}" height="3" fill="${gold}"/>` +
    `<rect x="${f2(pvtX + pvtTracked.width + ruleGap)}" y="${f2(ruleY - 1.5)}" width="${f2(ruleW)}" height="3" fill="${gold}"/>` +
    `</g>`;
}

function twoLineWordmark({ primary, gold, x = 0, y = 0 }) {
  return `<g transform="translate(${f2(x)} ${f2(y)})">` +
    `<path transform="translate(0 ${f2(y1)})" d="${softkey.d}" fill="${primary}"/>` +
    `<path transform="translate(0 ${f2(y2)})" d="${tech.d}" fill="${gold}"/></g>`;
}

const svgDoc = (w, h, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f2(w)} ${f2(h)}" role="img" aria-labelledby="t"><title id="t">${title}</title>${body}</svg>\n`;

/* ---------------------------------------------------------------- files */
fs.mkdirSync(r('public/brand'), { recursive: true });
const TITLE = 'Softkey Technologies Private Limited';

// Horizontal lockup: icon + two-line wordmark
const H_ICON = 163;
const twoLineH = y2; // baseline of TECHNOLOGIES
const hScale = (H_ICON * 0.66) / twoLineH;
const hGap = 34;
const hW = H_ICON + hGap + W * hScale;
function horizontal(primary, iconFg) {
  const ty = (H_ICON - twoLineH * hScale) / 2;
  return iconGroup({ fg: iconFg, size: H_ICON }) +
    `<g transform="translate(${f2(H_ICON + hGap)} ${f2(ty)}) scale(${f2(hScale * 1000) / 1000})">${twoLineWordmark({ primary, gold: GOLD })}</g>`;
}
fs.writeFileSync(r('public/brand/softkey-logo-horizontal.svg'), svgDoc(hW, H_ICON, horizontal(NAVY, NAVY), TITLE));
fs.writeFileSync(r('public/brand/softkey-logo-horizontal-reverse.svg'), svgDoc(hW, H_ICON, horizontal(WHITE, WHITE), TITLE));

// Stacked wordmark (as on the client's card)
const stackH = y3 + 4;
fs.writeFileSync(r('public/brand/softkey-wordmark.svg'), svgDoc(W, stackH, stackedWordmark({ primary: NAVY, gold: GOLD }), TITLE));
fs.writeFileSync(r('public/brand/softkey-wordmark-reverse.svg'), svgDoc(W, stackH, stackedWordmark({ primary: WHITE, gold: GOLD_LIGHT }), TITLE));

// Icon only
fs.writeFileSync(r('public/brand/softkey-icon.svg'), svgDoc(163, 163, iconGroup({ fg: NAVY }), 'Softkey Technologies'));
fs.writeFileSync(r('public/brand/softkey-icon-reverse.svg'), svgDoc(163, 163, iconGroup({ fg: WHITE }), 'Softkey Technologies'));

// Favicon: icon on a navy rounded tile (legible on light and dark browser chrome)
const fav = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${size}" height="${size}"><rect width="200" height="200" rx="44" fill="${NAVY}"/>${iconGroup({ fg: WHITE, x: 22, y: 22, size: 156 })}</svg>`;
fs.writeFileSync(r('public/favicon.svg'), fav(200) + '\n');
const touch = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${size}" height="${size}"><rect width="200" height="200" fill="${NAVY}"/>${iconGroup({ fg: WHITE, x: 30, y: 30, size: 140 })}</svg>`;
await sharp(Buffer.from(touch(180))).png().toFile(r('public/apple-touch-icon.png'));
await sharp(Buffer.from(touch(192))).png().toFile(r('public/icon-192.png'));
await sharp(Buffer.from(touch(512))).png().toFile(r('public/icon-512.png'));
await sharp(Buffer.from(fav(48))).resize(48, 48).png().toFile(r('public/favicon-48.png'));

/* ------------------------------------------------------ geometry module */
const ts = `// AUTO-GENERATED by scripts/generate-brand.mjs — do not edit by hand.
export const ICON = {
  viewBox: '${ICON_VB.x} ${ICON_VB.y} ${ICON_VB.w} ${ICON_VB.h}',
  ring: ${JSON.stringify(geo.ringD)},
  shape: ${JSON.stringify(geo.polyD)},
  dot: ${JSON.stringify(geo.dot)},
} as const;

export const WORDMARK = {
  width: ${f2(W)},
  softkey: { d: ${JSON.stringify(softkey.d)}, baseline: ${f2(y1)} },
  technologies: { d: ${JSON.stringify(tech.d)}, baseline: ${f2(y2)} },
  privateLimited: { d: ${JSON.stringify(pvtTracked.d)}, baseline: ${f2(y3)}, x: ${f2((W - pvtTracked.width) / 2)}, width: ${f2(pvtTracked.width)}, cap: ${f2(CAP3)} },
  twoLineHeight: ${f2(y2)},
  stackedHeight: ${f2(stackH)},
} as const;
`;
fs.writeFileSync(r('src/data/brand-geometry.ts'), ts);

/* ------------------------------------------------------ social image */
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<defs>
  <radialGradient id="g1" cx="0.82" cy="0.18" r="0.75"><stop offset="0" stop-color="#1B2B5E"/><stop offset="1" stop-color="#050B1F"/></radialGradient>
  <linearGradient id="gl" x1="0" x2="1"><stop offset="0" stop-color="${GOLD}" stop-opacity="0"/><stop offset="0.5" stop-color="${GOLD_LIGHT}"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0"/></linearGradient>
</defs>
<rect width="1200" height="630" fill="url(#g1)"/>
<circle cx="1010" cy="315" r="330" fill="none" stroke="${GOLD}" stroke-opacity="0.18" stroke-width="1.5"/>
<circle cx="1010" cy="315" r="250" fill="none" stroke="${GOLD}" stroke-opacity="0.12" stroke-width="1.5"/>
${iconGroup({ fg: WHITE, x: 860, y: 165, size: 300 })}
${`<g transform="translate(90 190) scale(1.1)">${stackedWordmark({ primary: WHITE, gold: GOLD_LIGHT })}</g>`}
<rect x="90" y="430" width="560" height="1.5" fill="url(#gl)"/>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(r('public/og-default.png'));

console.log('Brand assets generated.', { softkeyTracking: softkey.tracking.toFixed(1), techTracking: tech.tracking.toFixed(1), hW: f2(hW) });
