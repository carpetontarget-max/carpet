# Project Context — On Target Carpet Cleaning website

Background and orientation for anyone (human or AI) picking up this project.

## What this is

Marketing website for **On Target Carpet Cleaning**, a carpet & upholstery
cleaning business serving **Leicester and surrounding areas** (Leicestershire, UK).
It replaces an older Wix build with a fast, self-hosted static site.

- **Live domain (target):** https://www.ontargetcarpetcleaning.co.uk — deployed via
  **GitHub Pages** (`.github/workflows/deploy.yml` builds + deploys on every push
  to `main`; needs Settings → Pages → Source: "GitHub Actions", and Settings →
  Pages → Custom domain: `www.ontargetcarpetcleaning.co.uk`, plus DNS at the
  registrar pointed at GitHub Pages — see README's Deploy section). `public/CNAME`
  and `astro.config.mjs` are pinned to the real domain at the root; the site no
  longer builds a separate `/carpet` sub-path preview.
- **GitHub repo:** https://github.com/carpetontarget-max/carpet
- **Primary goal:** generate enquiries. Every page funnels toward one primary
  action — **contact via WhatsApp** — with call/text/email as secondary options.

## Tech stack

- **[Astro](https://astro.build) 4.16** — static site generator, near-zero client
  JS. Pages are `.astro` files; only a few small inline `<script>` blocks for the
  FAQ / residential-services / per-service-page accordions, the Services
  dropdown menu, the before/after sliders, scroll animations, and the hero
  quote-form → WhatsApp composer.
- **Plain CSS** — one global stylesheet, no framework/Tailwind. Design tokens
  (colours, spacing, shadows, radii) are CSS custom properties at the top of
  `src/styles/global.css`. The look is an "aquatic" teal/cyan brand.
- **Self-hosted web font:** `@fontsource-variable/plus-jakarta-sans` (imported
  in `Base.astro`, bundled locally — no external font request). This is a real
  npm dependency, so a fresh checkout **must** `npm install` before it builds.
- **`@astrojs/sitemap`** for the XML sitemap.
- No database, no backend. Contact happens through the customer's own
  WhatsApp/phone/SMS/email apps via deep links.

## Repo layout

```
src/
  config.ts            ← SINGLE SOURCE OF TRUTH. Business details + service list.
  servicePages.ts      ← long-form (1,500–2,500-word) SEO content per service slug
  layouts/Base.astro   ← <head>, SEO meta, OG, JSON-LD, font import, titleFull override
  pages/
    index.astro        ← homepage (hero + quote form, trust cards, 6 featured services,
                          education band, before/after, stats, WHY CHOOSE US, pricing,
                          reviews, areas, CTA)
    services.astro     ← services listing grid (all 12 services)
    services/[slug].astro ← one page per service; renders long-form content from
                          servicePages.ts when present, else the short `intro` layout
    residential.astro  ← residential landing page (home-services accordion "dropdown")
    commercial.astro   ← commercial landing page (premises grid)
    about.astro, contact.astro, faq.astro
  components/          ← Header (with Services dropdown mega-menu), Footer, FloatingContact,
                          Icon, Logo, GoogleReviews
  images/              ← source images (optimised at build time — see gotchas)
  styles/global.css    ← all styling + design tokens
public/
  robots.txt, favicon.svg
  images/              ← only *-source originals + before-after source (unused by build)
astro.config.mjs       ← site URL + sitemap integration + slug redirect (see gotchas)
```

## The one file that matters most: `src/config.ts`

Almost everything editable lives here so non-developers can change copy without
touching markup: business name, phone, email, **opening hours**, social handles,
Google-reviews settings, pricing tiers, service areas, testimonials, and more.
Change it here and it updates across every page. Key exports:

- **`services`** — the **12** service landing pages. Each has slug/title/`icon`/
  `group`/copy/alt/meta/related. `group` is `'home'` or `'business'` and drives
  the Services dropdown menu and the `homeServices`/`businessServices` derived
  lists. A service normally has an `img` import; ones **without** a photo yet
  carry a `tint` (CSS gradient) and render a colour placeholder ("… photo to
  follow") — swap in an `<Image>` when a real photo exists. `index.astro` shows a
  curated 6 via `homeFeatured`; `/services` shows all; `/residential` lists the
  `home` group; `/commercial` is separate.
- **`homeServices` / `businessServices`** — `services` filtered by `group`
  (used by the dropdown, `/residential` and `/commercial`).
- **`faqCategories`** — the /faq page's FAQs grouped into categories. `faqs` is
  auto-flattened from it for FAQPage structured data — edit the categories.
- **`trustBadges`** (hero trust cards), **`educate`** (homepage "professional
  difference" band), **`whyChooseUs`** (homepage "Why choose us" cards),
  **`commercialPremises`** (commercial page grid).

Long-form service content lives **separately** in `src/servicePages.ts`, keyed by
the service slug — see "Long-form service pages" below.

`links` (also exported from config) pre-builds all the `tel:`/`sms:`/`mailto:`/
`wa.me`/`m.me` deep links from those details.

## Long-form service pages: `src/servicePages.ts`

Each `/services/<slug>` page can carry a rich, 1,500–2,500-word SEO article. That
content lives in `servicePages.ts` keyed by the same slug as in `config.ts`. When
a slug has an entry, `[slug].astro` renders the long-form layout
(hero → article sections → per-page FAQ accordion → CTA) and emits **FAQPage**
structured data; slugs without an entry fall back to the short `intro` layout.

Entry shape: `h1`, `metaTitle` (used verbatim via Base's `titleFull`),
`metaDescription`, `lead`, `sections[]` (`{ h2, body: string[], list?: string[] }`),
and `faqs[]` (`{ q, a }`). Keep each page's wording genuinely distinct — near-
duplicate pages hurt SEO. **Write body strings with curly apostrophes (’) inside
single-quoted TS strings; a straight `'` will break the file.**

Status (updated 2026-07-18): **all 12 service pages are complete** — each is a
full ~1,850–2,450-word article with 7–8 FAQs and FAQPage structured data, and each
is written to be genuinely distinct (no near-duplicate sections across pages).

## How to run

Node isn't globally installed in every environment; this project was set up using
**nvm** (Node 24 LTS). To work on it:

```bash
npm install
npm run dev        # dev server at http://localhost:4321 (hot reload)
npm run build      # static output to ./dist
npm run preview    # preview the production build
```

## Deployment

Static `dist/` output, deployed to **GitHub Pages** via
`.github/workflows/deploy.yml` on every push to `main`, served at the real
domain (`public/CNAME` + GitHub's Custom domain setting — see README's Deploy
section for the one-time setup and required Namecheap DNS records). Domain
`ontargetcarpetcleaning.co.uk` is still pointed at the old Wix host until DNS is
switched — cancel Wix only after the new site is confirmed live on the domain.
Netlify/Cloudflare Pages also work as alternatives (same build command
`npm run build`, publish directory `dist`) but shouldn't run alongside the
GitHub Pages workflow pointed at the same domain. A Dockerfile + nginx.conf are
also available for self-hosting the same build on a VPS.

## SEO features already in place

- LocalBusiness JSON-LD (hours, service area, rating) sitewide; FAQPage JSON-LD
  on `/faq` and on every long-form service page that has FAQs.
- Unique `<title>` + meta description, canonical URL, and Open Graph/Twitter tags
  per page (via `Base.astro`). Long-form pages set a keyword-forward `<title>`
  (e.g. "Carpet Cleaning Leicester | …") via the `titleFull` override.
- **12** individual service landing pages at `/services/<slug>`, retargeted to
  "[Service] … Leicester" keywords, with unique copy, cross-links and long-form
  articles (see servicePages.ts). Two audience landing pages (`/residential`,
  `/commercial`) plus clickable "Areas we cover" links — all aimed at local search.
- `robots.txt` + auto-generated `sitemap-index.xml`.

## Business facts (as currently configured)

- **Phone:** 07444 784316 · **Email:** carpetontarget@gmail.com
- **Hours:** Mon–Sun 5:00am–1:00am (matches the Google Business Profile; note this
  is an unusually wide window — confirm before relying on it).
- **Google rating:** 5.0 from 78 reviews (real listing, Place ID in config).
- **Pricing shown:** Single Room from £70 · Whole Home from £120 (3 rooms+) ·
  Upholstery from £30/seat.

## Gotchas / things to know

- **Don't `npm update` `@astrojs/sitemap`.** It's pinned to `3.2.1` on purpose;
  3.4+ needs an Astro-5 integration hook and crashes the Astro-4 build. See the
  comment in `astro.config.mjs`. (Upgrade Astro to 5 first if you ever bump it.)
- **Images live in `src/images/`, not `public/images/`.** Astro's build pipeline
  optimises anything under `src/` (WebP, resized) — this cut total image weight
  ~90%. Reference them via `import` in config/pages and the `<Image>` component,
  **not** by string path. `public/images/` only holds a few large `*-source`
  originals that nothing references (safe to delete if tidying up).
- **Some services have no photo yet** (rug, mattress, curtain, sofa, office).
  They carry a `tint` gradient instead of an `img` and render a colour placeholder
  panel with a "photo to follow" caption. The commercial/residential sub-heroes do
  the same.
  To add a real photo: import it in `config.ts` (or the page), set `img`, and the
  templates automatically switch from the placeholder to `<Image>`.
- **One redirect exists** in `astro.config.mjs`: the old combined
  `/services/upholstery-rug-cleaning` → `/services/upholstery-cleaning` (the page
  was split into separate Upholstery and Rug pages). Keep it while any old link
  might still be live.
- **Google reviews are fetched at build time** if `GOOGLE_PLACES_API_KEY` is set
  in a `.env` (see `.env.example`); otherwise it falls back to the reviews pasted
  into `config.ts`. The key never reaches the browser.
- **Facebook Page link is still a placeholder** (`YOUR_FACEBOOK_PAGE`). The site
  hides the Facebook/Messenger-page profile link until a real handle is set —
  except Messenger, whose deep link uses a numeric Page ID (`104518522484326`)
  that is already configured and working.
- **Pushing to GitHub from a sandboxed/CI environment fails** ("could not read
  Username… Device not configured") because it can't reach the Mac Keychain.
  Push from your own machine (VS Code Source Control button, or `git push` in
  Terminal) — never paste a personal access token into a chat/prompt; it gets
  exposed and must then be revoked.

## History

Built from an initial Astro commit, then iterated: live Google reviews, real
before/after sliders, a stairs service, brand icons/animations, and (commit
`d165a9f`) a full contact-page rebuild, CTA consolidation, real pricing,
per-service SEO landing pages, structured data, sitemap, and image optimisation.

**Premium redesign pass (2026-07-16, not yet committed).** A large visual/UX
uplift aimed at a "£10k–20k" look, benchmarked against premium UK cleaning sites:
- Self-hosted **Plus Jakarta Sans**, refined type scale, layered shadows, spacing.
- Hero: the quote box became a real **Name/Phone/Postcode/Message** form that
  composes a WhatsApp message on submit.
- **Trust icon cards**, an **education/authority band**, premium before/after
  labels, and a **category-grouped FAQ** (modelled on carpetcleaning.co.uk/faqs).
- New **`/residential`** and **`/commercial`** audience pages; nav gained both
  tabs (desktop "Call us" block dropped to fit) and the footer gained an Explore
  column.
- Services split Upholstery & Rug into separate pages, added **Mattress** and
  **Curtain** (deliberately **no Scotchgard**). Photoless services use colour
  placeholders. Old upholstery-rug slug redirects.

**Services + SEO expansion (2026-07-17, not yet committed).** Benchmarked against
chemdry.com:
- Hero headline changed from "brand new" to **"The healthier, deeper carpet &
  upholstery clean in Leicester"** (avoids over-promising a "brand new" result).
- **Services dropdown mega-menu** (grouped Home/Business) in the nav; **"Why
  choose us"** section added to the homepage.
- Services **10 → 12**: added standalone **Sofa Cleaning** and **Office Carpet
  Cleaning** pages (kept separate from Upholstery/Commercial); titles retargeted
  to "[Service] … Leicester". A `group` field now drives the dropdown.
- **Long-form service pages** introduced (`src/servicePages.ts`): the
  **Carpet Cleaning Leicester** flagship is a full ~2,000 words with FAQs +
  FAQPage schema; the other 11 are written but ~1,050–1,200 words each and
  **still to be expanded** to the 1,500–2,500-word target.
- Confirmed: **curtains are cleaned on-site** in the customer's home, nothing
  taken away (reflected in the curtain page copy).

**Long-form pages finished (2026-07-18, not yet committed).** Expanded the
remaining 11 service pages from ~1,100 words to the full ~1,850–2,450-word
standard, in three batches, each with 2–3 extra distinct sections + more FAQs.
**All 12 service pages are now complete** with FAQPage structured data.

**Nav / dropdown cleanup (2026-07-18, not yet committed).** Top nav simplified to
**Home · Services ▾ · About · FAQ · Contact** — the Residential and Commercial
top-level tabs were removed (they were redundant with the dropdown). They're now
the two clickable dropdown group headings ("For your home" → `/residential`,
"For business" → `/commercial`), with a "View all services" footer. Fixed a bug
where the panel's `max-width` was narrower than its content, cutting the business
column off the white background; the panel is now anchored to `.nav` (position
relative) and sizes to its content so it always stays contained. Also added a
~0.22s hover-intent close delay (CSS `transition-delay` on visibility/opacity) +
a taller invisible hover-bridge, so the menu no longer vanishes while the cursor
crosses the gap from the "Services" button down into the panel.

All of the above is uncommitted on `main` — commit/push from your own machine.
