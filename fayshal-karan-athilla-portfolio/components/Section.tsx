import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", title }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary uppercase tracking-tighter">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};