import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import StoryIntro from './components/StoryIntro';
import ProjectScrollytelling from './components/ProjectScrollytelling';
import Playground from './components/Playground';
import AboutProcess from './components/AboutProcess';
import CaseStudyModal from './components/CaseStudyModal';
import ContactFooter from './components/ContactFooter';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Initialize Lenis Smooth Inertial Scrolling & GSAP ScrollTrigger Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
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

  // Web Audio Golden Hour Synth Generator
  const toggleAudio = () => {
    if (isAudioPlaying) {
      // Mute audio
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsAudioPlaying(false);
    } else {
      // Start audio
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Frequencies for golden hour harmonic chord (C Maj9 - C3, G3, B3, E4, D5)
        const freqs = [130.81, 196.00, 246.94, 329.63, 587.33];

        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO for gentle breeze swell effect
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);

          lfo.connect(gain.gain);
          osc.connect(gain);
          gain.connect(masterGain);

          osc.start();
          lfo.start();

          synthNodesRef.current.push({ osc, lfo, gain });
        });
      } else {
        audioCtxRef.current.resume();
      }
      setIsAudioPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-cream selection:bg-amber-400 selection:text-neutral-950">
      
      {/* Fixed Navigation Header */}
      <Navbar 
        isAudioPlaying={isAudioPlaying} 
        toggleAudio={toggleAudio} 
      />

      {/* Main Scrollytelling Scenes */}
      <main>
        {/* Scene 1: Hero Field & Oversized Typography Morph */}
        <HeroScene />

        {/* Scene 2: Story Intro & Design Philosophy */}
        <StoryIntro />

        {/* Scene 3: Flagship Case Studies Scrollytelling */}
        <ProjectScrollytelling onSelectProject={setSelectedProject} />

        {/* Scene 4: Interactive Experimental Playground */}
        <Playground 
          isAudioPlaying={isAudioPlaying} 
          toggleAudio={toggleAudio} 
        />

        {/* Scene 5: Person Behind the Pixels (About & Process) */}
        <AboutProcess />
      </main>

      {/* Scene 6: Contact & Grand Finale Footer */}
      <ContactFooter />

      {/* Deep-Dive Case Study Modal Drawer */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
