import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PersistentBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Deep cinematic camera parallax effect through the entire document height
      gsap.to(bgRef.current, {
        scale: 3.0,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden pointer-events-none select-none bg-[#fbf9f4]">
      {/* Cinematic Background Layer */}
      <div 
        ref={bgRef}
        className="w-full h-full relative will-change-transform"
      >
        <img
          src="/assets/uploaded-bg.jpg"
          alt="Atmospheric Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
          style={{
            // Optimize rendering quality
            imageRendering: 'high-quality',
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Persistent Warm Editorial Light Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/35 via-white/50 to-amber-50/40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
}
