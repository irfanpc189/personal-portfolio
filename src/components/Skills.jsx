import React from 'react';
import { Palette, Code2, Compass, Sparkles, Layers, Terminal } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'design',
    title: 'DESIGN',
    icon: Palette,
    badgeText: 'CORE DISCIPLINE',
    badgeColor: 'text-sunflower border-amber-400/40 bg-amber-400/10',
    description: 'Creating human-centered digital interfaces, component design systems, and thoughtful interaction flows.',
    skills: [
      'Figma',
      'UI Design',
      'UX Design',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Visual Design'
    ]
  },
  {
    id: 'development',
    title: 'DEVELOPMENT',
    icon: Code2,
    badgeText: 'FRONTEND ENGINE',
    badgeColor: 'text-forest border-forest/30 bg-forest/10',
    description: 'Transforming visual design language into clean, performant, production-grade frontend implementations.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ]
  },
  {
    id: 'exploring',
    title: 'CURRENTLY EXPLORING',
    icon: Compass,
    badgeText: 'FUTURE FRONTIER',
    badgeColor: 'text-amber-800 border-amber-600/30 bg-amber-600/10',
    description: 'Experimenting with scrollytelling physics, creative interaction paradigms, and cinematic motion.',
    skills: [
      'Motion Design',
      'Creative Coding',
      'Advanced Frontend'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full z-10 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 glass-pill mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sunflower" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                CAPABILITIES & ARSENAL
              </span>
            </div>
            <h2 className="font-editorial text-5xl sm:text-7xl font-normal text-heading leading-tight">
              Design <span className="italic sunflower-text-gradient">&amp;</span> Technical Arsenal
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted font-body leading-relaxed">
            Crafting digital products requires equal mastery of human ergonomics and code execution. Here are the core tools and frameworks I use every day.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id}
                className="glass-card p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 border border-black/10 flex items-center justify-center text-forest shadow-sm">
                      <Icon className="w-6 h-6 text-forest" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${category.badgeColor}`}>
                      {category.badgeText}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-heading mb-3 tracking-wide">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-8">
                    {category.description}
                  </p>
                </div>

                {/* Skills Glass Tags Cluster */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-black/5">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="glass-chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
