import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const projects = [
  {
    id: 1,
    title: 'Re-Store',
    category: 'DIY Repair & Upcycling Hub',
    year: '2026',
    description: 'A community-driven platform promoting sustainable living through repair guides, upcycling tutorials, and a marketplace for refurbished goods.',
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1600&auto=format&fit=crop',

  },
  {
    id: 2,
    title: 'Houzing',
    category: 'Real Estate Platform',
    year: '2025',
    description: 'A modern real estate platform that simplifies property discovery with immersive virtual tours and seamless agent communication.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Rexecommerce / RFX',
    category: 'E-commerce Experience',
    year: '2025',
    description: 'High-end streetwear and sneaker storefront featuring 3D product viewing and an optimized checkout funnel.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'Mobile App Wireframes',
    year: '2024',
    description: 'Early design sketches and raw wireframes for a hyper-local food delivery interface focusing on quick ordering.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'CareHaven',
    category: 'Senior Care Website',
    year: '2024',
    description: 'A compassionate, highly accessible web presence connecting families with trusted senior care professionals and facilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const stickersRef = useRef([]);
  const cursorRef = useRef(null);
  const progressRef = useRef(null);

  const [currentProject, setCurrentProject] = useState(1);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Draggable Malayalam Stickers
      Draggable.create(stickersRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: containerRef.current,
        inertia: true,
        onPress: function () { gsap.to(this.target, { scale: 1.1, zIndex: 100, duration: 0.2 }); },
        onRelease: function () { gsap.to(this.target, { scale: 1, duration: 0.2 }); }
      });

      // 2. Horizontal Scroll Track Mapping
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const scrollTween = gsap.to(trackRef.current, {
        x: () => -(trackWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${trackWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update counter logic based on progress
            const progress = self.progress;
            const index = Math.min(projects.length - 1, Math.floor(progress * projects.length));
            setCurrentProject(index + 1);

            // Update bottom scrub bar
            gsap.to(progressRef.current, { scaleX: progress, duration: 0.1 });
          }
        }
      });

      // 3. Image Parallax inside cards
      imagesRef.current.forEach((img, i) => {
        gsap.to(img, {
          xPercent: 30, // image moves opposite to track
          ease: "none",
          scrollTrigger: {
            trigger: cardsRef.current[i],
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
          }
        });
      });

      // 4. Entrance 3D Perspective Animation for Cards
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { rotateY: -15, scale: 0.85, opacity: 0.3 },
          {
            rotateY: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right+=200", // Start when left of card enters right side of screen (+200 buffer)
              end: "left center",       // End when left of card hits center
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Magnetic Cursor logic
  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full z-10 bg-[#0b0a0e] text-[#f3f3f5] overflow-hidden"
    >
      {/* Custom Magnetic Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-28 h-28 rounded-full bg-[#e6b033] text-[#112014] font-bold flex items-center justify-center text-center text-[11px] pointer-events-none z-[9999] opacity-0 scale-0 shadow-[0_0_40px_rgba(230,176,51,0.5)] tracking-widest leading-tight transition-all duration-300"
        style={{ transformOrigin: 'center center' }}
      >
        EXPLORE<br />WORK →
      </div>

      {/* Sticky Pin Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        {/* Fixed Counter Indicator */}
        <div className="absolute left-6 sm:left-12 top-12 z-20 pointer-events-none drop-shadow-2xl">
          <div className="text-4xl sm:text-6xl font-editorial font-bold text-white tracking-widest mix-blend-difference">
            0{currentProject} <span className="text-xl sm:text-3xl text-white/50">/ 0{projects.length}</span>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-12 sm:gap-24 md:gap-40 px-4 sm:px-12 md:px-32 lg:px-64 will-change-transform pt-12"
          style={{ width: 'fit-content' }}
        >
          {projects.map((project, idx) => (
            <article
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="parallax-card relative flex-shrink-0 flex flex-col justify-between overflow-hidden cursor-none group"
              style={{
                width: '85vw',
                maxWidth: '1100px',
                height: '70vh',
                minHeight: '500px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '28px',
                padding: '32px',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)'
              }}
              onMouseEnter={() => gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' })}
              onMouseLeave={() => gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3, ease: 'power2.in' })}
            >
              {/* Internal Parallax Image Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[28px]">
                <img
                  ref={el => imagesRef.current[idx] = el}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    width: '140%', // extra width for parallax travel
                    left: '-20%',
                    transform: 'scale(1.15)', // scaled up for depth
                    filter: 'brightness(1) contrast(1.05) saturate(1.1)',
                    willChange: 'transform'
                  }}
                />
                {/* Gradient overlay to ensure text legibility at the very bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b]/95 via-[#0a0f0b]/10 to-transparent" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Top Metadata */}
              <div className="relative z-10 flex justify-between items-start mt-2">
                <div className="flex gap-3">
                  <span className="px-5 py-2 rounded-full bg-black/30 border border-white/20 text-white/95 text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-lg shadow-lg">
                    {project.category}
                  </span>
                </div>
                <span className="font-mono text-[#e6b033] text-sm md:text-base font-bold tracking-widest border border-[#e6b033]/30 px-4 py-1.5 rounded-full bg-black/60 shadow-lg backdrop-blur-md">
                  {project.year}
                </span>
              </div>

              {/* Bottom Headline */}
              <div className="relative z-10 mb-4 pointer-events-none">
                <h3 className="font-editorial text-5xl sm:text-7xl md:text-8xl text-white font-bold tracking-tight drop-shadow-2xl mb-6 leading-[1.05]">
                  {project.title}
                </h3>
                <p 
                  className="max-w-2xl font-body text-sm sm:text-lg leading-relaxed font-medium"
                  style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Malayalam Meme Sticker */}
              {project.sticker && (
                <div
                  ref={el => stickersRef.current[idx] = el}
                  className={`absolute px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-[3px] shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.8)] flex items-center gap-2 cursor-grab active:cursor-grabbing z-50 whitespace-nowrap ${project.sticker.color}`}
                  style={{
                    top: project.sticker.top,
                    right: project.sticker.right,
                    left: project.sticker.left,
                    bottom: project.sticker.bottom,
                    transform: `rotate(${project.sticker.rotation}deg)`
                  }}
                  onMouseEnter={(e) => {
                    e.stopPropagation(); // Stop custom cursor from showing over sticker
                    gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.2 });
                  }}
                  onMouseLeave={(e) => {
                    // Restore custom cursor
                    gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.2 });
                  }}
                >
                  <span className="text-lg sm:text-xl drop-shadow-sm">{project.sticker.icon}</span>
                  <span className="text-[11px] sm:text-[13px] font-bold font-body tracking-tight drop-shadow-sm text-black">
                    {project.sticker.text}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Scrub Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#d99b1c] to-[#f4d068] origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

      </div>
    </section>
  );
}
