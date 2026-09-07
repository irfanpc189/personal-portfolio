import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Layers, Sliders } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-neutral-950/80 backdrop-blur-xl animate-fade-in">
      
      {/* Container Card */}
      <div className="relative w-full max-w-5xl glass-panel border-amber-400/30 overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Modal Top Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-900/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl font-bold text-amber-400">
              PROJECT {project.number}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <h3 className="font-display font-bold text-lg text-cream">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-neutral-300 hover:text-amber-300 hover:scale-110 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Hero Project Image Banner */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="glass-pill text-[10px] mb-2">{project.category}</span>
                <h4 className="font-display text-2xl sm:text-4xl font-extrabold text-cream">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Navigation Tabs inside Modal */}
          <div className="flex gap-3 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'overview' ? 'bg-amber-400 text-neutral-950' : 'glass-panel text-neutral-300 hover:text-amber-300'
              }`}
            >
              Overview & UX Research
            </button>

            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'tokens' ? 'bg-amber-400 text-neutral-950' : 'glass-panel text-neutral-300 hover:text-amber-300'
              }`}
            >
              Design Tokens & System
            </button>
          </div>

          {/* Tab 1: Overview & Research */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 border-red-500/20">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase block mb-2">THE CHALLENGE</span>
                  <h5 className="font-display text-lg font-bold text-cream mb-2">Cognitive Friction in Traditional Web Layouts</h5>
                  <p className="text-xs text-neutral-300 leading-relaxed font-body">
                    Users experienced high drop-off during 3D customization due to clunky navigation controls and slow load times on mobile browsers.
                  </p>
                </div>

                <div className="glass-panel p-6 border-emerald-500/20">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-2">THE UX SOLUTION</span>
                  <h5 className="font-display text-lg font-bold text-cream mb-2">Tactile Glassmorphism & Inertial Scroll</h5>
                  <p className="text-xs text-neutral-300 leading-relaxed font-body">
                    Engineered a fluid glass overlay interface paired with WebGL hardware acceleration, resulting in instantaneous visual feedback.
                  </p>
                </div>
              </div>

              {/* Business Impact Metrics */}
              <div>
                <h5 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-4">
                  VERIFIED BUSINESS OUTCOMES
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="glass-panel p-5 border-amber-400/20 text-center">
                      <span className="font-display text-3xl font-extrabold text-amber-300 block mb-1">
                        {m.value}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Design Tokens */}
          {activeTab === 'tokens' && (
            <div className="space-y-6">
              <div className="glass-panel p-6">
                <h5 className="font-display text-lg font-bold text-cream mb-4">Color Palette & Glass Tokens</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="w-full h-16 rounded-xl bg-[#E8B931] shadow-md" />
                    <span className="text-xs font-mono text-neutral-300 block">Sunflower Gold (#E8B931)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 rounded-xl bg-[#1C2B20] border border-white/20 shadow-md" />
                    <span className="text-xs font-mono text-neutral-300 block">Forest Green (#1C2B20)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 rounded-xl bg-[#F4EFE6] shadow-md" />
                    <span className="text-xs font-mono text-neutral-300 block">Warm Cream (#F4EFE6)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 rounded-xl bg-[#0B0F0C] border border-white/20 shadow-md" />
                    <span className="text-xs font-mono text-neutral-300 block">Charcoal Core (#0B0F0C)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between backdrop-blur-md">
          <span className="text-xs font-mono text-neutral-400">
            COMPLETED BY IRFAN PC
          </span>
          <button
            onClick={onClose}
            className="btn-primary text-xs tracking-wider uppercase cursor-pointer"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>

    </div>
  );
}
