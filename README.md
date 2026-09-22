# Softkey Technologies — tallygoldpartner.in

Marketing website for **Softkey Technologies Pvt. Ltd.**, channel partner for Tally, Tally on Cloud (AWS), Biz Analyst, Live Keeping, CredFlow and Vyapar.

Built with [Astro](https://astro.build) as a fully static site: fast, SEO-friendly, and deployable to any web host.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the production site to dist/
npm run preview    # serves dist/ locally
npx astro check    # type-check all components
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
| Photography | `src/assets/images/` (optimised to AVIF/WebP automatically) |

Service pages are generated from `src/data/services.ts`. Add an entry there and `/services/<slug>/` is created, and the page is added to the navigation, footer and sitemap.

In a service `headline`, wrap words in `*asterisks*` to render them as the gold serif accent.

## Before going live — needs the client's input

- **Testimonials are placeholders.** Replace the entries in `src/data/testimonials.ts` with real, approved client reviews, then set `TESTIMONIALS_ARE_PLACEHOLDERS = false` to remove the on-page notice.
- **Branch map pins** use approximate coordinates (`lat`/`lng` in `src/data/site.ts`) on an illustrative map. "Directions" buttons open a Google Maps search for each address; confirm they land on the right building.
- **Privacy policy** (`src/pages/privacy-policy.astro`) is a sensible starting point. Have it reviewed.
- **Spelling of branch towns** follows the business card exactly: *Kannur*, *Payyannur*, *Mangaluru*.

## Brand assets

The logo is a vector rebuild of the mark on the client's business card (`reference/`):

- `scripts/brand/icon-geometry.json`: the S-key icon, traced from the card and rebuilt with exact ring geometry
- The wordmark is set in Montserrat and converted to outlines

To regenerate `src/data/brand-geometry.ts`, `public/brand/*.svg`, the favicons and the social share image:

```bash
node scripts/generate-brand.mjs
```

Standalone logo files for print or social use are in `public/brand/`.

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

Photography from [Unsplash](https://unsplash.com) under the Unsplash License. Icons from [Lucide](https://lucide.dev) (ISC) and [Remix Icon](https://remixicon.com) (Apache 2.0). Fonts: Manrope and Instrument Serif (SIL OFL), and Montserrat for the logo (SIL OFL).

Tally, TallyPrime and related marks are trademarks of Tally Solutions Pvt. Ltd. Other product names and logos belong to their respective owners.
