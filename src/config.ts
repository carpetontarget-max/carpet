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
// Each service gets its own page at /services/<slug>. `intro` is the longer,
// unique copy used on that page (kept distinct per service for SEO — avoid
// making these near-duplicates of each other). `related` lists 2–3 other
// slugs to cross-link from that page.
export const services = [
  {
    slug: 'carpet-deep-cleaning',
    icon: '🧼',
    title: 'Carpet Deep Cleaning',
    desc: 'Hot water extraction that lifts dirt, allergens and grime deep from the fibres — leaving carpets fresh and restored.',
    img: imgCarpet,
    alt: 'Technician using hot water extraction equipment to deep clean a carpet in a Leicester home',
    metaDescription: 'Professional carpet deep cleaning in Leicester using hot water extraction. Lifts dirt and allergens from deep in the fibres. Free quotes, satisfaction guaranteed.',
    intro: "Our core service: a full hot water extraction clean that goes far deeper than a hoover or a rented machine ever will. We pre-treat traffic lanes and stains, then extract the dirty water straight back out — along with the dust, allergens and grime that build up in the fibres over months of everyday use.\n\nMost carpets are dry within 4–6 hours, and every clean uses eco-friendly solutions that are safe around kids and pets. Whether it's one room or the whole house, you get the same thorough process and the same satisfaction guarantee.",
    related: ['stain-spot-removal', 'stairs-landing-cleaning', 'end-of-tenancy-cleaning'],
  },
  {
    slug: 'stain-spot-removal',
    icon: '✨',
    title: 'Stain & Spot Removal',
    desc: 'Advanced treatment for tough stains, spills and high-traffic marks that everyday cleaning leaves behind.',
    img: imgStain,
    alt: 'Close-up of a stubborn carpet stain being treated before deep cleaning',
    metaDescription: 'Stubborn stain and spot removal for carpets in Leicester — wine, coffee, ink and traffic marks. Targeted treatment, honest advice on what will and won\'t lift.',
    intro: "Wine, coffee, ink, makeup, traffic lanes worn dark by daily footsteps — some marks need more than a standard clean to shift. We identify what the stain actually is before treating it, because the wrong product on the wrong stain can set it permanently.\n\nWe'll always tell you honestly if a mark is likely to lift fully, partially, or not at all before we start — no guessing games, no charging you for a result we can't deliver. Stain treatment is usually paired with a full room clean so the rest of the carpet matches.",
    related: ['pet-stain-odour-removal', 'carpet-deep-cleaning', 'upholstery-rug-cleaning'],
  },
  {
    slug: 'pet-stain-odour-removal',
    icon: '🐾',
    title: 'Pet Stain & Odour Removal',
    desc: 'Specialist eco-friendly treatment that eliminates pet stains and neutralises odours at the source.',
    img: imgPet,
    alt: 'Carpet being treated for pet stains and odours with eco-friendly solution',
    metaDescription: 'Pet stain and odour removal for carpets and upholstery in Leicester. Eco-friendly treatment that neutralises odours at the source, not just masks them.',
    intro: "Air fresheners mask pet odour for an afternoon. We treat the actual cause — urine, dander and bacteria trapped in the carpet backing and underlay, not just the visible surface. Our eco-friendly solutions break down odour at a molecular level rather than covering it up.\n\nSafe for households with pets and children once dry, and effective on both fresh accidents and stains that have been there for years. If odour is coming from underlay rather than carpet, we'll tell you that too, rather than cleaning the same spot twice and hoping.",
    related: ['stain-spot-removal', 'carpet-deep-cleaning', 'upholstery-rug-cleaning'],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    icon: '🔑',
    title: 'End of Tenancy Cleaning',
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
    desc: 'Flexible, out-of-hours cleaning for offices, shops and business premises.',
    img: imgCommercial,
    alt: 'Commercial office carpet being professionally cleaned outside business hours',
    metaDescription: 'Commercial carpet cleaning for offices, shops and business premises in Leicester. Flexible out-of-hours scheduling so cleaning never disrupts your working day.',
    intro: "Business carpets take a different kind of punishment — constant foot traffic, wheeled chairs, spilled coffee — and can't be closed off for a day to deal with it. We work evenings and weekends so cleaning happens around your business, not in the middle of it.\n\nWe cover offices, shops, salons, waiting rooms and other business premises, and can set up a regular schedule (monthly, quarterly) rather than a one-off if that suits your footfall better. Get in touch with your square footage and current condition for an accurate quote.",
    related: ['carpet-deep-cleaning', 'stairs-landing-cleaning', 'stain-spot-removal'],
  },
  {
    slug: 'upholstery-rug-cleaning',
    icon: '🛋️',
    title: 'Upholstery & Rug Cleaning',
    desc: 'Gentle, thorough cleaning for sofas, chairs and rugs of all fabrics.',
    img: imgUpholstery,
    alt: 'Sofa upholstery being deep cleaned with fabric-safe solution',
    metaDescription: 'Upholstery and rug cleaning in Leicester — sofas, armchairs and rugs of all fabrics, priced per seat. Fabric-safe treatment with pet stain and odour removal available.',
    intro: "Not every fabric can be cleaned the same way — velvet, wool and delicate weaves need a different approach to a standard cotton-blend sofa, and getting it wrong can shrink, discolour or stiffen the material. We check the fabric first and treat it accordingly.\n\nPriced per seat rather than per item, so a single armchair costs less than a 3-seater sofa. Covers sofas, chairs and rugs, and pairs well with our pet stain and odour removal if that's the issue you're dealing with.",
    related: ['stain-spot-removal', 'pet-stain-odour-removal', 'carpet-deep-cleaning'],
  },
  {
    slug: 'stairs-landing-cleaning',
    icon: '🪜',
    title: 'Stairs & Landing Cleaning',
    desc: 'Deep cleaning for high-traffic stairs and landings — lifting ground-in dirt and restoring worn, flattened carpet on every step.',
    img: imgStairsAfter,
    alt: 'Stair carpet before and after professional deep cleaning, showing restored pile and colour',
    metaDescription: 'Stairs and landing carpet cleaning in Leicester. Restores worn, flattened pile on high-traffic steps that everyday vacuuming can\'t lift.',
    intro: "Stairs take more wear per square foot than almost any other carpet in the house — every step is a footfall, and the pile flattens and greys long before the carpet either side of it. Standard vacuuming can't reach the ground-in dirt sitting at the base of the fibres.\n\nWe clean every step and the landing in one pass, lifting flattened pile back up and restoring colour that everyday cleaning leaves behind. Often booked alongside a whole-house clean since stairs connect every other room.",
    related: ['carpet-deep-cleaning', 'end-of-tenancy-cleaning', 'commercial-carpet-cleaning'],
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

// ── Service areas ──
export const areas = [
  'Leicester', 'Oadby', 'Wigston', 'Glenfield', 'Braunstone', 'Syston',
  'Birstall', 'Thurmaston', 'Enderby', 'Blaby', 'Leicester Forest East', 'Loughborough',
];

// ── FAQ (edit freely) ──
export const faqs = [
  {
    q: 'What cleaning method do you use?',
    a: 'We use professional hot water extraction, which deep-cleans carpets and upholstery while using eco-friendly cleaning solutions.',
  },
  {
    q: 'How long does a carpet take to dry?',
    a: 'Most carpets are dry within 4–6 hours, depending on fabric, airflow and room temperature.',
  },
  {
    q: 'Do you offer a satisfaction guarantee?',
    a: 'Yes. If you are not happy with any area, let us know and we will put it right.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We cover Leicester and the surrounding areas across Leicestershire. Get in touch to confirm your postcode.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call or message us on WhatsApp for a fast, no-obligation quote, or use the contact form and we will get back to you.',
  },
];
