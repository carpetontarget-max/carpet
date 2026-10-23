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
 * `localNotes` and `popular` are what make each page genuinely distinct
 * (near-identical town pages get treated as doorway pages by Google) — keep
 * them specific to the place, and only state things that are true. Real
 * local job photos and reviews mentioning the town are the best additions.
 * `popular[].slug` must be a service slug from `config.ts`.
 * ────────────────────────────────────────────────────────────────────────
 */

export type AreaPage = {
  slug: string;
  name: string;
  postcode: string;
  blurb: string;
  localNotes: string[];
  popular: { slug: string; why: string }[];
  nearby: string[];
};

export const areaPages: AreaPage[] = [
  {
    slug: 'leicester',
    name: 'Leicester',
    postcode: 'LE1–LE5',
    blurb:
      "As a Leicester-based team, the city itself is where we do the bulk of our work — from Victorian terraces to modern new-builds, across every postcode from LE1 to LE5. Being local means we're rarely more than a few minutes from your door, so response times are fast and there's never a travel surcharge tacked onto your quote.",
    localNotes: [
      "Leicester's housing is as varied as it gets — Victorian terraces packed tight in Clarendon Park, Westcotes and Highfields, inter-war semis out towards Evington and Knighton, and modern flats in and around the city centre. Terraces usually mean steep, narrow stairs and through-lounges where one carpet takes nearly all the foot traffic, so we pre-treat the traffic lanes first and clean stairs step by step rather than with a quick pass.",
      "With two universities in the city there are thousands of rented rooms and student lets, and the end-of-year move-out is when landlords and tenants most need a fast, thorough carpet clean. If you're handing back keys, book your end of tenancy clean early and send a few photos on WhatsApp — we'll come back with a fixed price before we arrive.",
    ],
    popular: [
      { slug: 'end-of-tenancy-cleaning', why: 'Student and private lets cleaned to the standard letting agents check against.' },
      { slug: 'stairs-landing-cleaning', why: 'Steep terrace stairs take more wear per step than any other carpet in the house.' },
      { slug: 'carpet-deep-cleaning', why: 'Through-lounges and hallways, where traffic lanes show first.' },
    ],
    nearby: ['oadby', 'braunstone', 'birstall'],
  },
  {
    slug: 'oadby',
    name: 'Oadby',
    postcode: 'LE2',
    blurb:
      "Oadby sits just south-east of the city centre, home to the University of Leicester's Botanic Garden and a mix of family homes along London Road and Glen Road. We're a regular sight on Oadby's residential streets — from post-move deep cleans to routine carpet and sofa refreshes for long-term residents.",
    localNotes: [
      "Much of Oadby is established family housing — detached and semi-detached homes with generous living rooms, long hallways and a lot of fitted carpet. For homes like these our whole-home rate usually works out best: it starts from £120 for three rooms or more and includes the hallway and stairs, so the busiest carpet in the house isn't left for another day.",
      "Larger homes often have a rug over a wooden floor or an upholstered dining set too, and those are easy to add to the same visit. We check each fibre and fabric before we start — wool, viscose and delicate weaves each need a different approach — so one booking can cover carpets, rugs and chairs without anything being cleaned the wrong way.",
    ],
    popular: [
      { slug: 'carpet-deep-cleaning', why: 'Whole-home cleans for larger houses, with the hallway and stairs included.' },
      { slug: 'rug-cleaning', why: 'Wool and delicate rugs fibre-checked and cleaned with the right method.' },
      { slug: 'upholstery-cleaning', why: 'Sofas, armchairs and dining chairs, priced per seat.' },
    ],
    nearby: ['wigston', 'leicester', 'syston'],
  },
  {
    slug: 'wigston',
    name: 'Wigston',
    postcode: 'LE18',
    blurb:
      "Wigston, bordering Oadby to the south, grew up as a hosiery and framework-knitting town and still has that close-knit community feel today. We clean everything from period terraces to newer estates on the edge of town, covering both Wigston and South Wigston on flexible evening and weekend slots.",
    localNotes: [
      "Wigston's older terraced streets sit alongside post-war and newer estates across Wigston Magna, Wigston Fields and South Wigston, so no two jobs here are quite the same. Whatever the house, the carpets that age fastest are the ones by the front door and at the foot of the stairs — where outdoor grit gets ground into the pile every single day.",
      "Brocks Hill Country Park, on the Oadby–Wigston border, is a favourite for dog walks, and muddy paws are a big part of how carpets and sofas get dirty in dog-owning homes. Our pet treatment neutralises odour at the source rather than covering it with fragrance — and if the smell is coming from the underlay rather than the carpet, we'll tell you straight.",
    ],
    popular: [
      { slug: 'pet-stain-odour-removal', why: 'Odour treated at the source, not masked — ideal for dog-owning homes.' },
      { slug: 'stairs-landing-cleaning', why: 'Lifts the grit ground into hallway and stair carpet by daily traffic.' },
      { slug: 'sofa-cleaning', why: 'Pet hair, body oils and odour lifted from family sofas, seat by seat.' },
    ],
    nearby: ['oadby', 'blaby', 'leicester'],
  },
  {
    slug: 'glenfield',
    name: 'Glenfield',
    postcode: 'LE3',
    blurb:
      "Glenfield, north-west of the city and home to Glenfield Hospital, is one of our regular routes — handy for us, faster for you. We work with homeowners across Glenfield and the neighbouring Groby Road corridor, plus local landlords managing end-of-tenancy turnovers.",
    localNotes: [
      "Glenfield is home to Glenfield Hospital and Leicestershire County Hall, and plenty of people here work shifts or long days. We take bookings from early morning to late evening, seven days a week, so a clean can fit around nights, earlies or a busy week — rather than you having to take time off for it.",
      "If anyone at home has asthma or allergies, the bedroom is a good place to start. Mattresses and bedroom carpets collect dust mites, skin flakes and allergens over the years; our mattress clean lifts them from the surface and the layers just beneath, using a low-moisture method so the bed is ready to sleep on the same day.",
    ],
    popular: [
      { slug: 'mattress-cleaning', why: 'Lifts dust mites and allergens, with the bed dry the same day.' },
      { slug: 'carpet-deep-cleaning', why: 'Bedroom and living-room carpets deep cleaned and dry in 4–6 hours.' },
      { slug: 'end-of-tenancy-cleaning', why: 'Quick turnarounds for landlords between tenants.' },
    ],
    nearby: ['leicester-forest-east', 'braunstone', 'leicester'],
  },
  {
    slug: 'braunstone',
    name: 'Braunstone',
    postcode: 'LE3',
    blurb:
      "Braunstone, one of Leicester's larger residential areas west of the centre, keeps us busy with everything from single-room refreshes to full end-of-tenancy cleans. We cover both Braunstone Town and the wider Braunstone Frith area along the Hinckley Road corridor.",
    localNotes: [
      "Braunstone covers a lot of ground — from the older streets around Braunstone Park to the newer homes of Thorpe Astley in Braunstone Town. New-build homes usually come with light, builder-grade carpet that shows dirt quickly, and a few years of busy family life leave traffic lanes and spills that a vacuum simply won't lift.",
      "Stains are best treated early — and best treated by identifying them first, because the wrong product on coffee, juice or ink can set a mark for good. We'll tell you honestly whether a stain is likely to lift fully, partly or not at all before we begin, and we usually clean the whole room alongside it so the carpet matches afterwards.",
    ],
    popular: [
      { slug: 'stain-spot-removal', why: 'Stains identified first, so the treatment lifts them rather than setting them.' },
      { slug: 'carpet-deep-cleaning', why: 'Brings light new-build carpet back from grey traffic lanes.' },
      { slug: 'sofa-cleaning', why: 'Family sofas deep cleaned seat by seat, priced per seat.' },
    ],
    nearby: ['leicester-forest-east', 'glenfield', 'leicester'],
  },
  {
    slug: 'syston',
    name: 'Syston',
    postcode: 'LE7',
    blurb:
      "Syston, a market town a few miles north-east of Leicester in the Charnwood area, has a strong mix of established family homes and newer developments — both keep our hot water extraction equipment busy on evening and weekend visits.",
    localNotes: [
      "Syston has grown a lot in recent years, with new estates on the edge of town alongside the older streets around the centre. Many residents commute by car or from Syston station, so our evening and weekend slots are the easiest way to get the carpets done without losing a day's work.",
      "Newer homes often have open-plan living spaces where a rug anchors the seating area — and rugs collect grit and dust far faster than you'd think. We clean most rugs in your home, using fabric-safe methods matched to the fibre, whether it's a wool rug, a synthetic shag or something more delicate.",
    ],
    popular: [
      { slug: 'rug-cleaning', why: 'Open-plan rugs cleaned in your home, matched to the fibre.' },
      { slug: 'carpet-deep-cleaning', why: 'Evening and weekend slots that fit around the commute.' },
      { slug: 'upholstery-cleaning', why: 'Sofas and chairs added to the same visit, priced per seat.' },
    ],
    nearby: ['birstall', 'thurmaston', 'leicester'],
  },
  {
    slug: 'birstall',
    name: 'Birstall',
    postcode: 'LE4',
    blurb:
      "Birstall sits right on the edge of the city along the A6 toward Loughborough, and it's one of the areas we visit most often. From family carpets to sofas that have seen a few too many muddy walks, we cover Birstall on flexible, out-of-hours slots.",
    localNotes: [
      "Birstall backs onto Watermead Country Park and the River Soar, so plenty of Birstall households spend their weekends outdoors — with dogs, children and muddy boots in tow. That mud ends up in hallway carpets and on the sofa, and it's exactly the kind of ground-in dirt a hot water extraction clean is designed to lift.",
      "Family homes here usually come with a hallway, stairs and landing that take a beating. Booking the stairs alongside the downstairs rooms is the most efficient way to do it, and with most carpets dry in four to six hours, the house is back to normal by the evening.",
    ],
    popular: [
      { slug: 'pet-stain-odour-removal', why: 'For homes where the dog comes back from Watermead wetter than it left.' },
      { slug: 'stairs-landing-cleaning', why: 'Hallway, stairs and landing restored in one pass.' },
      { slug: 'sofa-cleaning', why: 'Muddy-walk sofas deep cleaned and freshened.' },
    ],
    nearby: ['thurmaston', 'syston', 'leicester'],
  },
  {
    slug: 'thurmaston',
    name: 'Thurmaston',
    postcode: 'LE4',
    blurb:
      "Thurmaston, just across Watermead Country Park from Birstall, is a steady part of our round — a mix of established housing and newer estates that keeps carpets and upholstery in regular need of a proper deep clean.",
    localNotes: [
      "Thurmaston stretches along the Melton Road north-east of the city, with Watermead Country Park on one side and busy shops and retail on the other. That mix means we clean for families at home and for local businesses — and both get the same thorough hot water extraction and a fixed price agreed before we start.",
      "For shops, offices and other premises along the Melton Road, we work out of hours — early mornings, evenings or weekends — so carpets are cleaned while you're closed and dry well before you reopen. Homes get the same flexibility, for anything from a single room to the whole house.",
    ],
    popular: [
      { slug: 'commercial-carpet-cleaning', why: 'Out-of-hours cleans for shops and premises on the Melton Road.' },
      { slug: 'carpet-deep-cleaning', why: 'Single rooms or the whole house, at a fixed agreed price.' },
      { slug: 'upholstery-cleaning', why: 'Fabric-safe cleaning for sofas, armchairs and dining chairs.' },
    ],
    nearby: ['birstall', 'syston', 'leicester'],
  },
  {
    slug: 'enderby',
    name: 'Enderby',
    postcode: 'LE19',
    blurb:
      "Enderby, south-west of the city near Fosse Park and the M1, is a popular spot for both home cleans and commercial work — we're often already in the area for a nearby job, which usually means a faster slot for you.",
    localNotes: [
      "Enderby sits by junction 21 of the M1, next to Fosse Park and the offices of Grove Park, so as well as homes in the village we're well placed for businesses on the south-west side of the city. Office carpets take a different kind of punishment — wheeled chairs, coffee spills and constant foot traffic — and they need cleaning without shutting the office down.",
      "We clean offices and business premises out of hours, and our fast-drying extraction means floors are ready before staff arrive. In the village itself it's the usual family wear and tear — carpets, sofas and stairs — cleaned on evening and weekend slots that suit you.",
    ],
    popular: [
      { slug: 'office-carpet-cleaning', why: 'Out-of-hours office cleans, dry before staff arrive.' },
      { slug: 'commercial-carpet-cleaning', why: 'One-off or scheduled cleans for business premises.' },
      { slug: 'carpet-deep-cleaning', why: 'Family homes in the village, on evening and weekend slots.' },
    ],
    nearby: ['blaby', 'leicester-forest-east', 'leicester'],
  },
  {
    slug: 'blaby',
    name: 'Blaby',
    postcode: 'LE8',
    blurb:
      "Blaby, the principal town of Blaby District just south of Leicester, is one of our core coverage areas — from family homes to the shops and offices along the high street, we fit around whatever hours suit you.",
    localNotes: [
      "Blaby has older houses around the village centre as well as newer estates on its outskirts. Older homes often have heavy, lined curtains and traditional upholstery that are a real job to take down or move — and that's exactly where an on-site clean makes life easier.",
      "We clean curtains while they hang: no unhooking, no shrinkage risk from the wrong wash and no wrestling them back onto the rail. Upholstered chairs and sofas are cleaned in place too, priced per seat, so you can refresh a whole room's soft furnishings in a single visit.",
    ],
    popular: [
      { slug: 'curtain-cleaning', why: 'Cleaned on-site while they hang — nothing taken down.' },
      { slug: 'upholstery-cleaning', why: 'Traditional chairs and sofas cleaned in place, per seat.' },
      { slug: 'carpet-deep-cleaning', why: 'The rest of the room done in the same visit.' },
    ],
    nearby: ['enderby', 'wigston', 'leicester'],
  },
  {
    slug: 'leicester-forest-east',
    name: 'Leicester Forest East',
    postcode: 'LE3',
    blurb:
      "Leicester Forest East, best known for the M1 services that share its name, is a well-established residential area just west of the city that we cover regularly — flexible evening and weekend slots included.",
    localNotes: [
      "Leicester Forest East is largely made up of semis and bungalows either side of the Hinckley Road, many of them carpeted throughout. In a bungalow every room is on one level and there are no stairs to work around, which makes a whole-home clean quick and straightforward in a single visit.",
      "We're fully insured, our technicians are DBS-checked, and we move smaller, lighter furniture as part of the clean, so there's no heavy lifting needed beforehand. Just mention any larger pieces when you book and we'll plan around them.",
    ],
    popular: [
      { slug: 'carpet-deep-cleaning', why: "Whole-home cleans — quick and simple when it's all on one level." },
      { slug: 'upholstery-cleaning', why: 'Armchairs and sofas cleaned in place, priced per seat.' },
      { slug: 'mattress-cleaning', why: 'Fresher, healthier beds — dry the same day.' },
    ],
    nearby: ['glenfield', 'braunstone', 'enderby'],
  },
  {
    slug: 'loughborough',
    name: 'Loughborough',
    postcode: 'LE11 / LE12',
    blurb:
      "Loughborough, the largest town north of Leicester and home to Loughborough University, is a little further out but firmly within our coverage — from student lets needing an end-of-tenancy clean to family homes across the town.",
    localNotes: [
      "Loughborough is a university town, with a large number of student houses and shared lets in the streets around the campus and town centre. Shared houses take heavy wear — several people coming and going, spills in communal lounges, and carpets that see far more traffic than a typical family home.",
      "For landlords and letting agents, we clean between tenancies to the standard expected at check-out, and can do several rooms — plus mattresses — in one visit to keep turnaround tight. Tenants moving out can book directly too: send photos on WhatsApp for a fixed price before the day.",
    ],
    popular: [
      { slug: 'end-of-tenancy-cleaning', why: 'Student and shared lets cleaned to check-out standard.' },
      { slug: 'mattress-cleaning', why: 'Fresh mattresses for the next tenants, dry the same day.' },
      { slug: 'stain-spot-removal', why: 'Communal-lounge spills treated before deposit deductions.' },
    ],
    nearby: ['coalville', 'syston', 'leicester'],
  },
  {
    slug: 'coalville',
    name: 'Coalville',
    postcode: 'LE67',
    blurb:
      "Coalville, the former mining town about twelve miles north-west of Leicester on the edge of Charnwood Forest, is well within our coverage — from the older streets of Whitwick and Thringstone to the new estates around Hugglescote and Bardon, on evening and weekend slots that suit you.",
    localNotes: [
      "Coalville has grown fast in recent years, with large new estates around Hugglescote and Bardon alongside the older terraced streets of the town centre, Whitwick and Thringstone. Moving into a new build usually means pale, builder-grade carpet that trades have already walked over — plaster dust and boot marks work into the pile before you've even unpacked, and a proper hot water extraction clean lifts them back out.",
      "If you let a property in the area, our end of tenancy carpet clean is done to the standard agents check at check-out, and we can usually fit it around a tight changeover. Send a few photos on WhatsApp with the postcode and number of rooms, and we'll come back with a fixed price before we travel out.",
    ],
    popular: [
      { slug: 'carpet-deep-cleaning', why: 'A moving-in deep clean for new-build carpet on the newer estates.' },
      { slug: 'end-of-tenancy-cleaning', why: 'Check-out standard cleans for landlords and tenants across LE67.' },
      { slug: 'stairs-landing-cleaning', why: 'Stairs and landings — the first carpet in a busy family home to show wear.' },
    ],
    nearby: ['ashby-de-la-zouch', 'loughborough', 'glenfield'],
  },
  {
    slug: 'ashby-de-la-zouch',
    name: 'Ashby-de-la-Zouch',
    postcode: 'LE65',
    blurb:
      "Ashby-de-la-Zouch, the historic market town in the National Forest best known for its castle and its part in Ivanhoe, sits at the north-western edge of our coverage — and we clean homes and businesses right across the town, from the centre to the newer estates.",
    localNotes: [
      "Ashby is full of history — the ruins of Ashby Castle, Georgian and Victorian buildings along Market Street, and period homes close to the centre, with newer housing on the edges of town. Older homes may have wool carpet, traditional upholstery or an heirloom rug, and each needs a gentler, fibre-checked approach rather than one method for everything. We check every fibre and fabric before we start and adjust the clean to suit.",
      "The town centre is busy with independent shops, cafés, pubs and offices too. For business premises we clean out of hours — early mornings, evenings or weekends — so carpets and seating are done while you're closed and dry well before you reopen.",
    ],
    popular: [
      { slug: 'carpet-deep-cleaning', why: 'Wool and synthetic carpets alike, with the method matched to the fibre.' },
      { slug: 'upholstery-cleaning', why: 'Period sofas and armchairs, fabric-checked before we start.' },
      { slug: 'commercial-carpet-cleaning', why: "Shops, cafés and offices on Market Street, cleaned while you're closed." },
    ],
    nearby: ['coalville', 'loughborough', 'leicester'],
  },
];
