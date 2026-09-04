import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import { 
  Gamepad2, 
  ExternalLink, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Layers, 
  Play,
  Terminal,
  Info
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleActionNotice = (title: string, actionName: string) => {
    setActiveNotification(`[SYSTEM]: Initializing ${actionName} for "${title}"... Redirecting to uplink.`);
    setTimeout(() => {
      setActiveNotification(null);
    }, 4000);
  };

  return (
    <Section id="projects" title="Project Archives" className="relative">
      {/* Cyberpunk ambient decoration */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyber-primary font-mono text-xs tracking-widest uppercase mb-1">
            <Terminal size={14} />
            <span>DEPLOYED BUILDS & PROTOTYPES</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xl">
            Interactive game development projects spanning 3D object-hunting, physical brewing simulation, moral-choice narrative drama, and inclusive audio-based accessibility design.
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-card border border-gray-800">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span>TOTAL MISSIONS: {PROJECTS.length}</span>
          </span>
        </div>
      </div>

      {/* Dynamic Notification Toast */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyber-card border border-cyber-primary text-cyber-primary px-5 py-3 rounded-lg shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-3 font-mono text-xs animate-bounce">
          <Sparkles size={16} />
          <span>{activeNotification}</span>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project: ProjectItem) => {
          const isExpanded = expandedId === project.id;

          // Customized action button labels to fit the game's theme and cyber aesthetic
          let playLabel = "LAUNCH DEMO // PLAY";
          let playIcon = <Play size={15} className="fill-current" />;

          if (project.id === 'manual-brewing-kopi') {
            playLabel = "INITIALIZE BREW // PLAY";
          } else if (project.id === 'funlish') {
            playLabel = "DEPLOY MISSION // PLAY";
          } else if (project.id === 'amanah') {
            playLabel = "ENTER STORY // PLAY";
          } else if (project.id === 'qolbuna') {
            playLabel = "EXPERIENCE AUDIO // PLAY";
          }

          return (
            <div 
              key={project.id}
              className="bg-cyber-card rounded-xl border border-gray-800 hover:border-cyber-primary/70 transition-all duration-500 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_35px_rgba(0,240,255,0.15)]"
            >
              {/* Media Header Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/80 border-b border-gray-800">
                {/* Scanline & Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-60"></div>
                
                {/* Engine / Category Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-cyber-bg/90 backdrop-blur-md border border-cyber-primary/40 rounded text-[11px] font-mono font-bold text-cyber-primary tracking-wider">
                    {project.engine}
                  </span>
                  <span className="px-2.5 py-1 bg-cyber-bg/90 backdrop-blur-md border border-gray-700 rounded text-[11px] font-mono text-gray-300">
                    {project.category}
                  </span>
                </div>

                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-90 pointer-events-none"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyber-primary transition-colors tracking-tight flex items-center gap-3">
                    <span>{project.title}</span>
                  </h3>
                </div>

                {/* Concise summary */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Features highlights */}
                <div className="mb-5 space-y-1.5 bg-cyber-bg/60 p-3.5 rounded-lg border border-gray-800/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyber-secondary font-bold mb-1 flex items-center gap-1.5">
                    <Layers size={13} />
                    <span>Key Mechanics & Features</span>
                  </div>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-cyber-primary font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable full briefing */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-cyber-primary transition-colors py-1 cursor-pointer"
                  >
                    <Info size={13} />
                    <span>{isExpanded ? "HIDE FULL MISSION BRIEFING" : "READ FULL MISSION BRIEFING"}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-4 bg-black/70 rounded-lg border border-gray-800 text-xs text-gray-300 leading-relaxed font-sans space-y-2 animate-fade-in">
                      <div className="text-cyber-primary font-mono text-[10px] tracking-widest uppercase">
                        // UNREDACTED ARCHIVE LOG:
                      </div>
                      <p className="italic text-gray-300">
                        "{project.fullDescription}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyber-bg border border-gray-800 text-gray-400 group-hover:border-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-800/60 bg-cyber-bg/30 flex flex-wrap items-center justify-between gap-3">
                {/* Primary Play / Launch Button */}
                <a
                  href={project.playUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleActionNotice(project.title, "Play Protocol")}
                  className="flex-1 min-w-[180px] py-2.5 px-4 bg-cyber-primary hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider rounded skew-x-[-8deg] transition-all transform hover:skew-x-[-8deg] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 group/btn cursor-pointer"
                  title={`Play / Launch ${project.title}`}
                >
                  <span className="skew-x-[8deg] flex items-center gap-2">
                    {playIcon}
                    <span>{playLabel}</span>
                  </span>
                </a>

                {/* Secondary Download / Itch.io Uplink Button */}
                <a
                  href={project.downloadUrl || project.playUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleActionNotice(project.title, "Download Stream")}
                  className="py-2.5 px-4 bg-cyber-card hover:bg-gray-800 text-white hover:text-cyber-primary font-mono text-xs uppercase tracking-wider rounded border border-gray-700 hover:border-cyber-primary transition-all flex items-center gap-2 cursor-pointer"
                  title={`Download Build / Access ${project.title}`}
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">DOWNLOAD BUILD</span>
                  <ExternalLink size={12} className="text-gray-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
