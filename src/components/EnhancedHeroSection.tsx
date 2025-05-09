
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FemaleHeroAnimation from './FemaleHeroAnimation';
import { useIsMobile } from "@/hooks/use-mobile";
import { Trophy, HeartHandshake, UsersRound, Heart, Baby } from "lucide-react";

const EnhancedHeroSection = () => {
  // const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for the gradient effect
  useEffect(() => {
    if (isMobile) return; // Don't track mouse on mobile devices
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Mobile animation variants
  const mobileIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white via-ivf-orange/5 to-white pt-14 pb-16 overflow-hidden">
      {/* Mouse following gradient */}
      {!isMobile && (
        <div 
          className="pointer-events-none absolute blur-[80px] opacity-30 bg-gradient-to-r from-ivf-orange to-orange-400 rounded-full w-64 h-64 transition-transform duration-300 ease-out"
          style={{ 
            left: `${mousePosition.x - 128}px`, 
            top: `${mousePosition.y - 128}px`,
          }}
        />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid ${!isMobile ? "lg:grid-cols-2 gap-8" : ""} items-center`}>
          <div className="space-y-6">
            {/* Mobile-only animation above the title */}
            {isMobile && (
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="flex items-center justify-center gap-4"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    custom={0}
                    variants={mobileIconVariants}
                    whileHover="pulse"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ivf-orange/10"
                  >
                    <Heart className="h-6 w-6 text-ivf-orange" />
                  </motion.div>
                  
                  <motion.div
                    custom={1}
                    variants={mobileIconVariants}
                    whileHover="pulse"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ivf-orange/10"
                  >
                    <Baby className="h-6 w-6 text-ivf-orange" />
                  </motion.div>
                  
                  <motion.div
                    custom={2}
                    variants={mobileIconVariants}
                    whileHover="pulse"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ivf-orange/10"
                  >
                    <HeartHandshake className="h-6 w-6 text-ivf-orange" />
                  </motion.div>
                </motion.div>
              </div>
            )}
            
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-ivf-dark-grey leading-tight">
              Your Journey to{" "}
              <span className="text-ivf-orange">Parenthood</span>{" "}
              Begins Here
            </h1>
            
            {/* Redesigned stat highlights for better mobile display */}
            {isMobile ? (
              <div className="mt-8 grid grid-cols-1 gap-3">
                <div className="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4 border-l-4 border-ivf-orange transition-transform duration-300 ease-out">
                  <div className="bg-ivf-orange/10 p-3 rounded-full flex-shrink-0">
                    <UsersRound className="h-6 w-6 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-ivf-dark-grey">90%</p>
                    <p className="text-sm text-ivf-grey">Success Rate</p>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4 border-l-4 border-ivf-orange transition-transform duration-300 ease-out">
                  <div className="bg-ivf-orange/10 p-3 rounded-full flex-shrink-0">
                    <Trophy className="h-6 w-6 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-ivf-dark-grey">13+</p>
                    <p className="text-sm text-ivf-grey">Years Experience</p>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4 border-l-4 border-ivf-orange transition-transform duration-300 ease-out">
                  <div className="bg-ivf-orange/10 p-3 rounded-full flex-shrink-0">
                    <HeartHandshake className="h-6 w-6 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-ivf-dark-grey">24/7</p>
                    <p className="text-sm text-ivf-grey">Patient Support</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/30 backdrop-blur-sm border border-gray-100 rounded-lg p-4 shadow-sm flex items-center space-x-3">
                  <div className="bg-ivf-orange/10 p-2 rounded-full flex-shrink-0">
                    <UsersRound className="h-5 w-5 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-ivf-dark-grey">90%</p>
                    <p className="text-sm text-ivf-grey">Success Rate</p>
                  </div>
                </div>
                
                <div className="bg-white/30 backdrop-blur-sm border border-gray-100 rounded-lg p-4 shadow-sm flex items-center space-x-3">
                  <div className="bg-ivf-orange/10 p-2 rounded-full flex-shrink-0">
                    <Trophy className="h-5 w-5 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-ivf-dark-grey">13+</p>
                    <p className="text-sm text-ivf-grey">Years Experience</p>
                  </div>
                </div>
                
                <div className="bg-white/30 backdrop-blur-sm border border-gray-100 rounded-lg p-4 shadow-sm flex items-center space-x-3">
                  <div className="bg-ivf-orange/10 p-2 rounded-full flex-shrink-0">
                    <HeartHandshake className="h-5 w-5 text-ivf-orange" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-ivf-dark-grey">24/7</p>
                    <p className="text-sm text-ivf-grey">Patient Support</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Only show animation on non-mobile devices */}
          {!isMobile && (
            <div className="h-[400px]">
              <FemaleHeroAnimation />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
