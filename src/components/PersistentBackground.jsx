import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PersistentBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle camera parallax effect through the entire document height
      gsap.to(bgRef.current, {
        scale: 1.08,
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
      {/* High Quality Sunflower Image Layer */}
      <div 
        ref={bgRef}
        className="w-full h-full bg-cover bg-center will-change-transform transform scale-100"
        style={{
          backgroundImage: `url('/assets/hero-sunflower.jpg')`,
        }}
      />
      
      {/* Persistent Warm Editorial Light Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/35 via-white/50 to-amber-50/40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />
    </div>
  );
}
