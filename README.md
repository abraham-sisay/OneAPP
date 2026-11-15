# OneAPP — Kemekol (ከመኮል) Web App

A bilingual (English · አማርኛ), fully static marketing and discovery site for **Kemekol** — an Ethiopian software engineering company, institutional content digitization agency, and publisher of top-rated Ethiopian Orthodox Tewahedo apps on Google Play.

No build step. No dependencies. No server. Open `index.html` and it runs.

---

## What it does

The site has two jobs:

1. **Discovery** — a crawlable, bilingual surface that funnels search traffic to Kemekol's Google Play applications, used by over 1.5 million believers.
2. **Corporate showcase** — a B2B presentation of Kemekol's software engineering and institutional digitization services.

## Features

- **Bilingual throughout** — a persistent `EN | አማርኛ` switcher; every string is translated, the choice is remembered between visits.
- **Dark and light themes** — token-level theming on a "Sacred Parchment & Silicon" palette (obsidian, emerald, amber, sky, violet), with the user's choice persisted.
- **Hash-routed single page** — eleven views (`#home`, `#apps`, `#services`, `#contact`, and the app detail pages) with no page reloads and no router library.
- **Branded splash screen** — the Kemekol emblem with a minimum two-second hold, theme-aware, and self-dismissing even if loading stalls.
- **App drawer** — per-app detail panes with a Google Play call to action and a locally generated QR code on desktop.
- **Sticky mobile download bar** — always-reachable install prompt on small screens.
- **SEO ready** — JSON-LD structured data, `sitemap.xml`, `robots.txt`, a web app manifest, and theme-aware favicons.
- **Accessible** — skip link, live regions on the loader, semantic landmarks, visible focus, and full `prefers-reduced-motion` support.
- **Responsive** — designed from roughly 360 px upward, with safe-area insets honoured on notched devices.

## Tech

Plain HTML, CSS and vanilla JavaScript. No framework, no bundler, no package manager, no transpiler.

JavaScript is organised as small IIFE modules published on `window` and loaded in dependency order:

| File | Responsibility |
| --- | --- |
| `assets/js/data.js` | App catalogue, services, and site content (`KEMEKOL_DATA`) |
| `assets/js/icons.js` | Inline SVG icon set and app artwork resolution (`KEMEKOL_ICONS`) |
| `assets/js/i18n.js` | English/Amharic string table and the `t()` resolver (`I18N`) |
| `assets/js/search.js` | Trilingual search index — English, Fidel and Franco-Amharic |
| `assets/js/qr.js` | Dependency-free QR code generation for Play Store links |
| `assets/js/app.js` | Router, view renderers, drawer, theme and language wiring |

Styling lives in a single file, `assets/css/styles.css`, built on CSS custom properties so both themes are defined at the token level.

## Project layout

```
.
├── index.html                 # The entire document shell
├── manifest.webmanifest       # PWA manifest
├── robots.txt                 # Crawler directives
├── sitemap.xml                # Hash-route sitemap
└── assets
    ├── css/styles.css         # Design system and all component styles
    ├── img/                   # Logos, emblems, screenshots, app icons
    └── js/                    # Application modules
```

## Running it

Double-click `index.html`, or serve the folder over HTTP:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

A static host — GitHub Pages, Netlify, Cloudflare Pages, any bucket — serves it as-is with no configuration.

## Deploying to GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Set the source to the `main` branch, root folder (`/`).
3. Save. The site publishes at `https://abraham-sisay.github.io/OneAPP/`.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile. The site degrades gracefully: without JavaScript the document shell and its structured data still render.

## Contact

**Kemekol** — Addis Ababa, Ethiopia
contact.kemekol@gmail.com

## Licence

Copyright © Kemekol. All rights reserved.

The source code is published for reference. Kemekol's names, logos, emblems, application artwork and screenshots are trademarks and copyrighted works of Kemekol and are not covered by any open-source grant.
