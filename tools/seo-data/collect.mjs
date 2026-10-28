#!/usr/bin/env node
// Daily SEO data collector for the On Target site.
//
// Pulls Google Analytics 4 and Search Console data with a READ-ONLY service
// account and writes one JSON snapshot per day to `outputDir` (config.json),
// which lives OUTSIDE the repo — the repo is public, the data is not.
// No npm dependencies: Node 18+ (fetch + crypto).
//
//   node tools/seo-data/collect.mjs            # uses tools/seo-data/config.json
//   ONTARGET_SA_KEY=/path/key.json node …      # override the key file
//
// Each section is fetched independently; a failure (e.g. a custom dimension
// not registered yet) is recorded under `errors` instead of aborting the run.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(readFileSync(join(here, 'config.json'), 'utf8'));
const expand = (p) => p.replace(/^~(?=$|\/)/, homedir());
const outDir = expand(process.env.ONTARGET_SEO_OUT || cfg.outputDir);
const keyFile = expand(process.env.ONTARGET_SA_KEY || cfg.serviceAccountKeyFile);

const SCOPES = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/webmasters.readonly',
];

// ── Auth: service-account JWT → OAuth access token ─────────────────────────
export async function accessToken(sa, scopes = SCOPES) {
  const tokenUri = sa.token_uri || 'https://oauth2.googleapis.com/token';
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email, scope: scopes.join(' '), aud: tokenUri, iat: now, exp: now + 3600,
  })}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(sa.private_key).toString('base64url');
  const res = await fetch(tokenUri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) throw new Error(`token request failed: ${json.error_description || json.error || res.status}`);
  return json.access_token;
}

// ── Dates ──────────────────────────────────────────────────────────────────
const iso = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - n); return d; };
// Search Console data lags ~2–3 days, so its 28-day window ends 3 days ago.
const gscCur = { startDate: iso(daysAgo(30)), endDate: iso(daysAgo(3)) };
const gscPrev = { startDate: iso(daysAgo(58)), endDate: iso(daysAgo(31)) };
const gaCur = { startDate: '28daysAgo', endDate: 'yesterday' };
const gaPrev = { startDate: '56daysAgo', endDate: '29daysAgo' };

// ── API helpers ────────────────────────────────────────────────────────────
function makeClients(token) {
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  async function ga(body) {
    const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${cfg.ga4PropertyId}:runReport`,
      { method: 'POST', headers, body: JSON.stringify(body) });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j.error?.message || `HTTP ${res.status}`);
    const dims = (j.dimensionHeaders || []).map((h) => h.name);
    const mets = (j.metricHeaders || []).map((h) => h.name);
    return (j.rows || []).map((r) => Object.fromEntries([
      ...dims.map((d, i) => [d, r.dimensionValues[i].value]),
      ...mets.map((m, i) => [m, Number(r.metricValues[i].value)]),
    ]));
  }

  async function gsc(range, dimensions, rowLimit = 1000) {
    const site = encodeURIComponent(cfg.searchConsoleSite);
    const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`,
      { method: 'POST', headers, body: JSON.stringify({ ...range, dimensions, rowLimit }) });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j.error?.message || `HTTP ${res.status}`);
    return (j.rows || []).map((r) => ({
      ...Object.fromEntries(dimensions.map((d, i) => [d, r.keys[i]])),
      clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
    }));
  }

  return { ga, gsc };
}

const leadFilter = { filter: { fieldName: 'eventName', stringFilter: { value: 'generate_lead' } } };

// What gets collected — see README.md for why each one matters.
function plan({ ga, gsc }) {
  return {
    'ga.channels': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }, { name: 'keyEvents' }] }),
    'ga.channelsPrev': () => ga({ dateRanges: [gaPrev], dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }, { name: 'keyEvents' }] }),
    'ga.landingPages': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'landingPage' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }, { name: 'averageSessionDuration' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 200 }),
    'ga.cities': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'city' }, { name: 'country' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 60 }),
    'ga.leads': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'landingPage' }, { name: 'sessionSourceMedium' }],
      metrics: [{ name: 'eventCount' }], dimensionFilter: leadFilter, limit: 200 }),
    'ga.leadsPrev': () => ga({ dateRanges: [gaPrev], dimensions: [{ name: 'sessionSourceMedium' }],
      metrics: [{ name: 'eventCount' }], dimensionFilter: leadFilter, limit: 200 }),
    // Needs the event-scoped custom dimension "method" registered in GA4.
    'ga.leadsByMethod': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'customEvent:method' }, { name: 'pagePath' }],
      metrics: [{ name: 'eventCount' }], dimensionFilter: leadFilter, limit: 200 }),
    'ga.daily': () => ga({ dateRanges: [gaCur], dimensions: [{ name: 'date' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }], orderBys: [{ dimension: { dimensionName: 'date' } }] }),
    'gsc.queries': () => gsc(gscCur, ['query']),
    'gsc.queriesPrev': () => gsc(gscPrev, ['query']),
    'gsc.pages': () => gsc(gscCur, ['page']),
    'gsc.pagesPrev': () => gsc(gscPrev, ['page']),
    'gsc.queryPage': () => gsc(gscCur, ['query', 'page'], 5000),
    'gsc.daily': () => gsc(gscCur, ['date']),
  };
}

async function main() {
  if (!existsSync(keyFile)) {
    console.error(`No service-account key at ${keyFile}.\nSee tools/seo-data/README.md → "One-time setup".`);
    process.exit(2);
  }
  const sa = JSON.parse(readFileSync(keyFile, 'utf8'));
  const token = await accessToken(sa);
  const clients = makeClients(token);

  const snapshot = {
    collectedAt: new Date().toISOString(),
    windows: { ga: { current: gaCur, previous: gaPrev }, gsc: { current: gscCur, previous: gscPrev } },
    data: {},
    errors: {},
  };
  for (const [name, run] of Object.entries(plan(clients))) {
    try { snapshot.data[name] = await run(); }
    catch (e) { snapshot.errors[name] = String(e.message || e); }
  }

  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, `snapshot-${iso(new Date())}.json`);
  writeFileSync(file, JSON.stringify(snapshot, null, 2));
  writeFileSync(join(outDir, 'latest.json'), JSON.stringify(snapshot, null, 2));
  const ok = Object.keys(snapshot.data).length, failed = Object.keys(snapshot.errors).length;
  console.log(`Saved ${file} — ${ok} sections collected, ${failed} failed.`);
  for (const [k, v] of Object.entries(snapshot.errors)) console.log(`  ! ${k}: ${v}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => { console.error(e.message || e); process.exit(1); });
}
