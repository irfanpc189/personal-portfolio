import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar({ isAudioPlaying, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setTimeString(now.toLocaleTimeString('en-US', options) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Monogram Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto cursor-pointer group flex items-center gap-3 glass-nav px-5 py-2.5 transition-transform duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-display font-extrabold text-amber-300 text-sm tracking-tighter">
            IPC
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-amber-50 group-hover:text-amber-300 transition-colors">
              IRFAN PC
            </span>
            <span className="text-[10px] tracking-widest text-emerald-300/80 uppercase font-mono">
              UI/UX ARCHITECT
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 glass-nav px-4 py-2 pointer-events-auto">
          <button 
            onClick={() => scrollToSection('work')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-300 hover:text-amber-300 hover:bg-amber-400/10 transition-all"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('intro')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-300 hover:text-amber-300 hover:bg-amber-400/10 transition-all"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('playground')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-300 hover:text-amber-300 hover:bg-amber-400/10 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Playground
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-300 hover:text-amber-300 hover:bg-amber-400/10 transition-all"
          >
            About
          </button>
        </nav>

        {/* Right Actions: Sound Synth & Status Pill */}
        <div className="flex items-center gap-3 pointer-events-auto">
          
          {/* Ambient Soundscape Toggle */}
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? "Mute Golden Hour Ambience" : "Play Golden Hour Ambience"}
            className={`glass-nav p-2.5 rounded-full transition-all duration-300 flex items-center gap-2 ${
              isAudioPlaying ? 'border-amber-400/60 bg-amber-400/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="hidden sm:inline text-[11px] font-mono font-medium text-amber-300 pr-1">
                  SOUND ON
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px] font-mono font-medium text-neutral-400 pr-1">
                  AMBIENCE
                </span>
              </>
            )}
          </button>

          {/* Availability Status & Contact Trigger */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex items-center gap-2 glass-pill hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="pulse-dot"></span>
            <span className="text-[11px] font-semibold text-amber-200 tracking-wider">AVAILABLE '26</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

        </div>

      </div>
    </header>
  );
}
