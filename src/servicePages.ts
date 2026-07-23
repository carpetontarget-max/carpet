/**
 * ── LONG-FORM SERVICE PAGE CONTENT ──────────────────────────────────────
 * Rich, 1,500–2,500-word SEO content for individual service pages, keyed by the
 * service `slug` in config.ts. When a slug has an entry here, /services/<slug>
 * renders this long-form layout (hero → sections → FAQs → CTA) with FAQPage
 * structured data. Slugs WITHOUT an entry fall back to the short `intro` layout.
 *
 * Shape:
 *   h1              – page heading (include the town for local SEO)
 *   metaTitle       – <title> override (keep the target keyword near the front)
 *   metaDescription – meta description override
 *   lead            – opening paragraph under the H1
 *   sections[]      – { h2, body: string[], list?: string[] }
 *   faqs[]          – { q, a }  (also emitted as FAQPage JSON-LD)
 *
 * Keep each page's wording genuinely distinct — don't clone one page into another.
 */
export const servicePages = {
  'carpet-deep-cleaning': {
    h1: 'Carpet Cleaning in Leicester',
    metaTitle: 'Carpet Cleaning Leicester | Professional Deep Carpet Cleaners',
    metaDescription:
      'Professional carpet cleaning in Leicester. Hot water extraction that lifts dirt, allergens and stains from deep in the pile. Dry in hours, fixed prices, satisfaction guaranteed. Free quote on WhatsApp.',
    lead:
      'Looking for professional carpet cleaning in Leicester? On Target Carpet Cleaning is a local, family-run team that brings tired, dull and stained carpets back to life using powerful hot water extraction. We clean homes and businesses across Leicester and the surrounding Leicestershire towns, and every job is backed by honest, fixed pricing and a satisfaction guarantee.',
    sections: [
      {
        h2: 'Trusted local carpet cleaners in Leicester & Leicestershire',
        body: [
          'We’re a Leicester-based carpet cleaning business built on doing the job properly and treating people’s homes with respect. Over hundreds of cleans we’ve earned a 5.0-star rating from local customers — because we turn up when we say we will, explain exactly what we’re doing, and leave carpets genuinely cleaner rather than just wet.',
          'Whether it’s a single lounge that’s seen better days, a whole house before guests arrive, or a rental property that needs to pass a check-out inspection, the process and the standard are the same. We work with homeowners, tenants, landlords and businesses right across the city and county, and we’re happy to advise honestly on what a clean will and won’t achieve before you commit to anything.',
        ],
      },
      {
        h2: 'Why professional carpet cleaning beats a hired machine',
        body: [
          'Supermarket hire machines and DIY sprays feel like a bargain, but they rarely get carpets properly clean — and they can create problems of their own. They lack the heat, the water pressure and, most importantly, the vacuum recovery power to pull dirty water back out of the pile. The result is grime left sitting in the base of the fibres and a carpet that stays damp for days.',
          'That leftover moisture is exactly what causes the two classic DIY complaints: carpets that go crispy and stiff, and stains that “reappear” a week later as soapy residue and deep soiling wick back up to the surface. Over-wetting can also loosen the backing and leave a musty smell lingering in the room.',
          'Our professional equipment injects heated cleaning solution deep into the carpet and then extracts the vast majority of it straight back out in the same pass — lifting the dirt with it. You get a deeper clean, no sticky residue, and a carpet that’s dry in hours rather than days.',
        ],
      },
      {
        h2: 'Our carpet cleaning process, step by step',
        body: [
          'Every carpet is a little different, so we tailor the clean to the fibre, the level of soiling and any problem areas. A typical visit follows the same thorough sequence:',
        ],
        list: [
          'Inspection & fibre check — we look at the carpet type, condition and any stains, and flag anything we don’t think will fully lift before we start.',
          'Thorough vacuum — removing loose, dry soil first so the deep clean works on the ground-in dirt rather than the surface.',
          'Pre-treatment — traffic lanes, stains and heavily soiled areas are pre-sprayed with the right solution and given time to break the dirt down.',
          'Agitation — working the solution into the pile so it reaches the base of the fibres, not just the tips.',
          'Hot water extraction — the deep clean itself: heated solution goes in and is immediately drawn back out along with the suspended dirt.',
          'Spot & odour treatment — any remaining marks are worked on individually, and a deodoriser can be added to finish.',
          'Pile grooming & fast-dry setup — we groom the pile so it dries evenly and looks its best, and advise on airflow to speed drying.',
        ],
      },
      {
        h2: 'Hot water extraction: the method manufacturers recommend',
        body: [
          'Hot water extraction — often called “steam cleaning” — is the method most carpet manufacturers specify to keep a warranty valid, and it’s the core of what we do. Heated water and cleaning solution are forced into the carpet under pressure to loosen embedded dirt, dust, allergens and bacteria, then a powerful vacuum pulls the dirty water back out.',
          'Because the dirt is physically removed rather than just moved around, the finish is deeper and longer-lasting than bonnet-mopping or a rented upright can achieve. We use eco-friendly, non-toxic solutions throughout, so the clean is safe around children and pets once dry — no harsh chemical smell left hanging in the room.',
        ],
      },
      {
        h2: 'Stain and traffic-lane removal',
        body: [
          'Everyday life leaves its mark on a carpet: red wine, coffee, tea, food and drink spills, make-up, mud, and the dark “traffic lanes” worn into hallways, doorways and in front of the sofa. Many of these lift beautifully with the right pre-treatment and technique.',
          'The key is identifying what the stain actually is before treating it — the wrong product on the wrong stain can set it permanently. We treat marks individually and, crucially, we’ll tell you honestly upfront whether something is likely to come out fully, partially or not at all. Some older or dye-based stains are permanent no matter who cleans them, and we’d rather be straight with you than over-promise. See our dedicated stain removal service for the tougher cases.',
        ],
      },
      {
        h2: 'Pet stains and odours',
        body: [
          'Homes with pets have their own challenge: it isn’t just the visible mark, it’s the odour trapped in the carpet backing and underlay. Air fresheners only mask it. Our eco-friendly pet treatment targets the source, breaking odour down rather than covering it up, and works on both fresh accidents and long-standing problems. If the smell has reached the underlay, we’ll tell you honestly rather than cleaning the same spot twice and hoping.',
        ],
      },
      {
        h2: 'How long does carpet take to dry?',
        body: [
          'Most carpets are touch-dry within 4–6 hours of a professional clean, and fully dry within about 24 hours. Because our extraction removes most of the moisture on the spot, you avoid the soggy, days-long dry that a hire machine leaves behind. A few things affect how quickly your carpet dries:',
        ],
        list: [
          'Airflow — opening windows or running fans makes a big difference.',
          'Room temperature — a warm room dries faster than a cold one.',
          'Carpet type & thickness — deep wool piles hold more moisture than low-pile synthetics.',
          'How soiled it was — heavily soiled carpets need more solution and a little longer.',
        ],
      },
      {
        h2: 'The health benefits of a professionally cleaned carpet',
        body: [
          'Carpet acts a bit like a giant filter, trapping dust, pollen, pet dander and other allergens that would otherwise float around your home. That’s helpful — until the carpet becomes saturated and starts releasing those particles back into the air every time someone walks across it.',
          'A proper deep clean flushes that build-up out, along with the dust mites and bacteria that live in it. For anyone in the household with asthma, allergies or eczema, a regularly cleaned carpet can make a genuine difference to the air they breathe. It also removes the trapped odours that everyday vacuuming never reaches, leaving rooms noticeably fresher.',
        ],
      },
      {
        h2: 'How much does carpet cleaning cost in Leicester?',
        body: [
          'We believe in honest, upfront pricing — not a low number to get us on the phone followed by surprises on the day. As a guide, a single room typically starts from £70, and a whole home (three rooms or more) from £120, with hallway and stairs able to be added in. Upholstery is priced separately, from £30 per seat.',
          'The final figure depends on a few sensible factors, and we’ll always confirm a fixed price before any work begins:',
        ],
        list: [
          'The number and size of rooms being cleaned.',
          'How heavily soiled the carpet is, and whether there are stains needing extra treatment.',
          'Stairs, which are more labour-intensive per square metre than a flat room.',
          'Whether furniture needs moving as part of the job.',
        ],
      },
      {
        h2: 'Areas we cover around Leicester',
        body: [
          'We’re based in Leicester and cover the city plus the surrounding Leicestershire towns and villages, including Oadby, Wigston, Glenfield, Braunstone, Syston, Birstall, Thurmaston, Enderby, Blaby, Leicester Forest East and Loughborough. If you’re just outside this list, get in touch — there’s a good chance we still cover you.',
        ],
      },
      {
        h2: 'Why choose On Target Carpet Cleaning',
        body: [
          'Plenty of companies can spray water on a carpet. What our Leicester customers come back for is the combination of a genuinely deep clean, honest advice and a team that respects your home:',
        ],
        list: [
          '5.0-star rated by local customers on Google.',
          'Local and family-run — you deal with the person doing the work.',
          'Fully insured with public liability cover, and DBS-checked.',
          'Eco-friendly, non-toxic solutions that are safe for kids and pets.',
          'Fixed prices agreed before we start — no surprises on the day.',
          'Backed by our satisfaction guarantee: if you’re not happy with an area, we’ll put it right.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does carpet cleaning cost in Leicester?',
        a: 'As a guide, a single room starts from £70 and a whole home (three rooms or more) from £120, with upholstery from £30 per seat. The exact price depends on room sizes, how soiled the carpet is, stairs and whether furniture needs moving — but we always agree a fixed price before we begin, so there are no surprises.',
      },
      {
        q: 'How long will my carpet take to dry?',
        a: 'Most carpets are touch-dry within 4–6 hours and fully dry within around 24 hours. Good airflow and a warm room speed things up. Because our extraction removes most of the moisture on the spot, you avoid the days-long damp you get from a hired machine.',
      },
      {
        q: 'Is the cleaning safe for children and pets?',
        a: 'Yes. We use eco-friendly, non-toxic cleaning solutions that are safe around children and pets once the carpet is dry.',
      },
      {
        q: 'Do you move furniture?',
        a: 'We can move smaller, lighter items as part of the clean. For larger or heavier furniture, just let us know when you book so we can plan the job and quote accurately.',
      },
      {
        q: 'Can you remove old or stubborn stains?',
        a: 'Often, yes — with the right pre-treatment many stains lift well. We identify the stain first and treat it accordingly, and we’ll always tell you honestly beforehand whether a mark is likely to come out fully, partially or not at all. Some older or dye-based stains are permanent regardless of who cleans them.',
      },
      {
        q: 'How often should I have my carpets professionally cleaned?',
        a: 'For most homes, every 12–18 months keeps carpets fresh and helps them last longer. Homes with pets, young children or high foot traffic benefit from a clean every 6–12 months.',
      },
      {
        q: 'Which areas of Leicester do you cover?',
        a: 'We cover Leicester and the surrounding Leicestershire areas, including Oadby, Wigston, Glenfield, Syston, Birstall, Thurmaston, Enderby, Blaby and Loughborough. If you’re nearby but not listed, just ask.',
      },
      {
        q: 'How do I get a quote?',
        a: 'The quickest way is to message us on WhatsApp with your rooms and postcode, or send a few photos for an even faster price. You can also call or text. Quotes are free and there’s no obligation.',
      },
    ],
  },

  'upholstery-cleaning': {
    h1: 'Upholstery Cleaning in Leicester',
    metaTitle: 'Upholstery Cleaning Leicester | Sofa & Furniture Cleaners',
    metaDescription:
      'Professional upholstery cleaning in Leicester — sofas, armchairs and dining chairs of every fabric, cleaned in your home and priced per seat. Fabric-safe, fast-drying, satisfaction guaranteed.',
    lead:
      'Your sofas and chairs work as hard as any carpet in the house, yet they’re cleaned far less often. On Target Carpet Cleaning offers professional upholstery cleaning across Leicester and Leicestershire — a fabric-safe deep clean, carried out in your home and priced per seat, that lifts the dirt, oils and odours everyday use leaves behind.',
    sections: [
      {
        h2: 'Local upholstery cleaning you can trust',
        body: [
          'We’re a Leicester-based, family-run team, and upholstery is one of our most-requested jobs alongside carpets. Sofas, armchairs, dining chairs, footstools, headboards — if it’s fabric and it sees daily use, it collects far more than most people realise, and it rewards a proper clean with a noticeably fresher, brighter finish.',
          'Everything is done in your home, around your schedule, and always with a clear price agreed first. We treat the furniture — and your house — with the same care whether it’s a single tired armchair or a full lounge suite.',
        ],
      },
      {
        h2: 'Every fabric is different — and that matters',
        body: [
          'Upholstery fabrics behave very differently under cleaning. A robust cotton-blend sofa can take a thorough wet clean; velvet, wool, chenille, linen and delicate viscose weaves each need a gentler, more controlled approach. Get it wrong and you risk shrinkage, watermarking, colour bleed or a stiffened, crispy finish — which is exactly why a hired machine and a bottle of supermarket spray are a gamble on a sofa you can’t easily replace.',
          'Before any cleaning starts we check the manufacturer’s fabric cleaning code where there is one — W (water-based), S (solvent), WS (either) or X (vacuum only) — and test an inconspicuous area for colour-fastness. Then we choose the method and solution that will get the best result safely, whether that’s a full hot water extraction clean or a lower-moisture treatment for something delicate.',
        ],
      },
      {
        h2: 'Our upholstery cleaning process',
        body: [
          'Every piece is treated individually, but the sequence is consistent and thorough:',
        ],
        list: [
          'Inspection & fabric test — identify the fabric, check the cleaning code and test for colour-fastness.',
          'Vacuum — remove loose dust, crumbs and pet hair from cushions, crevices and seams.',
          'Pre-treatment — spray arms, headrests, seat cushions and any marks with the right solution and let it break down the soiling.',
          'Deep clean — hot water extraction or a controlled low-moisture method, depending on the fabric, to lift the dirt back out.',
          'Spot & odour work — tackle any remaining marks individually and deodorise if needed.',
          'Groom & fast-dry — reset the pile and set up airflow so the piece dries evenly and quickly.',
        ],
      },
      {
        h2: 'What a professional upholstery clean removes',
        body: [
          'Upholstery quietly absorbs body oils and sweat, skin cells, hair and food crumbs, along with the same dust, pollen and pet dander that settle in your carpets. Over time that build-up dulls the colour, flattens the pile and holds onto odours — often long before the fabric looks obviously dirty.',
          'A proper deep clean flushes that out, which does three things at once: it brings the colour and texture back to life, it removes the allergens and dust mites that upholstery harbours (good news for anyone with asthma or allergies), and it lifts trapped smells rather than masking them. It also helps your furniture last longer, since ground-in grit acts like sandpaper on the fibres every time you sit down.',
        ],
      },
      {
        h2: 'How much does upholstery cleaning cost in Leicester?',
        body: [
          'We price upholstery per seat, which is the fairest way to reflect the actual work — a single armchair costs less than a three-seater sofa, and a large corner suite more. As a guide, upholstery starts from £30 per seat, with the exact figure depending on the size and number of pieces, the fabric, and how heavily soiled or stained they are.',
          'We’ll always confirm a fixed price before we begin, and it’s usually more cost-effective to have your suite cleaned at the same time as your carpets in one visit. Just send a photo of the pieces on WhatsApp for a quick, accurate quote.',
        ],
      },
      {
        h2: 'Drying times and aftercare',
        body: [
          'Because we match the moisture to the fabric, upholstery typically dries within 2–4 hours — often faster than carpet, as there’s less material and better airflow around a sofa. Keeping the room ventilated and a little warm speeds things up. We’ll let you know when it’s safe to sit on again, and give you a couple of simple tips to keep it looking fresh for longer.',
          'Between professional cleans, the best thing you can do is vacuum your upholstery regularly — including into the seams and under the cushions — and deal with spills straight away by blotting rather than rubbing. That simple routine stops soiling grinding in and makes each professional clean go further.',
        ],
      },
      {
        h2: 'Signs your upholstery is due a clean',
        body: [
          'Fabric furniture soils gradually, so it’s easy to stop noticing — but there are usually clear signs it’s time for a professional clean:',
        ],
        list: [
          'The colour looks flat or greyed compared with hidden areas under the cushions.',
          'The arms and headrests have darker patches from hands and hair.',
          'There’s a lingering smell that comes back however often you air the room.',
          'Someone in the house has been sneezing or wheezing more indoors.',
          'The fabric feels slightly tacky or rough rather than clean.',
          'It’s simply been a couple of years or more since it was last done.',
        ],
      },
      {
        h2: 'Upholstery, allergens and a healthier home',
        body: [
          'Soft furnishings are one of the biggest allergen reservoirs in a home. Unlike a carpet you walk over, a sofa is where you sit, lie and relax with your face and skin right against the fabric — and that fabric holds dust mites, their waste, pet dander and pollen at exactly the level you breathe them in.',
          'A thorough deep clean flushes that build-up out, which can make a genuine difference for anyone in the house with asthma, eczema or hay fever. It also removes the food debris and moisture that feed dust mites and bacteria in the first place, so the piece stays healthier for longer, not just cleaner on the surface.',
        ],
      },
      {
        h2: 'Local upholstery cleaners you can rely on',
        body: [
          'We’re based in Leicester and clean upholstery for homes right across Leicestershire — Oadby, Wigston, Glenfield, Syston, Birstall, Thurmaston, Enderby, Blaby, Loughborough and beyond. As a family-run team we turn up when we say we will, treat your home with care, and back every job with our satisfaction guarantee. We’re fully insured and DBS-checked, and it’s usually best value to have your suite cleaned in the same visit as your carpets.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does it cost to clean a sofa or suite?', a: 'Upholstery is priced per seat, from around £30 per seat, so a small two-seater costs less than a large corner suite. The exact price depends on the number and size of pieces, the fabric and how soiled they are — and we always agree a fixed price before starting.' },
      { q: 'Do you also clean dining chairs, footstools and headboards?', a: 'Yes — as well as sofas and armchairs we clean dining chairs, footstools, ottomans and fabric headboards. They’re priced per seat or per item; send a photo and we’ll quote the lot.' },
      { q: 'My sofa has a slight smell in the cushions — can you help?', a: 'Usually, yes. We deodorise as part of the clean and treat odours at the source rather than masking them. If a smell has soaked deep into the foam we’ll be honest about how much will come out.' },
      { q: 'Can you clean any type of fabric?', a: 'We clean the vast majority of upholstery fabrics — cotton, polyester and blends, velvet, chenille, linen and wool. We check the fabric code and test first, and we’ll always tell you honestly if a fabric (such as some delicate viscose) needs a specialist or shouldn’t be wet-cleaned.' },
      { q: 'How long does upholstery take to dry?', a: 'Usually 2–4 hours, as we match the amount of moisture to the fabric and there’s good airflow around furniture. A warm, ventilated room dries it faster.' },
      { q: 'Do you clean upholstery in my home?', a: 'Yes — everything is done in your home, so there’s no need to transport heavy furniture anywhere. We just need a little space to work around the piece.' },
      { q: 'Can you remove stains and pet smells from a sofa?', a: 'Often, yes. We treat stains individually and can neutralise pet odours at the source rather than masking them. We’ll tell you honestly beforehand what’s likely to lift fully, partially or not at all.' },
      { q: 'How often should upholstery be cleaned?', a: 'Every 12–24 months for most households keeps furniture fresh and helps it last, and more often if you have pets, young children or a light-coloured fabric that shows the dirt.' },
    ],
  },

  'sofa-cleaning': {
    h1: 'Sofa Cleaning in Leicester',
    metaTitle: 'Sofa Cleaning Leicester | Professional Settee Cleaners',
    metaDescription:
      'Professional sofa cleaning in Leicester. Fabric-safe deep cleaning for settees, corner suites and armchairs, done in your home and priced per seat. Lifts dirt, oils, pet hair and odour. Free quotes.',
    lead:
      'Your sofa is the most-used seat in the house — and it shows. On Target Carpet Cleaning provides professional sofa cleaning across Leicester and Leicestershire, deep-cleaning settees, corner suites and armchairs in your home to lift the body oils, crumbs, pet hair and odours that build up in the fabric long before it looks dirty.',
    sections: [
      {
        h2: 'Give your sofa a proper deep clean',
        body: [
          'A sofa takes a daily battering that no other piece of furniture does: hours of use, snacks and drinks, pets curling up, kids climbing about, and skin oils transferring every time someone leans back. All of that works its way deep into the fabric and foam, where a quick vacuum simply can’t reach it.',
          'We’re a local, family-run team, and sofa cleaning is one of the jobs we’re asked for most. Whether it’s a two-seater that’s looking tired, a big fabric corner suite or a favourite armchair, we can bring it back to life — cleaned thoroughly, in your living room, and dry the same day.',
        ],
      },
      {
        h2: 'The parts of a sofa that need the most attention',
        body: [
          'Sofas don’t soil evenly, so we focus on the areas that take the most use. The seat cushions absorb the most weight, moisture and warmth; the arms and headrests collect hand and hair oils that leave those tell-tale darker patches; and the crevices trap crumbs, coins, dust and pet hair. Corner suites and recliners have extra seams and moving sections where grime hides.',
          'We clean the whole piece — front, back, sides, cushions on both sides and into the seams — so you get an even, all-over refresh rather than a patchy result that highlights the bits that were missed.',
        ],
      },
      {
        h2: 'How we clean your sofa',
        body: [
          'The approach is tailored to your sofa’s fabric, but the process is always methodical:',
        ],
        list: [
          'Fabric check — we identify the material, read the cleaning code and test a hidden area for colour-fastness.',
          'Thorough vacuum — lifting hair, crumbs and grit out of cushions, seams and crevices first.',
          'Pre-treat — arms, headrests and seat cushions are pre-sprayed, along with any specific marks.',
          'Deep clean — hot water extraction for hard-wearing fabrics, or a gentle low-moisture method for delicate ones.',
          'Odour & stain treatment — pet smells and individual marks dealt with directly.',
          'Groom and quick-dry — pile reset and airflow set up so it’s ready to use again the same day.',
        ],
      },
      {
        h2: 'Fabric and leather sofas',
        body: [
          'Most of the sofas we clean are fabric — cotton and polyester blends, velvet, chenille and weave — and each is matched to the right method and moisture level so it comes up fresh without any risk of shrinkage or watermarking.',
          'If you have a leather sofa, let us know when you enquire: leather needs a different, dedicated cleaning and conditioning approach rather than fabric extraction, and we’ll advise honestly on the best route for it before booking anything in.',
        ],
      },
      {
        h2: 'Pet hair, kids and everyday life',
        body: [
          'If you have pets, the sofa is usually their favourite spot too — which means embedded hair and a lingering “doggy” smell that vacuuming never fully clears. Our clean lifts the hair out of the weave and treats the odour at the source rather than perfuming over it. For families, we can tackle the ground-in food, drink and general grime that comes with kids, using solutions that are safe around them once dry.',
        ],
      },
      {
        h2: 'Sofa cleaning prices in Leicester',
        body: [
          'We price by the seat, so you only pay for the size of the job — a two-seater costs less than a five-seat corner suite. Sofa and upholstery cleaning starts from around £30 per seat, with the final price depending on the size, the fabric and how soiled it is. It’s often best value to have the sofa done alongside your carpets in a single visit. Send a quick photo on WhatsApp and we’ll give you an accurate price.',
        ],
      },
      {
        h2: 'How often should you clean your sofa?',
        body: [
          'As a general guide, a sofa benefits from a professional clean every 12–18 months — but it really depends on your household. A busy family sofa, or one that pets are allowed on, is better done every 6–12 months, while a formal sitting-room sofa that sees little use can go longer.',
          'The key is not to wait until it looks obviously dirty. By the time soiling is visible it has already been grinding into the fibres for months, wearing them down and making stains harder to shift. Cleaning at sensible intervals keeps the sofa looking good and protects the fabric, so it lasts longer before it needs replacing.',
        ],
      },
      {
        h2: 'Signs it’s time for a sofa clean',
        body: [
          'Not sure whether your sofa needs doing? These are the usual giveaways:',
        ],
        list: [
          'The seat cushions and arms look darker than the sides or back.',
          'There’s a faint smell when you sit down or plump the cushions.',
          'Pet hair seems to work straight back into the weave after every vacuum.',
          'The fabric feels less soft, or slightly sticky, where it’s used most.',
          'Allergies or a stuffy nose seem worse when relaxing on it.',
          'You can’t remember the last time it was cleaned properly.',
        ],
      },
      {
        h2: 'A healthier seat for the whole family',
        body: [
          'The sofa is where most of us actually relax — reading, watching TV, kids sprawled across it, pets curled up on it — with skin in constant contact with the fabric. That makes it a magnet for skin cells, body oils, crumbs and moisture, and a comfortable home for the dust mites that trigger so many indoor allergies.',
          'A proper deep clean lifts all of that out, not just the visible marks. For families, and especially for anyone with asthma or eczema, that means a sofa that’s genuinely cleaner and healthier to spend time on — cleaned in your home, with solutions that are safe around children and pets once dry. We serve homes right across Leicester and Leicestershire, and back every clean with our satisfaction guarantee.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does it cost to clean a sofa?', a: 'Sofas are priced per seat, from around £30 per seat, so a two-seater costs less than a large corner suite. We confirm a fixed price up front — send a photo on WhatsApp for a quick quote.' },
      { q: 'Can you clean recliners, corner suites and sofa beds?', a: 'Yes — we clean recliners, corner and modular suites, and sofa beds. They have extra seams and moving sections, so let us know the type when you enquire and we’ll factor it into the quote.' },
      { q: 'Can you brighten up a dull, tired-looking sofa?', a: 'Often, yes — a lot of what makes a sofa look tired is built-up soiling dulling the colour, and lifting that out can make a real difference. Genuine fading from sunlight or worn fabric can’t be reversed, and we’ll tell you honestly which it is.' },
      { q: 'How long will my sofa take to dry?', a: 'Typically 2–4 hours, because we match the moisture to the fabric and airflow around a sofa is good. A warm, ventilated room speeds it up, and we’ll tell you when it’s ready to use.' },
      { q: 'Can you get pet hair and smells out of my sofa?', a: 'Yes. We lift embedded pet hair out of the weave and treat odours at the source rather than masking them. If a smell has soaked deep into the foam we’ll be honest about how much will come out.' },
      { q: 'Do you clean leather sofas?', a: 'Leather needs a dedicated cleaning and conditioning method rather than fabric extraction. Let us know it’s leather when you enquire and we’ll advise on the best approach.' },
      { q: 'Do you clean the sofa at my house?', a: 'Yes, everything is done in your home — there’s no need to move heavy furniture anywhere. We just need a bit of room to work around it.' },
      { q: 'Can you remove stains from sofa cushions?', a: 'Often, yes — we treat marks individually after identifying them. Some older or dye-based stains are permanent, and we’ll always tell you honestly before we start.' },
    ],
  },

  'rug-cleaning': {
    h1: 'Rug Cleaning in Leicester',
    metaTitle: 'Rug Cleaning Leicester | Wool & Oriental Rug Cleaners',
    metaDescription:
      'Professional rug cleaning in Leicester for wool, Persian, oriental, synthetic and delicate rugs. Fibre-checked, fabric-safe cleaning that lifts trapped grit, dust and odour. Free quotes, honest advice.',
    lead:
      'A good rug can tie a whole room together — and hold years of trapped dust and grit doing it. On Target Carpet Cleaning offers careful, professional rug cleaning across Leicester and Leicestershire, matching the method to the fibre so your rug comes up fresher and brighter without any risk to the pile, the colours or the backing.',
    sections: [
      {
        h2: 'Careful rug cleaning across Leicester',
        body: [
          'Rugs sit in the busiest parts of a home — under coffee tables, by the front door, in front of the sofa — so they collect a surprising amount of dry grit, dust, pollen and pet dander. Because they’re usually walked on with shoes and often never cleaned beyond a vacuum, that soiling grinds deep into the pile and dulls the colours over time.',
          'We’re a local, family-run team who treat every rug on its own terms. From hard-wearing synthetic rugs to treasured wool and oriental pieces, we take the time to identify what we’re working with and clean it properly — because a rug is often both an investment and something you’d hate to ruin.',
        ],
      },
      {
        h2: 'Every rug is different',
        body: [
          'Rug fibres and construction vary enormously, and so does the right way to clean them. Wool is durable but can felt or shrink if over-wet; Persian and oriental rugs often have natural dyes that can bleed if handled carelessly; viscose (art silk) is beautiful but notoriously delicate when wet; synthetics like polypropylene are tough and forgiving; and shag and high-pile rugs trap more dirt but need more drying.',
          'That’s why we always check the fibre, the dye stability and the construction before we start, and test for colour-fastness. We’ll then use a controlled, fabric-safe method suited to your particular rug — and if a rug is too delicate or valuable to clean safely on-site, we’ll tell you honestly rather than take a risk with it.',
        ],
      },
      {
        h2: 'How we clean rugs',
        body: [
          'Most rugs are cleaned in your home using a method matched to the fibre. A typical clean involves:',
        ],
        list: [
          'Fibre & dye check — identify the material and construction, and test colours for fastness.',
          'Dry soil removal — a thorough vacuum, as most of what’s in a rug is dry grit that’s best removed before any moisture.',
          'Pre-treatment — traffic areas, marks and any odours pre-treated with a suitable solution.',
          'Controlled clean — hot water extraction for robust rugs, or a gentle low-moisture method for delicate ones.',
          'Fringe & edge care — fringes and borders treated carefully by hand where needed.',
          'Grooming & drying — the pile is reset and airflow arranged so it dries evenly.',
        ],
      },
      {
        h2: 'Rugs, allergens and odour',
        body: [
          'Because a rug sits like a filter in a high-traffic spot, it holds onto dust mites, pollen and pet allergens that get stirred back into the room every time it’s walked over. A proper deep clean flushes that out, which can make a real difference for allergy and asthma sufferers, and lifts any trapped pet or musty odour at the same time. Colours come back, the pile feels softer underfoot, and the whole room feels fresher.',
        ],
      },
      {
        h2: 'How much does rug cleaning cost?',
        body: [
          'Rug cleaning is usually priced by size and fibre, since a small synthetic hallway runner is a very different job to a large wool lounge rug. Because rugs vary so much, the fairest way to price yours is to send a quick photo along with the rough dimensions and, if you know it, the material — we’ll then give you an accurate, fixed price with no obligation. Rugs are often cleaned at the same time as your carpets, which is the most cost-effective way to book.',
        ],
      },
      {
        h2: 'Rug types we clean',
        body: [
          'We clean a wide range of rugs, adjusting the method to suit each one:',
        ],
        list: [
          'Wool rugs — durable and beautiful, but prone to felting or shrinking if over-wet, so cleaned with care.',
          'Persian and oriental rugs — often hand-knotted with natural dyes that need gentle, colour-tested cleaning.',
          'Synthetic rugs (polypropylene, nylon) — hard-wearing and forgiving, ideal for busy family rooms.',
          'Viscose and “art silk” rugs — luxurious but very delicate when wet, so treated with the lightest touch.',
          'Cotton and flatweave rugs — cleaned gently to avoid distortion and colour run.',
          'Shag and high-pile rugs — trap the most dirt and need extra drying, but come up beautifully.',
        ],
      },
      {
        h2: 'How often should a rug be cleaned?',
        body: [
          'Most rugs benefit from a professional clean every 12–18 months, and more often if they sit in a high-traffic spot, in a home with pets, or by a door where outdoor grit gets walked in. Between cleans, regular gentle vacuuming and rotating the rug every few months so it wears evenly will keep it looking good and make each professional clean go further.',
          'A word of caution on spills: blot them straight away with a clean, dry cloth rather than rubbing, and resist the urge to scrub with household products — on a natural-fibre or natural-dye rug the wrong product can cause permanent colour loss. If in doubt, blot, then call us.',
        ],
      },
      {
        h2: 'Local rug cleaning you can trust',
        body: [
          'We’re a Leicester-based, family-run team, and we clean rugs for homes across Leicestershire — from everyday synthetic rugs to treasured wool and oriental pieces people have owned for decades. We take the time to identify what we’re working with, we’re honest about what a rug will and won’t take, and we’re fully insured, so you can trust us with something that’s often both valuable and irreplaceable. Every clean is backed by our satisfaction guarantee.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean the fringes and edges?', a: 'Yes — fringes and borders are cleaned carefully, by hand where needed, as they’re delicate and show the dirt. On older rugs we take extra care, as fringes can be fragile.' },
      { q: 'My rug is old and delicate — can you still clean it?', a: 'Often, yes, with a gentle low-moisture approach — but our first step is always to assess it honestly. If a rug is too fragile or valuable to clean safely, we’ll tell you rather than risk damaging it.' },
      { q: 'Can you clean wool and oriental rugs?', a: 'Yes — we clean wool, Persian and oriental rugs regularly, using gentle, controlled methods and testing dyes for fastness first. If a rug is too delicate or valuable to clean safely on-site, we’ll tell you honestly.' },
      { q: 'Do you clean rugs in my home?', a: 'Most rugs are cleaned in your home. This suits the majority of rugs well; for anything that needs specialist off-site treatment, we’ll let you know before booking.' },
      { q: 'Will cleaning make the colours run?', a: 'We always test for colour-fastness before we start and match the method to the dye and fibre, precisely to avoid bleeding. This careful approach is why we don’t recommend cleaning delicate rugs with a hired machine.' },
      { q: 'How much does rug cleaning cost?', a: 'It depends on the size and fibre of the rug. Send a photo with rough dimensions (and the material if you know it) and we’ll give you an accurate fixed price with no obligation.' },
      { q: 'How long does a rug take to dry?', a: 'It varies with the fibre and pile depth — thin synthetics dry quickly, while a thick wool rug holds more moisture. Good airflow and a warm room help; we’ll give you a realistic estimate for your rug.' },
      { q: 'Can you remove pet smells from a rug?', a: 'Often, yes — we treat odours at the source rather than masking them. If a rug has been repeatedly soiled and the smell has reached the backing, we’ll be honest about what’s achievable.' },
    ],
  },

  'mattress-cleaning': {
    h1: 'Mattress Cleaning in Leicester',
    metaTitle: 'Mattress Cleaning Leicester | Dust Mite & Allergen Removal',
    metaDescription:
      'Professional mattress cleaning in Leicester. Lifts dust mites, allergens, sweat and stains for a fresher, healthier bed. Low-moisture method, dry the same day. Free quotes, satisfaction guaranteed.',
    lead:
      'You spend a third of your life on your mattress — and it quietly collects everything that comes with that. On Target Carpet Cleaning offers professional mattress cleaning across Leicester and Leicestershire, lifting out the dust mites, allergens, sweat and stains that build up over the years, using a low-moisture method that leaves your bed fresher, healthier and dry to sleep on the same day.',
    sections: [
      {
        h2: 'A cleaner, healthier bed',
        body: [
          'Most people never clean their mattress beyond changing the sheets, yet it’s one of the dirtiest things we own. Over a few years a mattress absorbs litres of sweat, sheds skin cells, body oils and the occasional spill — and becomes home to millions of dust mites feeding on all of it.',
          'We’re a local, family-run team, and mattress cleaning is one of the most worthwhile jobs we do for the difference it makes to the air you breathe while you sleep. It’s quick, done in your bedroom, and the mattress is ready to use again the same day.',
        ],
      },
      {
        h2: 'Dust mites and allergens — the hidden problem',
        body: [
          'Dust mites are microscopic, harmless to look at, but their waste is one of the most common indoor allergy triggers — and a mattress is the perfect warm, humid home for them. For anyone in the household with asthma, eczema, rhinitis or general allergies, that build-up can mean a stuffy nose, itchy eyes or disturbed sleep that never quite adds up.',
          'A proper deep clean removes the dust mites, their waste and the dead skin they feed on, along with the pollen and dust that settle into the surface. Many people notice they simply sleep better and wake up clearer afterwards. It’s an especially good idea for children’s beds, for anyone recovering from illness, and before a new baby arrives.',
        ],
      },
      {
        h2: 'How we clean your mattress',
        body: [
          'Mattresses need a careful, low-moisture approach — you can’t soak something you have to sleep on that night. Our process is designed around that:',
        ],
        list: [
          'Inspection — check the mattress type, any stains and any problem areas.',
          'Thorough vacuum — remove surface dust, skin cells and debris from the top and sides.',
          'Pre-treat stains & odours — sweat marks and spills treated individually with a suitable solution.',
          'Low-moisture deep clean — lift soiling and allergens out of the surface layers without over-wetting.',
          'Sanitise & deodorise — freshen the mattress and neutralise trapped odours.',
          'Fast dry — set up airflow so it’s dry and ready to sleep on the same day.',
        ],
      },
      {
        h2: 'Stains, sweat and odours',
        body: [
          'Yellowed sweat patches, the odd accident, spilled drinks and general staining are all common — and often surprisingly treatable. We identify the mark first and treat it accordingly, and we deodorise as part of the clean so the mattress smells fresh rather than just looking better. As with everything we do, we’ll be honest upfront about older, set-in stains that may not fully lift.',
        ],
      },
      {
        h2: 'When to have your mattress cleaned',
        body: [
          'As a general rule, a professional mattress clean every 6–12 months keeps things healthy, but there are moments when it’s especially worth doing: before or after a house move, after illness in the bed, when allergies flare up, before a new baby arrives, or simply as part of a proper spring clean. Cleaning both sides and rotating the mattress at the same time helps it wear evenly and last longer.',
        ],
      },
      {
        h2: 'How much does mattress cleaning cost?',
        body: [
          'Mattress cleaning is priced by size — a single costs less than a double, king or super-king — and by condition. It’s an affordable add-on to a carpet or upholstery visit, and cleaning several beds in one appointment is the most cost-effective way to do the whole house. Message us with the mattress sizes for a quick, fixed price.',
        ],
      },
      {
        h2: 'Signs your mattress needs cleaning',
        body: [
          'Because a mattress spends most of its life under sheets, the warning signs are easy to miss. It’s worth booking a clean if you notice any of these:',
        ],
        list: [
          'Yellowed patches or visible stains on the surface.',
          'A stale or musty smell that lingers even after you change the bedding.',
          'Worse sniffles, a stuffy nose or itchy eyes overnight or first thing.',
          'It’s never been professionally cleaned and is more than a year or two old.',
          'It’s been through illness, an accident, or a spill.',
          'You’re inheriting a used mattress, or preparing a guest or child’s bed.',
        ],
      },
      {
        h2: 'Caring for your mattress between cleans',
        body: [
          'A few simple habits keep your mattress healthier for longer. A washable mattress protector is the single best investment — it takes the brunt of sweat and spills and can be laundered regularly. Beyond that, air the bed by pulling the covers back for a while each morning rather than making it straight away, vacuum the surface when you change the sheets, and rotate (or flip, if it’s designed to be flipped) the mattress every few months so it wears evenly.',
          'None of this replaces a periodic deep clean — protectors and vacuuming don’t remove the dust mites and allergens already living deeper in the mattress — but together they make each professional clean last longer and your bed a healthier place to sleep.',
        ],
      },
      {
        h2: 'Local mattress cleaning across Leicester',
        body: [
          'We’re a local, family-run team cleaning mattresses in homes across Leicester and Leicestershire, and it’s one of the most worthwhile jobs we do for the difference it makes to something you use every single night. Everything is done in your bedroom, with eco-friendly solutions that are safe once dry, and backed by our satisfaction guarantee. It’s an easy, affordable add-on to a carpet or upholstery visit — ideal for doing the whole family’s beds in one appointment.',
        ],
      },
    ],
    faqs: [
      { q: 'Can you clean both sides of the mattress?', a: 'Yes — where access allows we can clean both sides, which is a good opportunity to rotate or flip it at the same time so it wears evenly. Just let us know when you book.' },
      { q: 'Do you clean divan bases and headboards too?', a: 'Yes — fabric divan bases and headboards can be cleaned alongside the mattress, priced as part of the job. Send a photo and we’ll include them in the quote.' },
      { q: 'Can I sleep on the mattress the same night?', a: 'Yes. We use a low-moisture method specifically so the mattress dries quickly and is ready to sleep on the same day, provided the room is warm and ventilated.' },
      { q: 'Does mattress cleaning really help with allergies?', a: 'It can make a genuine difference. Removing dust mites, their waste and the skin cells they feed on takes away a very common indoor allergy trigger, which often helps asthma, eczema and hay-fever sufferers sleep better.' },
      { q: 'Can you remove sweat stains and odours?', a: 'Often, yes — we treat stains individually and deodorise as part of the clean. We’ll be honest about older, set-in marks that may only partially lift.' },
      { q: 'How often should a mattress be cleaned?', a: 'Every 6–12 months is a good rule of thumb, and it’s especially worth doing after illness, before a new baby arrives, or when allergies are playing up.' },
      { q: 'How much does it cost?', a: 'It depends on the size of the mattress and its condition. It’s an affordable add-on to a carpet or upholstery clean — message us the sizes for a fixed price.' },
      { q: 'Do you clean the mattress at my home?', a: 'Yes, everything is done in your bedroom — there’s no need to move the mattress anywhere. We just need a little space around the bed.' },
    ],
  },

  'pet-stain-odour-removal': {
    h1: 'Pet Odour Removal in Leicester',
    metaTitle: 'Pet Odour Removal Leicester | Pet Stain & Urine Treatment',
    metaDescription:
      'Pet odour and stain removal in Leicester for carpets and upholstery. Eco-friendly treatment that neutralises urine and pet smells at the source, not just masks them. Honest advice, free quotes.',
    lead:
      'Love the pet, not the smell. On Target Carpet Cleaning provides specialist pet odour and stain removal across Leicester and Leicestershire, using eco-friendly treatments that tackle urine, accidents and that lingering “pet” smell at the source — in the carpet, the underlay and the upholstery — rather than simply covering it up for an afternoon.',
    sections: [
      {
        h2: 'Getting rid of pet smells for good',
        body: [
          'Every pet owner knows the problem: you stop noticing the smell in your own home, but visitors don’t, and no amount of plug-ins or sprays seems to fix it properly. That’s because air fresheners only mask odour — the actual source is still sitting in the carpet fibres, the backing and the underlay beneath.',
          'We’re a local, family-run team and pet households are a big part of what we do. Our job is to remove the cause, not perfume over it, so your home smells genuinely clean — and stays that way.',
        ],
      },
      {
        h2: 'Why pet urine is such a stubborn problem',
        body: [
          'Pet urine is the toughest of all pet odours because of what it does once it dries. It soaks straight through the carpet into the backing and underlay, and as it dries it crystallises into salts that reactivate and smell every time the air gets humid — which is why the odour often seems to come and go, or comes back weeks after you thought you’d cleaned it. Those crystals aren’t water-soluble, so an ordinary clean or a rented machine just wets them and spreads the problem.',
          'On top of the smell, urine can bleach or stain the carpet, and repeated accidents in the same spot build up layer on layer. The only reliable fix is to break down the deposits chemically and flush them out — not to scrub the surface and hope.',
        ],
      },
      {
        h2: 'How we treat pet stains and odours',
        body: [
          'Our treatment is designed to reach the source, and we tailor it to how deep the problem goes:',
        ],
        list: [
          'Inspection — locate the affected areas and gauge how far the contamination has spread.',
          'Targeted pre-treatment — apply eco-friendly solutions that break down urine deposits and odour-causing bacteria at a molecular level.',
          'Deep extraction — flush the broken-down deposits and residue out of the fibres and backing.',
          'Odour neutralising — treat the smell itself rather than masking it, into the affected layers where possible.',
          'Honest assessment — if the underlay is contaminated beyond what a surface clean can reach, we’ll tell you plainly.',
        ],
      },
      {
        h2: 'Carpets, upholstery and honest advice',
        body: [
          'We treat pet stains and odours on carpets, rugs, sofas and other upholstery — anywhere your pet spends time. Our solutions are eco-friendly and safe around animals and children once dry, so you’re not swapping a pet smell for a chemical one.',
          'We’re also straight with you about what’s achievable. Sometimes urine has soaked so far into the underlay or floorboards that no surface treatment will fully solve it, and in those cases the honest answer is that the underlay may need replacing. We’d always rather tell you that than clean the same spot twice, take your money and leave the smell behind.',
        ],
      },
      {
        h2: 'Fresh accidents and long-standing problems',
        body: [
          'Our treatment works on both a fresh accident and a smell that’s been building for years. If your pet has just had an accident, the sooner it’s treated the better the result and the less chance it sets in — but even long-standing, repeatedly-soiled areas can often be dramatically improved. It’s also well worth booking if you’re moving into a home where the previous owners had pets, or preparing to sell or let your own.',
        ],
      },
      {
        h2: 'How much does pet odour removal cost?',
        body: [
          'Because pet problems vary so much — from a single fresh accident to years of build-up across a room — pricing depends on the number and severity of the affected areas, and whether it’s carpet, upholstery or both. Pet treatment is usually combined with a full clean of the room or item so everything matches. The easiest way to get an accurate, fixed price is to message us on WhatsApp describing the problem, ideally with a photo.',
        ],
      },
      {
        h2: 'Beyond urine: the other pet messes we tackle',
        body: [
          'Urine is the toughest pet problem, but it’s far from the only one. That general “doggy” smell that builds up in a home comes from oils in the coat, dander and saliva transferring onto carpets and upholstery day after day. Then there are the one-off events — muddy paws after a walk, a sick dog, moulting season working hair deep into the pile — all of which everyday vacuuming never fully clears.',
          'We treat the full range: ground-in mud and dirt from the garden, embedded pet hair, sickness stains and the general background odour that makes a home smell of pets even when it’s tidy. The aim is always the same — lift the cause out rather than spraying something floral over the top of it.',
        ],
      },
      {
        h2: 'The hygiene side of pet accidents',
        body: [
          'Pet odour isn’t only unpleasant — repeated accidents leave more than a smell behind. Urine breaks down into ammonia and feeds odour-causing bacteria in the carpet and underlay, and soiled areas can hold onto that contamination for a long time if they’re only surface-cleaned. That matters most in homes with young children playing on the floor, or anyone with allergies or a sensitivity to strong ammonia smells.',
          'Our treatment is designed to break down and remove that contamination, not just deodorise it, and we use eco-friendly solutions that are safe around pets and children once the area has dried — so you get a home that’s genuinely cleaner and healthier, not just fresher-smelling for a day.',
        ],
      },
      {
        h2: 'Local pet odour specialists in Leicester',
        body: [
          'We’re a local, family-run team and pet-owning households are a big part of what we do across Leicester and Leicestershire. That experience matters with pet problems, because so much comes down to honest judgement — knowing when a smell will lift with treatment and when it has reached the underlay and won’t. We give you that straight answer, treat the problem properly, and back it with our satisfaction guarantee. It’s also well worth booking before you sell or let a home, or when moving into one where pets lived before.',
        ],
      },
    ],
    faqs: [
      { q: 'Can you help before I sell or let my home?', a: 'Definitely — removing pet odour is one of the best-value things you can do before viewings, as that “pet smell” puts buyers and tenants off quickly. It’s also worth doing when moving into a home where pets lived before.' },
      { q: 'Is it safe to keep using the room and let my pets back in?', a: 'Yes — our solutions are eco-friendly and safe around pets and children once the treated area is dry. We’ll let you know how long to keep off it.' },
      { q: 'Can you actually get rid of pet urine smell, or just cover it?', a: 'We remove it at the source. Our eco-friendly treatment breaks down the urine deposits and odour-causing bacteria in the fibres and backing and flushes them out, rather than masking the smell like an air freshener does.' },
      { q: 'Why does the smell keep coming back after I clean it?', a: 'Dried urine crystallises into salts that reactivate and smell whenever the air is humid, and they aren’t water-soluble — so ordinary cleaning just wets them temporarily. Our treatment breaks those deposits down chemically so the odour doesn’t return.' },
      { q: 'Is the treatment safe for my pets and children?', a: 'Yes. We use eco-friendly, non-toxic solutions that are safe around pets and children once the area is dry.' },
      { q: 'What if the smell is in the underlay?', a: 'Sometimes urine soaks beyond what a surface clean can reach. If the underlay is contaminated beyond recovery we’ll tell you honestly — it may need replacing — rather than charging you to clean the same spot repeatedly.' },
      { q: 'Can you treat old pet stains, not just fresh ones?', a: 'Yes. Fresh accidents give the best results, but long-standing and repeatedly-soiled areas can usually be improved a great deal too.' },
      { q: 'Do you treat sofas and rugs as well as carpets?', a: 'Yes — we treat pet stains and odours on carpets, rugs and upholstery, anywhere your pet spends time.' },
    ],
  },

  'stain-spot-removal': {
    h1: 'Stain Removal in Leicester',
    metaTitle: 'Stain Removal Leicester | Carpet Stain & Spot Treatment',
    metaDescription:
      'Professional carpet stain removal in Leicester — wine, coffee, ink, grease, mud and traffic marks. Stains identified and treated properly, with honest advice on what will and won’t lift. Free quotes.',
    lead:
      'One stubborn stain can spoil an otherwise perfectly good carpet. On Target Carpet Cleaning offers specialist stain and spot removal across Leicester and Leicestershire — identifying what a mark actually is and treating it properly, with honest advice on what will lift and what won’t, so you’re never paying for a promise we can’t keep.',
    sections: [
      {
        h2: 'Expert stain removal across Leicester',
        body: [
          'Everyday life leaves its mark on a carpet: a knocked glass of red wine, spilled coffee, a leaking pen, muddy paws, dropped food and the dark “traffic lanes” worn into hallways and doorways. Many of these lift beautifully when they’re treated correctly — and set permanently when they’re not.',
          'We’re a local, family-run team, and our approach to stains is simple: identify it, treat it with the right product, and be honest about the outcome before we start. No scrubbing away and hoping, and no charging you for a result we can’t deliver.',
        ],
      },
      {
        h2: 'Why the right treatment matters',
        body: [
          'The single biggest cause of permanent carpet stains isn’t the spill — it’s the wrong reaction to it. Rubbing a stain damages and spreads it; the wrong supermarket product can set it, bleach the carpet or leave a sticky residue that attracts more dirt; and too much water can push the stain down into the backing where it wicks back up later. Heat, in particular, can permanently bond protein and tannin stains to the fibres.',
          'Different stains need genuinely different chemistry — a tannin stain like tea or coffee is treated very differently to a protein stain like blood or a grease-based mark. Getting that right is the difference between a stain that disappears and one that’s there for good, which is exactly what you’re paying a professional for.',
        ],
      },
      {
        h2: 'Stains we treat',
        body: [
          'We tackle the full range of everyday and stubborn marks, including:',
        ],
        list: [
          'Red wine, tea, coffee and fruit juice.',
          'Food, sauces, curry and grease.',
          'Ink, pen, marker and cosmetics.',
          'Mud, grass and general outdoor grime.',
          'Blood and other protein stains.',
          'Dark traffic lanes worn into hallways, doorways and stairs.',
        ],
      },
      {
        h2: 'Our honest approach',
        body: [
          'Before we treat anything, we identify the stain and check the carpet, then tell you plainly whether we expect it to come out fully, partially or not at all. Some marks — certain dyes, bleach damage, very old set-in stains, or anything that’s already been made worse by DIY attempts — are simply permanent no matter who cleans them, and no honest cleaner can promise otherwise.',
          'What we can promise is that we’ll give the stain the best possible chance with the correct treatment, and we won’t take your money for a miracle we can’t perform. That honesty is a big part of why our customers trust us and come back.',
        ],
      },
      {
        h2: 'Stain removal and a full clean',
        body: [
          'Stain treatment is usually carried out as part of a full room or carpet clean, for a simple reason: once a stain lifts, a bright clean patch on an otherwise dull, evenly-soiled carpet can look almost as obvious as the stain did. Cleaning the whole area means the treated spot blends in and the entire carpet looks refreshed. For spot treatments on an otherwise clean carpet, we’re happy to advise on the best approach for your situation.',
        ],
      },
      {
        h2: 'What should you do before we arrive?',
        body: [
          'If you’ve had a fresh spill, the best first aid is to blot — never rub — with a clean, dry cloth to lift as much as possible, working from the outside of the spill inwards. Avoid supermarket stain removers and excess water, as these often make professional removal harder. Then get in touch as soon as you can: the sooner a fresh stain is treated properly, the better the result. Send us a photo on WhatsApp and we’ll advise.',
        ],
      },
      {
        h2: 'Why DIY stain removers often make it worse',
        body: [
          'It feels natural to reach for a supermarket spray and scrub at a fresh stain — but it’s the single most common reason a stain ends up permanent. Scrubbing frays and distorts the pile and pushes the stain deeper and wider; many off-the-shelf products leave a sticky residue that actually attracts dirt, so a faint mark becomes a magnet for grime; and some remove the carpet’s own colour, swapping a stain for a pale bleached patch that can’t be undone.',
          'The other hidden trap is over-wetting. Soaking a stain drives it down into the backing, where it dries and then wicks back up to the surface days later — which is why so many “removed” stains mysteriously reappear. Getting a professional onto it, with the right product and proper extraction, gives the stain its best chance before any of that damage is done.',
        ],
      },
      {
        h2: 'Traffic lanes and general dulling',
        body: [
          'Not every mark is a spill. The dark grey pathways worn into hallways, doorways, the foot of the stairs and in front of the sofa are “traffic lane” soiling — a mix of oily grime and fine grit ground in by constant footfall. It builds up so gradually that people often assume the carpet is simply worn out, when in fact a lot of that darkening lifts with proper pre-treatment and hot water extraction. Restoring those lanes can make an old carpet look years younger.',
        ],
      },
      {
        h2: 'Local stain removal you can trust',
        body: [
          'We’re a Leicester-based, family-run team, and our reputation is built on honesty as much as results. We give stubborn stains the best possible chance with the right treatment, we tell you plainly what to expect before we start, and we never charge for a miracle we can’t perform. We cover Leicester and the surrounding Leicestershire areas, we’re fully insured, and every clean is backed by our satisfaction guarantee.',
        ],
      },
    ],
    faqs: [
      { q: 'Can you remove pet stains as well?', a: 'Yes — pet stains and odours are a speciality of ours. There’s more detail on our pet odour removal page, but we can treat pet marks as part of a stain or full carpet clean.' },
      { q: 'Do you guarantee a stain will come out?', a: 'We can’t honestly guarantee that every stain will fully lift — some are permanent regardless of who treats them. What we guarantee is the correct treatment, the best possible chance, and an honest assessment before we start rather than a false promise.' },
      { q: 'Can you remove red wine and coffee stains?', a: 'Often, yes — tannin stains like wine, tea and coffee respond well to the correct treatment, especially if they haven’t been scrubbed or heat-set. We identify the stain first and treat it accordingly.' },
      { q: 'Will every stain come out?', a: 'No, and we’ll always be honest about it. Some dyes, bleach damage and very old or DIY-worsened stains are permanent regardless of who cleans them. We tell you what to expect before we start and give the stain the best possible chance.' },
      { q: 'What should I do with a fresh spill before you arrive?', a: 'Blot it — don’t rub — with a clean, dry cloth, working from the outside in, and avoid supermarket stain removers and excess water. Then contact us as soon as you can; fresh stains treated quickly give the best results.' },
      { q: 'Why do you recommend cleaning the whole room?', a: 'When a stain lifts from an evenly-soiled carpet it can leave a noticeably brighter clean patch. Cleaning the whole area means the treated spot blends in and the carpet looks uniformly fresh.' },
      { q: 'Can you remove old, set-in stains?', a: 'Sometimes — it depends on what the stain is and how it was previously treated. We’ll assess it and give you an honest view before doing any work.' },
      { q: 'How much does stain removal cost?', a: 'Stain treatment is usually part of a room or carpet clean, and the price depends on the number and severity of the marks. Send a photo on WhatsApp for honest advice and a fixed quote.' },
    ],
  },

  'commercial-carpet-cleaning': {
    h1: 'Commercial Carpet Cleaning in Leicester',
    metaTitle: 'Commercial Carpet Cleaning Leicester | Business Cleaners',
    metaDescription:
      'Commercial carpet cleaning in Leicester for offices, shops, salons, restaurants and business premises. Out-of-hours scheduling, fully insured, fast-drying and free site quotes.',
    lead:
      'First impressions count in business, and tired, marked carpets quietly undermine them. On Target Carpet Cleaning provides commercial carpet cleaning across Leicester and Leicestershire — working out of hours, around your opening times, so your premises always look their best without a moment’s disruption to trading.',
    sections: [
      {
        h2: 'Professional carpet cleaning for Leicester businesses',
        body: [
          'Business carpet takes a very different kind of punishment to the carpet at home — relentless foot traffic, wheeled chairs, spilled coffee, and dirt walked straight in from the street all day long. It greys, flattens and marks far faster, and because you can’t close for a day to deal with it, it often gets left until it looks genuinely tired.',
          'We’re a local, family-run team that businesses across the city trust to keep their floors sharp. From a single office to a shop, salon or restaurant, we deliver a thorough, professional clean on a schedule that suits you — with a clear, fixed price agreed in advance.',
        ],
      },
      {
        h2: 'Premises we clean',
        body: [
          'We clean carpets and soft flooring across a wide range of commercial settings, tailoring the approach to each:',
        ],
        list: [
          'Offices and workplaces — desks, meeting rooms and high-traffic walkways.',
          'Shops and retail — keeping the shop floor presentable without closing.',
          'Salons, studios and clinics — hygienic, spotless floors for client-facing spaces.',
          'Restaurants, cafés and pubs — lifting food, drink and grease from dining areas.',
          'Waiting rooms and receptions — where first impressions are made.',
          'Landlords and managed premises — turnaround cleans between occupants.',
        ],
      },
      {
        h2: 'Cleaning around your business — not through it',
        body: [
          'The whole point of a commercial clean is that you never notice it happened, except that everything looks better. We work evenings, weekends and early mornings so the job takes place when your premises are quiet, and our fast-drying hot water extraction means floors are ready well before staff or customers arrive.',
          'For larger sites we can plan the work zone by zone so any occupied areas keep running, and we’re happy to fit around shift patterns, trading hours and quiet periods. Just tell us how your week runs and we’ll build the clean around it.',
        ],
      },
      {
        h2: 'Insured, compliant and reliable',
        body: [
          'Having contractors on your premises means paperwork matters. We’re fully insured with public liability cover and our technicians are DBS-checked, so you can have us on site with complete confidence. We turn up when we say we will — reliability being half the value of a good commercial contractor — and we treat your workplace with care and discretion.',
        ],
      },
      {
        h2: 'One-off cleans or a regular schedule',
        body: [
          'Some businesses need a one-off refresh — before an event, an inspection, a photo shoot or a lease handover. Others are better served by a regular programme — monthly, quarterly or seasonal — that keeps carpets consistently presentable and stops soiling reaching the point where it’s hard to reverse. Regular maintenance cleaning also protects the carpet itself, extending its life and delaying an expensive replacement. We’ll happily advise on what makes sense for your footfall.',
        ],
      },
      {
        h2: 'Commercial cleaning quotes',
        body: [
          'Commercial pricing depends on the floor area, the type of premises and the current condition, so we quote each job individually rather than guessing. For larger premises we can arrange a quick site visit; for smaller ones, your approximate floor area and a couple of photos are usually enough for an accurate, fixed price. Get in touch with your square footage and we’ll come straight back to you.',
        ],
      },
      {
        h2: 'What tired carpets say about your business',
        body: [
          'Customers and clients form an impression of a business within seconds of walking in, and flooring is a big part of it — often without anyone consciously noticing. Grubby, matted carpet and dark traffic lanes quietly signal that standards have slipped, undermining an otherwise smart reception, shop floor or restaurant, and even raising doubts about hygiene in food and care settings.',
          'Clean, well-kept carpet does the opposite: it reinforces that this is a professional, well-run place that looks after the details. For a modest, predictable cost, keeping your floors sharp protects the impression your premises make on every visitor — and on the staff who spend all day there.',
        ],
      },
      {
        h2: 'Protecting your flooring investment',
        body: [
          'Commercial carpet is expensive to replace, and the main thing that wears it out is abrasive grit ground into the pile by constant foot traffic — it acts like sandpaper on the fibres every time someone walks across it. Left to build up, it dulls and flattens the carpet permanently, bringing a costly replacement forward by years.',
          'Regular professional cleaning removes that abrasive soiling before it does lasting damage, protecting your investment and getting the maximum life out of the flooring you’ve paid for. A planned maintenance clean is almost always cheaper over time than reactive deep cleans and premature replacement.',
        ],
      },
      {
        h2: 'How often should commercial carpets be cleaned?',
        body: [
          'There’s no single answer — it depends on footfall — but a sensible rule of thumb helps you plan and budget. High-traffic, customer-facing areas such as receptions, retail floors, restaurants and busy corridors usually warrant cleaning monthly to quarterly to stay consistently presentable. General office space and lower-traffic areas are typically fine on a quarterly to twice-yearly cycle.',
          'Whatever the frequency, a little maintenance goes a long way: prompt attention to spills and spot-cleaning between full cleans keeps marks from setting, and good entrance matting stops a surprising amount of grit reaching the carpet in the first place. Once we’ve seen your premises and how they’re used, we’ll recommend a realistic schedule rather than selling you more cleaning than you need.',
        ],
      },
      {
        h2: 'Trusted by businesses across Leicester',
        body: [
          'We’re a local, family-run team, and businesses across Leicester and Leicestershire rely on us to keep their premises presentable. We’re fully insured with public liability cover and our technicians are DBS-checked, so we’re straightforward to have on site; we turn up when we say we will, work discreetly around your operation, and agree a clear fixed price up front. Whether you need a one-off refresh or an ongoing schedule, we make your carpets one less thing to think about.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you clean outside our business hours?', a: 'Yes. We work evenings, weekends and early mornings so cleaning happens when your premises are quiet, and our fast-drying method means floors are ready before you reopen.' },
      { q: 'Can you provide invoices for our accounts?', a: 'Yes — we provide proper invoices for commercial work, which is handy for your records and accounts. We can also set up recurring billing for a regular maintenance schedule.' },
      { q: 'Do you cover premises across Leicestershire?', a: 'Yes — we cover Leicester and the surrounding Leicestershire towns. Tell us where you are and we’ll confirm; we very likely cover you.' },
      { q: 'How often should we have our carpets cleaned?', a: 'It depends on footfall — customer-facing areas such as receptions and retail floors often suit monthly to quarterly cleaning, while general office space is usually fine quarterly to twice a year. Once we’ve seen your premises we’ll recommend a realistic schedule.' },
      { q: 'What kinds of premises do you cover?', a: 'Offices, shops, salons, clinics, restaurants, cafés, pubs, waiting rooms and more across Leicester and Leicestershire. If it has carpet or soft flooring and it’s a business, we can help.' },
      { q: 'Are you insured to work on our premises?', a: 'Yes — we’re fully insured with public liability cover and our technicians are DBS-checked.' },
      { q: 'Can we set up regular cleaning?', a: 'Absolutely. We offer one-off cleans and regular schedules — monthly, quarterly or seasonal — which keep carpets consistently presentable and help them last longer.' },
      { q: 'How do you price commercial work?', a: 'By floor area, premises type and condition. For larger sites we can arrange a quick site visit; for smaller ones, your approximate floor area and a couple of photos are usually enough for a fixed quote.' },
      { q: 'Will the carpets be dry before we open?', a: 'Yes — our hot water extraction removes most of the moisture on the spot, so floors are typically dry within a few hours, well before staff or customers arrive.' },
    ],
  },

  'office-carpet-cleaning': {
    h1: 'Office Carpet Cleaning in Leicester',
    metaTitle: 'Office Carpet Cleaning Leicester | Out-of-Hours Cleaners',
    metaDescription:
      'Office carpet cleaning in Leicester — out-of-hours deep cleaning for offices, meeting rooms and walkways. Fast-drying, low-disruption, healthier workspaces. Free site quotes.',
    lead:
      'A clean, well-kept office says a lot about a business — to staff and visitors alike. On Target Carpet Cleaning provides office carpet cleaning across Leicester and Leicestershire, working out of hours to deep-clean desks areas, meeting rooms and walkways so your workspace looks sharp and feels healthier, with no disruption to the working day.',
    sections: [
      {
        h2: 'Keep your office looking professional',
        body: [
          'Office carpet is walked over thousands of times a day — under desks, along the same walkways, in and out of meeting rooms — and it greys and flattens far faster than carpet at home. Add wheeled chairs, dropped lunches and spilled coffee, and a workplace floor can start to look tired surprisingly quickly, quietly undermining the impression your office makes.',
          'We’re a local, family-run team, and we help Leicester businesses keep their offices looking sharp with thorough, out-of-hours cleaning. Whether it’s a small serviced suite or a whole floor of open-plan, we deliver a consistent, professional result on a schedule that fits around your team.',
        ],
      },
      {
        h2: 'A healthier, more productive workspace',
        body: [
          'Office carpet acts like a filter, trapping the dust, allergens and germs that come with a busy shared space. Left uncleaned it stops absorbing and starts releasing them back into the air every time someone walks past — which does nothing for a workforce trying to concentrate, and even less for anyone with allergies or asthma.',
          'A regular deep clean flushes that build-up out, contributing to better indoor air quality and a fresher, more pleasant place to work. A tidy, cared-for environment also sends a clear signal to staff and clients that the details matter here — a small thing that quietly supports morale and your professional image.',
        ],
      },
      {
        h2: 'The areas that need it most',
        body: [
          'Offices soil in predictable patterns, and we focus on where it counts:',
        ],
        list: [
          'Main walkways and corridors — the darkest traffic lanes in any office.',
          'Under and around desks — where chairs, feet and crumbs concentrate.',
          'Meeting and board rooms — the spaces clients actually see.',
          'Receptions and breakout areas — high-traffic and high-visibility.',
          'Kitchen and print-station surrounds — prone to spills and marks.',
        ],
      },
      {
        h2: 'Out of hours, ready for the morning',
        body: [
          'We clean when your office is empty — evenings and weekends — so there’s no disruption to meetings, calls or concentration, and no equipment to work around while people are trying to use it. Our fast-drying hot water extraction removes most of the moisture on the spot, so carpets are dry and ready for the first person through the door the next morning. For bigger floors we can work zone by zone across a few visits to keep everything running.',
        ],
      },
      {
        h2: 'Regular office maintenance plans',
        body: [
          'The most cost-effective way to look after office carpet is not to let it get badly soiled in the first place. A regular maintenance clean — monthly, quarterly or to suit your footfall — keeps carpets consistently presentable, protects them from the grinding wear that shortens their life, and spreads the cost predictably rather than facing a big deep-clean bill (or a replacement) down the line. We’re happy to recommend a sensible frequency once we’ve seen the space.',
        ],
      },
      {
        h2: 'Office cleaning quotes',
        body: [
          'We price office work by floor area, layout and condition, and quote each one individually. Send us your approximate square footage and a couple of photos, or ask us to pop in for a quick look at larger premises, and we’ll come back with a clear, fixed price and a schedule that works around your business. We’re fully insured and DBS-checked, so we’re straightforward to have on site.',
        ],
      },
      {
        h2: 'Signs your office carpet needs attention',
        body: [
          'Office carpet declines so gradually that people stop seeing it — until a client visits and you notice it through their eyes. It’s usually time for a clean when:',
        ],
        list: [
          'Dark traffic lanes have appeared along the main walkways and by the entrance.',
          'The carpet under and around desks looks greyer than the edges of the room.',
          'There are coffee rings, spills and chair-wheel marks that vacuuming won’t shift.',
          'The office smells stuffy or stale, especially first thing in the morning.',
          'It’s simply been a long time, or never, since it was professionally cleaned.',
        ],
      },
      {
        h2: 'Coffee, ink and everyday office spills',
        body: [
          'Offices have their own signature marks, and we deal with all of them. Coffee and tea rings around desks and kitchen areas, printer and toner ink, biro and marker, food and lunch spills in breakout zones, and the scuffs and marks left by wheeled chairs are all part of a normal office clean. As with any stain, we identify what it is and treat it correctly — and we’re honest about anything, like older ink or toner, that may not fully lift.',
          'Because these marks concentrate in the most visible, client-facing spots — reception, meeting rooms and desks — clearing them makes an immediate difference to how sharp the whole office looks.',
        ],
      },
      {
        h2: 'Trusted by Leicester workplaces',
        body: [
          'From small serviced suites and business-park units to open-plan floors, workplaces across Leicester and Leicestershire rely on us to keep their carpets looking professional. We’re a local, family-run team — fully insured, DBS-checked and discreet — and we work to a fixed price agreed in advance, around your hours, with the flexibility to handle a one-off refresh or an ongoing maintenance schedule. Reliability matters as much as the clean itself, and turning up when we say we will is a promise we keep.',
        ],
      },
    ],
    faqs: [
      { q: 'Do we need to move desks and equipment first?', a: 'Not usually — we clean the open walkways, desk areas and meeting rooms around your existing layout, and can work zone by zone across visits for larger floors. If you’d like under fully-cleared areas cleaned too, just let us know and we’ll plan for it.' },
      { q: 'Can you clean office chairs and fabric partitions as well?', a: 'Yes — fabric office chairs and upholstered partitions or acoustic screens can be cleaned alongside the carpet. Mention them when you enquire and we’ll include them in the quote.' },
      { q: 'Will you clean outside office hours?', a: 'Yes — we work evenings and weekends so the clean happens when the office is empty, and our fast-drying method means carpets are ready for the next working morning.' },
      { q: 'How does clean carpet help the workplace?', a: 'Beyond looking professional, deep-cleaned carpet stops releasing trapped dust and allergens back into the air, supporting better indoor air quality and a fresher place to work — which matters for anyone with allergies or asthma.' },
      { q: 'Can you clean around our desks and equipment?', a: 'Yes. We focus on walkways, desk areas, meeting rooms and reception, and for larger floors we can work zone by zone across visits so everything keeps running.' },
      { q: 'Do you offer regular contracts?', a: 'We do — monthly, quarterly or seasonal maintenance plans keep carpets consistently presentable, protect them from wear and spread the cost predictably.' },
      { q: 'Are you insured and DBS-checked?', a: 'Yes — we’re fully insured with public liability cover and our technicians are DBS-checked, so we’re straightforward to have on your premises.' },
      { q: 'How do you quote for an office?', a: 'By floor area, layout and condition. Send your approximate square footage and a couple of photos, or ask us to visit larger premises, and we’ll provide a fixed price and a schedule.' },
    ],
  },

  'end-of-tenancy-cleaning': {
    h1: 'End of Tenancy Carpet Cleaning in Leicester',
    metaTitle: 'End of Tenancy Carpet Cleaning Leicester | Deposit-Back Cleans',
    metaDescription:
      'End of tenancy carpet cleaning in Leicester to the standard landlords and letting agents expect. Help protect your deposit with a professional, documented clean. Fast turnaround, free quotes.',
    lead:
      'Carpets are one of the first things checked at the end of a tenancy — and one of the most common reasons deposits get docked. On Target Carpet Cleaning provides end of tenancy carpet cleaning across Leicester and Leicestershire, cleaning to the standard letting agents and landlords expect so tenants can protect their deposit and landlords can turn a property around quickly.',
    sections: [
      {
        h2: 'Protect your deposit with a professional clean',
        body: [
          'At check-out, carpets are inspected closely and compared against their condition at check-in, allowing for fair wear and tear. A carpet that merely looks “hoovered” often isn’t enough — inventory clerks and agents are looking for a professional standard, and a poor result here is one of the most frequent causes of deposit deductions.',
          'We’re a local, family-run team who clean rental carpets to that standard day in, day out. Whether you’re a tenant trying to get every penny of your deposit back, a landlord preparing to re-let, or an agent managing a turnaround, we make the carpets one less thing to worry about.',
        ],
      },
      {
        h2: 'Cleaning to the check-out standard',
        body: [
          'The key to a smooth check-out is meeting the standard set at check-in. Our full hot water extraction clean lifts the ground-in dirt, traffic lanes and marks that build up over a tenancy, restoring the carpet as far as its condition allows — and we’ll always be honest about anything that’s genuine wear, damage or a permanent stain rather than dirt, so you know where you stand before the inspection.',
          'Many disputes come down to evidence, so a professional clean carried out right before check-out — ideally documented — gives tenants a strong position if a deduction is ever questioned. We can provide confirmation of the work carried out for exactly this reason.',
        ],
      },
      {
        h2: 'For tenants, landlords and agents',
        body: [
          'We work with all sides of a tenancy and fit around whoever is arranging the clean:',
        ],
        list: [
          'Tenants — clean carpets right before check-out to give your deposit the best possible protection.',
          'Landlords — present a fresh, move-in-ready property to attract good tenants faster.',
          'Letting agents — a reliable contractor for turnarounds, booked around key handovers.',
          'Whole-property jobs — all rooms, hallways and stairs cleaned in a single visit.',
        ],
      },
      {
        h2: 'Timed around your move',
        body: [
          'End of tenancy work is all about timing. Carpets are best cleaned once the property is empty of furniture, right before the final inspection, and we can usually fit same-week appointments around tight moving deadlines and key handover dates. If you’re coordinating with a wider end-of-tenancy or property clean, we’ll slot in so the carpets are the finishing touch rather than a last-minute panic.',
        ],
      },
      {
        h2: 'Whole-property cleaning made simple',
        body: [
          'For a rental it usually makes sense to clean everything in one go — living areas, bedrooms, the hallway and the stairs, which take the heaviest wear of all. Booking the whole property as a single visit is more efficient and better value than room by room, and it means the entire carpeted area meets the same standard for the inspection. Tell us the number and size of rooms and whether stairs are involved, and we’ll give you a fixed price for the lot.',
        ],
      },
      {
        h2: 'End of tenancy cleaning quotes',
        body: [
          'Pricing depends on the number and size of rooms, whether stairs and hallways are included, and the condition of the carpets. As a guide our whole-home rate starts from £120 for three rooms or more, with a single room from £70 — and we always confirm a fixed price before we start. Message us the property details, ideally with a photo of any problem areas, for a fast, accurate quote around your moving date.',
        ],
      },
      {
        h2: 'What inventory clerks and agents look for',
        body: [
          'A check-out inspection isn’t about a carpet looking spotless — it’s about how its condition compares with the check-in report. Knowing what the clerk is assessing helps explain why a professional clean makes such a difference:',
        ],
        list: [
          'Ground-in dirt and dark traffic lanes in doorways, hallways and in front of seating.',
          'Stains and spill marks that weren’t noted at check-in.',
          'Odours, particularly from pets or smoking.',
          'Whether the carpet has been cleaned to the same standard it was at the start of the tenancy.',
          'General soiling that everyday vacuuming leaves behind.',
        ],
      },
      {
        h2: 'Fair wear and tear vs damage',
        body: [
          'It’s worth understanding the difference, because it decides what a clean can and can’t fix. “Fair wear and tear” — the gradual, expected ageing of a carpet over a normal tenancy — cannot legally be charged to a tenant, and a landlord can’t use your deposit to get a five-year-old carpet replaced like-for-like. What can be charged for is avoidable soiling, staining and damage beyond that normal wear.',
          'A professional clean removes the avoidable soiling and staining, which is exactly the part that’s chargeable — leaving only genuine wear, which isn’t your responsibility. When we inspect the carpets we’ll tell you honestly which is which, so you go into the check-out knowing where you actually stand rather than fearing the worst.',
        ],
      },
      {
        h2: 'Why a hire machine can cost you your deposit',
        body: [
          'It’s tempting to grab a supermarket hire machine to save money at the end of a tenancy, but it’s a false economy that regularly backfires. These machines lack the extraction power to pull the dirty water back out, so they leave carpets over-wet — which can wick old stains back to the surface days later, leave a musty smell, and in a closed-up empty property even risk mould before the next tenant moves in. The result can look worse at inspection than if nothing had been done.',
          'A professional clean gets the carpets genuinely clean and properly dried, and gives you documented proof that the work was done to standard — which is worth far more than the hire fee you’d have saved if a deduction is disputed.',
        ],
      },
    ],
    faqs: [
      { q: 'Will professional carpet cleaning get my deposit back?', a: 'Cleaning carpets to a professional standard right before check-out gives you the best possible protection, as carpets are a common cause of deductions. It can’t reverse genuine damage or permanent stains, but it removes the everyday soiling that inspections pick up — and we can confirm the work carried out if a deduction is ever questioned.' },
      { q: 'What if the carpet is stained or damaged, not just dirty?', a: 'We’ll treat stains as part of the clean and be honest about what will lift. If something is genuine damage or fair wear and tear rather than dirt, we’ll tell you — and fair wear and tear can’t normally be charged to you, so it’s useful to know before the inspection.' },
      { q: 'Can you clean on the same day as our check-out?', a: 'Often, yes — we can usually work around tight moving and handover dates, ideally once the property is empty of furniture. Get in touch early with your dates so we can secure the slot.' },
      { q: 'Should the property be empty when you clean?', a: 'Ideally yes — carpets are best cleaned once furniture has been removed and right before the final inspection, so they’re in their best state for check-out.' },
      { q: 'How quickly can you come out?', a: 'We can usually fit same-week appointments around tight moving deadlines and key-handover dates. Get in touch with your dates and we’ll find a slot.' },
      { q: 'Do you clean the stairs and hallway too?', a: 'Yes, and we’d recommend it — stairs and hallways take the heaviest wear and are always checked. Booking the whole property in one visit is more efficient and better value.' },
      { q: 'How much does end of tenancy carpet cleaning cost?', a: 'It depends on the number and size of rooms, whether stairs are included, and the condition. As a guide, a single room starts from £70 and a whole home (three rooms or more) from £120, with a fixed price confirmed before we start.' },
      { q: 'Can you provide proof of the clean for my agent?', a: 'Yes — we can provide confirmation of the work carried out, which is useful evidence if any deposit deduction is ever raised.' },
    ],
  },

  'curtain-cleaning': {
    h1: 'Curtain Cleaning in Leicester',
    metaTitle: 'Curtain Cleaning Leicester | On-Site Curtain Cleaners',
    metaDescription:
      'On-site curtain cleaning in Leicester — your curtains cleaned while they hang, with nothing taken away from your home. Fabric-safe method that lifts dust, cooking smells and trapped odours. Free quotes.',
    lead:
      'Curtains quietly absorb years of dust, cooking smells and household odour, yet they’re one of the last things anyone gets round to cleaning. On Target Carpet Cleaning offers on-site curtain cleaning across Leicester and Leicestershire — we clean your curtains while they hang, in your home, with nothing taken away, so there’s no unhooking, no trip to the dry cleaner and no risk of them coming back shrunk.',
    sections: [
      {
        h2: 'Fresh curtains, cleaned in your home',
        body: [
          'Curtains act like large fabric filters across your windows, catching airborne dust, pollen, cooking grease and general household smells day after day. Because they’re awkward to take down and even more awkward to clean and re-hang, most people simply never do it — and the curtains slowly dull and hold onto odour without anyone quite noticing.',
          'We make it easy. We’re a local, family-run team and we clean your curtains on-site, exactly where they are. Nothing is removed from your home — no taking curtains off the rail, no bundling them away, and nothing to collect later. You get freshly cleaned curtains with none of the hassle.',
        ],
      },
      {
        h2: 'Why on-site cleaning is the safe option',
        body: [
          'Taking curtains down to machine-wash or dry-clean them carries real risks. Many lined and interlined curtains shrink unevenly when wetted the wrong way, linings and face fabrics can shrink at different rates, colours can run, and delicate or heavy curtains can be damaged or distorted. Then there’s the sheer job of getting large, heavy curtains back onto the rail hanging correctly.',
          'Cleaning them in place, with a controlled, fabric-safe method matched to the material, avoids all of that. The curtains stay hung — which actually helps them keep their shape and drape — and there’s no shrinkage risk from an unsuitable wash. It’s the low-risk, low-effort way to freshen curtains you care about.',
        ],
      },
      {
        h2: 'How we clean your curtains',
        body: [
          'Every set of curtains is treated according to its fabric, but the approach is consistent:',
        ],
        list: [
          'Fabric check — identify the material and lining and test an inconspicuous area first.',
          'Dust removal — draw out the loose dust and debris held in the weave.',
          'Pre-treat — target any marks and areas of trapped odour or grease.',
          'On-site clean — a gentle, fabric-safe treatment applied while the curtains hang.',
          'Freshen & deodorise — lift trapped smells rather than masking them.',
          'Leave to dry in place — the curtains dry hanging, keeping their shape.',
        ],
      },
      {
        h2: 'What curtain cleaning removes',
        body: [
          'A proper clean lifts the build-up of dust, pollen and pet dander that makes curtains a hidden trigger for allergy and hay-fever sufferers, along with the cooking odours, damp smells and general staleness that fabric holds onto. The colours freshen up, the fabric feels and smells cleaner, and the whole room benefits — curtains are a large expanse of fabric, so refreshing them makes more difference than people expect.',
        ],
      },
      {
        h2: 'When to have your curtains cleaned',
        body: [
          'As a guide, curtains are worth cleaning every 12–24 months, and sooner in kitchens, in homes with pets or smokers, or anywhere they pick up condensation and cooking smells. It’s an easy job to combine with a carpet or upholstery visit, so the whole room gets refreshed in one appointment. If you’ve just moved into a home and inherited the previous owner’s curtains, it’s well worth doing straight away.',
        ],
      },
      {
        h2: 'Curtain cleaning quotes',
        body: [
          'Curtain cleaning is priced by the size, number and fabric of the curtains, so the simplest way to get an accurate figure is to send a photo along with the rough dimensions (and the lining type if you know it) on WhatsApp. We’ll give you a clear, fixed price with no obligation, and it’s usually best value to have curtains cleaned alongside your carpets or upholstery.',
        ],
      },
      {
        h2: 'Signs your curtains need cleaning',
        body: [
          'Because curtains change so slowly, and hang out of everyday eye-line, it’s easy to forget they’re there. A few signs it’s time to freshen them up:',
        ],
        list: [
          'The colour looks flat or faded compared with the seams and folds.',
          'They give off a puff of dust when you draw or shake them.',
          'The room smells stale, smoky or of cooking even when it’s clean.',
          'There are watermarks or spotting near the bottom from window condensation.',
          'Someone in the house has hay fever or dust allergies that flare up indoors.',
          'They’ve never been cleaned, or you’ve inherited them with the house.',
        ],
      },
      {
        h2: 'Curtains, allergies and window condensation',
        body: [
          'Curtains do a lot of quiet work catching dust, pollen and airborne particles, which makes them a hidden trigger for hay fever and dust allergies — every time they’re drawn, some of that is released back into the room. A clean flushes the build-up out and can make a real difference to how a bedroom or living room feels for allergy sufferers.',
          'They also sit right where window condensation collects, so the bottoms and linings are prone to musty, damp smells and spotting, particularly in bedrooms and kitchens. Our on-site clean freshens the fabric and lifts that trapped, musty odour rather than masking it — and because the curtains never leave the rail, there’s no risk of the uneven shrinkage that damp linings are especially prone to in a wash.',
        ],
      },
      {
        h2: 'Local, on-site curtain cleaning in Leicester',
        body: [
          'We’re a local, family-run team and we clean curtains in homes across Leicester and Leicestershire — always on-site, always with nothing taken away from your home. It’s a genuinely low-hassle service: no booking a separate collection, no gap with bare windows, and no worry about whether they’ll come back the right size. We check the fabric, treat it appropriately, and back the work with our satisfaction guarantee. It’s ideal to combine with a carpet or upholstery visit so the whole room is refreshed at once.',
        ],
      },
    ],
    faqs: [
      { q: 'Will on-site cleaning remove cooking, smoke and musty smells?', a: 'Yes — our on-site treatment lifts trapped odours such as cooking, smoke and the musty smell from window condensation, rather than masking them. Heavily smoke-stained curtains may only partially improve, and we’ll tell you honestly what to expect.' },
      { q: 'How often should curtains be cleaned?', a: 'As a guide, every 12–24 months, and sooner in kitchens, in homes with pets or smokers, or where condensation collects. It’s an easy job to combine with a carpet or upholstery clean.' },
      { q: 'Do you take the curtains away to clean them?', a: 'No — we clean your curtains on-site, in your home, while they hang. Nothing is removed from your house, so there’s no unhooking, no collection and no waiting to get them back.' },
      { q: 'Will cleaning shrink my curtains?', a: 'Cleaning them in place with a controlled, fabric-safe method matched to the material avoids the shrinkage risk that comes with machine-washing or the wrong wet clean. We check and test the fabric first.' },
      { q: 'Can you clean lined and interlined curtains?', a: 'Yes — on-site cleaning is particularly suited to lined and interlined curtains, which are exactly the ones most at risk of uneven shrinkage if taken down and washed.' },
      { q: 'Do the curtains have to come down at all?', a: 'No. They stay on the rail throughout, which also helps them keep their shape and drape as they dry.' },
      { q: 'How long do the curtains take to dry?', a: 'They dry hanging in place, and drying time depends on the fabric weight and room ventilation. We’ll give you a realistic estimate for your curtains and advise on airflow.' },
      { q: 'How much does curtain cleaning cost?', a: 'It depends on the size, number and fabric of the curtains. Send a photo with rough dimensions on WhatsApp for a fixed, no-obligation price — and it’s often best value alongside a carpet or upholstery clean.' },
    ],
  },

  'stairs-landing-cleaning': {
    h1: 'Stairs & Landing Carpet Cleaning in Leicester',
    metaTitle: 'Stairs Carpet Cleaning Leicester | Stairs & Landing Cleaners',
    metaDescription:
      'Professional stairs and landing carpet cleaning in Leicester. Restores flattened, greyed pile on the highest-traffic carpet in the house. Fast-drying, safe, and often best booked with a whole-home clean.',
    lead:
      'The stairs are the hardest-working carpet in any home — and usually the most tired-looking. On Target Carpet Cleaning provides stairs and landing carpet cleaning across Leicester and Leicestershire, lifting the ground-in dirt and restoring the flattened, greyed pile that everyday vacuuming simply can’t reach.',
    sections: [
      {
        h2: 'Bring your stairs back to life',
        body: [
          'Stairs take more wear per square foot than almost any other carpet in the house. Every trip up and down lands on the same spots — the front edge of each tread most of all — so the pile flattens, greys and wears dark long before the carpet on the landing either side of it. It’s often the first carpet in the house to look tired, and the one people most want refreshed.',
          'We’re a local, family-run team, and stairs are one of our most-requested jobs. With the right pre-treatment and a proper deep clean we can lift years of ground-in dirt out of every step and restore colour and texture that a vacuum leaves behind.',
        ],
      },
      {
        h2: 'Why stairs need specialist attention',
        body: [
          'Stairs are genuinely harder to clean well than a flat floor. The dirt concentrates on the tread edges and the middle “runner” where everyone walks; the shape means each step has a tread and a riser to clean into; and the sides, spindles and nosings collect dust and grime that’s fiddly to reach. A hired upright machine can’t manoeuvre on stairs at all, which is why they so often get skipped or half-done.',
          'Our professional equipment and hand tools are made for exactly this — reaching into the edges, corners and every step to clean the whole staircase evenly, top to bottom, rather than just running over the middle.',
        ],
      },
      {
        h2: 'How we clean your stairs and landing',
        body: [
          'We clean the full flight and the landing in one pass, working methodically:',
        ],
        list: [
          'Inspection — assess the pile, the wear on the tread edges and any stains.',
          'Thorough vacuum — lift the loose grit that concentrates on stairs before deep cleaning.',
          'Pre-treatment — the tread edges and worn central runner get extra attention where the dirt is heaviest.',
          'Hot water extraction — clean every tread, riser and the landing, lifting the ground-in soiling out.',
          'Edge & detail work — spindles, nosings and sides cleaned by hand where needed.',
          'Groom & fast-dry — reset the pile and arrange airflow so the stairs dry quickly and safely.',
        ],
      },
      {
        h2: 'Safe, sensible drying',
        body: [
          'Stairs are a route everyone uses, so drying matters for safety as well as comfort. Our extraction removes most of the moisture on the spot, and we groom the pile and advise on airflow so the stairs are touch-dry within a few hours. We’ll let you know how to move around safely while they finish drying, and if you have concerns about access we can plan the clean around them.',
        ],
      },
      {
        h2: 'Best booked with a whole-home clean',
        body: [
          'Because the stairs connect every other room, they’re most often cleaned as part of a whole-home visit — and it’s usually better value that way than booking them on their own. A fresh set of stairs against newly cleaned rooms and landing looks far better than a clean staircase surrounded by tired carpet, or vice versa. That said, we’re happy to clean the stairs and landing on their own if that’s all you need.',
        ],
      },
      {
        h2: 'How much does stairs carpet cleaning cost?',
        body: [
          'Stairs are priced by the size of the flight (the number of steps) and the condition, and the landing is usually included or added at a small extra. As they’re labour-intensive, stairs are most economical combined with other rooms in a whole-home clean, where our rate starts from £120 for three areas or more. Tell us roughly how many steps you have and whether you’d like other rooms doing, and we’ll give you a fixed price.',
        ],
      },
      {
        h2: 'Runners, spindles and awkward staircases',
        body: [
          'No two staircases are quite the same, and we’re set up for the tricky ones. Winding stairs and half-landings, open-tread (floating) staircases, and steep Victorian flights all have their own awkward angles, and we clean into every one of them rather than just running down the middle.',
          'We also take care around the details that make stairs fiddly: spindles and balustrades, the nosings on each step edge, and the join where a stair runner meets exposed wood or paint at the sides. Where you have a fitted carpet, a runner over floorboards, or carpet held with stair rods, we work to suit it — cleaning the carpet thoroughly without splashing or marking the woodwork around it.',
        ],
      },
      {
        h2: 'Protecting the life of your stair carpet',
        body: [
          'Stair carpet is expensive to replace and awkward to fit, so it pays to look after it. The thing that wears it out is abrasive grit ground into the tread edges by constant footfall — it acts like sandpaper, cutting the fibres and flattening the pile until the wear becomes permanent. Once that grit has done its damage it can’t be undone, only prevented.',
          'Regular professional cleaning lifts that grit out before it wears the pile away, so cleaning your stairs isn’t just about how they look — it genuinely helps them last longer. Vacuuming the treads and edges often between cleans helps too, keeping the worst of the grit from building up in the first place.',
        ],
      },
      {
        h2: 'Local stairs & landing cleaning in Leicester',
        body: [
          'We’re a Leicester-based, family-run team, and stairs are one of our most-requested jobs precisely because they’re the hardest part of the house to clean well yourself. We clean stairs and landings for homes across Leicestershire, we’re fully insured, and every job is backed by our satisfaction guarantee. Because the stairs connect every room, they’re usually best cleaned as part of a whole-home visit — but we’re just as happy to do the stairs and landing on their own.',
        ],
      },
    ],
    faqs: [
      { q: 'Can you clean a stair runner over a wooden staircase?', a: 'Yes — we clean fitted stair carpet, runners over floorboards and carpet held with stair rods. We work carefully around exposed wood and paint at the sides so the carpet is cleaned thoroughly without marking the woodwork.' },
      { q: 'How often should stairs be cleaned?', a: 'Because stairs take the heaviest wear in the house, every 6–12 months keeps them looking their best and — just as importantly — lifts the abrasive grit that shortens their life. Homes with pets or lots of foot traffic benefit from the more frequent end of that range.' },
      { q: 'Why do my stairs look worse than the rest of my carpet?', a: 'Stairs take more wear per square foot than anywhere else, and every step lands on the same spots — especially the tread edges — so the pile flattens and greys much faster. A proper deep clean lifts the ground-in dirt and restores a lot of that.' },
      { q: 'Can you clean the edges and spindles too?', a: 'Yes — we clean every tread and riser and detail the sides, nosings and around spindles by hand where needed, so the whole staircase is cleaned evenly rather than just the middle.' },
      { q: 'Are the stairs safe to use while drying?', a: 'Our extraction removes most of the moisture, so stairs are usually touch-dry within a few hours. We’ll advise on moving around safely while they finish drying.' },
      { q: 'Do I have to clean other rooms too?', a: 'No — we’re happy to clean just the stairs and landing. That said, stairs are most economical as part of a whole-home clean, and it looks best when everything matches.' },
      { q: 'How much does it cost to clean stairs?', a: 'It depends on the number of steps and the condition, with the landing usually included or a small extra. Stairs are best value combined with other rooms — our whole-home rate starts from £120 for three areas or more.' },
      { q: 'How long do stairs take to dry?', a: 'Typically a few hours, helped by good airflow and a warm house. We groom the pile and set up drying so they’re ready to use safely as soon as possible.' },
    ],
  },
};
