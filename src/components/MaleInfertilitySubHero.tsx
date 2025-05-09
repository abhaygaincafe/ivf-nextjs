
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock, Microscope, Activity, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaleInfertilitySubHero = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=919057000555', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* Image/Visual Side */}
              <div className="lg:w-2/5 bg-gradient-to-br from-ivf-orange to-ivf-light-orange p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    className="inline-block p-4 bg-white/10 rounded-full mb-6"
                    initial={{ rotate: 0 }}
                    animate={{ 
                      rotate: 360,
                      transition: { 
                        duration: 40, 
                        ease: "linear", 
                        repeat: Infinity 
                      } 
                    }}
                  >
                    <Microscope className="w-16 h-16 text-white" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Take Control of Your Fertility</h2>
                  <p className="text-white/90 mb-6">
                    Modern treatments have high success rates even for complex male infertility issues.
                  </p>
                  
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={statVariants} className="flex items-center justify-center">
                      <BadgeCheck className="mr-2 text-blue-200" />
                      <span>90% Success with Proper Treatment</span>
                    </motion.div>
                    <motion.div variants={statVariants} className="flex items-center justify-center">
                      <Clock className="mr-2 text-blue-200" />
                      <span>Results in as little as 3 months</span>
                    </motion.div>
                    <motion.div variants={statVariants} className="flex items-center justify-center">
                      <Activity className="mr-2 text-blue-200" />
                      <span>Personalized Treatment Plans</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Understanding Your Journey</h3>
                <p className="text-gray-600 mb-6">
                  Male infertility affects approximately 7% of men worldwide, but with proper diagnosis 
                  and personalized treatment, the vast majority of cases can be successfully addressed. Our 
                  approach combines cutting-edge diagnostics with tailored therapies.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex">
                    <div className="bg-ivf-orange text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-semibold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Evaluation</h4>
                      <p className="text-gray-600 text-sm">Complete medical history, physical examination, and advanced diagnostic testing.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-ivf-orange text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-semibold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Personalized Treatment Plan</h4>
                      <p className="text-gray-600 text-sm">Customized approach based on your unique diagnosis, health needs, and fertility goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-ivf-orange text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                      <p className="text-gray-600 text-sm">Continuous monitoring, counseling, and adjustments throughout your fertility journey.</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppClick} 
                  className="bg-ivf-orange hover:bg-ivf-orange text-white rounded-full px-8 py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat with us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaleInfertilitySubHero;
