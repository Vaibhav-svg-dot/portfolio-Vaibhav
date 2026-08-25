import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/common/ParticleBackground';
import Navbar from './components/layout/Navbar';
import MobileDrawer from './components/layout/MobileDrawer';
import SocialRail from './components/layout/SocialRail';
import Footer from './components/layout/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import JourneyTimeline from './sections/JourneyTimeline';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import SkillsConstellation from './sections/SkillsConstellation';
import Education from './sections/Education';
import WhatNext from './sections/WhatNext';
import Contact from './sections/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'journey',
      'projects',
      'experience',
      'certifications',
      'skills',
      'education',
      'what-next',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 selection:bg-purple-600 selection:text-white relative bg-cyber-grid">
      {/* Interactive Cyber Ambient Canvas */}
      <ParticleBackground />

      {/* Floating Left Social Rail */}
      <SocialRail />

      {/* Top Futuristic Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Responsive Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      {/* Main Page Container */}
      <main className="relative z-10">
        <Hero />
        <About />
        <JourneyTimeline />
        <Projects />
        <Experience />
        <Certifications />
        <SkillsConstellation />
        <Education />
        <WhatNext />
        <Contact />
      </main>

      {/* Cyber Footer */}
      <Footer />
    </div>
  );
}
