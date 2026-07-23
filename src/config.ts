/**
 * ── SITE CONFIG ─────────────────────────────────────────────────────────
 * Edit everything here in one place. All pages read from this file.
 *
 * Phone number formats you need:
 *   Local (display):     07444 784316
 *   International (calls): +447444784316   (UK: drop leading 0, add +44)
 *   WhatsApp (wa.me):     447444784316     (no + , no spaces)
 * ────────────────────────────────────────────────────────────────────────
 */
import imgCarpet from './images/service-carpet.png';
import imgStain from './images/service-stain.png';
import imgPet from './images/service-pet.png';
import imgTenancy from './images/service-tenancy.png';
import imgCommercial from './images/service-commercial.png';
import imgUpholstery from './images/service-upholstery.jpg';
import imgStairsAfter from './images/stairs-after.jpg';

/**
 * Prefix an internal link with the site's base path so links work whether the
 * site is served from the domain root (production) or a sub-path (e.g. the
 * GitHub Pages preview at /carpet/). Use for internal page links ONLY —
 * never for tel:/wa.me/mailto or external URLs.
 *   withBase('/services')  →  '/services'  (prod)  |  '/carpet/services'  (Pages)
 */
export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/marcin-carpetcleaning'
  const p = path.startsWith('/') ? path : `/${path}`;
  return base + p;
};

export const site = {
  businessName: 'On Target Carpet Cleaning',
  tagline: 'Professional carpet & upholstery cleaning in Leicestershire',
  serviceArea: 'Leicester & surrounding areas',

  // ── Contact ──
  phoneDisplay: '07444 784316',
  phoneIntl: '+447444784316',   // used for tel: and sms:
  whatsappNumber: '447444784316', // used for wa.me link (no + , no spaces)
  email: 'carpetontarget@gmail.com',

  // ── Opening hours (matches Google Business Profile) ──
  hours: [
    { day: 'Monday – Sunday', time: '5:00am – 1:00am' },
  ],
  // Machine-readable version for structured data (24h clock).
  hoursSchema: { opens: '05:00', closes: '01:00' },

  // ── Social / messaging links ──
  // ⚠️ REPLACE the placeholders below with your real usernames/page IDs.
  social: {
    // Instagram: put your handle without the @  →  instagram.com/<handle>
    instagram: 'on_target_carpet_cleaning',
    // Facebook page (for the profile link): facebook.com/<page>
    facebook: 'YOUR_FACEBOOK_PAGE',
    // Facebook Messenger deep link uses your Page's username: m.me/<page>
    messenger: '104518522484326',
  },

  // ── Google reviews (real, live) ──
  // The site fetches your real Google rating + latest reviews AT BUILD TIME.
  // YOU ONLY NEED ONE THING: a Google Places API key in a .env file as
  // GOOGLE_PLACES_API_KEY. The listing is found automatically by the name below.
  googlePlaceQuery: 'On Target Carpet & Upholstery Cleaning, Leicester',
  // Your verified Place ID (resolved from your Maps CID) — used for a direct,
  // reliable Place Details lookup. Takes priority over the name search above.
  googlePlaceId: 'ChIJ5QDUP5yQ5gIRVld4qaAXYiU',
  // Your Google listing (built from your Maps CID) — read & write reviews:
  googleReviewsUrl: 'https://www.google.com/maps?cid=2693741505926420310',
  googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=cid:2693741505926420310',

  // Your real headline numbers (shown above the review cards):
  googleRating: 5.0,
  googleReviewCount: 78,
};

/**
 * ── YOUR LAST 3 GOOGLE REVIEWS ──────────────────────────────────────
 * Paste your three most-recent Google reviews here (these display directly,
 * no API key needed). For each: reviewer name, star rating, when, and the text.
 * Copy them from: https://www.google.com/maps?cid=2693741505926420310 (sort: Newest)
 * ⚠️ Only #1 is filled in (from your screenshot). Fill in #2–#3 with the
 *    real review text — please don't make them up.
 */
export const googleReviews = [
  {
    name: 'Rush Usman',
    rating: 5,
    when: '3 months ago',
    text: 'I recently used this sofa and carpet cleaning service and was very pleased with the results. They were easy to book. The cleaning quality was excellent, Martin explained what products he used.',
  },
  {
    name: 'tina Craig',
    rating: 5,
    when: 'a month ago',
    text: 'Excellent service. Martin was very professional explaining the different stages of cleaning our suite and carpets. We were very impressed with the result and would have no hesitation in recommending him.',
  },
  {
    name: 'M M',
    rating: 5,
    when: 'a month ago',
    text: "Martin is professional and very polite. He clearly knows what he's doing and we were very pleased with his work. Will definitely use him again and highly recommend him.",
  },
];

// ── Pre-built link helpers (used by buttons across the site) ──
const waMessage = encodeURIComponent(
  "Hi On Target, I'd like a quote for carpet cleaning.",
);

// While a handle is still a placeholder (starts with "YOUR_"), the button acts
// as a "dummy" and opens the platform homepage instead of a broken profile URL.
// As soon as you set the real handle in `site.social`, it links to your account.
const isPlaceholder = (v: string) => !v || v.startsWith('YOUR_');
const link = (handle: string, profileBase: string, homepage: string) =>
  isPlaceholder(handle) ? homepage : `${profileBase}${handle}`;

export const links = {
  tel: `tel:${site.phoneIntl}`,
  sms: `sms:${site.phoneIntl}`,
  email: `mailto:${site.email}`,
  whatsapp: `https://wa.me/${site.whatsappNumber}?text=${waMessage}`,
  instagram: link(site.social.instagram, 'https://instagram.com/', 'https://instagram.com'),
  facebook: link(site.social.facebook, 'https://facebook.com/', 'https://facebook.com'),
  messenger: link(site.social.messenger, 'https://m.me/', 'https://m.me'),
};

// Whether a real Messenger handle has been set — until then, the link is dead
// (m.me with no page), so callers should hide the Messenger button rather than
// show a link that goes nowhere useful.
export const hasMessenger = !isPlaceholder(site.social.messenger);

// ── Services (edit / add / remove freely) ──
// Each service gets its own page at /services/<slug>. `intro` is the short
// summary shown on that page; longer 1,500–2,500-word SEO content lives in
// `src/servicePages.ts` keyed by the same slug (rendered when present).
// `group` ('home' | 'business') drives the Services dropdown menu. `related`
// lists 2–3 other slugs to cross-link. Services without an `img` use `tint`
// (a colour placeholder) until a real photo is added.
export const services = [
  {
    slug: 'carpet-deep-cleaning',
    icon: '🧼',
    title: 'Carpet Cleaning',
    group: 'home',
    desc: 'Hot water extraction that lifts dirt, allergens and grime deep from the fibres — leaving carpets fresh and restored.',
    img: imgCarpet,
    alt: 'Technician using hot water extraction equipment to deep clean a carpet in a Leicester home',
    metaDescription: 'Professional carpet cleaning in Leicester using hot water extraction. Lifts dirt, allergens and stains from deep in the pile. Dry in hours, fixed prices, satisfaction guaranteed.',
    intro: "Our core service: a full hot water extraction clean that goes far deeper than a hoover or a rented machine ever will. We pre-treat traffic lanes and stains, then extract the dirty water straight back out — along with the dust, allergens and grime that build up in the fibres over months of everyday use.\n\nMost carpets are dry within 4–6 hours, and every clean uses eco-friendly solutions that are safe around kids and pets. Whether it's one room or the whole house, you get the same thorough process and the same satisfaction guarantee.",
    related: ['stain-spot-removal', 'stairs-landing-cleaning', 'end-of-tenancy-cleaning'],
  },
  {
    slug: 'upholstery-cleaning',
    icon: '🛋️',
    title: 'Upholstery Cleaning',
    group: 'home',
    desc: 'Gentle, fabric-safe deep cleaning for sofas, armchairs and dining chairs — priced per seat.',
    img: imgUpholstery,
    alt: 'Sofa upholstery being deep cleaned with fabric-safe solution',
    metaDescription: 'Upholstery cleaning in Leicester — sofas, armchairs and dining chairs of all fabrics, priced per seat. Fabric-safe deep clean, with pet stain and odour removal available.',
    intro: "Not every fabric can be cleaned the same way — velvet, wool and delicate weaves need a different approach to a standard cotton-blend sofa, and getting it wrong can shrink, discolour or stiffen the material. We check the fabric first and treat it accordingly.\n\nPriced per seat rather than per item, so a single armchair costs less than a 3-seater sofa. Covers sofas, armchairs and dining chairs, and pairs well with our pet stain and odour removal if that's the issue you're dealing with.",
    related: ['sofa-cleaning', 'rug-cleaning', 'stain-spot-removal'],
  },
  {
    slug: 'sofa-cleaning',
    icon: '🛋️',
    title: 'Sofa Cleaning',
    group: 'home',
    desc: 'Deep, fabric-safe cleaning that lifts dirt, body oils and odour from sofas and settees — priced per seat.',
    tint: 'linear-gradient(135deg,#0a97ac,#0a4a63)',
    alt: 'A fabric sofa being deep cleaned seat by seat in a Leicester living room',
    metaDescription: 'Sofa cleaning in Leicester — fabric-safe deep cleaning for settees and sofas of all fabrics, priced per seat. Lifts dirt, body oils, pet hair and odour. Free quotes.',
    intro: "Your sofa is the hardest-working seat in the house — daily use leaves body oils, food crumbs, pet hair and odour worked deep into the fabric, long before it looks visibly dirty. We deep clean it seat by seat, lifting what a vacuum can't reach and leaving it fresher, brighter and healthier to sit on.\n\nWe check the fabric first — velvet, wool, cotton blends and delicate weaves each need a different approach — then clean accordingly, priced per seat so a two-seater costs less than a corner suite. Pairs perfectly with our pet odour removal if that's the real issue.",
    related: ['upholstery-cleaning', 'pet-stain-odour-removal', 'stain-spot-removal'],
  },
  {
    slug: 'rug-cleaning',
    icon: '🧶',
    title: 'Rug Cleaning',
    group: 'home',
    desc: 'Specialist cleaning for rugs of all kinds — wool, Persian, synthetic and delicate fabrics.',
    tint: 'linear-gradient(135deg,#6fe6c2,#0a97ac)',
    alt: 'A wool rug being gently deep cleaned in a Leicester home',
    metaDescription: 'Rug cleaning in Leicester for wool, Persian, synthetic and delicate rugs. Fibre-checked, fabric-safe cleaning that lifts trapped grit, dust and odour. Free quotes.',
    intro: "Rugs aren't all the same — a wool Persian, a synthetic shag and a delicate viscose each need a different approach, and the wrong method can shrink a rug, bleed its colours or flatten the pile for good. We check the fibre and construction first, then clean accordingly.\n\nMost rugs are cleaned in your home using controlled, fabric-safe methods that lift the trapped grit, dust and odour a vacuum leaves behind. We'll always tell you honestly what a rug will take before we start — no guesswork on something that's often irreplaceable.",
    related: ['upholstery-cleaning', 'carpet-deep-cleaning', 'stain-spot-removal'],
  },
  {
    slug: 'mattress-cleaning',
    icon: '🛏️',
    title: 'Mattress Cleaning',
    group: 'home',
    desc: "Deep cleaning that lifts dust mites, allergens, sweat and stains for a healthier night's sleep.",
    tint: 'linear-gradient(135deg,#0e86c4,#04263a)',
    alt: 'A mattress being deep cleaned to remove dust mites and allergens',
    metaDescription: 'Mattress cleaning in Leicester — lifts dust mites, allergens, sweat and stains for a fresher, healthier bed. Low-moisture method, dry the same day. Free quotes.',
    intro: "A mattress quietly collects sweat, dead skin, dust mites and allergens for years — everything you'd rather not be sleeping on. Our deep clean lifts that out of the surface and the layers just beneath, leaving the mattress fresher, cleaner and far kinder for anyone with allergies or asthma.\n\nWe treat stains and odours as part of the clean and use low-moisture methods, so the mattress dries quickly and is ready to sleep on the same day. Ideal before a house move, after illness, or simply as part of a proper spring clean.",
    related: ['pet-stain-odour-removal', 'upholstery-cleaning', 'carpet-deep-cleaning'],
  },
  {
    slug: 'pet-stain-odour-removal',
    icon: '🐾',
    title: 'Pet Odour Removal',
    group: 'home',
    desc: 'Specialist eco-friendly treatment that eliminates pet stains and neutralises odours at the source.',
    img: imgPet,
    alt: 'Carpet being treated for pet stains and odours with eco-friendly solution',
    metaDescription: 'Pet stain and odour removal for carpets and upholstery in Leicester. Eco-friendly treatment that neutralises odours at the source, not just masks them.',
    intro: "Air fresheners mask pet odour for an afternoon. We treat the actual cause — urine, dander and bacteria trapped in the carpet backing and underlay, not just the visible surface. Our eco-friendly solutions break down odour at a molecular level rather than covering it up.\n\nSafe for households with pets and children once dry, and effective on both fresh accidents and stains that have been there for years. If odour is coming from underlay rather than carpet, we'll tell you that too, rather than cleaning the same spot twice and hoping.",
    related: ['stain-spot-removal', 'carpet-deep-cleaning', 'upholstery-cleaning'],
  },
  {
    slug: 'stain-spot-removal',
    icon: '✨',
    title: 'Stain Removal',
    group: 'home',
    desc: 'Advanced treatment for tough stains, spills and high-traffic marks that everyday cleaning leaves behind.',
    img: imgStain,
    alt: 'Close-up of a stubborn carpet stain being treated before deep cleaning',
    metaDescription: 'Stubborn stain and spot removal for carpets in Leicester — wine, coffee, ink and traffic marks. Targeted treatment, honest advice on what will and won\'t lift.',
    intro: "Wine, coffee, ink, makeup, traffic lanes worn dark by daily footsteps — some marks need more than a standard clean to shift. We identify what the stain actually is before treating it, because the wrong product on the wrong stain can set it permanently.\n\nWe'll always tell you honestly if a mark is likely to lift fully, partially, or not at all before we start — no guessing games, no charging you for a result we can't deliver. Stain treatment is usually paired with a full room clean so the rest of the carpet matches.",
    related: ['pet-stain-odour-removal', 'carpet-deep-cleaning', 'upholstery-cleaning'],
  },
  {
    slug: 'stairs-landing-cleaning',
    icon: '🪜',
    title: 'Stairs & Landing Cleaning',
    group: 'home',
    desc: 'Deep cleaning for high-traffic stairs and landings — lifting ground-in dirt and restoring worn, flattened carpet on every step.',
    img: imgStairsAfter,
    alt: 'Stair carpet before and after professional deep cleaning, showing restored pile and colour',
    metaDescription: 'Stairs and landing carpet cleaning in Leicester. Restores worn, flattened pile on high-traffic steps that everyday vacuuming can\'t lift.',
    intro: "Stairs take more wear per square foot than almost any other carpet in the house — every step is a footfall, and the pile flattens and greys long before the carpet either side of it. Standard vacuuming can't reach the ground-in dirt sitting at the base of the fibres.\n\nWe clean every step and the landing in one pass, lifting flattened pile back up and restoring colour that everyday cleaning leaves behind. Often booked alongside a whole-house clean since stairs connect every other room.",
    related: ['carpet-deep-cleaning', 'end-of-tenancy-cleaning', 'commercial-carpet-cleaning'],
  },
  {
    slug: 'curtain-cleaning',
    icon: '🪟',
    title: 'Curtain Cleaning',
    group: 'home',
    desc: 'On-site curtain cleaning — freshened up without the hassle of taking them down.',
    tint: 'linear-gradient(135deg,#14bcc4,#0a4a63)',
    alt: 'Curtains being cleaned on-site while still hanging',
    metaDescription: 'On-site curtain cleaning in Leicester — freshened up while they hang, with no taking them down. Fabric-safe method that lifts dust and trapped odours. Free quotes.',
    intro: "Curtains quietly soak up dust, cooking smells and general household odour, but taking them down, cleaning them and re-hanging them is a job most people never quite get around to. We clean them on-site, while they hang — so there's no unhooking, no shrinkage risk from the wrong wash, and no wrestling them back onto the rail.\n\nWe check the fabric first and use a gentle, fabric-safe method that freshens the material and lifts trapped odour. It's a quick, low-hassle way to refresh the whole feel of a room.",
    related: ['upholstery-cleaning', 'carpet-deep-cleaning', 'rug-cleaning'],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    icon: '🔑',
    title: 'End of Tenancy Carpet Cleaning',
    group: 'home',
    desc: 'Deposit-saving deep cleans that meet landlord and letting-agent standards.',
    img: imgTenancy,
    alt: 'Freshly deep-cleaned carpet in an empty rental property ready for handover',
    metaDescription: 'End of tenancy carpet cleaning in Leicester to the standard landlords and letting agents expect. Help protect your deposit with a documented, professional clean.',
    intro: "Letting agents and landlords check carpets closely at check-out, and a carpet that merely looks clean isn't always enough — it needs to meet the standard set at check-in. We clean to that standard, and can work directly with tenants, landlords or agents to book around a moving day.\n\nWe're often booked for this alongside a full property clean, and can usually fit same-week appointments around tight moving deadlines. Ask about combining rooms into one whole-house visit — it's more efficient than booking room by room.",
    related: ['carpet-deep-cleaning', 'stairs-landing-cleaning', 'stain-spot-removal'],
  },
  {
    slug: 'commercial-carpet-cleaning',
    icon: '🏢',
    title: 'Commercial Carpet Cleaning',
    group: 'business',
    desc: 'Flexible, out-of-hours cleaning for offices, shops and business premises.',
    img: imgCommercial,
    alt: 'Commercial office carpet being professionally cleaned outside business hours',
    metaDescription: 'Commercial carpet cleaning for offices, shops and business premises in Leicester. Flexible out-of-hours scheduling so cleaning never disrupts your working day.',
    intro: "Business carpets take a different kind of punishment — constant foot traffic, wheeled chairs, spilled coffee — and can't be closed off for a day to deal with it. We work evenings and weekends so cleaning happens around your business, not in the middle of it.\n\nWe cover offices, shops, salons, waiting rooms and other business premises, and can set up a regular schedule (monthly, quarterly) rather than a one-off if that suits your footfall better. Get in touch with your square footage and current condition for an accurate quote.",
    related: ['office-carpet-cleaning', 'carpet-deep-cleaning', 'end-of-tenancy-cleaning'],
  },
  {
    slug: 'office-carpet-cleaning',
    icon: '🏬',
    title: 'Office Carpet Cleaning',
    group: 'business',
    desc: 'Out-of-hours deep cleaning for office carpets, meeting rooms and high-traffic walkways.',
    tint: 'linear-gradient(135deg,#0a4a63,#04263a)',
    alt: 'An office carpet being cleaned out of hours between desks',
    metaDescription: 'Office carpet cleaning in Leicester — out-of-hours deep cleaning for offices, meeting rooms and walkways. Fast-drying and low-disruption, with free site quotes.',
    intro: "Office carpet is walked over thousands of times a day — under desks, along walkways, in and out of meeting rooms — and it greys and flattens far faster than carpet at home. A tired office floor quietly undermines the impression your workplace makes on staff and visitors alike.\n\nWe clean out of hours — evenings and weekends — so there's no disruption to your working day, and our fast-drying extraction means floors are ready well before staff arrive. Book a one-off refresh or a regular schedule to keep things consistently sharp. Send your floor area and current condition for an accurate quote.",
    related: ['commercial-carpet-cleaning', 'carpet-deep-cleaning', 'end-of-tenancy-cleaning'],
  },
];

// ── Testimonials (edit freely) ──
export const testimonials = [
  {
    quote:
      'My carpets looked brand new, and the fact they use eco-friendly solutions is a huge bonus. Highly recommend!',
    name: 'Happy Customer',
    location: 'Leicester',
  },
  {
    quote:
      'Fast, professional and friendly. Booked an end-of-tenancy clean and got my full deposit back.',
    name: 'Verified Client',
    location: 'Leicestershire',
  },
  {
    quote:
      'Removed pet stains I thought were permanent. Fantastic result and great value.',
    name: 'Local Resident',
    location: 'Leicester',
  },
];

// ── "How it works" steps ──
export const steps = [
  { title: 'Get in touch', desc: 'Call, text or WhatsApp us with your rooms and postcode for a fast, free quote.' },
  { title: 'Book a slot', desc: 'Pick a time that suits you — evenings and weekends available.' },
  { title: 'We deep clean', desc: 'Our hot water extraction lifts dirt, stains and allergens from deep in the fibres.' },
  { title: 'Enjoy the result', desc: 'Fresh, restored carpets — backed by our satisfaction guarantee.' },
];

// ── Stat counters ──
export const stats = [
  { big: '5.0★', label: 'Average rating' },
  { big: '1,200+', label: 'Cleans completed' },
  { big: '100%', label: 'Satisfaction guarantee' },
  { big: '4–6h', label: 'Typical dry time' },
];

// ── Trust / certification badges (edit to match what you actually hold) ──
export const certifications = [
  'Fully insured',
  'Eco-friendly solutions',
  'Satisfaction guaranteed',
  'DBS-checked technicians',
];

// ── Premium trust badges (icon cards shown under the hero) ──
export const trustBadges = [
  { icon: '🛡️', label: 'Fully Insured', note: 'Public liability cover' },
  { icon: '⭐', label: '5★ Rated', note: '78 Google reviews' },
  { icon: '🌿', label: 'Eco-Friendly', note: 'Safe for kids & pets' },
  { icon: '🏠', label: 'Local & Family Run', note: 'Based in Leicester' },
  { icon: '💧', label: 'Fast Drying', note: 'Dry in 4–6 hours' },
];

// ── Why choose us (reasons / trust signals) ──
export const whyChooseUs = [
  { icon: '🏠', title: 'Local & family-run', text: 'A Leicester family business — you deal directly with the person doing the work, not a call centre.' },
  { icon: '⭐', title: '5.0★ from 78 reviews', text: 'Rated 5.0 on Google by local customers across Leicester and Leicestershire.' },
  { icon: '🛡️', title: 'Fully insured & DBS-checked', text: 'Public liability cover and vetted technicians — complete peace of mind in your home or business.' },
  { icon: '🌿', title: 'Eco-friendly & safe', text: 'Non-toxic solutions that are safe around children and pets once dry.' },
  { icon: '💷', title: 'Fixed prices, no surprises', text: 'A clear price agreed before we start — never a lowball number to get us on the phone.' },
  { icon: '✅', title: 'Satisfaction guarantee', text: 'Not happy with an area? Tell us and we’ll come back and put it right.' },
];

// ── The professional difference (authority / education band) ──
export const educate = [
  {
    icon: '🔥',
    title: 'Hot water extraction, the method manufacturers recommend',
    text: 'Most carpet makers specify hot water extraction (often called "steam cleaning") to keep a warranty valid. It injects heated solution deep into the pile, then extracts it — lifting dirt a surface clean never reaches.',
  },
  {
    icon: '🧽',
    title: 'Why a hired machine leaves dirt behind',
    text: 'Supermarket and DIY machines lack the heat, pressure and vacuum power to pull embedded grime and moisture back out. The result is dirt left in the base of the pile and carpets that stay damp for days.',
  },
  {
    icon: '⏱️',
    title: 'Dry in hours, not days',
    text: 'Our professional-grade extraction removes the vast majority of moisture on the spot, so most carpets are touch-dry within 4–6 hours — not the soggy, slow dry you get from a rented unit.',
  },
];

// ── Pricing tiers (real starting prices — exact figure confirmed before work begins) ──
export const pricing = [
  {
    name: 'Single Room',
    price: '70', unit: 'from / room',
    features: ['Full hot-water extraction clean', 'Pre-treatment for stains & traffic lanes', 'Deodorising finish'],
    featured: false,
  },
  {
    name: 'Whole Home',
    price: '120', unit: 'from / 3 rooms+',
    features: ['Everything in Single Room, at the whole-house rate', 'Hallway & stairs included', 'One visit, one technician — no repeat call-outs', 'Priority booking slots'],
    featured: true,
  },
  {
    name: 'Upholstery',
    price: '30', unit: 'from / seat',
    features: ['Sofas, chairs & rugs', 'Fabric-safe deep clean', 'Pet stain & odour removal'],
    featured: false,
  },
];

// ── Commercial page: premises we clean ──
// `tint` is a CSS gradient used as the colour placeholder until a real photo is
// added. `link` points to a related service page where relevant.
export const commercialPremises = [
  { emoji: '🏢', title: 'Offices & workplaces', text: 'Desks, meeting rooms and high-traffic walkways cleaned overnight — ready for the morning.', tint: 'linear-gradient(135deg,#0a97ac,#04263a)', link: '/services/commercial-carpet-cleaning' },
  { emoji: '🛍️', title: 'Shops & retail', text: 'Keep shop-floor carpets fresh and presentable without closing your doors.', tint: 'linear-gradient(135deg,#14bcc4,#0a4a63)' },
  { emoji: '💇', title: 'Salons & studios', text: 'Hygienic, spotless floors for client-facing spaces that need to impress.', tint: 'linear-gradient(135deg,#0e86c4,#0a97ac)' },
  { emoji: '🪑', title: 'Waiting rooms & receptions', text: 'First impressions count — keep reception areas and seating looking their best.', tint: 'linear-gradient(135deg,#6fe6c2,#0a97ac)' },
  { emoji: '🍽️', title: 'Restaurants & cafés', text: 'Lift food, drink and grease marks from dining areas and covered seating.', tint: 'linear-gradient(135deg,#0a97ac,#0a4a63)' },
  { emoji: '🔑', title: 'Landlords & lettings', text: 'Fast turnaround cleans between tenancies, to the standard agents expect.', tint: 'linear-gradient(135deg,#14bcc4,#04263a)', link: '/services/end-of-tenancy-cleaning' },
];

// Convenience lists derived from the `group` field on each service — used by the
// Services dropdown, the /residential accordion and the /commercial page.
export const homeServices = services.filter((s) => s.group === 'home');
export const businessServices = services.filter((s) => s.group === 'business');

// ── Service areas ──
export const areas = [
  'Leicester', 'Oadby', 'Wigston', 'Glenfield', 'Braunstone', 'Syston',
  'Birstall', 'Thurmaston', 'Enderby', 'Blaby', 'Leicester Forest East', 'Loughborough',
];

// ── FAQ ──
// Grouped into categories (like premium cleaning sites). Each category has an
// icon, a title and its questions. `faqs` below is auto-flattened from these
// for the FAQPage structured data — you only edit the categories.
export const faqCategories = [
  {
    icon: '📅',
    title: 'Booking & Pricing',
    items: [
      {
        q: 'How do I get a quote?',
        a: 'Call or message us on WhatsApp with your rooms and postcode for a fast, no-obligation quote. For the quickest price, send a few photos of the carpet, stain or sofa on WhatsApp and we’ll come straight back to you — no home visit needed.',
      },
      {
        q: 'How much does carpet cleaning cost?',
        a: 'As a guide: a single room starts from £70, a whole home (3+ rooms) from £120, and upholstery from £30 per seat. The exact figure depends on room size, level of soiling and whether furniture needs moving — but we always agree a fixed price before we start, so there are no surprises on the day.',
      },
      {
        q: 'Do you offer evening and weekend appointments?',
        a: 'Yes. We work flexible hours including evenings and weekends, so cleaning can fit around your family, work or a moving day. Get in touch with the dates that suit you and we’ll find a slot.',
      },
    ],
  },
  {
    icon: '💧',
    title: 'During & After Cleaning',
    items: [
      {
        q: 'What cleaning method do you use?',
        a: 'Professional hot water extraction — the method most carpet manufacturers recommend. It injects a heated eco-friendly solution deep into the pile, then extracts it along with the dirt, allergens and grime a surface clean leaves behind.',
      },
      {
        q: 'How long does a carpet take to dry?',
        a: 'Most carpets are touch-dry within 4–6 hours, depending on the fabric, airflow and room temperature. Good ventilation and warmth speed things up — and because our extraction pulls out the vast majority of moisture, you won’t get the soggy, days-long dry a hired machine leaves.',
      },
      {
        q: 'Is the cleaning safe for children and pets?',
        a: 'Yes. We use eco-friendly, non-toxic cleaning solutions that are safe around children and pets once the carpet is dry.',
      },
      {
        q: 'Do I need to move the furniture first?',
        a: 'We can move smaller, lighter items as part of the clean. For larger or heavier furniture, just let us know when you book so we can plan the job and quote accurately.',
      },
    ],
  },
  {
    icon: '✨',
    title: 'Stains & Odours',
    items: [
      {
        q: 'Can you remove tough stains like wine, coffee and ink?',
        a: 'Often, yes. We identify what the stain actually is before treating it, because the wrong product can set a mark permanently. We’ll always tell you honestly whether a stain is likely to lift fully, partially or not at all before we begin — no false promises.',
      },
      {
        q: 'Can you get rid of pet stains and odours?',
        a: 'Yes. Our specialist eco-friendly treatment neutralises pet odours at the source rather than just masking them, and lifts both fresh accidents and older stains. If the smell is coming from the underlay rather than the carpet, we’ll tell you that too.',
      },
    ],
  },
  {
    icon: '📍',
    title: 'General & Coverage',
    items: [
      {
        q: 'Which areas do you cover?',
        a: 'We cover Leicester and the surrounding areas across Leicestershire, including Oadby, Wigston, Glenfield, Syston, Birstall and more. Not sure if we reach you? Just ask — we very likely do.',
      },
      {
        q: 'Are you insured?',
        a: 'Yes. We’re fully insured with public liability cover and our technicians are DBS-checked, so you can have complete peace of mind having us in your home or business.',
      },
      {
        q: 'Do you offer a satisfaction guarantee?',
        a: 'Absolutely. If you’re not happy with any area, let us know and we’ll come back and put it right — that’s our satisfaction guarantee.',
      },
      {
        q: 'How often should carpets be professionally cleaned?',
        a: 'For most homes, every 12–18 months keeps carpets fresh and helps them last longer. Homes with pets, young children or high foot traffic benefit from a professional clean every 6–12 months.',
      },
    ],
  },
];

// Flattened list for the FAQPage structured data (auto-derived — don't edit).
export const faqs = faqCategories.flatMap((c) => c.items);
