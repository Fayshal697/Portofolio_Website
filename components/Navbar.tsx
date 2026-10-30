import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Profile', href: '#profile', id: 'profile' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  // Precise active section calculation synced with viewport scroll
  const calculateActiveSection = (): string => {
    const sectionIds = ['profile', 'projects', 'experience', 'skills', 'education', 'contact'];
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // 1. Bottom of page -> Contact
    if (scrollPosition + windowHeight >= docHeight - 80) {
      return 'contact';
    }

    // 2. Near top of page -> Profile / Hero
    if (scrollPosition < 220) {
      return 'profile';
    }

    // 3. Focal point at 35% from viewport top
    const focalPoint = windowHeight * 0.35;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
          return id;
        }
      }
    }

    // Fallback: closest section to focal point
    let closestId = 'profile';
    let closestDist = Infinity;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - focalPoint);
        if (dist < closestDist) {
          closestDist = dist;
          closestId = id;
        }
      }
    }
    return closestId;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setActiveSection(calculateActiveSection());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);

    if (id === 'profile') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + currentScroll - 60;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

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
        <a 
          href="#profile" 
          onClick={(e) => handleNavClick(e, 'profile')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-2 bg-cyber-primary/10 rounded border border-cyber-primary/50 group-hover:bg-cyber-primary group-hover:text-black transition-colors text-cyber-primary">
            <Gamepad2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tighter text-white group-hover:text-cyber-primary transition-colors">
            FKA<span className="text-cyber-accent">.DEV</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-mono relative py-1 transition-colors cursor-pointer ${
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
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-cyber-primary p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-card border-b border-gray-800 p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={link.href}
                className={`text-lg font-mono transition-colors cursor-pointer ${
                  isActive ? 'text-cyber-primary font-bold' : 'text-gray-300 hover:text-cyber-primary'
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
