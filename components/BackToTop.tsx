import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const profileEl = document.getElementById('profile');
      if (profileEl) {
        const rect = profileEl.getBoundingClientRect();
        // Visible once the user has scrolled past the first section
        setIsVisible(rect.bottom < 120 || window.scrollY > 450);
      } else {
        setIsVisible(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProfile = () => {
    const profileEl = document.getElementById('profile');
    if (profileEl) {
      profileEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToProfile}
      aria-label="Back to profile"
      title="Return to Profile"
      className={`fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-3.5 py-2.5 bg-cyber-card/90 hover:bg-cyber-primary text-cyber-primary hover:text-black border border-cyber-primary/60 hover:border-cyber-primary rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 transform shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] backdrop-blur-md cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ChevronUp 
        size={18} 
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" 
      />
      <span className="hidden sm:inline font-bold">TOP</span>
    </button>
  );
};
