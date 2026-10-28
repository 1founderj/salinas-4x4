// ============================================================
// SITE CONFIG — contact & booking details
//
// TODO: fill these in as soon as you have the real values.
// Every field left as "" is shown on the site as "coming soon"
// and never invented.
// ============================================================

export const siteConfig = {
  // TODO: WhatsApp booking number, international format, digits only (e.g. "51912345678").
  whatsappNumber: "",

  // Prefilled message when the WhatsApp chat opens.
  whatsappMessage:
    "Hello! I'd like to book the SALINAS 4x4 EXPERIENCE tour (Salinas — Breakfast with Llamas and Alpacas).",

  // TODO: not provided yet — leave empty until confirmed.
  email: "",

  // TODO: not provided yet — leave empty until confirmed.
  phone: "",

  // TODO: social profiles, full URLs — leave empty until confirmed.
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

/**
 * Booking channel for every "Book" button.
 * Until `whatsappNumber` is set, the link is disabled and the UI
 * shows an honest "coming soon" state instead of a fake button.
 */
export function bookingLink(): { href: string; enabled: boolean } {
  if (!siteConfig.whatsappNumber) {
    return { href: "#booking", enabled: false };
  }
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return { href: `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, enabled: true };
}
