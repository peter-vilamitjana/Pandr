
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Preload critical assets
    const preloadLinks = document.head.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => {
      link.setAttribute('rel', 'stylesheet');
    });

    // Update document title
    document.title = "Pandr - The Premium IDE for Modern Developers";
  }, []);

  return (
    <div className="min-h-screen bg-pandr-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <FeaturesSection />
        <ProcessSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
