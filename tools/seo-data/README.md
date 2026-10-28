# SEO data loop

Collects the site's Google Analytics 4 and Search Console numbers **every
day** and turns them into a digest of **what changed and what to do next**.
Nothing here changes the website by itself. Changes are made in a VS Code
session, one or two at a time, so their effect can be measured.

```
collect.mjs  →  ~/ontarget-seo-data/snapshot-YYYY-MM-DD.json  (+ latest.json)
digest.mjs   →  ~/ontarget-seo-data/digest-YYYY-MM-DD.md      (+ latest-digest.md)
```

The data is kept **outside the repo** because the repo is public. The
service-account key lives in `~/.config/ontarget/seo-reader.json` and must
never be committed or pasted into a chat.

## Why not tweak the site every day?

SEO changes take roughly 2–6 weeks to show in rankings. Changing things daily
makes it impossible to tell what worked, and Google treats constant churn as a
negative sign. The loop is:

- **Daily (automatic):** collect the data and write the digest.
- **Weekly:** read `latest-digest.md`, ask Claude to act on the top one or two
  suggestions, and log the change in `context.md`.
- **Monthly (third Friday):** a full review against the baseline in
  `context.md` → "Session summary".

## Parameter map: what is collected and what it's for

| Source | Dimensions × metrics | Window | Decision it informs |
|---|---|---|---|
| GA4 | channel × sessions, engaged sessions, key events | 28 days + previous 28 | Is Google search traffic growing? Is "Direct" mostly bots? |
| GA4 | landing page × sessions, engaged sessions, average time | 28 days | Which pages pull visitors in; pages with visits but no enquiries need conversion work |
| GA4 | city, country × sessions, engaged sessions | 28 days | Real local demand vs bot traffic (e.g. Singapore, Council Bluffs) |
| GA4 | `generate_lead` × landing page × source/medium | 28 days + previous 28 | **Enquiries**: which pages and channels produce jobs |
| GA4 | `generate_lead` × `method` × page | 28 days | Call vs WhatsApp vs quote form. Needs the custom dimension `method` |
| GA4 | date × sessions | 28 days | Day-by-day trend and sudden drops |
| Search Console | query × clicks, impressions, CTR, position | 28 days + previous 28 | Near-wins (positions 4–20), rising/falling searches, towns without a page |
| Search Console | page × clicks, impressions, CTR, position | 28 days + previous 28 | Weak listings (low click rate) and pages with zero appearances (indexing) |
| Search Console | query × page | 28 days | Which page Google shows for each search; pages competing for one search |
| Search Console | date × clicks, impressions | 28 days | Trend; effect of a change from the day it went live |
| Live sitemap | URLs | today | Pages that never appear in Google → check indexing |

Not available through these APIs, so it's checked monthly by hand or via
Claude in Chrome: **Business Profile** (calls, website clicks, directions,
search terms), **review count**, and **PageSpeed**.

### Settings that make the data better (one-time, in Google's tools)

- **GA4 → Admin → Data retention:** 14 months (the default 2 months cuts off
  year-on-year comparisons in reports).
- **GA4 → Admin → Search Console links:** link the property.
- **GA4 → Admin → Events:** mark `generate_lead` as a key event.
- **GA4 → Admin → Custom definitions:** event-scoped `method` (name it
  "Enquiry method") and `link_text` ("Enquiry link text").
- **Business Profile → website link:** add UTM tags so Profile visits show
  separately from normal search:
  `https://www.ontargetcarpetcleaning.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing`
  The page's canonical URL stays clean, so this doesn't create a duplicate.
- Optional: tag the Instagram and Facebook bio links the same way
  (`utm_source=instagram&utm_medium=social`).

## One-time setup (API access)

1. Google Cloud console: create a project (e.g. `ontarget-seo-data`), then
   enable **Google Analytics Data API** and **Google Search Console API**.
2. Create a **service account** (e.g. `seo-reader`). It needs no roles in the
   Cloud project. Create a **JSON key** and save it as
   `~/.config/ontarget/seo-reader.json` (`chmod 600`).
   If key creation is blocked by an organisation policy, ask Claude for the
   `gcloud` user-login alternative.
3. **GA4 → Admin → Property access management:** add the service account's
   email as **Viewer**.
4. **Search Console → Settings → Users and permissions:** add the same email
   with **Restricted** permission. If the verified property is the Domain type
   rather than URL-prefix, set `searchConsoleSite` in `config.json` to
   `sc-domain:ontargetcarpetcleaning.co.uk`.
5. Test it: `node tools/seo-data/collect.mjs && node tools/seo-data/digest.mjs`

`config.json` holds the GA4 property ID (`483918321`, the `p…` part of the
Analytics URL), the Search Console site, the paths and the digest thresholds.

## Daily schedule (macOS)

```bash
cp tools/seo-data/com.ontarget.seo-data.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.ontarget.seo-data.plist
# run once now to test:   launchctl kickstart gui/$(id -u)/com.ontarget.seo-data
# remove:                 launchctl bootout gui/$(id -u)/com.ontarget.seo-data
```

It runs at 07:15, or when the Mac next wakes if it was asleep. The repo is on
the Desktop, which macOS protects, so the first run may trigger a "zsh/node
would like to access files in your Desktop folder" prompt. Allow it, or grant
Full Disk Access. Check `~/ontarget-seo-data/run.log` if a digest is missing.

## How the digest decides (all thresholds in config.json)

- **Near-wins:** searches at position 4–20 with at least 20 appearances. One
  action per page, covering every near-win search that page should win.
- **Weak listings:** pages at position 1–10 with at least 50 appearances and
  under half the typical click rate for that position → rewrite the title and
  meta description.
- **Competing pages:** a search with at least 30 appearances split across two
  or more pages that each get 20% or more → pick one owner.
- **Towns without a page:** searches naming a nearby place that isn't in
  `config.ts` `areas` → a new town page, but only if the owner works there.
- **Zero appearances:** sitemap pages with no impressions in 28 days → check
  indexing.
- **Visits but no enquiries:** landing pages with 10 or more visits and no
  `generate_lead` → conversion check.

Numbers under about 20 clicks or enquiries swing a lot, so treat them as noise.
