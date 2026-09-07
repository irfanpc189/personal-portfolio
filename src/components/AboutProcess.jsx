import React from 'react';
import { User, Cpu, Sparkles, CheckCircle2, Terminal, Compass } from 'lucide-react';

const STACK_BADGES = [
  'Figma (Design Systems)',
  'React.js / Next.js',
  'GSAP / ScrollTrigger',
  'Three.js / WebGL',
  'Tailwind CSS',
  'Spline 3D',
  'Design Tokens Architecture',
  'User Research & Ergonomics'
];

export default function AboutProcess() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-neutral-950 px-4 md:px-8 py-24 border-t border-white/10">
      
      {/* Ambient Backdrop */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-emerald-900/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-amber-200">
                PERSON BEHIND THE PIXELS
              </span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-7xl text-cream leading-tight">
              Designing for humans, <span className="italic text-amber-300">engineered</span> for performance.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed">
              Hello! I'm <strong className="text-cream">Irfan PC</strong>, a Senior UI/UX Architect and Creative Developer based in the intersection of digital craftsmanship and web technologies. Over the past 5+ years, I’ve partnered with luxury brands, AI platforms, and venture-backed startups to craft interfaces that inspire and convert.
            </p>

            <p className="text-sm text-neutral-400 font-body leading-relaxed">
              My design ethos, <em>Digital Naturalism</em>, draws inspiration from vast natural landscapes, golden hour lighting, and negative space—bringing calm, introspective elegance into a world dominated by noisy screens.
            </p>

            {/* Design & Engineering Arsenal */}
            <div className="pt-4">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-3">
                TECHNICAL & DESIGN ARSENAL
              </span>
              <div className="flex flex-wrap gap-2">
                {STACK_BADGES.map((badge, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cream flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Workflow Stage Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel p-6 border-amber-400/20 hover:border-amber-400/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-amber-400 font-bold text-sm">STAGE 01</span>
                <h3 className="font-display font-bold text-cream">Cognitive User Research</h3>
              </div>
              <p className="text-xs text-neutral-300">
                Conducting qualitative interviews, user journey mapping, and usability audits to pinpoint core friction points before drawing pixels.
              </p>
            </div>

            <div className="glass-panel p-6 border-amber-400/20 hover:border-amber-400/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-emerald-400 font-bold text-sm">STAGE 02</span>
                <h3 className="font-display font-bold text-cream">Systemic Glass Design</h3>
              </div>
              <p className="text-xs text-neutral-300">
                Architecting reusable tokenized UI components, glassmorphism overlays, and typography scale in Figma.
              </p>
            </div>

            <div className="glass-panel p-6 border-amber-400/20 hover:border-amber-400/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-yellow-400 font-bold text-sm">STAGE 03</span>
                <h3 className="font-display font-bold text-cream">Scrollytelling & Production</h3>
              </div>
              <p className="text-xs text-neutral-300">
                Implementing smooth 60FPS scroll timelines using GSAP, Lenis, and production-grade React components.
              </p>
            </div>

            {/* Philosophy Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-400/10 to-emerald-900/20 border border-amber-300/30 text-center">
              <p className="font-editorial text-xl italic text-amber-200 mb-2">
                “Simplicity is not the lack of clutter, but the presence of purpose.”
              </p>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                — IRFAN PC DESIGN MANIFESTO
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
