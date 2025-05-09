
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Dna, Microscope, HeartPulse, ShieldCheck } from "lucide-react";

const MaleInfertilityAnimation = () => {
  // Animation variants
  const cellVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 5,
      }
    }),
    hover: { scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-ivf-light-orange to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Understanding Male Infertility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Male infertility is often caused by issues affecting sperm production, function, or delivery. 
            Visual learning helps understand these complex processes better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Animation Side */}
          <div className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="400" height="300" viewBox="0 0 400 300">
                {/* Background Circles */}
                <motion.circle 
                  cx="200" cy="150" r="120" 
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle 
                  cx="200" cy="150" r="80" 
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Animated Path */}
                <motion.path
                  d="M200,30 C260,30 320,70 320,150 C320,230 260,270 200,270 C140,270 80,230 80,150 C80,70 140,30 200,30"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                
                {/* Animated Cells */}
                <motion.circle 
                  cx="200" cy="30" r="16" 
                  fill="#F97316"
                  stroke="#F97316"
                  strokeWidth="2"
                  variants={cellVariants}
                  custom={0}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                <motion.circle 
                  cx="320" cy="150" r="16" 
                  fill="#F97316"
                  stroke="#F97316"
                  strokeWidth="2"
                  variants={cellVariants}
                  custom={1}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                <motion.circle 
                  cx="200" cy="270" r="16" 
                  fill="#F97316"
                  stroke="#F97316"
                  strokeWidth="2"
                  variants={cellVariants}
                  custom={2}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                <motion.circle 
                  cx="80" cy="150" r="16" 
                  fill="#F97316"
                  stroke="#F97316"
                  strokeWidth="2"
                  variants={cellVariants}
                  custom={3}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                
                {/* Center Element */}
                <motion.circle 
                  cx="200" cy="150" r="35"
                  fill="#93C5FD"
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1, 0.8],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.circle 
                  cx="200" cy="150" r="25"
                  fill="#F97316"
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </svg>
            </div>

            {/* Icons */}
            <motion.div
              className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Dna className="text-ivf-orange h-8 w-8" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-0 right-1/4 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Microscope className="text-ivf-orange h-8 w-8" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 right-0 transform translate-y-[-50%] bg-white p-3 rounded-full shadow-lg"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <HeartPulse className="text-ivf-orange h-8 w-8" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 left-0 transform translate-y-[-50%] bg-white p-3 rounded-full shadow-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <ShieldCheck className="text-ivf-orange h-8 w-8" />
            </motion.div>
          </div>

          {/* Info Side */}
          <div>
            <div className="space-y-6">
              {/* Key Factor 1 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <div className="flex items-start">
                  <div className="bg-ivf-orange p-3 rounded-lg mr-4">
                    <Dna className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Genetic Factors</h3>
                    <p className="text-gray-600">Chromosomal abnormalities and genetic mutations can affect sperm production and quality, leading to infertility issues.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Key Factor 2 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="flex items-start">
                  <div className="bg-ivf-orange p-3 rounded-lg mr-4">
                    <HeartPulse className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Hormonal Imbalances</h3>
                    <p className="text-gray-600">Disruptions in hormones like testosterone, FSH, and LH can impair sperm production and maturation processes.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Key Factor 3 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <div className="flex items-start">
                  <div className="bg-ivf-orange p-3 rounded-lg mr-4">
                    <ShieldCheck className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Environmental Factors</h3>
                    <p className="text-gray-600">Exposure to toxins, radiation, excessive heat, and certain medications can damage sperm DNA and reduce fertility.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaleInfertilityAnimation;
