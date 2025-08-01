import { Suspense } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Loading component for Suspense
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <motion.div
      className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<Loading />}>
        <Navigation />

        <section aria-label="Hero carousel showcasing luxury properties">
          <HeroCarousel />
        </section>

        <main>
          <FeaturedProperties />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
