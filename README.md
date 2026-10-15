# Portfolio · Aurora Pro

Hugo Ramírez's personal site — a modern, tech-forward "Aurora Pro" take on the
classic portfolio. Single-page React app with client-side routing, generated as
static files for Vercel.

> This is a **separate project** from the original portfolio. It shares content
> and the Web3Forms key, but lives in its own folder and its own deployment.

## Stack

| Piece | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 + React Router 7 |
| Icons | `lucide-react` + a few inline brand SVGs (`src/components/icons.jsx`) |
| Styling | Plain CSS with design tokens (`src/styles.css`, `src/pages.css`) — no Tailwind |
| Hosting | Vercel (static build) |
| Analytics | `@vercel/analytics` |

## Getting started

```bash
npm install
npm run dev        # http://127.0.0.1:4180
```

## Build & preview

```bash
npm run build      # vite build + per-route SEO (scripts/generate-seo.mjs)
npm run preview    # serves dist/ on http://127.0.0.1:4181
```

`npm run build:spa` runs `vite build` **without** the SEO step, useful when you
only want to check the bundle.

## Routes

`/` · `/about` · `/skills` · `/experience` · `/case-studies` · `/projects` ·
`/education` — plus the contact form on the home page (`/#contact`).

## SEO

`src/data/seo.js` is the single source of truth (title, description, canonical,
social image per route). It feeds two consumers:

1. **The app** — `usePageMeta` (via `src/components/PageMeta.jsx`) keeps `<head>`
   in sync during client-side navigation.
2. **The build** — `scripts/generate-seo.mjs` writes one static HTML file per
   route with its own metadata, plus `sitemap.xml` and `robots.txt`, so crawlers
   and link unfurlers (LinkedIn, WhatsApp, Slack, X) see the right preview
   without running JavaScript.

`vercel.json` rewrites each pretty URL to its generated static file and falls
back to `/index.html`, so deep links never 404.

> **Before/after deploy:** update `SITE_URL` in `src/data/seo.js` (and the
> canonical/OG URLs in `index.html`) to the real production domain. It is the
> only place the domain is hard-coded.

## Contact form

The form posts to [Web3Forms](https://web3forms.com) and delivers to
`hugoo.ramirez493@gmail.com`. The access key lives in `src/components/Contact.jsx`
and is public by design; override it with `VITE_WEB3FORMS_KEY` (see
`.env.example`) if you ever rotate it.

> After deploying to a new domain, add that domain to the Web3Forms key's
> allowlist (or confirm it accepts the new origin) and send a real test message.

## CV

`public/cv.html` is the printable source; `public/resume.pdf` is the exported
two-page PDF. Keep them in sync when the CV changes.
