import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = "", 
  title,
  animate = true 
}) => {
  const [isVisible, setIsVisible] = useState(!animate);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;
    const element = sectionRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animate]);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`py-20 px-6 max-w-7xl mx-auto transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      } ${className}`}
    >
      {title && (
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary uppercase tracking-tighter">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};