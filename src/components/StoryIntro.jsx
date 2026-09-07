import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Cpu, HeartHandshake, Award, Sparkles, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StoryIntro() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const pillarsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the Story Intro for choreography
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
        }
      });

      // Glass Card Reveal & Scale In
      tl.fromTo(cardRef.current, 
        { scale: 0.85, opacity: 0, y: 80 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Stagger Pillars Upward
      tl.fromTo('.intro-pillar',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
        '-=0.4'
      );

      // Dissolve/Expand Out into Project 01
      tl.to(cardRef.current, {
        scale: 1.1,
        opacity: 0,
        y: -60,
        filter: 'blur(10px)',
        duration: 0.8,
        ease: 'power2.in'
      }, '+=0.4');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="intro"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-neutral-950 px-4 md:px-8 py-16"
    >
      {/* Ambient Backdrop Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-emerald-900/20 blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* Central Story Glass Card */}
      <div 
        ref={cardRef}
        className="relative z-10 max-w-5xl w-full glass-panel p-8 sm:p-12 md:p-16 border border-amber-300/20 shadow-2xl flex flex-col items-center text-center"
      >
        
        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-amber-200">
            THE PHILOSOPHY
          </span>
        </div>

        {/* Hero Narrative Heading */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-cream leading-tight max-w-4xl mb-8">
          “Designing digital experiences from <span className="italic text-amber-300 gold-gradient-text">human research</span> to production code.”
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-neutral-300 font-body mb-12">
          Irfan PC bridges high-concept visual aesthetics with mathematical code rigor. Every pixel is backed by behavioral research, elegant design systems, and silky 60FPS motion.
        </p>

        {/* 3 Philosophy Pillars */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          
          <div className="intro-pillar glass-panel p-6 border-amber-400/10 hover:border-amber-400/30 transition-all">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-cream mb-2">01. Human Research</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Synthesizing user research, cognitive psychology, and accessibility specs into intuitive user journeys.
            </p>
          </div>

          <div className="intro-pillar glass-panel p-6 border-emerald-400/10 hover:border-emerald-400/30 transition-all">
            <div className="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-cream mb-2">02. Design Systems</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Architecting modular, atomic UI frameworks that scale seamlessly across multi-platform web & native apps.
            </p>
          </div>

          <div className="intro-pillar glass-panel p-6 border-yellow-400/10 hover:border-yellow-400/30 transition-all">
            <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-cream mb-2">03. Creative Engineering</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Transforming complex Figma prototypes into performant React, WebGL shaders, and GSAP scroll timelines.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
