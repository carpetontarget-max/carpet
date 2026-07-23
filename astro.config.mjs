import { defineConfig } from 'astro/config';
// Pinned to 3.2.1 in package.json: 3.4+ requires the `astro:routes:resolved`
// integration hook, which doesn't exist in Astro 4 and crashes the build.
// Don't `npm update` this package without upgrading Astro to 5 first.
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served at the root of the custom domain (public/CNAME + GitHub Pages
  // "Custom domain" setting point carpetontarget-max.github.io at this).
  site: 'https://www.ontargetcarpetcleaning.co.uk',
  integrations: [sitemap()],
  // Old combined slug split into separate Upholstery and Rug pages — keep the
  // old URL working for anyone who has it bookmarked or linked.
  redirects: {
    '/services/upholstery-rug-cleaning': '/services/upholstery-cleaning',
  },
});
