import { describe, expect, it } from "vitest";
import { en } from "@/content/en";
import { bookingLink, siteConfig } from "@/content/site";

// Official tour facts the owner confirmed — the site must never drift from these.
describe("official tour content", () => {
  it("shows the official price of S/ 90 per person", () => {
    expect(en.hero.price).toContain("90");
    expect(en.pricing.price).toBe("S/ 90");
    expect(en.pricing.priceUnit).toBe("per person");
  });

  it("includes only transport and guide", () => {
    expect(en.pricing.included).toEqual(["Tourist transport (4x4)", "Professional guide"]);
  });

  it("lists breakfast as NOT included and to be confirmed", () => {
    const breakfast = en.pricing.notIncluded.find((i) => i.text === "Breakfast");
    expect(breakfast?.note).toMatch(/to be confirmed/);
  });

  it("lists the lagoon entrance at S/ 6 per person", () => {
    const entry = en.pricing.notIncluded.find((i) => i.text === "Lagoon entrance");
    expect(entry?.note).toContain("S/ 6 per person");
  });

  it("lists hot springs entrance as not included and to be confirmed", () => {
    const hot = en.pricing.notIncluded.find((i) => i.text === "Hot springs entrance");
    expect(hot?.note).toMatch(/to be confirmed/);
  });

  it("uses the official schedule (5:30–5:45 a.m. out, ~1:00 p.m. back)", () => {
    expect(en.journey.steps[0].time).toContain("5:30");
    expect(en.journey.steps[0].time).toContain("5:45");
    expect(en.journey.steps.at(-1)?.time).toContain("1:00 p.m.");
    // Unconfirmed stops are marked, never invented.
    for (const step of en.journey.steps.slice(1, -1)) {
      expect(step.time).toMatch(/To be confirmed/);
    }
  });

  it("states that cancellations under 24 hours are not refundable", () => {
    expect(en.booking.policy).toMatch(/less than 24 hours/i);
    expect(en.booking.policy).toMatch(/not refundable/i);
  });

  it("requires full payment in advance", () => {
    expect(en.booking.steps[1].text).toMatch(/full payment in advance/i);
  });

  it("never guarantees flamingos", () => {
    expect(en.faq.items.find((i) => i.q.includes("flamingos"))?.a).toMatch(
      /never guaranteed/i,
    );
  });

  it("renders both hero headlines", () => {
    expect(en.hero.slides.map((s) => s.headline)).toEqual([
      "A Morning Beyond the Ordinary",
      "Wake Up Above the Ordinary",
    ]);
  });
});

describe("photography", () => {
  it("uses each of the 10 original photos exactly once, never a placeholder", () => {
    const urls = [
      ...en.hero.slides.map((s) => s.image),
      en.intro.image,
      ...en.highlights.items.map((i) => i.image),
      en.journey.image,
      en.landscape.image,
      en.finalCta.image,
    ];
    expect(urls).toHaveLength(10);
    expect(new Set(urls).size).toBe(10);
    for (const url of urls) {
      expect(url).toMatch(/^\/__l5e\/assets-v1\//);
      expect(url).not.toMatch(/placeholder/i);
    }
  });
});

describe("booking channel", () => {
  it("is disabled (coming soon) until the WhatsApp number is set", () => {
    expect(siteConfig.whatsappNumber).toBe("");
    const link = bookingLink();
    expect(link.enabled).toBe(false);
    expect(link.href).toBe("#booking");
  });
});
