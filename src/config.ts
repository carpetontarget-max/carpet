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

export const site = {
  businessName: 'On Target Carpet Cleaning',
  tagline: 'Professional carpet & upholstery cleaning in Leicestershire',
  serviceArea: 'Leicester & surrounding areas',

  // ── Contact ──
  phoneDisplay: '07444 784316',
  phoneIntl: '+447444784316',   // used for tel: and sms:
  whatsappNumber: '447444784316', // used for wa.me link (no + , no spaces)
  email: 'carpetontarget@gmail.com',

  // ── Opening hours ──
  hours: [
    { day: 'Monday – Friday', time: '8:00am – 10:00pm' },
    { day: 'Saturday', time: '9:00am – 10:00pm' },
    { day: 'Sunday', time: '9:00am – 8:00pm' },
  ],

  // ── Social / messaging links ──
  // ⚠️ REPLACE the placeholders below with your real usernames/page IDs.
  social: {
    // Instagram: put your handle without the @  →  instagram.com/<handle>
    instagram: 'YOUR_INSTAGRAM_HANDLE',
    // Facebook page (for the profile link): facebook.com/<page>
    facebook: 'YOUR_FACEBOOK_PAGE',
    // Facebook Messenger deep link uses your Page's username: m.me/<page>
    messenger: 'YOUR_FACEBOOK_PAGE',
  },

  // ── Contact form ──
  // Free form-to-email service. Sign up at https://web3forms.com (no backend
  // needed), paste your access key here. Submissions go to the email above.
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  // ── Google reviews (real, live) ──
  // The site fetches your real Google rating + latest reviews AT BUILD TIME.
  // YOU ONLY NEED ONE THING: a Google Places API key in a .env file as
  // GOOGLE_PLACES_API_KEY. The listing is found automatically by the name below.
  googlePlaceQuery: 'On Target Carpet & Upholstery Cleaning, Leicester',
  // Optional: if the name search ever picks the wrong listing, paste your exact
  // Place ID here (format ChIJ...) and it takes priority. Leave as-is otherwise.
  googlePlaceId: '',
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

// ── Services (edit / add / remove freely) ──
export const services = [
  {
    icon: '🧼',
    title: 'Carpet Deep Cleaning',
    desc: 'Hot water extraction that lifts dirt, allergens and grime deep from the fibres — leaving carpets fresh and restored.',
    img: '/images/service-carpet.png',
  },
  {
    icon: '✨',
    title: 'Stain & Spot Removal',
    desc: 'Advanced treatment for tough stains, spills and high-traffic marks that everyday cleaning leaves behind.',
    img: '/images/service-stain.png',
  },
  {
    icon: '🐾',
    title: 'Pet Stain & Odour Removal',
    desc: 'Specialist eco-friendly treatment that eliminates pet stains and neutralises odours at the source.',
    img: '/images/service-pet.png',
  },
  {
    icon: '🔑',
    title: 'End of Tenancy Cleaning',
    desc: 'Deposit-saving deep cleans that meet landlord and letting-agent standards.',
    img: '/images/service-tenancy.png',
  },
  {
    icon: '🏢',
    title: 'Commercial Carpet Cleaning',
    desc: 'Flexible, out-of-hours cleaning for offices, shops and business premises.',
    img: '/images/service-commercial.png',
  },
  {
    icon: '🛋️',
    title: 'Upholstery & Rug Cleaning',
    desc: 'Gentle, thorough cleaning for sofas, chairs and rugs of all fabrics.',
    img: '/images/service-upholstery.jpg',
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

// ── Pricing tiers (indicative — adjust to your real prices) ──
export const pricing = [
  {
    name: 'Single Room',
    price: '30', unit: 'from / room',
    features: ['Deep hot water extraction', 'Pre-treatment of stains', 'Deodorising finish'],
    featured: false,
  },
  {
    name: 'Whole Home',
    price: '99', unit: 'from / 3 rooms',
    features: ['Everything in Single Room', 'Hallway & stairs option', 'Best value bundle', 'Priority booking'],
    featured: true,
  },
  {
    name: 'Upholstery',
    price: '45', unit: 'from / sofa',
    features: ['Sofas, chairs & rugs', 'Fabric-safe treatment', 'Pet stain & odour removal'],
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
