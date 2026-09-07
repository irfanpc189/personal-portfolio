import React from 'react';
import { User, Sparkles, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutProcess() {
  return (
    <section id="about" className="relative w-full z-10 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Human Editorial Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 glass-pill">
              <User className="w-3.5 h-3.5 text-sunflower" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest">
                ABOUT IRFAN PC
              </span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-7xl text-heading leading-tight">
              Designing for humans, <span className="italic sunflower-text-gradient">thoughtfully</span> crafted.
            </h2>

            <p className="text-base sm:text-lg text-muted font-body leading-relaxed">
              I am <strong className="text-heading">Irfan PC</strong>, a UI/UX designer with a deep understanding of frontend web technologies. I believe digital experiences should feel warm, intuitive, and visually harmonious—never crowded or robotic.
            </p>

            <p className="text-sm text-subtle font-body leading-relaxed">
              My design approach blends natural aesthetics, negative space, and clear visual hierarchy. By maintaining strong curiosity about user behavior and technological constraints, I design interfaces that stay performant and easy to use.
            </p>

            {/* Mindset Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="glass-panel p-5 border-black/5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Compass className="w-4 h-4 text-sunflower" />
                  <h3 className="font-display font-bold text-heading text-sm">Design Mindset</h3>
                </div>
                <p className="text-xs text-subtle leading-relaxed">
                  Focusing on clarity, intuitive layout flow, and accessible typography scale.
                </p>
              </div>

              <div className="glass-panel p-5 border-black/5">
                <div className="flex items-center gap-2.5 mb-2">
                  <HeartHandshake className="w-4 h-4 text-forest" />
                  <h3 className="font-display font-bold text-heading text-sm">Continuous Learning</h3>
                </div>
                <p className="text-xs text-subtle leading-relaxed">
                  Exploring motion design, creative interactions, and modern web frameworks.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Editorial Quote & Values Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 sm:p-10 border-white/90 space-y-6">
              
              <div className="border-b border-black/10 pb-4">
                <span className="text-[10px] font-mono font-bold text-sunflower uppercase tracking-widest block mb-1">
                  DESIGN MANIFESTO
                </span>
                <h3 className="font-display text-xl font-bold text-heading">
                  Core Design Principles
                </h3>
              </div>

              <div className="space-y-4 text-xs text-muted font-body">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-heading block mb-0.5">Clarity over complexity</strong>
                    <span>If an element does not aid user understanding, remove it.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-heading block mb-0.5">Physical believable glass</strong>
                    <span>Use translucency to connect layers without sacrificing contrast.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sunflower shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-heading block mb-0.5">Engineering harmony</strong>
                    <span>Understand code constraints to build realistic, buildable designs.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-center">
                <p className="font-editorial text-lg italic text-heading">
                  “Simplicity is the presence of purpose.”
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
