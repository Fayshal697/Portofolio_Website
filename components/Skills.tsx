import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { Section } from './Section';
import { SKILL_STATS, TECHNICAL_SKILLS_LIST } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Player Stats">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Chart */}
        <div className="h-[400px] w-full bg-cyber-card/50 rounded-2xl border border-gray-800 p-4 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_STATS}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#e0e0e0', fontSize: 12, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#00f0ff"
                strokeWidth={3}
                fill="#00f0ff"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyber-secondary pl-4">Technical Skill Inventory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECHNICAL_SKILLS_LIST.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center justify-between p-4 bg-cyber-card border border-gray-800 rounded hover:border-cyber-primary transition-all hover:translate-x-2"
              >
                <span className="text-gray-300 font-medium group-hover:text-white">{skill}</span>
                <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-cyber-primary group-hover:shadow-[0_0_10px_#00f0ff] transition-all"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-cyber-secondary/20 to-transparent rounded-xl border border-cyber-secondary/30">
             <h4 className="text-lg font-bold text-cyber-secondary mb-2">Core Competencies</h4>
             <p className="text-gray-400 text-sm">
                Specialized in Unity Game Development, focusing on educational 3D prototypes and interactive learning flows. 
                Combining technical C# programming with creative UI/UX design.
             </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
