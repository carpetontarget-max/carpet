import type { APIRoute } from 'astro';
import { site, services, pricing, withBase } from '../config';
import { areaPages } from '../areaPages';

// /llms.txt — a plain-text map of the business for AI assistants (a community
// proposal: Google says it ignores it; other assistants may read it). Built
// from config.ts / areaPages.ts so it never drifts from the site itself.
// Wording rule (context.md): the method is "hot water extraction"; "steam
// cleaning" is only ever explained as its everyday name.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const abs = (path: string) => String(new URL(withBase(path), siteUrl));
  const from = (name: string) => pricing.find((p) => p.name === name)?.price;

  const lines = [
    `# ${site.googleBusinessName}`,
    '',
    `> Family-run carpet and upholstery cleaning business based in Leicester, UK, serving ${site.serviceArea}. ` +
      'Professional hot water extraction (often called steam cleaning), eco-friendly solutions, a fixed price agreed ' +
      `before work starts, and a satisfaction guarantee. Rated ${site.googleRating.toFixed(1)} from ${site.googleReviewCount} Google reviews.`,
    '',
    '## Key facts',
    `- Phone: ${site.phoneDisplay} (calls, texts and WhatsApp)`,
    `- Email: ${site.email}`,
    `- Opening hours: ${site.hours.map((h) => `${h.day} ${h.time}`).join('; ')}`,
    `- Prices from: single room £${from('Single Room')}; whole home (3+ rooms) £${from('Whole Home')}; upholstery £${from('Upholstery')} per seat. Exact price agreed before work begins.`,
    '- Typical drying time: 4–6 hours',
    '- Fully insured; DBS-checked technicians; eco-friendly solutions safe for children and pets once dry',
    `- Google reviews: ${site.googleReviewsUrl}`,
    `- Website: ${abs('/')}`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.title}](${abs(`/services/${s.slug}`)}): ${s.desc}`),
    '',
    '## Areas covered',
    ...areaPages.map((a) => `- [${a.name}](${abs(`/areas/${a.slug}`)}) (${a.postcode})`),
    '',
    '## More',
    `- [About us](${abs('/about')})`,
    `- [Frequently asked questions](${abs('/faq')})`,
    `- [Contact](${abs('/contact')})`,
    `- [Home cleaning](${abs('/residential')})`,
    `- [Commercial cleaning](${abs('/commercial')})`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
