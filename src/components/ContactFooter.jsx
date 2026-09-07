import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Sparkles, Share2, Palette, Code, MessageSquare } from 'lucide-react';

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
    <footer id="contact" className="relative w-full z-10 py-24 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Call to Action Light Glass Card */}
        <div className="glass-card p-10 sm:p-16 border-white/90 text-center mb-16 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 glass-pill mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sunflower" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              INITIATE COLLABORATION
            </span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl font-normal text-heading max-w-4xl mx-auto mb-4 leading-tight">
            Have an idea <span className="italic sunflower-text-gradient">worth designing?</span>
          </h2>

          <p className="font-display text-3xl sm:text-5xl font-bold text-forest mb-8">
            Let’s talk.
          </p>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-muted font-body mb-10 leading-relaxed">
            Available for select UI/UX design strategy, design system architecture, and creative frontend development projects.
          </p>

          {/* Email Copy CTA */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="btn-primary text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-md"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{email}</span>
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white/70" />}
            </button>

            {copied && (
              <span className="text-xs font-mono text-forest font-bold">
                EMAIL COPIED TO CLIPBOARD!
              </span>
            )}
          </div>

        </div>

        {/* Footer Bottom Metadata & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/10 text-xs font-mono text-subtle">
          
          {/* Copyright */}
          <div className="flex items-center gap-2.5">
            <div className="pulse-dot" />
            <span className="font-bold text-heading">© 2026 IRFAN PC</span>
            <span>— ALL RIGHTS RESERVED</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sunflower transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Code className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sunflower transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sunflower transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Dribbble</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-sunflower transition-colors flex items-center gap-1.5 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Twitter</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="glass-panel px-4 py-2 hover:border-sunflower text-heading flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-sunflower" />
          </button>

        </div>

      </div>
    </footer>
  );
}
