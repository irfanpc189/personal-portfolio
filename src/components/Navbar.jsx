import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Monogram Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="pointer-events-auto cursor-pointer group flex items-center gap-3 glass-nav px-5 py-2.5 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-sunflower/20 border border-sunflower/40 flex items-center justify-center font-display font-extrabold text-forest text-xs tracking-tighter shadow-sm">
              IPC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-heading group-hover:text-sunflower transition-colors">
                IRFAN PC
              </span>
              <span className="text-[10px] tracking-widest text-forest font-semibold uppercase">
                UI/UX DESIGNER
              </span>
            </div>
          </div>

          {/* Center Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 glass-nav px-4 py-2 pointer-events-auto shadow-sm">
            <button 
              onClick={() => scrollToSection('work')}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted hover:text-forest hover:bg-white/80 transition-all cursor-pointer"
            >
              WORK
            </button>
            <button 
              onClick={() => scrollToSection('intro')}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted hover:text-forest hover:bg-white/80 transition-all cursor-pointer"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted hover:text-forest hover:bg-white/80 transition-all cursor-pointer"
            >
              SKILLS
            </button>
            <button 
              onClick={() => scrollToSection('design-code')}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted hover:text-forest hover:bg-white/80 transition-all cursor-pointer"
            >
              DESIGN × CODE
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted hover:text-forest hover:bg-white/80 transition-all cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          {/* Right Actions: Availability & Mobile Trigger */}
          <div className="flex items-center gap-3 pointer-events-auto">
            
            {/* Availability Pill */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 glass-pill hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="pulse-dot" />
              <span className="text-[11px] font-bold text-forest tracking-wider">AVAILABLE '26</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sunflower" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden glass-nav p-3 text-heading hover:text-sunflower transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Glass Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/60 backdrop-blur-2xl flex flex-col justify-center px-8 py-20 transition-all">
          <div className="max-w-sm mx-auto w-full glass-panel p-8 space-y-6 text-center border-white/80 shadow-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-sunflower uppercase mb-4">
              NAVIGATION
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('work')}
                className="py-3 px-6 rounded-xl font-display font-bold text-lg text-heading hover:bg-white/80 transition-all cursor-pointer"
              >
                WORK
              </button>
              <button 
                onClick={() => scrollToSection('intro')}
                className="py-3 px-6 rounded-xl font-display font-bold text-lg text-heading hover:bg-white/80 transition-all cursor-pointer"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="py-3 px-6 rounded-xl font-display font-bold text-lg text-heading hover:bg-white/80 transition-all cursor-pointer"
              >
                SKILLS
              </button>
              <button 
                onClick={() => scrollToSection('design-code')}
                className="py-3 px-6 rounded-xl font-display font-bold text-lg text-heading hover:bg-white/80 transition-all cursor-pointer"
              >
                DESIGN × CODE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="py-3 px-6 rounded-xl font-display font-bold text-lg text-heading hover:bg-white/80 transition-all cursor-pointer"
              >
                CONTACT
              </button>
            </div>

            <div className="pt-6 border-t border-black/10">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full btn-primary justify-center text-xs tracking-wider uppercase"
              >
                LET'S TALK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
