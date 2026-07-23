# On Target Carpet Cleaning — website

A fast, self-hosted Astro site replacing the old Wix build. Fully customisable, free to host.

## Run locally
```bash
npm install
npm run dev      # opens http://localhost:4321
```
Build for production:
```bash
npm run build    # output in ./dist
npm run preview  # preview the production build
```

## ✏️ Customise everything from one file
Open **`src/config.ts`**. It holds your contact details, opening hours, social links,
services, testimonials and FAQ. Change it there and it updates across every page.

### 🔗 Things you MUST fill in before going live
In `src/config.ts`:
1. **`social.instagram`** — your Instagram handle (without the @). Already set.
2. **`social.facebook` / `social.messenger`** — your Facebook Page username
   (Messenger uses `m.me/<page>`). Until this is a real handle, the Messenger
   button is hidden site-wide rather than pointing at a dead link.

Phone number is already set (`07444 784316`) — WhatsApp/SMS/call links work now.

## 📊 Google Analytics (GA4)
Analytics is wired in and **off until you add your ID** — nothing is loaded for
visitors until then. To switch it on, set your GA4 **Measurement ID** (looks like
`G-XXXXXXXXXX`) either way:

- **Env var (recommended):** add `PUBLIC_GA_ID=G-XXXXXXXXXX` to a `.env` file
  (copy `.env.example`). Hosts like Netlify/Cloudflare let you set this in their
  build settings, so it's never committed.
- **Config:** set `site.googleAnalyticsId` in `src/config.ts`.

If both are set, the env var wins. Find your ID in GA4 → **Admin → Data Streams →
your web stream → Measurement ID**. It only activates in a build where the ID is
present, so local `npm run dev` stays analytics-free unless you add it to `.env`.

## 🖼️ Add your photos
Drop images into `public/images/` and reference them as `/images/name.jpg`.
Grab the originals from your Wix dashboard → Media Manager (higher quality than the live site).

## 🚀 Deploy — GitHub Pages at the real domain (free)
This repo is set up to deploy to **www.ontargetcarpetcleaning.co.uk** via
`.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages on
every push to `main`. `public/CNAME` and `astro.config.mjs` are already pointed
at that domain — you only need to do the one-time setup below.

**1. Push this repo to GitHub** (already done — `origin` is
`github.com/carpetontarget-max/carpet`). From your own machine (not this
sandbox — see the Gotchas note in `context.md`):
```bash
git push origin main
```

**2. Turn on Pages** — repo → **Settings → Pages → Build and deployment →
Source: "GitHub Actions"**. The next push (or **Actions → Deploy to GitHub
Pages → Run workflow**) builds and deploys.

**3. (Optional) add secrets for live reviews / analytics** — repo →
**Settings → Secrets and variables → Actions → New repository secret**:
   - `PUBLIC_GA_ID` — your GA4 Measurement ID (see the section above)
   - `GOOGLE_PLACES_API_KEY` — for live Google reviews (see `.env.example`)

   Both optional; the workflow already passes them through if set.

**4. Point the domain at GitHub Pages** — in Namecheap, **Domain List →
ontargetcarpetcleaning.co.uk → Manage → Advanced DNS**, replace the Wix
records with:

| Type  | Host  | Value                          |
|-------|-------|---------------------------------|
| CNAME | www   | `carpetontarget-max.github.io`  |
| A     | @     | `185.199.108.153`               |
| A     | @     | `185.199.109.153`               |
| A     | @     | `185.199.110.153`               |
| A     | @     | `185.199.111.153`               |

(The four `A` records make the bare `ontargetcarpetcleaning.co.uk`, without
`www`, resolve too — GitHub redirects it to the `www` canonical version below.)

**5. Set the custom domain in GitHub** — repo → **Settings → Pages → Custom
domain** → enter `www.ontargetcarpetcleaning.co.uk` → Save. GitHub checks DNS
(can take minutes–hours to propagate); once it shows a green check, tick
**Enforce HTTPS**.

**6. Confirm it's live**, then — **only then** — cancel the Wix subscription.

> Prefer Netlify or Cloudflare Pages instead? Both work too (free, auto-SSL,
> connect the repo, build command `npm run build`, publish directory `dist`) —
> just don't run the GitHub Pages workflow at the same time as another host
> pointed at the same domain.

## 🐳 Run with Docker
The repo is containerised: a multi-stage build compiles the Astro site with Node,
then serves the static output with nginx (clean URLs, gzip, caching, security
headers). The final image contains only the built site + nginx — no Node, no
source, no secrets.

**Quickest way (Docker Compose):**
```bash
docker compose up --build      # builds + serves on http://localhost:8080
docker compose down            # stop
```

**Plain Docker:**
```bash
docker build -t ontarget-website .
docker run --rm -p 8080:80 ontarget-website
# → http://localhost:8080
```

**Passing build-time config** (all optional — the site builds without them):
```bash
docker build -t ontarget-website \
  --build-arg PUBLIC_GA_ID=G-XXXXXXXXXX \
  --build-arg GOOGLE_PLACES_API_KEY=your-key \
  .
```
With Compose, put those in a local `.env` (see `.env.example`) and they're passed
through automatically. `PUBLIC_GA_ID` is public (it's in the page); the Places key
is only used at build time and never ends up in the final image.

> This container serves the site over plain HTTP on port 80. Put it behind a
> reverse proxy / load balancer (or a host like Netlify/Cloudflare Pages) to add
> HTTPS. It does **not** replace the GitHub Pages workflow — it's an alternative
> way to self-host the exact same build anywhere that runs containers.

## Add a blog later
Astro supports Markdown blogs via content collections. Say the word and it can be wired up.
