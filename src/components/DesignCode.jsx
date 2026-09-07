import React from 'react';
import { Layers, Code2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function DesignCode() {
  return (
    <section id="design-code" className="relative w-full z-10 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Glass Container */}
        <div className="glass-card p-8 sm:p-12 md:p-16 border-amber-400/30 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Narrative Statement */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 glass-pill">
                <Sparkles className="w-3.5 h-3.5 text-sunflower" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  THE BRIDGE DISCIPLINE
                </span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-6xl text-heading leading-tight">
                Design should <span className="italic sunflower-text-gradient">survive</span> implementation.
              </h2>

              <p className="text-base sm:text-lg text-muted font-body leading-relaxed">
                Too often, beautiful Figma prototypes lose their soul during technical handoff. Because I understand both human interaction design and frontend web architecture, the original visual intent, fluid motion timings, and spatial typography survive cleanly into production code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                <div className="glass-panel p-5 border-black/5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Layers className="w-5 h-5 text-sunflower" />
                    <h3 className="font-display font-bold text-heading text-sm">Design Intent</h3>
                  </div>
                  <p className="text-xs text-subtle leading-relaxed">
                    User psychology, spatial rhythm, tokenized color systems, and accessible UX hierarchy.
                  </p>
                </div>

                <div className="glass-panel p-5 border-black/5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Code2 className="w-5 h-5 text-forest" />
                    <h3 className="font-display font-bold text-heading text-sm">Frontend Reality</h3>
                  </div>
                  <p className="text-xs text-subtle leading-relaxed">
                    Semantic HTML5, responsive CSS layout, performant React components, and 60FPS scroll animations.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Visual Comparison / Manifest Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-8 sm:p-10 border-amber-400/20 bg-white/70 space-y-6 text-left">
                
                <div className="border-b border-black/10 pb-4">
                  <span className="text-[10px] font-mono font-bold text-sunflower uppercase tracking-widest block mb-1">
                    IRFAN'S DUAL CAPABILITY
                  </span>
                  <h3 className="font-display text-xl font-bold text-heading">
                    UI/UX Designer + Frontend Developer
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs text-muted font-body">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                    <span>No breakdown during developer handoffs or asset exports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                    <span>Design tokens mirror production CSS variables 1:1</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                    <span>Inertial scroll timelines &amp; micro-interactions built with performance rigor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                    <span>Accessible contrast and responsive touch targets enforced throughout</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-subtle block italic">
                    “Code is simply the medium through which design becomes real.”
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
