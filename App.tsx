import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import VisualAppealSection from './components/VisualAppealSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#FFFBEB] font-sans text-gray-800 antialiased overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <VisualAppealSection />
        <WhatYouGetSection />
        <BonusSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
