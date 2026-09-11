import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative w-full z-10 py-16 px-4 md:px-8 min-h-screen flex flex-col items-center"
    >
      {/* Top Spacer for centering */}
      <div className="flex-1" />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        <div className="mb-8 inline-flex items-center gap-2 glass-pill px-4 py-1.5 bg-black/20 border-white/10 backdrop-blur-md shadow-lg">
          <span className="pulse-dot bg-sunflower" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/90 drop-shadow-md">
            Destination Reached
          </span>
        </div>

        <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl leading-[1.05] font-bold tracking-tight text-[#fdfcf8] drop-shadow-2xl mb-6">
          Let's build something together.
        </h2>

        <p className="max-w-2xl text-lg sm:text-2xl font-body leading-relaxed mb-12" style={{ color: '#ffffff', fontWeight: 400 }}>
          Have an idea, project, or opportunity? <br/>
          <span className="font-editorial italic font-bold text-3xl sm:text-4xl" style={{ color: '#ffffff', letterSpacing: '0.02em' }}>Let's create something meaningful.</span>
        </p>

        <a 
          href="mailto:pcirfan918@gmail.com"
          className="group inline-flex items-center justify-center bg-sunflower text-forest font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl mb-16 text-lg"
          style={{ padding: '16px 32px', gap: '12px', textDecoration: 'none' }}
        >
          <span style={{ textDecoration: 'none' }}>Get in touch</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a href="mailto:pcirfan918@gmail.com" className="p-4 rounded-full glass-panel bg-white/10 border-white/20 hover:bg-white/30 transition-colors text-white hover:text-sunflower shadow-lg">
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>

      {/* Bottom Spacer for centering */}
      <div className="flex-1" />

      {/* Footer minimal credit */}
      <div className="w-full text-center px-4 pt-12 pb-4">
        <p className="text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} Irfan PC. All rights reserved.
        </p>
      </div>
    </section>
  );
}
