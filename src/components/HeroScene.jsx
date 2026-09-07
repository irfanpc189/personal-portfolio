import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Compass, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const foregroundBokehRef = useRef(null);
  const scrollPromptRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Pinning and Camera Motion Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. Camera Zoom into the Sunflower Field Background
      tl.to(bgRef.current, {
        scale: 1.35,
        yPercent: -8,
        filter: 'brightness(1.1) contrast(1.05)',
        ease: 'none'
      }, 0);

      // 2. Foreground Bokeh Sunflower Zoom & Fade
      tl.to(foregroundBokehRef.current, {
        scale: 1.8,
        opacity: 0,
        yPercent: 20,
        ease: 'power2.inOut'
      }, 0);

      // 3. Oversized "IRFAN PC" Text Morph: Expands rapidly into camera
      tl.to(titleRef.current, {
        scale: 2.4,
        letterSpacing: '0.25em',
        opacity: 0,
        y: -180,
        filter: 'blur(12px)',
        ease: 'power2.in'
      }, 0);

      // 4. Subtitle "UI/UX DESIGNER" morphs upward and scales
      tl.to(subtitleRef.current, {
        y: -100,
        opacity: 0,
        scale: 1.2,
        ease: 'power2.in'
      }, 0.1);

      // 5. Scroll Cue Fade Out
      tl.to(scrollPromptRef.current, {
        opacity: 0,
        y: 40,
        ease: 'power1.out'
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-neutral-950 select-none"
    >
      {/* Background Cinematic Sunflower Field Photo */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 will-change-transform"
        style={{
          backgroundImage: `url('/assets/hero-sunflower.jpg')`,
          filter: `var(--haze-blur)`
        }}
      >
        {/* Soft Golden Hour Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      {/* Foreground Simulated Sunflower Bokeh Depth Overlay */}
      <div 
        ref={foregroundBokehRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-70 will-change-transform flex items-end justify-between px-8 pb-12"
      >
        <div className="w-64 h-64 rounded-full bg-amber-400/20 blur-3xl transform -translate-x-12 translate-y-12" />
        <div className="w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl transform translate-x-16 translate-y-16" />
      </div>

      {/* Hero Typography Content */}
      <div className="relative z-20 text-center max-w-6xl px-4 flex flex-col items-center justify-center pt-16">
        
        {/* Editorial Sub-badge */}
        <div className="mb-6 inline-flex items-center gap-2 glass-pill px-4 py-1.5 shadow-2xl">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
          <span className="text-xs font-mono font-medium tracking-widest text-amber-200 uppercase">
            Digital Naturalism & Scrollytelling
          </span>
        </div>

        {/* Oversized Heading: IRFAN PC */}
        <h1 
          ref={titleRef}
          className="font-editorial text-7xl sm:text-9xl md:text-[13rem] leading-none font-bold tracking-tight text-cream drop-shadow-2xl will-change-transform"
          style={{ textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}
        >
          IRFAN PC
        </h1>

        {/* Subtitle: UI/UX DESIGNER */}
        <div 
          ref={subtitleRef}
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 text-center will-change-transform"
        >
          <span className="font-display font-light text-2xl sm:text-4xl text-amber-200/90 tracking-widest uppercase">
            UI / UX ARCHITECT
          </span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-amber-400/80" />
          <span className="font-body text-sm sm:text-base text-neutral-300 font-normal tracking-wider">
            Crafting Human-Centered Digital Landscapes
          </span>
        </div>

      </div>

      {/* Floating Bottom Scroll Prompt Cue */}
      <div 
        ref={scrollPromptRef}
        className="absolute bottom-10 z-30 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase">
          SCROLL TO UNFOLD NARRATIVE
        </span>
        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-amber-300 animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

    </section>
  );
}
