"use client"
import React, { useEffect, useState } from "react";
import { Shield, CircleCheck, ChartBar, Verified, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const SafetyAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Background effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/5 to-blue-500/10 blur-xl"></div>
      
      {/* Outer circle animations */}
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-ivf-orange animate-spin-slow"></div>
      <div className="absolute inset-2 rounded-full border-2 border-orange-400"></div>
      
      {/* Center shield animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
        <div className="relative w-20 h-20">
          <Shield className="w-full h-full text-ivf-orange animate-pulse" />
        </div>
      </div>
      
      {/* Orbital elements */}
      {safetyMetrics.map((metric, index) => {
        const angle = (index * (360 / safetyMetrics.length) * Math.PI) / 180;
        const radius = 140;
        const left = 50 + (Math.cos(angle) * radius) / 2;
        const top = 50 + (Math.sin(angle) * radius) / 2;
        
        return (
          <div
            key={index}
            className={cn(
              "absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500",
              index === activeIndex ? "scale-110 shadow-xl border-2 border-ivf-orange" : "scale-90 opacity-70"
            )}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <metric.icon className={cn(
              "w-6 h-6",
              index === activeIndex ? "text-ivf-orange" : "text-gray-400"
            )} />
            
            {index === activeIndex && (
              <div className="absolute -bottom-8 whitespace-nowrap bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-100">
                {metric.label}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const safetyMetrics = [
  { icon: CircleCheck, label: "Quality Control" },
  { icon: ChartBar, label: "Success Rates" },
  { icon: Verified, label: "Certifications" },
  { icon: ClipboardCheck, label: "Safety Protocols" },
  { icon: Shield, label: "Patient Safety" },
];

export default SafetyAnimation;
