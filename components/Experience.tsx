import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Quest Log">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyber-secondary before:to-transparent">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyber-secondary bg-cyber-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(112,0,223,0.5)]">
              <Briefcase size={18} className="text-white" />
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cyber-card p-6 rounded-xl border border-gray-800 hover:border-cyber-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-bold text-xl text-white group-hover:text-cyber-primary transition-colors">{job.title}</h3>
                <span className="text-xs font-mono text-cyber-secondary bg-cyber-secondary/10 px-2 py-1 rounded border border-cyber-secondary/20 mt-2 md:mt-0 w-fit">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                 <span className="font-semibold text-gray-300">{job.company}</span>
                 <span>•</span>
                 <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    {job.location}
                 </div>
              </div>

              <ul className="space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-cyber-primary before:rounded-full">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
