import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isComplete]);

  const handleRelease = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true)
    });

    const mainContent = document.querySelector('.main-app-container'); 
    
    if (mainContent) {
      gsap.set(mainContent, { scale: 1.15, filter: 'blur(12px)' });
      gsap.to(mainContent, { 
        scale: 1, 
        filter: 'blur(0px)', 
        duration: 1.4, 
        ease: 'power3.out'
      });
    }

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }); 
  };

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={handleRelease}
        style={{
          padding: '14px 36px',
          background: 'transparent',
          border: '2px solid #ffffff',
          color: '#ffffff',
          borderRadius: '9999px',
          fontSize: '24px',
          fontWeight: 'bold',
          letterSpacing: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#ffffff';
          e.currentTarget.style.color = '#000000';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
      >
        BAN... KAI!
      </button>
    </div>
  );
}
