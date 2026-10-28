// ============================================================
// ENGLISH SITE COPY — the master content file.
//
// HOW TO TRANSLATE THE SITE TO ANOTHER LANGUAGE:
// 1. Duplicate this file as e.g. `es.ts` and translate every string
//    (keep the structure and keys identical, keep image fields as-is).
// 2. Open `src/content/index.ts` and register the new language there.
//    A language switcher appears automatically once 2+ languages exist.
// ============================================================

import { images } from "./images";

export const en = {
  brand: {
    name: "SALINAS 4x4 EXPERIENCE",
    by: "by Lonko Hostal",
    tourName: "Salinas — Breakfast with Llamas and Alpacas",
    logoAlt: "Lonko Hostal logo",
  },
  nav: {
    journey: "The Journey",
    landscape: "The Landscape",
    price: "Price",
    faq: "FAQ",
    book: "Book now",
  },
  hero: {
    slides: [
      {
        label: "AREQUIPA · PERU",
        headline: "A Morning Beyond the Ordinary",
        subheadline:
          "A 4x4 journey to the salt flats, Andean wildlife and a breakfast surrounded by llamas and alpacas.",
        image: images.heroStoneForest,
      },
      {
        label: "AREQUIPA · PERU",
        headline: "Wake Up Above the Ordinary",
        subheadline:
          "Sunrise over the Salinas salt lagoon, flamingos on the water and a local breakfast in the company of llamas and alpacas.",
        image: images.heroRoadVolcanoes,
      },
    ],
    price: "S/ 90 per person",
    priceNote: "Breakfast and lagoon entrance paid separately",
    ctaPrimary: "Book Your Experience",
    ctaSecondary: "Explore the Journey",
    scrollHint: "Scroll to explore",
  },
  intro: {
    label: "THE EXPERIENCE",
    title: "Before the city wakes up, the Andes are already waiting.",
    paragraphs: [
      "Long before sunrise we leave Arequipa behind and climb into the high Andes of the Salinas y Aguada Blanca reserve. The road opens onto one of the most extraordinary landscapes of southern Peru: an immense white salt lagoon framed by volcanoes.",
      "This is more than a transfer — it is a morning built for the senses. A local breakfast surrounded by llamas and alpacas, the silence of the salt flats, flamingos feeding in the shallow water and a viewpoint that looks out over Pichu Pichu, Misti and Ubinas.",
      "We are back in Arequipa around 1:00 p.m., before the highland winds pick up.",
    ],
    stats: [
      { value: "4,300 m+", label: "Altitude at the lagoon" },
      { value: "2 h 30", label: "Scenic drive, each way" },
      { value: "S/ 90", label: "Per person" },
    ],
    image: images.truckSaltFlat,
    imageCaption: "Our 4x4 on the white salt flats of Salinas",
  },
  highlights: {
    label: "EXPERIENCE HIGHLIGHTS",
    title: "Four moments you will remember",
    items: [
      {
        title: "Breakfast with Llamas & Alpacas",
        text: "A local breakfast in a natural Andean setting, with the chance to feed these animals and share a quiet morning with them. The meal itself is paid separately on site.",
        image: images.llamaBreakfast,
      },
      {
        title: "Salinas Lagoon Exploration",
        text: "Walk the shores of the salt lagoon and photograph the endless white extension of the salar, one of the most striking landscapes in the Andes.",
        image: images.lagoonMirrorPortrait,
      },
      {
        title: "Flamingo Spotting",
        text: "Up to three species — James's, Andean and Chilean flamingos — visit the lagoon. Their presence is never guaranteed: it is nature, not a show.",
        image: images.flamingosLagoon,
      },
      {
        title: "Caccahuasi Viewpoint",
        text: "A panoramic stop over the salar and the Andean volcanic landscape, with views of Pichu Pichu, Misti and Ubinas on the horizon.",
        image: images.llamaHerdSalar,
      },
    ],
  },
  journey: {
    label: "THE JOURNEY",
    title: "One morning, from city dark to white light",
    intro:
      "Approximate schedule. Pick-up point and the exact time of each stop are still to be confirmed — we confirm everything when you book.",
    tbc: "To be confirmed",
    image: images.feedingLlamas,
    imageCaption: "Feeding the llamas at the breakfast stop",
    steps: [
      {
        time: "5:30 – 5:45 a.m. (approx.)",
        title: "Departure from Arequipa",
        text: "Early pick-up in a tourist 4x4 and a scenic climb towards the high Andes.",
      },
      {
        time: "To be confirmed",
        title: "Breakfast with llamas & alpacas",
        text: "A local breakfast stop in a natural setting, surrounded by the animals. Paid separately.",
      },
      {
        time: "To be confirmed",
        title: "Salinas lagoon exploration",
        text: "Walk the shores of the salt lagoon and take in the white landscape at over 4,300 m.",
      },
      {
        time: "To be confirmed",
        title: "Flamingo watching",
        text: "Look for James's, Andean and Chilean flamingos feeding in the shallow water.",
      },
      {
        time: "To be confirmed",
        title: "Caccahuasi viewpoint",
        text: "Panoramic views of the salar and the volcanoes Pichu Pichu, Misti and Ubinas.",
      },
      {
        time: "~1:00 p.m. (approx.)",
        title: "Return to Arequipa",
        text: "Back in the city before the highland winds strengthen. The drive takes about 2 h 30 each way.",
      },
    ],
  },
  landscape: {
    label: "THE LANDSCAPE",
    title: "A white world above the clouds",
    paragraphs: [
      "The Laguna de Salinas sits high on the Andean plateau, its white salt crust stretching toward the horizon and changing with the seasons — mirror-flat water in the wet months, cracked salt patterns in the dry.",
      "From the Caccahuasi viewpoint the whole salar opens up beneath you, with the volcanic skyline of Pichu Pichu, Misti and Ubinas watching over the reserve.",
    ],
    facts: [
      "Over 4,300 metres above sea level",
      "Volcanoes on the horizon: Pichu Pichu, Misti and Ubinas",
      "Andean flamingos and high-Andean birdlife",
      "Salt flats that change with every season",
    ],
    image: images.saltMirrorGroup,
    imageCaption: "The salt mirror of Salinas with the Andes reflected",
  },
  pricing: {
    label: "PRICE & WHAT'S INCLUDED",
    title: "Simple pricing, no surprises",
    price: "S/ 90",
    priceUnit: "per person",
    usdNote:
      "Prices are in Peruvian soles. Dollar equivalent, and rates for children, groups or a private tour: to be confirmed — just ask when booking.",
    includedTitle: "What's included",
    included: ["Tourist transport (4x4)", "Professional guide"],
    notIncludedTitle: "What's not included",
    notIncluded: [
      { text: "Breakfast", note: "paid separately — price to be confirmed" },
      { text: "Lagoon entrance", note: "S/ 6 per person" },
      { text: "Hot springs entrance", note: "price to be confirmed" },
    ],
    paymentsTitle: "Payment methods",
    payments:
      "All payment methods are accepted. We confirm the exact payment method with you when you book.",
    cta: "Book now",
  },
  booking: {
    label: "BOOKING",
    title: "Book directly via WhatsApp",
    steps: [
      {
        title: "1 · Message us",
        text: "Send us a WhatsApp message to check availability for your date.",
      },
      {
        title: "2 · Pay in full",
        text: "Full payment in advance is required to confirm your booking.",
      },
      {
        title: "3 · Get confirmation",
        text: "Your booking is confirmed once the payment is received.",
      },
    ],
    policyTitle: "Cancellation policy",
    policy: "Bookings cancelled less than 24 hours in advance are not refundable.",
    policyNote: "Last-minute cancellations and no-shows are not refundable.",
    infoTitle: "Good to know",
    info: [
      "Operating days, and minimum / maximum group size: to be confirmed.",
      "Pick-up point in Arequipa: to be confirmed.",
      "Breakfast and entrance fees are paid separately during the tour.",
    ],
    cta: "Book on WhatsApp",
    ctaPending: "WhatsApp booking coming soon",
    pendingNote:
      "Our WhatsApp booking line is being set up and will be available here very soon.",
  },
  tips: {
    label: "ESSENTIAL TRAVEL TIPS",
    title: "Prepare for the high Andes",
    items: [
      {
        title: "Altitude",
        points: [
          "Arequipa sits at about 2,300 m; the lagoon rises above 4,300 m.",
          "Take a day or two in Arequipa to acclimatise before the tour.",
          "Stay hydrated, take it slowly and consult a health professional about altitude sickness prevention when needed.",
          "Coca tea or medication may help, but nothing guarantees you will avoid altitude sickness.",
        ],
      },
      {
        title: "What to wear",
        points: [
          "Dress in several warm layers.",
          "Mornings can be below freezing on the altiplano.",
          "Wear comfortable, closed walking shoes.",
          "A windproof jacket helps once the sun is up and the wind rises.",
        ],
      },
      {
        title: "Sun protection",
        points: [
          "High-SPF sunscreen — the Andean sun is strong at altitude.",
          "Lip balm with sun protection.",
          "Polarised sunglasses.",
          "A hat or cap for the open salt flat.",
        ],
      },
    ],
    disclaimer:
      "These tips are general guidance and are not a substitute for professional medical advice.",
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does the Salinas tour cost?",
        a: "S/ 90 per person, plus the lagoon entrance of S/ 6 per person. Breakfast is paid separately on site. Dollar equivalent and rates for children, groups or a private tour are to be confirmed.",
      },
      {
        q: "What is included in the price?",
        a: "Tourist transport in a 4x4 and a professional guide. Everything else — breakfast, lagoon entrance (S/ 6) and hot springs entrance — is paid separately.",
      },
      {
        q: "Is breakfast included?",
        a: "No. The experience includes the breakfast stop surrounded by llamas and alpacas, but the meal itself is paid separately. The breakfast price is to be confirmed.",
      },
      {
        q: "What time does the tour start?",
        a: "Departure from Arequipa is between 5:30 and 5:45 a.m. (approx.). We return to the city around 1:00 p.m.",
      },
      {
        q: "What should I wear?",
        a: "Dress in several warm layers — mornings can be below freezing on the altiplano — plus comfortable walking shoes, sunscreen, lip balm and polarised sunglasses.",
      },
      {
        q: "Can I see flamingos?",
        a: "Up to three species visit the lagoon: James's, Andean and Chilean flamingos. Seeing them is never guaranteed — they are wild birds.",
      },
      {
        q: "Is the tour suitable for people sensitive to high altitude?",
        a: "The lagoon is above 4,300 m, so altitude is a real factor. We recommend acclimatising in Arequipa first and consulting a health professional before the tour if you are sensitive to altitude.",
      },
      {
        q: "Are the hot springs included?",
        a: "No. The hot springs entrance is paid separately and its price is to be confirmed.",
      },
      {
        q: "How do I confirm my booking?",
        a: "Bookings are made via WhatsApp and confirmed with full payment in advance. Once the payment is received, your place is confirmed.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Bookings cancelled less than 24 hours in advance are not refundable. Last-minute cancellations and no-shows are not refundable.",
      },
    ],
  },
  finalCta: {
    title: "Your next Andean adventure starts before sunrise.",
    text: "Salinas — Breakfast with Llamas and Alpacas · S/ 90 per person",
    cta: "Book Your Experience",
    image: images.travelersTruck,
    imageCaption: "Travelers celebrating on the 4x4 out on the salt flats",
  },
  footer: {
    tagline:
      "A 4x4 morning tour from Arequipa to the Salinas salt lagoon, with llamas, alpacas and flamingos.",
    navTitle: "Explore",
    contactTitle: "Contact",
    contactPending: "WhatsApp, email and phone — coming soon.",
    legalTitle: "Booking policy",
    legal: "Full payment in advance. Confirmed after payment. Cancellations under 24 hours are not refundable.",
    rights: "All rights reserved.",
    creditLine: "All photographs on this page are original images from our tours.",
  },
} as const;

export type TourContent = typeof en;
