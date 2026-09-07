import React from 'react';
import { HeartHandshake, Layers, Code2, Sparkles } from 'lucide-react';

export default function StoryIntro() {
  return (
    <section 
      id="intro"
      className="relative w-full z-10 py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Central Editorial Glass Container */}
        <div className="glass-card p-8 sm:p-12 md:p-16 border-white/80 text-center relative overflow-hidden">
          
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 glass-pill mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sunflower" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              DESIGN PHILOSOPHY
            </span>
          </div>

          {/* Hero Editorial Statement */}
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-heading leading-tight max-w-4xl mx-auto mb-8">
            “Good design is not just about how an interface looks. It’s about how <span className="italic sunflower-text-gradient">naturally</span> it feels to use.”
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted font-body leading-relaxed mb-12">
            Irfan PC bridges user psychology, visual ergonomics, and frontend web code. Every interface decision is grounded in real human behavior, clean component systems, and purposeful interaction.
          </p>

          {/* 3 Core Approach Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="glass-panel p-6 sm:p-8 hover:border-amber-400/40">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-sunflower mb-4 shadow-sm">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-heading mb-2">01. Human Ergonomics</h3>
              <p className="text-xs sm:text-sm text-subtle leading-relaxed font-body">
                Prioritizing user clarity, cognitive ease, and accessible contrast before adding visual flourish.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 hover:border-amber-400/40">
              <div className="w-10 h-10 rounded-xl bg-forest/10 border border-forest/20 flex items-center justify-center text-forest mb-4 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-heading mb-2">02. Design Systems</h3>
              <p className="text-xs sm:text-sm text-subtle leading-relaxed font-body">
                Building tokenized UI architectures that scale predictably across complex web applications.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 hover:border-amber-400/40">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-800 mb-4 shadow-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-heading mb-2">03. Frontend Execution</h3>
              <p className="text-xs sm:text-sm text-subtle leading-relaxed font-body">
                Translating Figma prototypes into responsive, high-performance HTML/CSS and React components.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
