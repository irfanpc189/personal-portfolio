import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic fade-out and translation as camera moves forward
      gsap.to(containerRef.current, {
        y: -150,
        scale: 0.9,
        opacity: 0,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Stacked Sliding Text Reveal Animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to(line1Ref.current, {
        y: -8,
        duration: 0.6,
        ease: 'power3.out'
      }, 0);

      tl.fromTo(line2Ref.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.5)'
        }, 0.2
      );

      tl.to(line2Ref.current, {
        backgroundPosition: '-200% center',
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 3
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = () => {
    try {
      const element = document.getElementById('about');
      if (element) {
        if (window.lenis && !window.lenis.isDestroyed) {
          window.lenis.scrollTo(element);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (err) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen z-10 flex flex-col justify-center items-center px-4 sm:px-8 overflow-hidden select-none"
    >
      
      {/* Hero Central Editorial Typography Container */}
      <div 
        ref={containerRef}
        className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center justify-center will-change-transform"
      >
        
        {/* Primary Name Heading: IRFAN PC */}
        <h1 
          className="font-editorial flex items-center justify-center text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-none font-bold tracking-tight mb-4"
        >
          <span style={{ 
            background: 'linear-gradient(#d99b1c, #d99b1c) center / 100% 75% no-repeat, linear-gradient(#d99b1c, #d99b1c) center / 85% 100% no-repeat', 
            color: '#ffffff', 
            padding: '0.15em 0.25em',
            display: 'inline-block'
          }}>IRFAN</span>
          <span style={{ color: '#0a0f0b', marginLeft: '0.15em' }}>PC</span>
        </h1>

        {/* Subtitle Identity: Stacked Animated Roles */}
        <div className="mt-4 flex flex-col items-center justify-center relative w-full font-display uppercase font-bold text-2xl sm:text-4xl leading-tight">
          
          <div ref={line1Ref} className="text-white relative z-10" style={{ letterSpacing: '3px' }}>
            UI / UX DESIGNER
          </div>
          
          <div className="overflow-hidden relative z-0 mt-2 flex items-center" style={{ padding: '4px 16px' }}>
            <div 
              ref={line2Ref}
              style={{
                letterSpacing: '3px',
                backgroundImage: 'linear-gradient(90deg, #EAB308 0%, #F59E0B 40%, #FEF08A 50%, #F59E0B 60%, #EAB308 100%)',
                backgroundSize: '200% auto',
                color: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                textShadow: '0 0 16px rgba(234, 179, 8, 0.5)',
              }}
            >
              FRONT-END DEVELOPER
            </div>
          </div>

        </div>

        {/* Short Editorial Supporting Statement */}
        <p className="mt-8 max-w-2xl text-xl sm:text-2xl font-editorial leading-relaxed text-center drop-shadow-md" style={{ color: '#ffffff', letterSpacing: '0.02em' }}>
          I design thoughtful digital experiences where people, visuals, and technology meet seamlessly.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleExplore}
          className="mt-12 group inline-flex items-center gap-3 px-8 py-4 bg-white text-forest font-bold rounded-full hover:bg-sunflower hover:text-forest transition-colors shadow-xl"
        >
          <span>Explore my work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}
