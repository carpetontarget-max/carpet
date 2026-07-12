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
1. **`social.instagram`** — your Instagram handle (without the @).
2. **`social.facebook` / `social.messenger`** — your Facebook Page username
   (Messenger uses `m.me/<page>`).
3. **`web3formsAccessKey`** — sign up free at https://web3forms.com, paste your
   access key so the contact form emails you at `carpetontarget@gmail.com`.

Phone number is already set (`07444 784316`) — WhatsApp/SMS/call links work now.

## 🖼️ Add your photos
Drop images into `public/images/` and reference them as `/images/name.jpg`.
Grab the originals from your Wix dashboard → Media Manager (higher quality than the live site).

## 🚀 Deploy (free)
1. Push this folder to a GitHub repo.
2. Connect the repo to **Netlify** or **Cloudflare Pages** (both free, auto-SSL).
   Build command: `npm run build` · Publish directory: `dist`.
3. Add your custom domain in the host's dashboard.

## 🌐 Point the domain (Namecheap → new host)
1. In Netlify/Cloudflare, add `ontargetcarpetcleaning.co.uk` → it shows DNS records/nameservers.
2. In Namecheap → Domain → Advanced DNS (or Nameservers), replace the Wix records with those.
3. Wait for DNS to propagate (minutes–hours), confirm the site loads on the real domain.
4. **Only then** cancel the Wix subscription.

## Add a blog later
Astro supports Markdown blogs via content collections. Say the word and it can be wired up.
