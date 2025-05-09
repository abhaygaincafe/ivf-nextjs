
"use client"

import { useEffect } from "react";
import { Shield, CircleCheck, HeartPulse, Users, CircleHelp } from "lucide-react";
import { motion } from "framer-motion";
import SafetyAnimation from "@/components/SafetyAnimation";
import SEOHead from "@/components/SEOHead";

const IsIVFSafe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create structured data for IVF safety page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalProcedure",
      "name": "In Vitro Fertilization",
      "procedureType": "IVF"
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "name": "IVF Safety Information"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ivf-light-grey/20">
      <SEOHead 
        title="Is IVF Safe? | Understanding IVF Safety and Success | Ritu IVF"
        description="Learn about the safety and success rates of IVF treatment. Our experts explain the risks, benefits, and medical advancements in modern fertility treatments."
        keywords="IVF safety, is IVF safe, IVF risks, IVF success rates, IVF treatment safety"
        canonicalUrl="https://rituivf.com/is-ivf-safe"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-ivf-dark-grey mb-6">
                  Is IVF <span className="text-ivf-orange">Safe?</span>
                </h1>
                <p className="text-lg text-ivf-grey mb-8">
                  Understanding the safety, success rates, and medical advancements in IVF treatment. Learn how modern technology and experienced care ensure the best possible outcomes.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <SafetyAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Factors Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-ivf-orange/10 rounded-full flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-ivf-orange" />
                </div>
                <h3 className="text-xl font-bold text-ivf-dark-grey mb-3">{factor.title}</h3>
                <p className="text-ivf-grey">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const safetyFactors = [
  {
    title: "Proven Track Record",
    description: "Over 40 years of successful IVF treatments worldwide, with millions of healthy babies born.",
    icon: Shield
  },
  {
    title: "Advanced Screening",
    description: "Comprehensive genetic testing ensures the highest quality embryo selection.",
    icon: CircleCheck
  },
  {
    title: "Medical Oversight",
    description: "Constant monitoring by experienced healthcare professionals throughout the process.",
    icon: HeartPulse
  },
  {
    title: "Success Rates",
    description: "Continuously improving success rates with advanced technology and techniques.",
    icon: CircleHelp
  },
  {
    title: "Patient Care",
    description: "Personalized treatment plans and support throughout your journey.",
    icon: Users
  }
];

export default IsIVFSafe;
