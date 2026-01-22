import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Skill Tree">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl bg-cyber-card border border-gray-800 hover:border-cyber-primary transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <GraduationCap size={120} />
            </div>
            
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 bg-cyber-secondary/20 rounded-lg flex items-center justify-center mb-6 text-cyber-secondary group-hover:text-white group-hover:bg-cyber-secondary transition-colors">
                 <GraduationCap size={24} />
              </div>
              
              <span className="text-xs font-mono text-cyber-primary mb-2 block">{edu.period}</span>
              <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-gray-400 mb-1">{edu.location}</p>
              {edu.degree && (
                <p className="text-cyber-secondary font-medium mt-4 pt-4 border-t border-gray-800">
                  {edu.degree}
                </p>
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-secondary to-cyber-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};
