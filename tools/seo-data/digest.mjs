#!/usr/bin/env node
// Turns the latest snapshot (from collect.mjs) into a Markdown digest: what
// changed vs the previous 28 days, and a ranked list of SEO actions — each
// with the numbers that justify it. Rule-based and transparent on purpose.
//
//   node tools/seo-data/digest.mjs                 # reads <outputDir>/latest.json
//   node tools/seo-data/digest.mjs snapshot.json   # a specific snapshot
//   ONTARGET_SEO_OUT=/tmp/x node …                 # write the digest elsewhere
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..');
const cfg = JSON.parse(readFileSync(join(here, 'config.json'), 'utf8'));
const expand = (p) => p.replace(/^~(?=$|\/)/, homedir());
const outDir = expand(process.env.ONTARGET_SEO_OUT || cfg.outputDir);
const T = cfg.thresholds;

const snapFile = process.argv[2] ? resolve(process.argv[2]) : join(outDir, 'latest.json');
const snap = JSON.parse(readFileSync(snapFile, 'utf8'));
const d = snap.data;

// ── helpers ────────────────────────────────────────────────────────────────
const sum = (rows = [], k) => rows.reduce((n, r) => n + (r[k] || 0), 0);
const change = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : a ? 'new' : '–');
const path = (url = '') => url.replace(/^https?:\/\/[^/]+/, '') || '/';
const fmtPos = (p) => p.toFixed(1);
const fmtPct = (x) => `${(x * 100).toFixed(1)}%`;
// Rough organic CTR by position (industry curves) — used only to spot outliers.
const expectedCtr = (pos) => [0, 0.28, 0.15, 0.1, 0.07, 0.05, 0.04, 0.03, 0.025, 0.02, 0.018][Math.round(pos)] ?? 0.01;
const groupSum = (rows = [], key, metric) => {
  const m = new Map();
  for (const r of rows) m.set(r[key], (m.get(r[key]) || 0) + (r[metric] || 0));
  return [...m].sort((a, b) => b[1] - a[1]);
};
const weightedPos = (rows = []) => { const imp = sum(rows, 'impressions'); return imp ? rows.reduce((n, r) => n + r.position * r.impressions, 0) / imp : 0; };
const table = (head, rows) => rows.length
  ? [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n')
  : '_None._';

// Towns we already cover (from src/config.ts) + Leicester neighbourhoods
// (covered by the Leicester page), versus nearby places people may search.
const covered = (() => {
  const src = readFileSync(join(repo, 'src', 'config.ts'), 'utf8');
  const block = src.match(/export const areas = \[([\s\S]*?)\];/)?.[1] || '';
  return [...block.matchAll(/'([^']+)'/g)].map((m) => m[1].toLowerCase());
})();
const LEICESTER_AREAS = ['clarendon park', 'stoneygate', 'knighton', 'evington', 'highfields', 'westcotes', 'aylestone',
  'belgrave', 'humberstone', 'hamilton', 'beaumont leys', 'new parks', 'rushey mead', 'whitwick', 'thringstone', 'hugglescote'];
const NEARBY = ['hinckley', 'market harborough', 'melton mowbray', 'melton', 'lutterworth', 'shepshed', 'narborough',
  'countesthorpe', 'anstey', 'groby', 'kirby muxloe', 'ratby', 'rothley', 'sileby', 'quorn', 'mountsorrel',
  'barrow upon soar', 'kibworth', 'great glen', 'fleckney', 'broughton astley', 'earl shilton', 'barwell', 'burbage',
  'desford', 'markfield', 'ibstock', 'measham', 'castle donington', 'kegworth', 'whetstone', 'glen parva', 'cosby',
  'huncote', 'scraptoft', 'thurnby', 'bushby', 'queniborough', 'east goscote', 'rearsby', 'cropston', 'woodhouse eaves',
  'market bosworth', 'oakham', 'uppingham', 'hathern', 'nottingham', 'derby', 'northampton', 'coventry', 'nuneaton'];

async function sitemapPaths() {
  try {
    const idx = await (await fetch(new URL('sitemap-0.xml', cfg.siteUrl))).text();
    return [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => path(m[1]));
  } catch { return null; }
}

// ── analysis ───────────────────────────────────────────────────────────────
const actions = []; // { priority: 1 (highest)–3, text }
const out = [];
const date = snap.collectedAt.slice(0, 10);
out.push(`# SEO digest — ${date}`, '',
  `Data: Google Analytics (last 28 days vs the 28 before) and Search Console ` +
  `(${snap.windows.gsc.current.startDate} → ${snap.windows.gsc.current.endDate} vs the 28 days before). ` +
  'Search Console lags ~3 days. Small numbers swing a lot — read changes under ~20 clicks/leads as noise.', '');

// 1. Headline numbers
const sessions = sum(d['ga.channels'], 'sessions'), sessionsPrev = sum(d['ga.channelsPrev'], 'sessions');
const organic = (rows) => sum((rows || []).filter((r) => r.sessionDefaultChannelGroup === 'Organic Search'), 'sessions');
const leads = sum(d['ga.leads'], 'eventCount'), leadsPrev = sum(d['ga.leadsPrev'], 'eventCount');
const clicks = sum(d['gsc.queries'], 'clicks'), clicksPrev = sum(d['gsc.queriesPrev'], 'clicks');
const impr = sum(d['gsc.pages'], 'impressions'), imprPrev = sum(d['gsc.pagesPrev'], 'impressions');
out.push('## Headline numbers', '', table(['Metric', 'Last 28 days', 'Previous 28', 'Change'], [
  ['Website visits (sessions)', sessions, sessionsPrev, change(sessions, sessionsPrev)],
  ['…from Google search', organic(d['ga.channels']), organic(d['ga.channelsPrev']), change(organic(d['ga.channels']), organic(d['ga.channelsPrev']))],
  ['Enquiries (call/text/email/WhatsApp/form taps)', leads, leadsPrev, change(leads, leadsPrev)],
  ['Google search clicks', clicks, clicksPrev, change(clicks, clicksPrev)],
  ['Google search appearances', impr, imprPrev, change(impr, imprPrev)],
  ['Average position (weighted)', fmtPos(weightedPos(d['gsc.pages'])), fmtPos(weightedPos(d['gsc.pagesPrev'])), ''],
]), '');

// 2. Where enquiries come from
out.push('## Where enquiries come from', '');
out.push('**By landing page** (the page the visit started on):', '',
  table(['Page', 'Enquiries'], groupSum(d['ga.leads'], 'landingPage', 'eventCount').slice(0, 10).map(([k, v]) => [k, v])), '');
out.push('**By source / medium:**', '',
  table(['Source / medium', 'Enquiries'], groupSum(d['ga.leads'], 'sessionSourceMedium', 'eventCount').slice(0, 10).map(([k, v]) => [k, v])), '');
if (d['ga.leadsByMethod']) {
  out.push('**By method:**', '', table(['Method', 'Enquiries'],
    groupSum(d['ga.leadsByMethod'], 'customEvent:method', 'eventCount').map(([k, v]) => [k, v])), '');
}
if (leads === 0) actions.push({ priority: 1, text: 'No enquiries recorded in 28 days — check in GA4 → Reports → Realtime that tapping Call/WhatsApp fires `generate_lead` (tracking started 23 Oct 2026).' });

// 3. Near-wins: queries at positions 4–20 with real demand
const qp = d['gsc.queryPage'] || [];
const bestPage = (q) => qp.filter((r) => r.query === q).sort((a, b) => b.impressions - a.impressions)[0]?.page;
const pageLabel = (url) => (url ? path(url) : '—');
const striking = (d['gsc.queries'] || [])
  .filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= T.strikingDistanceMinImpressions)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 15);
out.push('## Near-wins (positions 4–20 with real demand)', '',
  'Moving these onto the top of page 1 is usually the fastest growth.', '',
  table(['Search', 'Appearances', 'Clicks', 'Position', 'Page Google shows'],
    striking.map((r) => [r.query, r.impressions, r.clicks, fmtPos(r.position), pageLabel(bestPage(r.query))])), '');
// One action per page, listing every near-win search it should win.
const strikingByPage = new Map();
for (const r of striking) {
  const p = pageLabel(bestPage(r.query));
  if (!strikingByPage.has(p)) strikingByPage.set(p, []);
  strikingByPage.get(p).push(r);
}
[...strikingByPage].slice(0, 3).forEach(([p, rows]) => actions.push({ priority: 1,
  text: `Strengthen **${p}** for ${rows.map((r) => `"${r.query}" (pos ${fmtPos(r.position)}, ${r.impressions} appearances)`).join(', ')}` +
    (p === '—' ? ' — no single page owns these yet; pick one.' : ': work the wording into its title/H1/intro, answer it in a section, and link to it from related pages using that wording.') }));

// 4. Weak listings: seen but rarely clicked
const lowCtr = (d['gsc.pages'] || [])
  .filter((r) => r.impressions >= T.lowCtrMinImpressions && r.position <= 10 && r.ctr < expectedCtr(r.position) * 0.5)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 8);
out.push('## Weak listings (shown often, clicked rarely)', '',
  table(['Page', 'Appearances', 'CTR', 'Position', 'Typical CTR'],
    lowCtr.map((r) => [path(r.page), r.impressions, fmtPct(r.ctr), fmtPos(r.position), fmtPct(expectedCtr(r.position))])), '');
lowCtr.slice(0, 2).forEach((r) => actions.push({ priority: 2,
  text: `Rewrite the title + meta description of ${path(r.page)} — ${r.impressions} appearances at position ${fmtPos(r.position)} but only ${fmtPct(r.ctr)} click (typical ≈ ${fmtPct(expectedCtr(r.position))}). Lead with price, rating or speed.` }));

// 5. Pages competing for the same search
const byQuery = new Map();
for (const r of qp) { if (!byQuery.has(r.query)) byQuery.set(r.query, []); byQuery.get(r.query).push(r); }
const cannibal = [...byQuery].map(([q, rows]) => {
  const total = sum(rows, 'impressions');
  const big = rows.filter((r) => r.impressions / total >= 0.2);
  return { q, total, pages: big.map((r) => `${path(r.page)} (${Math.round((r.impressions / total) * 100)}%, pos ${fmtPos(r.position)})`) };
}).filter((x) => x.total >= T.cannibalisationMinImpressions && x.pages.length >= 2).sort((a, b) => b.total - a.total).slice(0, 8);
out.push('## Pages competing for the same search', '',
  table(['Search', 'Appearances', 'Pages splitting it'], cannibal.map((x) => [x.q, x.total, x.pages.join('<br>')])), '');
cannibal.slice(0, 2).forEach((x) => actions.push({ priority: 2,
  text: `Pick one page for **"${x.q}"** (${x.total} appearances split across ${x.pages.length} pages) and refocus the others — see the "one page per search" rule in context.md.` }));

// 6. Rising / falling searches
const prevQ = new Map((d['gsc.queriesPrev'] || []).map((r) => [r.query, r]));
const deltas = (d['gsc.queries'] || []).map((r) => ({ q: r.query, now: r.impressions, before: prevQ.get(r.query)?.impressions || 0 }))
  .map((x) => ({ ...x, diff: x.now - x.before }));
out.push('## Searches on the move', '',
  '**Rising:**', '', table(['Search', 'Appearances now', 'Before'], deltas.sort((a, b) => b.diff - a.diff).filter((x) => x.diff > 0).slice(0, 8).map((x) => [x.q, x.now, x.before])), '',
  '**Falling:**', '', table(['Search', 'Appearances now', 'Before'], deltas.sort((a, b) => a.diff - b.diff).slice(0, 8).filter((x) => x.diff < 0).map((x) => [x.q, x.now, x.before])), '');

// 7. Demand from places without a page
const placeHits = new Map();
for (const r of d['gsc.queries'] || []) {
  const q = ` ${r.query.toLowerCase()} `;
  for (const p of NEARBY) {
    if (q.includes(` ${p} `) && !covered.includes(p) && !LEICESTER_AREAS.includes(p)) {
      const cur = placeHits.get(p) || { impressions: 0, examples: [] };
      cur.impressions += r.impressions; if (cur.examples.length < 3) cur.examples.push(r.query);
      placeHits.set(p, cur);
    }
  }
}
const places = [...placeHits].sort((a, b) => b[1].impressions - a[1].impressions);
out.push('## Searches for places without a town page', '',
  table(['Place', 'Appearances', 'Example searches'], places.map(([p, v]) => [p, v.impressions, v.examples.join('; ')])), '');
places.filter(([, v]) => v.impressions >= 30).slice(0, 2).forEach(([p, v]) => actions.push({ priority: 2,
  text: `**${p}**: ${v.impressions} appearances with no town page. If you work there, add it (config.ts \`areas\` + areaPages.ts, real local detail only); if not, ignore.` }));

// 8. Pages Google isn't showing at all (possible indexing problem)
const sm = await sitemapPaths();
if (sm) {
  const seen = new Set((d['gsc.pages'] || []).map((r) => path(r.page)));
  const missing = sm.filter((p) => !seen.has(p));
  out.push('## Pages with no Google appearances in 28 days', '',
    missing.length ? missing.map((p) => `- ${p}`).join('\n') : '_None — every sitemap page appeared at least once._', '');
  if (missing.length) actions.push({ priority: missing.some((p) => p.startsWith('/services/')) ? 1 : 3,
    text: `${missing.length} page(s) had zero appearances (${missing.slice(0, 4).join(', ')}${missing.length > 4 ? ', …' : ''}). Check them in Search Console → URL Inspection; request indexing if "not indexed".` });
}

// 9. Visits that don't turn into enquiries
const leadPages = new Set((d['ga.leads'] || []).map((r) => r.landingPage));
const leaky = (d['ga.landingPages'] || []).filter((r) => r.sessions >= T.landingPageMinSessions && !leadPages.has(r.landingPage)).slice(0, 8);
out.push('## Pages with visits but no enquiries', '',
  table(['Landing page', 'Visits', 'Engaged', 'Avg time'], leaky.map((r) => [r.landingPage, r.sessions, r.engagedSessions, `${Math.round(r.averageSessionDuration)}s`])), '');
if (leaky[0]) actions.push({ priority: 3,
  text: `${leaky[0].landingPage} had ${leaky[0].sessions} visits and no enquiries — check its call/WhatsApp buttons are prominent on mobile and the offer is clear.` });

// 10. Traffic quality
const direct = (d['ga.channels'] || []).find((r) => r.sessionDefaultChannelGroup === 'Direct');
const junkCities = (d['ga.cities'] || []).filter((r) => r.country !== 'United Kingdom' && r.sessions >= 5 && r.engagedSessions / r.sessions < 0.2);
out.push('## Traffic quality', '',
  direct ? `Direct visits: ${direct.sessions}, engaged ${fmtPct(direct.engagedSessions / Math.max(direct.sessions, 1))} — low engagement here is mostly bots.` : '',
  junkCities.length ? `Likely bot locations (ignore in decisions): ${junkCities.map((r) => `${r.city}, ${r.country} (${r.sessions})`).join('; ')}.` : 'No obvious bot locations.', '');

// 11. Setup gaps
const hints = {
  'ga.leadsByMethod': 'Register the event-scoped custom dimension **method** in GA4 (Admin → Custom definitions) to see enquiries by call/WhatsApp/form.',
};
if (Object.keys(snap.errors).length) {
  out.push('## Setup gaps', '', ...Object.entries(snap.errors).map(([k, v]) => `- \`${k}\`: ${hints[k] || v}`), '');
  for (const k of Object.keys(snap.errors)) if (hints[k]) actions.push({ priority: 3, text: hints[k] });
}

// Ranked actions go first in the file.
const ranked = actions.sort((a, b) => a.priority - b.priority).slice(0, 8);
out.splice(4, 0, '## Suggested actions this week', '',
  ranked.length ? ranked.map((a, i) => `${i + 1}. ${a.text}`).join('\n') : '_Nothing urgent — keep collecting reviews and let recent changes settle._',
  '', 'Change one or two things per week at most, and note what changed (context.md) so next month’s numbers can be read against it.', '');

const md = out.filter((l) => l !== undefined).join('\n');
mkdirSync(outDir, { recursive: true });
const file = join(outDir, `digest-${date}.md`);
writeFileSync(file, md);
writeFileSync(join(outDir, 'latest-digest.md'), md);
console.log(md);
console.error(`\nSaved ${file}`);
