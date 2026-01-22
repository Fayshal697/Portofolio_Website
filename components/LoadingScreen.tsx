import React, { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        // Random increment between 1 and 3 for a variable loading feel
        const increment = Math.random() * 2 + 1;
        const next = prev + increment;
        
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay at 100% before finishing
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-cyber-bg flex flex-col items-center justify-center font-mono text-cyber-text">
      <div className="w-full max-w-md px-6 flex flex-col items-center">
        {/* Header Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyber-primary blur-[30px] opacity-20 animate-pulse"></div>
          <Gamepad2 size={64} className="text-cyber-primary animate-bounce relative z-10" />
        </div>

        {/* Text Glitch Effect */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl font-black tracking-widest text-white glitch-text" data-text="INITIALIZING">
            INITIALIZING
          </h2>
          <p className="text-xs text-cyber-secondary tracking-[0.4em] uppercase">
            Fayshal Karan Athilla Portfolio
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1 bg-gray-900 border border-gray-800 w-full overflow-hidden mb-3">
           <div 
             className="absolute top-0 left-0 h-full bg-cyber-primary shadow-[0_0_10px_#00f0ff] transition-all duration-75 ease-out"
             style={{ width: `${progress}%` }}
           ></div>
        </div>

        {/* Stats */}
        <div className="w-full flex justify-between text-xs font-bold font-mono text-gray-500">
           <span>SYSTEM.EXE</span>
           <span className="text-cyber-primary">{Math.min(100, Math.round(progress))}%</span>
        </div>
        
        {/* Terminal Text Simulation */}
        <div className="w-full mt-6 space-y-1 text-[10px] text-gray-600 font-mono opacity-80 h-16">
           <div className="animate-pulse">{`> connecting_to_server...`}</div>
           {progress > 25 && <div>{`> loading_assets... OK`}</div>}
           {progress > 50 && <div>{`> compiling_shaders... OK`}</div>}
           {progress > 75 && <div className="text-cyber-primary">{`> starting_interface...`}</div>}
        </div>
      </div>
    </div>
  );
};