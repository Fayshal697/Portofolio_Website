import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { EducationItem } from '../types';
import { 
  GraduationCap, 
  ExternalLink, 
  Info, 
  X, 
  MapPin, 
  Calendar, 
  Award, 
  Landmark, 
  CheckCircle2,
  Terminal,
  Compass
} from 'lucide-react';

export const Education: React.FC = () => {
  const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEdu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Section id="education" title="Skill Tree" className="relative">
      {/* Section Subtitle / Cyber Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyber-primary font-mono text-xs tracking-widest uppercase mb-1">
            <Terminal size={14} />
            <span>ACADEMIC FOUNDATION & INSTITUTIONAL NODES</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xl">
            Formal education tree integrating rigorous Islamic character, bilingual immersion (Arabic & English), and academic research in modern Informatics & Game Engineering.
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-card border border-gray-800">
            <span className="w-2 h-2 rounded-full bg-cyber-primary animate-ping"></span>
            <span>NODES: {EDUCATION.length} ACADEMIC HUBS</span>
          </span>
        </div>
      </div>

      {/* Grid of Education Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {EDUCATION.map((edu, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-2xl bg-cyber-card border border-gray-800 hover:border-cyber-primary transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          >
            {/* Watermark Graduation Cap Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none text-cyber-primary">
              <GraduationCap size={150} />
            </div>

            {/* Corner Sci-Fi Accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-primary/40 group-hover:border-cyber-primary transition-colors pointer-events-none"></div>

            <div className="p-7 relative z-10 flex-grow flex flex-col">
              {/* Header row: Icon & Node Code & Score */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyber-secondary/20 rounded-lg flex items-center justify-center text-cyber-secondary group-hover:text-black group-hover:bg-cyber-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-cyber-primary tracking-widest uppercase block font-semibold">
                      // {edu.nodeCode || `NODE-0${index + 1}`}
                    </span>
                    <span className="text-xs text-gray-400 font-mono flex items-center gap-1 mt-0.5">
                      <Calendar size={12} className="text-gray-500" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {edu.score && (
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-cyber-primary/15 border border-cyber-primary/60 text-cyber-primary rounded shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                    {edu.score}
                  </span>
                )}
              </div>

              {/* Institution Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors mb-2 tracking-tight">
                {edu.institution}
              </h3>

              {/* Type / Tagline */}
              {edu.tagline && (
                <p className="text-xs font-mono text-cyber-secondary mb-3 leading-relaxed">
                  {edu.tagline}
                </p>
              )}

              {/* Location & Degree */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1 bg-cyber-bg/80 px-2.5 py-1 rounded border border-gray-800">
                  <MapPin size={12} className="text-cyber-primary" />
                  {edu.location}
                </span>
                {edu.type && (
                  <span className="flex items-center gap-1 bg-cyber-bg/80 px-2.5 py-1 rounded border border-gray-800 font-mono text-gray-400">
                    <Landmark size={12} className="text-cyber-secondary" />
                    {edu.type}
                  </span>
                )}
              </div>

              {edu.degree && (
                <div className="text-cyber-primary font-mono text-sm font-semibold mb-4 pb-3 border-b border-gray-800/80 flex items-center gap-2">
                  <Award size={15} className="text-cyber-secondary" />
                  <span>{edu.degree}</span>
                </div>
              )}

              {/* Highlights Preview */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-1.5 mb-6 text-xs text-gray-300 bg-cyber-bg/50 p-3.5 rounded-lg border border-gray-800/80">
                  <div className="text-[10px] font-mono uppercase text-gray-400 tracking-wider font-bold mb-1">
                    Key Curricula & Focus:
                  </div>
                  {edu.highlights.slice(0, 3).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyber-primary text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Bar: About Institution Button & Official Portal Link */}
            <div className="px-7 py-4 bg-cyber-bg/60 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <button
                type="button"
                onClick={() => setSelectedEdu(edu)}
                className="flex items-center gap-2 px-3.5 py-2 rounded bg-cyber-primary/10 hover:bg-cyber-primary text-cyber-primary hover:text-black border border-cyber-primary/40 hover:border-cyber-primary text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.1)] group/btn cursor-pointer"
                title={`Pelajari tentang ${edu.institution}`}
              >
                <Info size={14} className="group-hover/btn:scale-110 transition-transform" />
                <span>ABOUT INSTITUTION</span>
              </button>

              <a
                href={edu.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/80 hover:border-cyber-primary/60 text-xs font-mono transition-all duration-200 cursor-pointer"
                title={`Kunjungi portal resmi ${edu.institution}`}
              >
                <span>VISIT PORTAL</span>
                <ExternalLink size={13} className="text-cyber-primary" />
              </a>
            </div>

            {/* Bottom Cyber Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-secondary via-cyber-primary to-cyber-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        ))}
      </div>

      {/* Cyberpunk Institution Dossier Modal */}
      {selectedEdu && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedEdu(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-2xl bg-cyber-card border border-cyber-primary/50 rounded-xl shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black/70">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded bg-cyber-primary/10 border border-cyber-primary/40 text-cyber-primary">
                  <Landmark size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyber-primary tracking-widest uppercase block">
                    ACADEMIC DOSSIER // {selectedEdu.nodeCode || 'NODE ARCHIVE'}
                  </span>
                  <h4 className="text-sm font-bold text-white font-mono">
                    INSTITUTIONAL PROFILE
                  </h4>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEdu(null)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer"
                title="Tutup (ESC)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Institution Identity */}
              <div>
                <h3 className="text-2xl font-black text-white mb-1.5 tracking-tight">
                  {selectedEdu.institution}
                </h3>
                {selectedEdu.tagline && (
                  <p className="text-xs font-mono text-cyber-secondary mb-3">
                    {selectedEdu.tagline}
                  </p>
                )}
                
                {/* Meta pills */}
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-cyber-bg border border-gray-800 rounded text-gray-300 flex items-center gap-1.5">
                    <MapPin size={12} className="text-cyber-primary" />
                    {selectedEdu.location}
                  </span>
                  <span className="px-2.5 py-1 bg-cyber-bg border border-gray-800 rounded text-gray-300 flex items-center gap-1.5">
                    <Calendar size={12} className="text-cyber-primary" />
                    {selectedEdu.period}
                  </span>
                  {selectedEdu.score && (
                    <span className="px-2.5 py-1 bg-cyber-primary/15 border border-cyber-primary/50 rounded text-cyber-primary font-bold">
                      {selectedEdu.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {selectedEdu.description && (
                <div className="bg-cyber-bg/70 p-4 rounded-lg border border-gray-800/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyber-primary font-bold mb-2 flex items-center gap-1.5">
                    <Compass size={13} />
                    <span>Profil & Latar Belakang Institusi</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedEdu.description}
                  </p>
                </div>
              )}

              {/* Highlights & Key Milestones */}
              {selectedEdu.highlights && selectedEdu.highlights.length > 0 && (
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyber-secondary font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>Fokus Kurikulum, Kepemimpinan & Pencapaian</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedEdu.highlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2.5 p-3 rounded bg-cyber-bg/50 border border-gray-800/60 text-xs text-gray-300"
                      >
                        <span className="text-cyber-primary font-bold mt-0.5">✔</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Link Card */}
              <div className="p-4 rounded-lg bg-cyber-primary/5 border border-cyber-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase text-gray-400 block mb-0.5">
                    Official Web Portal
                  </span>
                  <span className="text-xs font-mono text-cyber-primary break-all font-semibold">
                    {selectedEdu.websiteUrl}
                  </span>
                </div>
                <a
                  href={selectedEdu.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyber-primary hover:bg-cyan-300 text-black font-mono font-bold text-xs rounded transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
                >
                  <span>KUNJUNGI WEB PORTAL</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-black/80 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>AUTHENTICATED ACADEMIC CREDENTIAL</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedEdu(null)}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors cursor-pointer"
              >
                TUTUP
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
