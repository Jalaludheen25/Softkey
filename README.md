# Softkey Technologies — tallygoldpartner.in

Marketing website for **Softkey Technologies Pvt. Ltd.**, channel partner for Tally, Tally on Cloud (AWS), Biz Analyst, Live Keeping, CredFlow and Vyapar.

Built with [Astro](https://astro.build) as a fully static site: fast, SEO-friendly, and deployable to any web host.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the production site to dist/
npm run preview    # serves dist/ locally
npm run check      # type-check all components
```

Requires Node.js 20 or newer.

## Deploying

`npm run build` produces a static `dist/` folder. Upload its **contents** to the web root.

- **cPanel / Apache hosting:** upload `dist/` to `public_html/`. The included `.htaccess` serves the custom 404 page, adds security and caching headers, and redirects `www` / `http` to `https://tallygoldpartner.in`. **Make sure an SSL certificate is active before uploading**, because the redirect forces HTTPS.
- **Netlify / Cloudflare Pages / Vercel:** build command `npm run build`, output directory `dist`. The `_headers` file is applied automatically on Netlify and Cloudflare Pages.

## Enquiry form

The contact form works without a backend. When submitted, it opens WhatsApp (9544 101 401) with the enquiry pre-filled and also offers an email link.

To send submissions to an inbox instead, create a form endpoint (for example Formspree or Web3Forms) and set it at build time:

```bash
cp .env.example .env
# PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
npm run build
```

The form POSTs JSON (`name`, `phone`, `email`, `business`, `service`, `location`, `message`). If the request fails, the visitor is shown WhatsApp and email fallbacks.

## Editing content

All content lives in typed data files, so most edits don't require touching layouts:

| What | File |
| --- | --- |
| Company name, phone, WhatsApp, email, branches, registered office | `src/data/site.ts` |
| The nine services (copy, features, process, FAQs, SEO) | `src/data/services.ts` |
| Partner products and logos | `src/data/partners.ts`, `src/assets/partners/` |
| Industries | `src/data/industries.ts` |
| Testimonials | `src/data/testimonials.ts` |
| TallyPrime pricing | `pricing` block on the `tallyprime` entry in `src/data/services.ts` |
| Imagery | `src/assets/tally/` — TallyPrime screens (optimised to AVIF/WebP automatically) |

Service pages are generated from `src/data/services.ts`. Add an entry there and `/services/<slug>/` is created, and the page is added to the navigation, footer and sitemap.

In a service `headline`, wrap words in `*asterisks*` to render them as the gold serif accent.

## Before going live — needs the client's input

- **Testimonials are placeholders.** Replace the entries in `src/data/testimonials.ts` with real, approved client reviews, then set `TESTIMONIALS_ARE_PLACEHOLDERS = false` to remove the on-page notice.
- **Branch map pins** use approximate coordinates (`lat`/`lng` in `src/data/site.ts`) on an illustrative map. "Directions" buttons open a Google Maps search for each address; confirm they land on the right building.
- **Privacy policy** (`src/pages/privacy-policy.astro`) is a sensible starting point. Have it reviewed.
- **Pricing**: the 2-year Silver TSS renewal is shown as "price on request" with a 10% saving noted, because ₹9,000 is exactly two 1-year renewals and the discounted figure was not confirmed. Add `price` to that plan in `src/data/services.ts` once the client confirms it. All prices carry a "indicative, confirm before purchase" note.
- **Spelling of branch towns** follows the business card exactly: *Kannur*, *Payyannur*, *Mangaluru*.

## Brand assets

The logo is a vector rebuild of the mark on the client's business card (`reference/`):

- `scripts/brand/icon-geometry.json`: the S-key icon, traced from the card and rebuilt with exact ring geometry
- The wordmark is set in Montserrat and converted to outlines

To regenerate `src/data/brand-geometry.ts`, `public/brand/*.svg`, the favicons and the social share image:

```bash
npm run brand
```

Standalone logo files for print or social use are in `public/brand/`.

### Tally logos in headings

Page headings can carry a brand logo instead of the word: write `{{tally}}` or `{{tallyprime}}` in a headline and `richTitle()` (`src/lib/text.ts`) swaps in the logo, keeping the word as alt text so the heading still reads correctly. The logos live in `public/brand/` as SVG, so they stay sharp at any size.

The gold hero panels on About and Partners are `src/components/GoldPanel.astro` (`variant="partner"` / `variant="ecosystem"`) — navy and gold, built in CSS rather than as images, so they scale cleanly.

### TallyPrime Gold product visuals

The client's product renders live in `/assets` (originals, not deployed). The cropped versions the site uses are in `src/assets/products/` — see that folder's `SOURCES.json` for which original each came from. They appear in the home hero and in the gold panels on About and Partners (`src/components/GoldPanel.astro`).

### Tally product screens

`src/assets/tally/` holds the TallyPrime screenshots used on the service pages and the home "what we do" panel. They are official screenshots taken from Tally's documentation site — see `src/assets/tally/SOURCES.json` for the exact source URL of each one.

**Before launch:** confirm with the client that they are happy to publish Tally's screenshots, or replace them with captures from the client's own TallyPrime installation (same file names, no code changes needed). Screens are framed by `src/components/ScreenShot.astro`, which draws the window bar and can crop to a fixed ratio.

### Partner product logos

`src/assets/partners/` holds the six product logos shown in the ecosystem sections:

| Logo | Source |
| --- | --- |
| Vyapar | Official vendor SVG, rasterised to transparent PNG |
| Biz Analyst, CredFlow | Official vendor PNG (transparent) |
| Tally, Tally on Cloud (AWS), Live Keeping | From the client's business card, with the white background removed. Tally uses the card's **red** lockup at the client's request; Tally's current official logo (black script) is kept in `src/assets/partners/official/` if they ever switch. |

The original card crops (white background) are kept in `src/assets/partners/from-card/`. To change any product's artwork, point its `logo` import in `src/data/partners.ts` at the file you want.

Logos are sized by `src/lib/logo.ts`, which balances them optically from their aspect ratio — wide wordmarks and square app icons end up with similar visual weight. Use `logoTweak` in `src/data/partners.ts` to nudge an individual logo.

## Project structure

```
src/
  components/      Reusable UI (Header, Footer, Logo, Icon, sections…)
  components/home/ Homepage-only sections
  data/            Site content and company information
  layouts/         BaseLayout (SEO meta, JSON-LD, fonts, global scripts)
  pages/           Routes (/, /about, /services, /services/[slug], /partners, /contact…)
  scripts/         Progressive enhancements (reveal, tilt, parallax)
  styles/          Design tokens and global styles
public/            Static files (favicons, logos, robots.txt, .htaccess)
reference/         Client-supplied source images (not deployed)
scripts/           Build-time tooling (brand asset generator)
```

## Credits

Product screenshots are Tally Solutions' own (see `src/assets/tally/SOURCES.json`). The site no longer uses stock photography; the unused photos remain in `src/assets/images/` and can be deleted — nothing imports them, so they are not built into `dist/`. Icons from [Lucide](https://lucide.dev) (ISC) and [Remix Icon](https://remixicon.com) (Apache 2.0). Fonts: Manrope and Instrument Serif (SIL OFL), and Montserrat for the logo (SIL OFL).

Tally, TallyPrime and related marks are trademarks of Tally Solutions Pvt. Ltd. Other product names and logos belong to their respective owners.
