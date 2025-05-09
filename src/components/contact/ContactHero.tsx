
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-ivf-orange/5 to-white py-8 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-3 md:mb-4"
          >
            Get in Touch with Our Fertility Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-ivf-grey mb-4 md:mb-6"
          >
            We're here to support you on your fertility journey. Reach out to us for personalized guidance and care.
          </motion.p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ContactHero;
