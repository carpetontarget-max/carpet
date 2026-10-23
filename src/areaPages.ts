/**
 * ── LOCAL AREA LANDING PAGES ────────────────────────────────────────────
 * One page per town/suburb in `config.ts`'s `areas` list, rendered by
 * `src/pages/areas/[slug].astro`. Keeps `src/config.ts` (business-wide
 * facts) separate from this page-specific local copy — same split as
 * `services` (config.ts) / `servicePages.ts` for long-form content.
 *
 * `name` must exactly match an entry in `config.ts`'s `areas` array.
 * `nearby` lists 2–3 other slugs from this file, used for local
 * cross-linking between area pages.
 * ────────────────────────────────────────────────────────────────────────
 */

export type AreaPage = {
  slug: string;
  name: string;
  postcode: string;
  blurb: string;
  nearby: string[];
};

export const areaPages: AreaPage[] = [
  {
    slug: 'leicester',
    name: 'Leicester',
    postcode: 'LE1–LE5',
    blurb:
      "As a Leicester-based team, the city itself is where we do the bulk of our work — from Victorian terraces to modern new-builds, across every postcode from LE1 to LE5. Being local means we're rarely more than a few minutes from your door, so response times are fast and there's never a travel surcharge tacked onto your quote.",
    nearby: ['oadby', 'braunstone', 'birstall'],
  },
  {
    slug: 'oadby',
    name: 'Oadby',
    postcode: 'LE2',
    blurb:
      "Oadby sits just south-east of the city centre, home to the University of Leicester's Botanic Garden and a mix of family homes along London Road and Glen Road. We're a regular sight on Oadby's residential streets — from post-move deep cleans to routine carpet and sofa refreshes for long-term residents.",
    nearby: ['wigston', 'leicester', 'syston'],
  },
  {
    slug: 'wigston',
    name: 'Wigston',
    postcode: 'LE18',
    blurb:
      "Wigston, bordering Oadby to the south, grew up as a hosiery and framework-knitting town and still has that close-knit community feel today. We clean everything from period terraces to newer estates on the edge of town, covering both Wigston and South Wigston on flexible evening and weekend slots.",
    nearby: ['oadby', 'blaby', 'leicester'],
  },
  {
    slug: 'glenfield',
    name: 'Glenfield',
    postcode: 'LE3',
    blurb:
      "Glenfield, north-west of the city and home to Glenfield Hospital, is one of our regular routes — handy for us, faster for you. We work with homeowners across Glenfield and the neighbouring Groby Road corridor, plus local landlords managing end-of-tenancy turnovers.",
    nearby: ['leicester-forest-east', 'braunstone', 'leicester'],
  },
  {
    slug: 'braunstone',
    name: 'Braunstone',
    postcode: 'LE3',
    blurb:
      "Braunstone, one of Leicester's larger residential areas west of the centre, keeps us busy with everything from single-room refreshes to full end-of-tenancy cleans. We cover both Braunstone Town and the wider Braunstone Frith area along the Hinckley Road corridor.",
    nearby: ['leicester-forest-east', 'glenfield', 'leicester'],
  },
  {
    slug: 'syston',
    name: 'Syston',
    postcode: 'LE7',
    blurb:
      "Syston, a market town a few miles north-east of Leicester in the Charnwood area, has a strong mix of established family homes and newer developments — both keep our hot water extraction equipment busy on evening and weekend visits.",
    nearby: ['birstall', 'thurmaston', 'leicester'],
  },
  {
    slug: 'birstall',
    name: 'Birstall',
    postcode: 'LE4',
    blurb:
      "Birstall sits right on the edge of the city along the A6 toward Loughborough, and it's one of the areas we visit most often. From family carpets to sofas that have seen a few too many muddy walks, we cover Birstall on flexible, out-of-hours slots.",
    nearby: ['thurmaston', 'syston', 'leicester'],
  },
  {
    slug: 'thurmaston',
    name: 'Thurmaston',
    postcode: 'LE4',
    blurb:
      "Thurmaston, neighbouring Birstall along the Wreake Valley, is a steady part of our round — a mix of established housing and newer estates that keeps carpets and upholstery in regular need of a proper deep clean.",
    nearby: ['birstall', 'syston', 'leicester'],
  },
  {
    slug: 'enderby',
    name: 'Enderby',
    postcode: 'LE19',
    blurb:
      "Enderby, south-west of the city near Fosse Park and the M1, is a popular spot for both home cleans and commercial work — we're often already in the area for a nearby job, which usually means a faster slot for you.",
    nearby: ['blaby', 'leicester-forest-east', 'leicester'],
  },
  {
    slug: 'blaby',
    name: 'Blaby',
    postcode: 'LE8',
    blurb:
      "Blaby, the principal town of Blaby District just south of Leicester, is one of our core coverage areas — from family homes to the shops and offices along the high street, we fit around whatever hours suit you.",
    nearby: ['enderby', 'wigston', 'leicester'],
  },
  {
    slug: 'leicester-forest-east',
    name: 'Leicester Forest East',
    postcode: 'LE3',
    blurb:
      "Leicester Forest East, best known for the M1 services that share its name, is a well-established residential area just west of the city that we cover regularly — flexible evening and weekend slots included.",
    nearby: ['glenfield', 'braunstone', 'enderby'],
  },
  {
    slug: 'loughborough',
    name: 'Loughborough',
    postcode: 'LE11 / LE12',
    blurb:
      "Loughborough, the largest town north of Leicester and home to Loughborough University, is a little further out but firmly within our coverage — from student lets needing an end-of-tenancy clean to family homes across the town.",
    nearby: ['syston', 'birstall', 'leicester'],
  },
];
