import React from 'react';

const skills = [
  { category: 'Design', items: ['UI/UX', 'Figma', 'Responsive Design', 'Prototyping', 'Wireframing'] },
  { category: 'Engineering', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] }
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="relative w-full z-10 py-32 px-4 md:px-8 min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="mb-16 inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-white/60" />
          <h2 className="text-sm font-mono font-bold tracking-widest text-white uppercase drop-shadow-md">
            Skills & Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {skills.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="font-editorial text-3xl text-white/90 drop-shadow-sm border-b border-white/20 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <div 
                    key={i}
                    className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-default shadow-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
