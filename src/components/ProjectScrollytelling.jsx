import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Activity, Eye, Sliders } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 'rfx-sneakers',
    number: '01',
    title: 'RFX QUANTUM ONE',
    subtitle: 'Next-Gen Luxury E-Commerce & 3D Sneaker Configurator',
    category: 'UX Strategy & Kinetic Web Application',
    image: '/assets/project-rfx.png',
    metrics: [
      { label: 'Conversion Boost', value: '+140%' },
      { label: 'Avg Session Time', value: '4m 12s' },
      { label: '3D Frame Rate', value: '60 FPS' }
    ],
    tags: ['E-Commerce', 'Three.js / React', 'UX Research', 'Design System'],
    description: 'A groundbreaking digital luxury store featuring real-time 3D athletic sneaker customization, tactile haptic feedback cues, and a frictionless 1-click glass checkout.'
  },
  {
    id: 'aura-health',
    number: '02',
    title: 'AURA HEALTH OS',
    subtitle: 'AI-Powered Mental Wellness & Biometric Ecosystem',
    category: 'Healthcare UI/UX & Spatial Glass Design',
    image: '/assets/project-aura.png',
    metrics: [
      { label: 'Daily Active Users', value: '250K+' },
      { label: 'User Retention', value: '88%' },
      { label: 'Stress Reduction', value: '34%' }
    ],
    tags: ['AI Interface', 'Glassmorphism', 'Biometrics', 'Design Tokens'],
    description: 'An introspective health operating system designed with Digital Naturalism principles. Monitors bio-rhythms with calm organic ambient waveforms and serene UI states.'
  },
  {
    id: 'horizon-mobility',
    number: '03',
    title: 'HORIZON EV MOBILITY',
    subtitle: 'Autonomous Electric Fleet Telematics & Command Center',
    category: 'Enterprise SaaS & Fleet Dashboard',
    image: '/assets/project-horizon.png',
    metrics: [
      { label: 'Data Processing', value: '< 20ms' },
      { label: 'Energy Savings', value: '28%' },
      { label: 'Active Fleets', value: '1,200+' }
    ],
    tags: ['Telematics', 'Dark Mode UI', 'Data Visualization', 'Micro-Interactions'],
    description: 'A high-density fleet management dashboard providing real-time telemetry, predictive charging routes, and mission-critical safety alerts with zero interface friction.'
  }
];

export default function ProjectScrollytelling({ onSelectProject }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray('.project-pinned-scene');

      projects.forEach((proj, idx) => {
        const image = proj.querySelector('.project-image-box');
        const card = proj.querySelector('.project-glass-card');
        const tags = proj.querySelectorAll('.project-tag-item');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: proj,
            start: 'top top',
            end: '+=130%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });

        // Entrance: Image zooms in from sky/depth
        tl.fromTo(image, 
          { scale: 1.25, opacity: 0.4, yPercent: 10 },
          { scale: 1, opacity: 1, yPercent: 0, ease: 'none' },
          0
        );

        // Glass Card slides into position
        tl.fromTo(card,
          { xPercent: idx % 2 === 0 ? 50 : -50, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: 'power2.out' },
          0.1
        );

        // Tags stagger reveal
        tl.fromTo(tags,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, ease: 'power1.out' },
          0.3
        );

        // Exit: Sliding Scrapbook Layer Effect out of view
        tl.to(image, {
          scale: 0.9,
          opacity: 0.2,
          filter: 'blur(15px)',
          ease: 'power2.in'
        }, 1);

        tl.to(card, {
          yPercent: -40,
          opacity: 0,
          ease: 'power2.in'
        }, 1);

      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="relative w-full bg-neutral-950">
      
      {/* Section Title Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
            SELECTED WORKS (2024 — 2026)
          </span>
          <h2 className="font-editorial text-5xl sm:text-7xl font-normal text-cream mt-2">
            Featured <span className="italic text-amber-300">Case Studies</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-neutral-400 font-body">
          Each project is a choreographed narrative designed to elevate human interaction through tactile aesthetics and deep system engineering.
        </p>
      </div>

      {/* Flagship Projects Scrollytelling List */}
      {PROJECTS.map((project, idx) => (
        <div 
          key={project.id}
          className="project-pinned-scene relative w-full h-screen overflow-hidden flex items-center justify-center px-4 md:px-12 py-12"
        >
          {/* Full Bleed Visual Backdrop Container */}
          <div className="absolute inset-0 w-full h-full p-4 md:p-8">
            <div className="project-image-box relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80" />
            </div>
          </div>

          {/* Floating Glassmorphic Content Card */}
          <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-start">
            <div 
              className={`project-glass-card max-w-xl w-full glass-panel p-8 sm:p-10 border border-amber-300/20 shadow-2xl backdrop-blur-2xl ${
                idx % 2 !== 0 ? 'ml-auto' : 'mr-auto'
              }`}
            >
              {/* Project Index Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-amber-400/80">
                  {project.number}
                </span>
                <span className="glass-pill text-[10px]">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-cream mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-amber-200/90 mb-4">
                {project.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-body">
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 py-4 mb-6 border-y border-white/10">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <span className="font-display text-lg font-bold text-amber-300">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="project-tag-item px-3 py-1 rounded-full text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive CTA to Launch Case Study Modal */}
              <button
                onClick={() => onSelectProject(project)}
                className="w-full btn-primary justify-center text-xs tracking-wider uppercase group cursor-pointer"
              >
                <span>EXPLORE DEEP-DIVE CASE STUDY</span>
                <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

        </div>
      ))}

    </section>
  );
}
