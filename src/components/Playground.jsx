import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Sliders, Volume2, Play, Pause, RefreshCw, Copy, Check, MousePointer, Paintbrush, Layers } from 'lucide-react';

export default function Playground({ isAudioPlaying, toggleAudio }) {
  const [activeTab, setActiveTab] = useState('lighting');

  // Lighting State
  const [warmth, setWarmth] = useState(100);
  const [tealShadow, setTealShadow] = useState(20);
  const [hazeBlur, setHazeBlur] = useState(0);

  // Glass Generator State
  const [glassBlur, setGlassBlur] = useState(20);
  const [glassOpacity, setGlassOpacity] = useState(45);
  const [glassBorder, setGlassBorder] = useState(15);
  const [copiedCode, setCopiedCode] = useState(false);

  // Particle Canvas Ref
  const canvasRef = useRef(null);

  // Apply CSS Variables live when lighting sliders change
  useEffect(() => {
    document.documentElement.style.setProperty('--sun-warmth', warmth / 100);
    document.documentElement.style.setProperty('--shadow-teal', tealShadow / 100);
    document.documentElement.style.setProperty('--haze-blur', `${hazeBlur}px`);
  }, [warmth, tealShadow, hazeBlur]);

  // Particle Physics Canvas Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 3 + 2,
      color: Math.random() > 0.5 ? '#E8B931' : '#889E87',
      baseAlpha: Math.random() * 0.6 + 0.3
    }));

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel from cursor
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 4;
          p.y -= (dy / dist) * force * 4;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.fill();

        // Draw connecting lines if close
        particles.forEach((p2) => {
          const d2 = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d2 < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#E8B931';
            ctx.globalAlpha = (80 - d2) / 80 * 0.15;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeTab]);

  const copyGlassCSS = () => {
    const code = `background: rgba(18, 24, 20, ${glassOpacity / 100});
backdrop-filter: blur(${glassBlur}px);
border: 1px solid rgba(244, 239, 230, ${glassBorder / 100});
border-radius: 20px;`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="playground" className="relative w-full min-h-screen bg-neutral-950 px-4 md:px-8 py-24 border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-amber-200">
                EXPERIMENTAL LAB
              </span>
            </div>
            <h2 className="font-editorial text-5xl sm:text-6xl text-cream">
              The Creative <span className="italic text-amber-300">Playground</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-300 font-body">
            Inspired by Zainab Kabira's "person behind the pixels", explore live visual shaders, Web Audio golden hour soundscapes, and physics widgets.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveTab('lighting')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'lighting' ? 'bg-amber-400 text-neutral-950 shadow-lg scale-105' : 'glass-panel text-neutral-300 hover:text-amber-300'
            }`}
          >
            <Paintbrush className="w-4 h-4" />
            Lighting & Atmosphere Shader
          </button>
          
          <button
            onClick={() => setActiveTab('physics')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'physics' ? 'bg-amber-400 text-neutral-950 shadow-lg scale-105' : 'glass-panel text-neutral-300 hover:text-amber-300'
            }`}
          >
            <MousePointer className="w-4 h-4" />
            Particle Physics Field
          </button>

          <button
            onClick={() => setActiveTab('glass')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'glass' ? 'bg-amber-400 text-neutral-950 shadow-lg scale-105' : 'glass-panel text-neutral-300 hover:text-amber-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            Glassmorphic Card Studio
          </button>
        </div>

        {/* Tab 1: Live Lighting Shader Controls */}
        {activeTab === 'lighting' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-panel p-8 sm:p-10 border-amber-400/20">
              <h3 className="font-display text-2xl font-bold text-cream mb-2 flex items-center gap-3">
                <Sliders className="w-5 h-5 text-amber-400" />
                Live Digital Naturalism Color Grade
              </h3>
              <p className="text-xs text-neutral-400 mb-8">
                Mutate the entire portfolio's CSS tokens in real-time. Feel the warmth shift from golden-hour sunlight to cool twilight shadows.
              </p>

              <div className="space-y-6">
                
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-amber-300 uppercase font-semibold">Sunlight Warmth Tone</span>
                    <span className="text-neutral-400">{warmth}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="160" 
                    value={warmth} 
                    onChange={(e) => setWarmth(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-emerald-300 uppercase font-semibold">Cool Teal Shadow Cast</span>
                    <span className="text-neutral-400">{tealShadow}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={tealShadow} 
                    onChange={(e) => setTealShadow(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-yellow-200 uppercase font-semibold">Atmospheric Haze Blur</span>
                    <span className="text-neutral-400">{hazeBlur}px</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    value={hazeBlur} 
                    onChange={(e) => setHazeBlur(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-yellow-200"
                  />
                </div>

              </div>

              {/* Presets */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">Presets:</span>
                <button 
                  onClick={() => { setWarmth(100); setTealShadow(20); setHazeBlur(0); }}
                  className="px-3 py-1 rounded-full text-[11px] font-mono glass-panel hover:text-amber-300"
                >
                  Golden Hour (Default)
                </button>
                <button 
                  onClick={() => { setWarmth(150); setTealShadow(0); setHazeBlur(2); }}
                  className="px-3 py-1 rounded-full text-[11px] font-mono glass-panel hover:text-amber-300"
                >
                  High Noon Sun
                </button>
                <button 
                  onClick={() => { setWarmth(60); setTealShadow(90); setHazeBlur(4); }}
                  className="px-3 py-1 rounded-full text-[11px] font-mono glass-panel hover:text-amber-300"
                >
                  Cool Dusk Haze
                </button>
              </div>

            </div>

            {/* Soundscape Card */}
            <div className="glass-panel p-8 border-amber-400/20 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6">
                  <Volume2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-2">
                  Golden Hour Web Audio Synth
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Synthesizes organic ambient golden-hour harmonic frequencies live using browser Web Audio oscillators. No heavy MP3 audio files needed.
                </p>
              </div>

              <button
                onClick={toggleAudio}
                className={`w-full py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer ${
                  isAudioPlaying ? 'bg-amber-400 text-neutral-950 shadow-xl' : 'btn-glass'
                }`}
              >
                {isAudioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-amber-400" />}
                {isAudioPlaying ? 'MUTE SYNTHESIZER' : 'ACTIVATE AMBIENT SYNTH'}
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Particle Physics Canvas */}
        {activeTab === 'physics' && (
          <div className="glass-panel p-6 sm:p-8 border-amber-400/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-cream">
                  Interactive Kinetic Field
                </h3>
                <p className="text-xs text-neutral-400">
                  Move your cursor across the canvas to disturb the floating golden pollen particles.
                </p>
              </div>
              <span className="glass-pill text-[10px]">HTML5 CANVAS + PHYSICS</span>
            </div>
            <div className="w-full h-96 rounded-2xl bg-neutral-900/80 overflow-hidden relative border border-white/10">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
            </div>
          </div>
        )}

        {/* Tab 3: Glass Studio */}
        {activeTab === 'glass' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-panel p-8 border-amber-400/20">
              <h3 className="font-display text-xl font-bold text-cream mb-6">
                Glassmorphic Parameter Studio
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-amber-300">Backdrop Blur Strength</span>
                    <span className="text-neutral-400">{glassBlur}px</span>
                  </div>
                  <input 
                    type="range" min="0" max="40" value={glassBlur} 
                    onChange={(e) => setGlassBlur(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-amber-300">Surface Opacity</span>
                    <span className="text-neutral-400">{glassOpacity}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="90" value={glassOpacity} 
                    onChange={(e) => setGlassOpacity(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-amber-300">Border Highlight Opacity</span>
                    <span className="text-neutral-400">{glassBorder}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="50" value={glassBorder} 
                    onChange={(e) => setGlassBorder(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>

              <button
                onClick={copyGlassCSS}
                className="mt-8 w-full btn-glass justify-center text-xs tracking-wider uppercase cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedCode ? 'CSS COPIED TO CLIPBOARD!' : 'COPY CSS UTILITY CODE'}
              </button>
            </div>

            {/* Live Glass Preview */}
            <div className="relative rounded-3xl p-8 overflow-hidden flex items-center justify-center bg-cover bg-center border border-white/10" style={{ backgroundImage: `url('/assets/hero-sunflower.jpg')` }}>
              <div 
                className="w-full max-w-md p-8 shadow-2xl transition-all duration-300"
                style={{
                  background: `rgba(18, 24, 20, ${glassOpacity / 100})`,
                  backdropFilter: `blur(${glassBlur}px)`,
                  WebkitBackdropFilter: `blur(${glassBlur}px)`,
                  border: `1px solid rgba(244, 239, 230, ${glassBorder / 100})`,
                  borderRadius: '20px'
                }}
              >
                <div className="glass-pill mb-3">LIVE GLASS PREVIEW</div>
                <h4 className="font-display text-xl font-bold text-cream mb-2">
                  Tactile Glass Overlay
                </h4>
                <p className="text-xs text-neutral-200 leading-relaxed font-body">
                  Glassmorphism creates spatial depth over vibrant background imagery while maintaining strict typography contrast ratio.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
