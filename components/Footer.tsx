import React from 'react';
import { Monitor } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-cyber-card border-t border-gray-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          
          <div>
            <h3 className="text-2xl font-black text-white mb-4 glitch-text" data-text="GAME OVER">GAME OVER?</h3>
            <p className="text-gray-400">
              Just the beginning. Let's build something amazing together.
              <br/>Ready to deploy to your team.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
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
