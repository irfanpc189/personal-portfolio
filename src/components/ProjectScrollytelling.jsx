import React from 'react';
import { ArrowRight, Sparkles, Layers, Wrench, UserCheck } from 'lucide-react';

const PROJECTS = [
  {
    id: 'rfx-sneakers',
    number: '01',
    title: 'RFX SNEAKERS',
    subtitle: 'Luxury E-Commerce & 3D Interactive Sneaker Experience',
    category: 'UI/UX Design & Frontend Development',
    image: '/assets/project-rfx.png',
    role: 'Lead UI/UX Designer & Frontend Engineer',
    tools: ['Figma', 'React', 'Three.js', 'CSS / Tailwind'],
    tags: ['E-Commerce', 'UI/UX Case Study', '3D Configurator', 'Design System'],
    description: 'A digital luxury e-commerce experience designed for athletic footwear enthusiasts. Features tactile interface architecture, 3D interactive shoe preview, and an effortless checkout experience.'
  },
  {
    id: 'aura-health',
    number: '02',
    title: 'AURA HEALTH OS',
    subtitle: 'Mental Wellness & Biometric Interface Ecosystem',
    category: 'Healthcare UI/UX & Spatial Glass Design',
    image: '/assets/project-aura.png',
    role: 'Senior UI/UX Architect',
    tools: ['Figma', 'Design Tokens', 'User Research', 'Prototyping'],
    tags: ['Healthcare', 'Glassmorphism', 'Biometrics', 'Design Tokens'],
    description: 'A mental health dashboard designed with serene visual hierarchy. Monitors biorhythms through calm organic UI states and intuitive data visualization.'
  },
  {
    id: 'horizon-mobility',
    number: '03',
    title: 'HORIZON EV MOBILITY',
    subtitle: 'Electric Fleet Telematics & Vehicle Dashboard',
    category: 'Enterprise SaaS & Fleet Interface',
    image: '/assets/project-horizon.png',
    role: 'UI/UX Designer & Systems Designer',
    tools: ['Figma', 'Wireframing', 'Design Systems', 'React'],
    tags: ['Telematics', 'Data Visualization', 'Dark/Light UI', 'Micro-Interactions'],
    description: 'A high-density fleet management interface providing real-time telemetry, charging routes, and safety alerts with zero cognitive friction.'
  }
];

export default function ProjectScrollytelling({ onSelectProject }) {
  return (
    <section id="work" className="relative w-full z-10 py-24 px-4 md:px-8">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sunflower" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              SELECTED CASE STUDIES
            </span>
          </div>
          <h2 className="font-editorial text-5xl sm:text-7xl font-normal text-heading">
            Featured <span className="italic sunflower-text-gradient">Projects</span>
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-muted font-body leading-relaxed">
          Explore real case studies demonstrating end-to-end UI/UX strategy, visual systems design, and production frontend code.
        </p>
      </div>

      {/* Immersive Project Cards List */}
      <div className="max-w-7xl mx-auto space-y-20">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id}
            className="glass-card p-6 sm:p-10 md:p-12 border-white/90 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Image Preview Box */}
              <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-black/10 shadow-md group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Project Meta & Narrative */}
              <div className={`lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-1' : ''} space-y-6`}>
                
                {/* Index & Category */}
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="font-mono text-3xl font-extrabold text-sunflower">
                    {project.number}
                  </span>
                  <span className="glass-pill text-[10px]">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sunflower-dark">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-body">
                  {project.description}
                </p>

                {/* Role & Tools Breakdown */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-subtle font-body">
                    <UserCheck className="w-4 h-4 text-sunflower shrink-0" />
                    <span className="font-semibold text-heading">Role:</span> {project.role}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-subtle font-body">
                    <Wrench className="w-4 h-4 text-forest shrink-0" />
                    <span className="font-semibold text-heading">Tools:</span> {project.tools.join(', ')}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="glass-chip text-[11px] py-1 px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA to open Case Study Drawer */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full btn-primary justify-center text-xs tracking-wider uppercase group cursor-pointer"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
