import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, FileDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down towards or into projects section
      const projectEl = document.getElementById('projects');
      if (projectEl) {
        const rect = projectEl.getBoundingClientRect();
        // Activate sticky mode as user approaches or enters the projects section
        setScrolled(rect.top <= 140 || window.scrollY > 200);
      } else {
        setScrolled(window.scrollY > 100);
      }

      // Detect currently active section for navbar indicator
      const sections = ['profile', 'projects', 'experience', 'skills', 'education', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#profile', id: 'profile' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-primary/30 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.8)]' 
          : 'bg-cyber-bg/40 backdrop-blur-sm border-b border-gray-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#profile" className="flex items-center gap-2 group">
          <div className="p-2 bg-cyber-primary/10 rounded border border-cyber-primary/50 group-hover:bg-cyber-primary group-hover:text-black transition-colors text-cyber-primary">
            <Gamepad2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tighter text-white group-hover:text-cyber-primary transition-colors">
            FKA<span className="text-cyber-accent">.DEV</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-mono relative py-1 transition-colors ${
                  isActive 
                    ? 'text-cyber-primary font-bold after:w-full' 
                    : 'text-gray-400 hover:text-white'
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyber-primary after:transition-all hover:after:w-full ${
                  !isActive ? 'after:w-0' : ''
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="/cv-fayshal-karan-athilla.pdf" 
            download="Fayshal_Karan_Athilla_CV.pdf"
            className="px-4 py-2 bg-cyber-accent hover:bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider rounded skew-x-[-10deg] transition-all transform hover:skew-x-[-10deg] hover:-translate-y-1 shadow-[3px_3px_0px_#fff] flex items-center gap-1.5 group cursor-pointer"
            title="Download Curriculum Vitae (PDF)"
          >
            <span className="skew-x-[10deg] flex items-center gap-1.5">
              <FileDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              <span>DOWNLOAD CV [PDF]</span>
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-cyber-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-card border-b border-gray-800 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-lg font-mono transition-colors ${
                  isActive ? 'text-cyber-primary font-bold' : 'text-gray-300 hover:text-cyber-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="/cv-fayshal-karan-athilla.pdf"
            download="Fayshal_Karan_Athilla_CV.pdf"
            className="text-lg font-mono text-cyber-accent hover:text-white mt-2 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FileDown size={18} />
            DOWNLOAD CV [PDF]
          </a>
        </div>
      )}
    </nav>
  );
};
