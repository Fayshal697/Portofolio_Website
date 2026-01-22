import React from 'react';
import { Section } from './Section';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { PROFILE } from '../constants';
import { useState } from 'react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="py-24">
      <div className="relative bg-cyber-card border border-gray-800 rounded-2xl p-8 md:p-16 overflow-hidden text-center group hover:border-cyber-primary transition-colors duration-500">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-primary/20 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyber-secondary/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full text-cyber-primary font-mono text-sm tracking-widest mb-4 animate-pulse">
            STATUS: OPEN FOR WORK
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            READY TO START A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">NEW GAME?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            I'm currently looking for new opportunities in Game Development and Interactive Design. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group relative inline-flex items-center gap-3 bg-cyber-primary text-black font-bold px-8 py-4 rounded overflow-hidden transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Mail size={20} />
              <span className="relative">SEND TRANSMISSION</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 rounded border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              <span className="font-mono">{PROFILE.email}</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};