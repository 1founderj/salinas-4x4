import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Highlights } from "@/components/site/Highlights";
import { Journey } from "@/components/site/Journey";
import { Landscape } from "@/components/site/Landscape";
import { Pricing } from "@/components/site/Pricing";
import { Booking } from "@/components/site/Booking";
import { Tips } from "@/components/site/Tips";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { StickyBookBar } from "@/components/site/StickyBookBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Salinas 4x4 Experience — 4x4 Tour to the Salinas Salt Lagoon from Arequipa",
      },
      {
        name: "description",
        content:
          "A 4x4 morning tour from Arequipa to the Laguna de Salinas: breakfast with llamas and alpacas, Andean flamingos and the Caccahuasi viewpoint. S/ 90 per person.",
      },
      {
        property: "og:title",
        content: "Salinas 4x4 Experience — 4x4 Tour to the Salinas Salt Lagoon from Arequipa",
      },
      {
        property: "og:description",
        content:
          "A 4x4 morning tour from Arequipa to the Laguna de Salinas: breakfast with llamas and alpacas, Andean flamingos and the Caccahuasi viewpoint. S/ 90 per person.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalinasLanding,
});

function SalinasLanding() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Intro />
        <Highlights />
        <Journey />
        <Landscape />
        <Pricing />
        <Booking />
        <Tips />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBookBar />
    </LanguageProvider>
  );
}
