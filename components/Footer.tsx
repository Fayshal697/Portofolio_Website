import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Pin, Gamepad2, Instagram, Monitor, ExternalLink } from 'lucide-react';

const getIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github': 
      return <Github size={20} className="transition-transform duration-300 group-hover:scale-110" />;
    case 'linkedin': 
      return <Linkedin size={20} className="transition-transform duration-300 group-hover:scale-110" />;
    case 'pinterest': 
      return <Pin size={20} className="transition-transform duration-300 group-hover:scale-110" />;
    case 'itch.io':
    case 'itch': 
      return <Gamepad2 size={20} className="transition-transform duration-300 group-hover:scale-110" />;
    case 'instagram': 
      return <Instagram size={20} className="transition-transform duration-300 group-hover:scale-110" />;
    default: 
      return <ExternalLink size={20} className="transition-transform duration-300 group-hover:scale-110" />;
  }
};

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-cyber-card border-t border-gray-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-black text-white mb-4 glitch-text" data-text="GAME OVER">GAME OVER?</h3>
            <p className="text-gray-400 mb-6">
              Just the beginning. Let's build something amazing together.
              <br/>Ready to deploy to your team.
            </p>
          </div>

          {/* Social Links Bar */}
          <div id="footer-social-bar" className="flex flex-col items-start md:items-center">
            <span className="text-cyber-secondary font-mono text-sm mb-4 tracking-wider">SOCIAL UPLINKS</span>
            <div className="flex flex-wrap items-center gap-3 p-2 bg-cyber-bg/80 border border-gray-800/80 rounded-xl backdrop-blur-sm">
              {SOCIAL_LINKS.map((link) => {
                const platformKey = link.platform.toLowerCase().replace(/[^a-z0-9]/g, '-');
                return (
                  <a 
                    key={link.platform}
                    id={`social-link-${platformKey}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer" 
                    className="group relative w-11 h-11 flex items-center justify-center bg-gray-900/90 border border-gray-800 rounded-lg text-gray-400 hover:text-cyber-primary hover:border-cyber-primary/70 hover:bg-cyber-primary/10 hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    title={link.platform}
                    aria-label={link.platform}
                  >
                    {getIcon(link.platform)}
                    <span className="sr-only">{link.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-right flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 text-white font-bold mb-2">
              <Monitor size={20} className="text-cyber-primary" />
              <span>SYSTEM STATUS: ONLINE</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Fayshal Karan Athilla.
              <br/>All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="text-center border-t border-gray-800 pt-8 text-xs text-gray-600 font-mono">
          BUILT WITH REACT • TAILWIND • RECHARTS
        </div>
      </div>
    </footer>
  );
};
