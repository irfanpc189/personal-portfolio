import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PersistentBackground from './components/PersistentBackground';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Initialize Lenis Smooth Inertial Scrolling & GSAP ScrollTrigger Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      smoothTouch: false,
    });

    // Expose lenis globally for navigation scroll
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Persistent Sunflower Atmosphere Layer */}
      <PersistentBackground />

      <div className="relative min-h-screen text-main selection:bg-amber-400 selection:text-white font-body">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Narrative Sections */}
        <main className="relative z-10">
          <HeroScene />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>

        <ContactSection />
      </div>
    </>
  );
}
