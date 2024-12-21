import React from 'react';
import HeroSection from './components/heroSection';
import FeaturesSection from './components/featuresSection';
import TestimonialsSection from './components/testimonialsSection';
import PricingSection from './components/pricingSection';
import FooterSection from './components/footerSection';

export default function HomePage() {

  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}
