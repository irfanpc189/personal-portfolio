import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Globe, Sparkles, Code, Palette, MessageSquare, Share2 } from 'lucide-react';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = 'irfan@irfanpc.design';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-neutral-950 px-4 md:px-8 pt-24 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Background Cinematic Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Call to Action */}
        <div className="glass-panel p-10 sm:p-16 border-amber-400/20 text-center mb-16 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-amber-200">
              INITIATE COLLABORATION
            </span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl font-normal text-cream max-w-4xl mx-auto mb-6 leading-tight">
            Let’s build something <span className="italic text-amber-300 gold-gradient-text">cinematic</span> together.
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-300 font-body mb-10">
            Available for select UI/UX design architecture, digital naturalism projects, and creative engineering consultancies for Q3/Q4 2026.
          </p>

          {/* Quick Copy Email CTA */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="btn-primary text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-2xl"
            >
              <Mail className="w-4 h-4 text-neutral-950" />
              <span>{email}</span>
              {copied ? <Check className="w-4 h-4 text-neutral-950" /> : <Copy className="w-4 h-4 text-neutral-950/60" />}
            </button>

            {copied && (
              <span className="text-xs font-mono text-emerald-400 animate-fade-in">
                EMAIL COPIED TO CLIPBOARD!
              </span>
            )}
          </div>

        </div>

        {/* Footer Bottom Metadata & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10 text-xs font-mono text-neutral-400">
          
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>© 2026 IRFAN PC — ALL RIGHTS RESERVED</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Code className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Palette className="w-4 h-4" />
              <span>Dribbble</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="glass-panel px-4 py-2 hover:border-amber-400/40 text-amber-300 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}
