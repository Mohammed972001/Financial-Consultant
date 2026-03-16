'use client';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { StatsSection } from './components/StatsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white"
      dir="rtl"
      style={{ fontFamily: 'Tajawal, sans-serif' }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <StatsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
