
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TestTube, Microscope, Heart, Dna, Activity, Syringe, Pill } from 'lucide-react';

const FemaleHeroAnimation = () => {
  const [activeElement, setActiveElement] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const diagnosticElements = [
    { icon: TestTube, label: "Hormonal Assessment", color: "#F97316" },
    { icon: Microscope, label: "Structural Analysis", color: "#F97316" },
    { icon: Dna, label: "Genetic Testing", color: "#F97316" },
    { icon: Activity, label: "Fertility Monitoring", color: "#F97316" },
    { icon: Pill, label: "Specialized Diagnostics", color: "#F97316" }
  ];
  
  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ivf-orange/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ivf-orange/5 rounded-full blur-xl"></div>
        <div className="absolute w-full h-full overflow-hidden">
          <svg className="absolute opacity-5" width="100%" height="100%" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
      </div>
      
      {/* Center circle */}
      <motion.div 
        className="absolute w-48 h-48 bg-gradient-to-br from-white to-ivf-light-grey rounded-full shadow-xl z-10 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 10px 25px rgba(249, 115, 22, 0.1)",
            "0 15px 35px rgba(249, 115, 22, 0.2)",
            "0 10px 25px rgba(249, 115, 22, 0.1)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div className="relative w-40 h-40 rounded-full bg-white/80 flex items-center justify-center">
          <Heart className="w-16 h-16 text-ivf-orange" />
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-ivf-orange/30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      {/* Orbiting elements */}
      <div className="absolute w-full h-full">
        {diagnosticElements.map((element, index) => {
          const angle = (index * (360 / diagnosticElements.length) * Math.PI) / 180;
          const isActive = activeElement === index;
          const radius = 160; // Radius of orbit
          
          const Icon = element.icon;
          
          return (
            <motion.div
              key={index}
              className={`absolute w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-500 z-20 ${isActive ? 'scale-110 shadow-lg border-2 border-ivf-orange' : 'opacity-80'}`}
              style={{
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)" }}
              animate={isActive ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 4px 12px rgba(0, 0, 0, 0.1)",
                  "0 8px 20px rgba(249, 115, 22, 0.15)",
                  "0 4px 12px rgba(0, 0, 0, 0.1)"
                ]
              } : {}}
              transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
            >
              <Icon className={`h-8 w-8 ${isActive ? 'text-ivf-orange' : 'text-ivf-grey'}`} />
              
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md text-ivf-dark-grey"
                >
                  {element.label}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.05)" />
            <stop offset="50%" stopColor="rgba(249, 115, 22, 0.2)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
          </linearGradient>
        </defs>
        <circle 
          cx="200" 
          cy="200" 
          r="160" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="1" 
          strokeDasharray="5,5" 
          className="animate-spin"
          style={{ animationDuration: '60s' }}
        />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const speed = Math.random() * 20 + 30;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-ivf-orange/20 rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: '100%',
              }}
              animate={{
                top: '-5%',
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: delay,
                ease: 'linear'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FemaleHeroAnimation;
