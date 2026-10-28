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
  // Inline the (small) stylesheet into every page: removes the one
  // render-blocking request, which mattered for mobile LCP.
  build: { inlineStylesheets: 'always' },
  // /review is just a redirect to the Google review form, so keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/review') })],
  // Old combined slug split into separate Upholstery and Rug pages — keep the
  // old URL working for anyone who has it bookmarked or linked.
  redirects: {
    '/services/upholstery-rug-cleaning': '/services/upholstery-cleaning/',
    // Old Wix URLs that still get Google impressions or visits.
    // Leicester-wide pages forward to the homepage: it's the page we want
    // ranking for "carpet cleaning leicester", so it should inherit their pull.
    '/leicester': '/',
    '/carpetcleaning': '/services/carpet-deep-cleaning/',
    '/blog': '/faq/',
    '/service-page/one-bedroom': '/services/carpet-deep-cleaning/',
    '/service-page/three-rooms': '/services/carpet-deep-cleaning/',
    '/service-page/full-three-bed-house': '/services/carpet-deep-cleaning/',
    '/service-page/full-four-bed-house': '/services/carpet-deep-cleaning/',
    '/booking-calendar/full-four-bed-house': '/services/carpet-deep-cleaning/',
    '/service-page/two-seater-sofa': '/services/sofa-cleaning/',
    '/service-page/three-seater-sofa': '/services/sofa-cleaning/',
    '/service-page/corner-sofa': '/services/sofa-cleaning/',
    '/service-page/pet-stain-removal': '/services/pet-stain-odour-removal/',
    '/service-page/stairs-hall-landing': '/services/stairs-landing-cleaning/',
    '/post/affordable-leicester-carpet-cleaners-keeping-your-carpets-spotless-without-breaking-the-bank': '/',
    '/post/professional-carpet-cleaning-services-in-leicester-keeping-your-floors-spotless-and-fresh': '/',
    '/post/benefits-of-professional-carpet-cleaning': '/services/carpet-deep-cleaning/',
    '/post/top-tips-for-removing-stubborn-carpet-stains-efficiently': '/services/stain-spot-removal/',
    '/post/expert-carpet-cleaning-advice-tips-to-keep-your-carpets-spotless': '/faq/',
    '/post/eco-friendly-carpet-cleaning-solutions-you-can-trust': '/about/',
  },
});
