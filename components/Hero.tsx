import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, BADGE_IMAGES } from '../constants';
import { Download, Check, Gamepad2, Palette } from 'lucide-react';
import { triggerCvDownload } from '../cvDownload';
import { CV_PRIMARY_URL, CV_FILE_NAME } from '../cvData';

const TITLE_CONFIG = [
  {
    title: "GAME DEVELOPER",
    shortLabel: "Game Dev",
    tagline: "Gameplay Mechanics • Unity 2D/3D • C#",
    icon: Gamepad2,
    gradient: "from-cyber-primary via-cyan-300 to-indigo-400",
    glow: "rgba(0, 240, 255, 0.45)",
    cursorColor: "bg-cyber-primary",
    badgeBorder: "border-cyber-primary/60",
    badgeBg: "bg-cyber-primary/10",
    badgeText: "text-cyber-primary"
  },
  {
    title: "GRAPHIC DESIGNER",
    shortLabel: "Graphic Design",
    tagline: "UI/UX • Visual Identity • 2D Animation",
    icon: Palette,
    gradient: "from-fuchsia-400 via-pink-400 to-purple-400",
    glow: "rgba(217, 70, 239, 0.45)",
    cursorColor: "bg-fuchsia-400",
    badgeBorder: "border-fuchsia-500/60",
    badgeBg: "bg-fuchsia-500/10",
    badgeText: "text-fuchsia-400"
  }
];

export const Hero: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLE_CONFIG.length);
        setIsTransitioning(false);
      }, 320);
    }, 3200);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectTitle = (idx: number) => {
    if (idx === titleIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setTitleIndex(idx);
      setIsTransitioning(false);
    }, 200);
    startTimer();
  };

  const currentRole = TITLE_CONFIG[titleIndex];

  const handleDownload = (e: React.MouseEvent) => {
    triggerCvDownload(e);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  // Create a sufficient set of badges to cover wider screens before duplication
  // 5 images * 4 sets = 20 images in the base set, enough for 1920px+ widths
  const baseSet = [...BADGE_IMAGES, ...BADGE_IMAGES, ...BADGE_IMAGES, ...BADGE_IMAGES];
  // Duplicate the base set for the infinite scroll effect (Content + Content)
  const marqueeBadges = [...baseSet, ...baseSet];

  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-primary rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-secondary rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl px-6">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 border border-cyber-primary/50 rounded-full text-cyber-primary text-sm font-mono tracking-widest mb-4">
              LEVEL 21 • READY TO COLLAB
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white glitch-text" data-text={PROFILE.name}>
              {PROFILE.name}
            </h1>
            
            {/* Animated Dynamic Role Title with Smooth Cyber Transition */}
            <div className="space-y-3">
              <div className="min-h-[46px] md:min-h-[54px] flex items-center justify-center lg:justify-start">
                <div className="flex items-center">
                  <span className="text-cyber-primary/60 font-mono text-xl md:text-3xl font-light mr-2 select-none">
                    &gt;
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight transition-all duration-300 transform ${
                      isTransitioning
                        ? 'opacity-0 -translate-y-3 scale-95 blur-[2px]'
                        : 'opacity-100 translate-y-0 scale-100 blur-0'
                    } text-transparent bg-clip-text bg-gradient-to-r ${currentRole.gradient}`}
                    style={{
                      filter: isTransitioning ? 'none' : `drop-shadow(0 0 16px ${currentRole.glow})`
                    }}
                  >
                    {currentRole.title}
                  </h2>
                  <span
                    className={`inline-block w-2 md:w-2.5 h-6 md:h-8 ml-2 rounded-sm animate-pulse ${currentRole.cursorColor}`}
                    style={{
                      boxShadow: `0 0 10px ${currentRole.glow}`
                    }}
                  />
                </div>
              </div>

              {/* Interactive Role Switcher & Tagline */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 font-mono text-xs">
                {TITLE_CONFIG.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = titleIndex === idx;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleSelectTitle(idx)}
                      type="button"
                      title={`Switch to ${item.title}`}
                      className={`group/btn relative px-3 py-1 rounded transition-all duration-300 flex items-center gap-1.5 border text-[11px] tracking-wider uppercase cursor-pointer ${
                        isActive
                          ? `${item.badgeBorder} ${item.badgeBg} ${item.badgeText} shadow-[0_0_12px_${item.glow}]`
                          : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-700 bg-black/40'
                      }`}
                    >
                      <Icon size={12} className={isActive ? 'animate-pulse' : 'text-gray-500 group-hover/btn:text-gray-400'} />
                      <span>{item.shortLabel}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-ping ml-0.5"
                          style={{ backgroundColor: idx === 0 ? '#00f0ff' : '#d946ef' }}
                        />
                      )}
                    </button>
                  );
                })}

                <span className="hidden sm:inline-block text-[11px] text-gray-500 font-mono border-l border-gray-800 pl-2 ml-1">
                  {currentRole.tagline}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE.summary}
            </p>

            {/* Download CV Action */}
            <div className="pt-6">
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  href={CV_PRIMARY_URL}
                  download={CV_FILE_NAME}
                  onClick={handleDownload}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyan-400 hover:from-cyan-300 hover:to-cyber-primary text-black font-mono font-bold text-sm tracking-wider rounded shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {downloadSuccess ? (
                    <>
                      <Check size={18} className="text-black stroke-[3] animate-bounce" />
                      <span>CV BERHASIL DIUNDUH</span>
                    </>
                  ) : (
                    <>
                      <Download size={18} className="group-hover:translate-y-0.5 transition-transform stroke-[2.5]" />
                      <span>DOWNLOAD CV</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-black/20 text-black font-extrabold rounded tracking-wider">
                        PDF
                      </span>
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">
              {/* Spinning ring */}
              <div className="absolute inset-0 border-2 border-dashed border-cyber-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 border border-cyber-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-cyber-card bg-cyber-card shadow-[0_0_40px_rgba(0,240,255,0.3)]">
                  <img 
                    src={PROFILE.image} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Marquee Section */}
      <div className="relative w-full mt-16 md:mt-24 border-y border-gray-800 bg-cyber-card/50 backdrop-blur-sm py-12 z-20">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-bg px-4 border border-gray-800 rounded-full z-10">
            <span className="text-cyber-primary font-mono text-xs tracking-[0.3em] uppercase">Certified Experience</span>
         </div>
         
         <div className="relative w-full overflow-hidden max-w-full">
             <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
               {marqueeBadges.map((badge, index) => (
                 <div key={index} className="px-12 flex flex-col items-center justify-center gap-4 group/badge cursor-default">
                    {/* Badge Container */}
                    <div className="relative p-6 bg-cyber-bg/50 rounded-xl border border-gray-800 group-hover/badge:border-cyber-primary transition-all duration-300 group-hover/badge:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <img
                          src={badge.src}
                          alt={badge.name}
                          className="h-24 md:h-32 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover/badge:scale-110 transition-transform duration-300"
                        />
                    </div>
                    {/* Badge Details */}
                    <span className="text-gray-400 font-mono text-sm font-bold uppercase tracking-wider group-hover/badge:text-cyber-primary transition-colors">
                        {badge.name}
                    </span>
                 </div>
               ))}
             </div>
             {/* Vignette Gradients */}
             <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyber-bg to-transparent z-10 pointer-events-none"></div>
             <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyber-bg to-transparent z-10 pointer-events-none"></div>
         </div>
       </div>

    </div>
  );
};