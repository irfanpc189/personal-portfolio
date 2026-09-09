import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PersistentBackground from './components/PersistentBackground';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import StoryIntro from './components/StoryIntro';
import ProjectScrollytelling from './components/ProjectScrollytelling';
import AboutProcess from './components/AboutProcess';
import Skills from './components/Skills';
import DesignCode from './components/DesignCode';
import ContactFooter from './components/ContactFooter';
import CaseStudyModal from './components/CaseStudyModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
        
        {/* Floating Light Glass Navigation */}
        <Navbar />

        {/* Main Narrative Sections */}
        <main className="relative z-10">
          
          {/* Scene 1: Hero Opening Shot */}
          <HeroScene />

          {/* Scene 2: Design Philosophy Intro */}
          <StoryIntro />

          {/* Scene 3: Flagship Case Studies */}
          <ProjectScrollytelling onSelectProject={setSelectedProject} />

          {/* Scene 4: Person Behind the Pixels (About) */}
          <AboutProcess />

          {/* Scene 5: Design & Development Arsenal (Skills) */}
          <Skills />

          {/* Scene 6: Design x Code Bridge */}
          <DesignCode />

        </main>

        {/* Scene 7: Final Frame & Contact Footer */}
        <ContactFooter />

        {/* Deep-Dive Case Study Modal Drawer */}
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </>
  );
}
