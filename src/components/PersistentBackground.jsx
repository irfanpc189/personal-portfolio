import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PersistentBackground() {
  const bgRef = useRef(null);
  const videoRef = useRef(null);
  const [useReducedMotion, setUseReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion OS user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setUseReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

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

  // Programmatic autoplay attempt for video background
  useEffect(() => {
    if (videoRef.current && !useReducedMotion && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy or playback issue fallback
        });
      }
    }
  }, [useReducedMotion, videoError]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden pointer-events-none select-none bg-[#fbf9f4]">
      {/* Cinematic Background Layer */}
      <div 
        ref={bgRef}
        className="w-full h-full relative will-change-transform"
      >
        {!useReducedMotion && !videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover object-[75%_80%] md:object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/hero-sunflower.jpg"
            onError={() => setVideoError(true)}
          >
            <source src="/assets/hero-sunflower.webm" type="video/webm" />
            <source src="/assets/hero-sunflower.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center md:bg-[center_bottom]"
            style={{
              backgroundImage: `url('/assets/hero-sunflower.jpg')`,
            }}
          />
        )}
      </div>

      {/* Persistent Warm Editorial Light Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/35 via-white/50 to-amber-50/40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
}

