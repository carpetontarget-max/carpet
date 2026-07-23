import { defineConfig } from 'astro/config';
// Pinned to 3.2.1 in package.json: 3.4+ requires the `astro:routes:resolved`
// integration hook, which doesn't exist in Astro 4 and crashes the build.
// Don't `npm update` this package without upgrading Astro to 5 first.
import sitemap from '@astrojs/sitemap';

// When building for the GitHub Pages preview the deploy workflow sets
// GITHUB_PAGES=true, which switches the site to the project sub-path
// (carpetontarget-max.github.io/carpet/). Normal builds target the real
// domain at the root, so production is unaffected.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://carpetontarget-max.github.io' : 'https://www.ontargetcarpetcleaning.co.uk',
  base: isGitHubPages ? '/carpet' : undefined,
  integrations: [sitemap()],
  // Old combined slug split into separate Upholstery and Rug pages — keep the
  // old URL working for anyone who has it bookmarked or linked.
  redirects: {
    '/services/upholstery-rug-cleaning': '/services/upholstery-cleaning',
  },
});
