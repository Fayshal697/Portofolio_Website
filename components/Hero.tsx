import React, { useState } from 'react';
import { PROFILE, BADGE_IMAGES } from '../constants';
import { MapPin, Mail, Phone, Linkedin, FileDown, Eye, CheckCircle2 } from 'lucide-react';
import { CvModal } from './CvModal';
import { triggerCvDownload } from '../cvDownload';
import { CV_PRIMARY_URL, CV_FILE_NAME } from '../cvData';

export const Hero: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [downloadToast, setDownloadToast] = useState('');
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
            
            <h2 className="text-2xl md:text-4xl font-bold text-cyber-secondary">
              {PROFILE.title}
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-sm font-mono text-gray-300">
               <div className="flex items-center gap-2 bg-cyber-card px-4 py-2 rounded border border-gray-800 hover:border-cyber-primary transition-colors">
                  <MapPin size={16} className="text-cyber-primary"/>
                  {PROFILE.location}
               </div>
               <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 bg-cyber-card px-4 py-2 rounded border border-gray-800 hover:border-cyber-primary transition-colors">
                  <Mail size={16} className="text-cyber-primary"/>
                  {PROFILE.email}
               </a>
               <a 
                  href={PROFILE.whatsappUrl || "https://api.whatsapp.com/send?phone=6281232505308"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyber-card px-4 py-2 rounded border border-gray-800 hover:border-emerald-400 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer group/wa"
                  title="Hubungi langsung via WhatsApp (081232505308)"
               >
                  <Phone size={16} className="text-emerald-400 group-hover/wa:scale-110 transition-transform"/>
                  <span>{PROFILE.phone}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 tracking-wider">WA</span>
               </a>
               <a href={PROFILE.linkedin} className="flex items-center gap-2 bg-cyber-card px-4 py-2 rounded border border-gray-800 hover:border-cyber-primary transition-colors">
                  <Linkedin size={16} className="text-cyber-primary"/>
                  LinkedIn
               </a>
               <div className="flex flex-wrap items-center gap-2">
                 <a 
                    href={CV_PRIMARY_URL} 
                    download={CV_FILE_NAME} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const res = triggerCvDownload(e);
                      setDownloadToast(res.message);
                      setTimeout(() => setDownloadToast(''), 4000);
                    }}
                    className="flex items-center gap-2 bg-cyber-accent/15 px-4 py-2 rounded border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-white transition-all shadow-[0_0_15px_rgba(255,0,60,0.2)] font-bold cursor-pointer group/cv"
                    title="Download Curriculum Vitae (PDF)"
                 >
                    <FileDown size={16} className="group-hover/cv:translate-y-0.5 transition-transform" />
                    <span>DOWNLOAD CV [PDF]</span>
                 </a>

                 <button
                   type="button"
                   onClick={() => setIsCvModalOpen(true)}
                   className="flex items-center gap-1.5 bg-cyber-card px-3 py-2 rounded border border-gray-800 hover:border-cyber-primary text-gray-300 hover:text-cyber-primary text-xs font-mono transition-colors"
                   title="Pratinjau Curriculum Vitae di Layar"
                 >
                   <Eye size={14} />
                   <span>Lihat CV</span>
                 </button>
               </div>
            </div>

            {/* Download status toast feedback */}
            {downloadToast && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-mono animate-fade-in shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <CheckCircle2 size={14} />
                <span>{downloadToast}</span>
                <a 
                  href={CV_PRIMARY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline ml-1 hover:text-white font-bold"
                >
                  Buka tab baru
                </a>
              </div>
            )}
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

       {/* CV Preview & Fallback Modal */}
       <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
};