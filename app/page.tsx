import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedPuja from "@/components/home/FeaturedPuja";
import AstrologySection from "@/components/home/AstrologySection";
import DoshAnalyzer from "@/components/home/DoshAnalyzer";
import PujaTimeline from "@/components/home/PujaTimeline";
import WhySumit from "@/components/home/WhySumit";
import MuhuratSection from "@/components/home/MuhuratSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import GallerySection from "@/components/home/GallerySection";
export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          01 — HERO
          First impression / brand positioning / primary CTA
      ========================================================= */}
      <Hero />

      {/* =========================================================
          02 — TRUST
          Immediate reassurance after the hero
      ========================================================= */}
      <TrustStrip />

      {/* =========================================================
          03 — ABOUT
          Establishes Sumit Sharma's practice and philosophy
      ========================================================= */}
      <AboutSection />

      {/* =========================================================
          04 — SERVICES
          Core service discovery
      ========================================================= */}
      <ServicesSection />

      {/* =========================================================
          05 — FEATURED PUJA
          High-intent service spotlight
      ========================================================= */}
      <FeaturedPuja />

      {/* =========================================================
          06 — ASTROLOGY
          Consultation / Kundli pathway
      ========================================================= */}
      <AstrologySection />

      {/* =========================================================
          07 — DOSH ANALYZER
          Educational interaction before conversion
      ========================================================= */}
      <DoshAnalyzer />
        <GallerySection/>
      {/* =========================================================
          08 — PUJA PROCESS
          Makes the service journey understandable
      ========================================================= */}
      <PujaTimeline />

      {/* =========================================================
          09 — WHY SUMIT
          Differentiation / trust-building
      ========================================================= */}
      <WhySumit />

      {/* =========================================================
          10 — MUHURAT
          Timely / editable information section
      ========================================================= */}
      <MuhuratSection />

      {/* =========================================================
          11 — TESTIMONIALS
          Social proof — render only verified/editable content
      ========================================================= */}
      <Testimonials />

      {/* =========================================================
          12 — FAQ
          Removes final objections before enquiry
      ========================================================= */}
      <FAQSection />

      {/* =========================================================
          13 — CONTACT
          Final conversion point
      ========================================================= */}
      <ContactSection />
    </main>
  );
}