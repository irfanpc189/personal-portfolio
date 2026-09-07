import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statementRef = useRef(null);
  const scrollPromptRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle scroll animation moving elements gently as user scrolls
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        }
      });

      tl.to(titleRef.current, {
        y: -40,
        opacity: 0.8,
        ease: 'none'
      }, 0);

      tl.to(subtitleRef.current, {
        y: -25,
        opacity: 0.8,
        ease: 'none'
      }, 0);

      tl.to(scrollPromptRef.current, {
        opacity: 0,
        y: 20,
        ease: 'power1.out'
      }, 0);

    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen z-10 flex flex-col justify-between items-center px-4 sm:px-8 pt-32 pb-12 overflow-hidden select-none"
    >
      
      {/* Top Space Filler for Navbar clearance */}
      <div className="w-full max-w-7xl flex justify-between items-center opacity-0 pointer-events-none">
        <span>Spacer</span>
      </div>

      {/* Hero Central Editorial Typography Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
        
        {/* Subtle Editorial Pill */}
        <div className="mb-6 inline-flex items-center gap-2 glass-pill px-4 py-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sunflower" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            EDITORIAL PORTFOLIO — 2026
          </span>
        </div>

        {/* Primary Name Heading: IRFAN PC */}
        <h1 
          ref={titleRef}
          className="font-editorial text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-none font-bold tracking-tight text-heading will-change-transform drop-shadow-sm"
        >
          IRFAN PC
        </h1>

        {/* Subtitle Identity: UI/UX DESIGNER */}
        <div 
          ref={subtitleRef}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 will-change-transform"
        >
          <span className="font-display font-bold text-2xl sm:text-4xl text-forest tracking-widest uppercase">
            UI / UX DESIGNER
          </span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-sunflower" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-muted uppercase">
            Frontend Capability
          </span>
        </div>

        {/* Short Editorial Supporting Statement */}
        <p 
          ref={statementRef}
          className="mt-8 max-w-2xl text-base sm:text-xl text-subtle font-body font-normal leading-relaxed text-center"
        >
          I design thoughtful digital experiences where people, visuals, and technology meet seamlessly.
        </p>

        {/* Small Glass Information Card */}
        <div className="mt-10 glass-panel px-6 py-3 border-white/80 shadow-sm inline-flex items-center gap-4 text-xs font-body text-muted">
          <div className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="font-semibold text-heading">Based in Digital Naturalism</span>
          </div>
          <span className="text-black/20">•</span>
          <span>Crafting Human Interfaces</span>
        </div>

      </div>

      {/* Subtle Bottom Scroll Cue Indicator */}
      <div 
        ref={scrollPromptRef}
        className="relative z-10 flex flex-col items-center gap-2 pointer-events-none pt-4"
      >
        <span className="text-[10px] font-mono font-bold tracking-widest text-subtle uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-forest animate-bounce shadow-sm">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

    </section>
  );
}
