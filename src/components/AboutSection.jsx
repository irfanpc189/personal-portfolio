import React from 'react';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative w-full z-10 py-32 px-4 md:px-8 min-h-[80vh] flex items-center justify-center"
    >
      <div 
        className="max-w-5xl mx-auto w-full relative"
        style={{
          marginTop: '100px',
          padding: '48px',
          background: 'rgba(255, 255, 255, 0.35)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          borderRadius: '32px',
        }}
      >
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px]" style={{ backgroundColor: '#854d0e' }} />
            <h2 style={{ color: '#854d0e', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
              ABOUT ME // THE SHORT STORY
            </h2>
          </div>

          <h3 
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', color: '#18181b', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.2', fontSize: '36px' }}
          >
            I design like a developer and code like a designer. Which means I argue with myself until the pixels behave.
          </h3>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 font-body mt-12"
            style={{ color: '#27272a', fontSize: '1rem', lineHeight: '1.6' }}
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#854d0e]">WHO I AM</h4>
              <p>I'm Irfan—a UI/UX designer and frontend developer. I craft high-performance web apps with living backgrounds, buttery-smooth animations, and clean, intuitive interactions.</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#854d0e]">MY UX PHILOSOPHY</h4>
              <p>Good UX is like a good joke—if you have to explain it, it's terrible. Software should feel so natural that people don't even think about the interface.</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#854d0e]">HOW I HELP YOU</h4>
              <p>Zero 'designer vs. developer' handoff drama. I design the Figma auto-layouts AND write the responsive React code that powers them—cutting out spec-translation meetings, speeding up sprint cycles, and shipping web experiences that actually convert.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
