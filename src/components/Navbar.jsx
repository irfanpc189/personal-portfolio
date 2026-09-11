import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Intersection Observer for Active Link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll Listener for Dynamic State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        if (window.lenis && !window.lenis.isDestroyed) {
          window.lenis.scrollTo(element);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (err) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsHovered(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  // The capsule is fully expanded if we are at the top OR if it is hovered.
  const isExpanded = !isScrolled || isHovered;

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        height: '48px', // STRICT Height constraint
        width: 'fit-content',
        maxWidth: '600px', // Prevent screen expansion
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '9999px', // Pill shape
        padding: '6px 16px 6px 6px', // 6px on left for avatar, 16px on right for balance
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
        boxSizing: 'border-box'
      }}
    >
      {/* 32x32 Avatar */}
      <div 
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          background: '#d99b1c', // Fallback color
          border: '1px solid rgba(255,255,255,0.15)'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
          alt="Profile" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Scrolled/Collapsed State Content ("Available for work") */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isExpanded ? 0 : 1,
            maxWidth: isExpanded ? '0px' : '220px',
            marginRight: isExpanded ? '0px' : '4px'
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500, marginRight: '12px' }}>
            Available for work
          </span>
          <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px', marginRight: '4px' }}>
            <span className="animate-ping" style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#f4d068', opacity: 0.75 }}></span>
            <span style={{ position: 'relative', height: '8px', width: '8px', borderRadius: '50%', backgroundColor: '#f4d068', border: '2px solid rgba(244,208,104,0.3)' }}></span>
          </span>
        </div>

        {/* Top/Expanded State Content (Links + CTA) */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isExpanded ? 1 : 0,
            maxWidth: isExpanded ? '500px' : '0px'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => { e.stopPropagation(); scrollToSection(link.id); }}
                className="hover-btn"
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  border: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  cursor: 'pointer'
                }}
              >
                {link.label}
              </button>
            );
          })}

          <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 4px' }} />

          <button
            onClick={(e) => { e.stopPropagation(); scrollToSection('contact'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ffffff',
              color: '#121814',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              marginLeft: '4px'
            }}
          >
            <Mail size={14} />
            <span>Work with me</span>
          </button>
        </div>
      </div>
      
      {/* Inline styles for hover state of buttons without relying on Tailwind classes that might get purged */}
      <style>{`
        .hover-btn:hover {
          color: #ffffff !important;
          background-color: rgba(255,255,255,0.1) !important;
        }
      `}</style>
    </header>
  );
}
