import React, { useState } from 'react';
import { X, CheckCircle2, UserCheck, Wrench, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!project) return null;

  const PROCESS_STEPS = [
    { num: '01', title: 'Problem', desc: 'Identifying core user pain points and friction in existing interaction flows.' },
    { num: '02', title: 'Research', desc: 'Conducting user observations, competitive analysis, and accessibility audits.' },
    { num: '03', title: 'Thinking', desc: 'Structuring information architecture, mental models, and user journeys.' },
    { num: '04', title: 'Exploration', desc: 'Wireframing low-fidelity layouts and testing multiple UI layout concepts.' },
    { num: '05', title: 'Decisions', desc: 'Selecting color tokens, typography scales, and glass interaction rules.' },
    { num: '06', title: 'Design', desc: 'Crafting high-fidelity UI screens and tactile component design systems.' },
    { num: '07', title: 'Development', desc: 'Writing clean, semantic HTML/CSS and React components matching Figma specs.' },
    { num: '08', title: 'Outcome', desc: 'Delivering a polished interface that improves user engagement and visual clarity.' },
    { num: '09', title: 'Reflection', desc: 'Evaluating usability feedback and identifying areas for future iteration.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/40 backdrop-blur-xl animate-fade-in">
      
      {/* Container Glass Card */}
      <div className="relative w-full max-w-5xl glass-card border-white/90 overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Modal Top Header Bar */}
        <div className="p-6 border-b border-black/10 flex items-center justify-between bg-white/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl font-extrabold text-sunflower">
              {project.number}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-black/20" />
            <h3 className="font-display font-bold text-lg text-heading">
              {project.title} — Case Study
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-heading hover:text-sunflower hover:scale-110 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Hero Project Banner */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-black/10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="glass-pill text-[10px] mb-2">{project.category}</span>
                <h4 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Project Details Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-5 border-black/5">
              <span className="text-[10px] font-mono font-bold text-sunflower uppercase block mb-1">PROJECT ROLE</span>
              <p className="text-sm font-bold text-heading">{project.role}</p>
            </div>
            <div className="glass-panel p-5 border-black/5">
              <span className="text-[10px] font-mono font-bold text-forest uppercase block mb-1">TOOLS &amp; STACK</span>
              <p className="text-sm font-bold text-heading">{project.tools.join(', ')}</p>
            </div>
          </div>

          {/* Design Thinking Steps Navigation */}
          <div>
            <span className="text-xs font-mono font-bold text-sunflower uppercase tracking-widest block mb-4">
              DESIGN THINKING PROCESS (01 — 09)
            </span>

            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 mb-6">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-2 rounded-xl text-center transition-all cursor-pointer border ${
                    activeStep === idx 
                      ? 'bg-forest text-white border-forest font-bold shadow-sm' 
                      : 'glass-panel text-muted hover:text-heading border-black/5'
                  }`}
                >
                  <span className="block text-[10px] font-mono">{step.num}</span>
                  <span className="block text-[11px] font-display truncate">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="glass-panel p-6 border-amber-400/20 bg-white/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm font-bold text-sunflower">
                  STAGE {PROCESS_STEPS[activeStep].num}
                </span>
                <h5 className="font-display text-xl font-bold text-heading">
                  {PROCESS_STEPS[activeStep].title}
                </h5>
              </div>
              <p className="text-sm text-muted leading-relaxed font-body">
                {PROCESS_STEPS[activeStep].desc}
              </p>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-black/10 bg-white/80 flex items-center justify-between backdrop-blur-md">
          <span className="text-xs font-mono text-subtle">
            IRFAN PC — UI/UX ARCHITECTURE
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
