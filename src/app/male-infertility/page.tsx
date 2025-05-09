
"use client"

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Award, Check, ShieldCheck, BarChart3, Clock, Microscope, Dna, HeartPulse, BabyIcon } from "lucide-react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import MaleInfertilityAnimation from "@/components/MaleInfertilityAnimation";
import MaleInfertilitySubHero from "@/components/MaleInfertilitySubHero";

const MaleInfertility = () => {
  const router = useRouter();
  const statsRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-count-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const statElements = document.querySelectorAll(".stat-number");
    statElements.forEach((el) => observer.observe(el));
    
    return () => {
      statElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const causes = [
    {
      title: "Abnormal Sperm Production",
      description: "Genetic factors, health problems, or infections can affect sperm production and quality.",
      icon: Dna
    },
    {
      title: "Problems with Sperm Delivery",
      description: "Blockages, premature ejaculation, or structural issues can prevent proper delivery.",
      icon: HeartPulse
    },
    {
      title: "Overexposure to Certain Elements",
      description: "Heat, toxins, chemicals, and radiation can affect sperm production and function.",
      icon: ShieldCheck
    },
    {
      title: "General Health and Lifestyle",
      description: "Obesity, stress, alcohol, smoking, and certain medications can impact fertility.",
      icon: BarChart3
    }
  ];

  const treatments = [
    {
      title: "Medication",
      description: "Hormone treatments and medications to improve sperm production or function.",
      timeline: "3-6 months"
    },
    {
      title: "Surgery",
      description: "Procedures to repair varicocele or reverse a vasectomy to restore functionality.",
      timeline: "1-3 months recovery"
    },
    {
      title: "Assisted Reproductive Technology (ART)",
      description: "Includes IUI, IVF, and ICSI to help achieve pregnancy with existing sperm.",
      timeline: "2-4 weeks per cycle"
    },
    {
      title: "Lifestyle Changes",
      description: "Improving diet, exercise, reducing stress, and avoiding harmful substances.",
      timeline: "Ongoing commitment"
    }
  ];

  const handleScheduleClick = () => {
    router.push("/book-consultation");
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-ivf-orange rounded-full opacity-70 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-block px-4 py-1 mb-4 bg-ivf-orange text-white rounded-full text-sm font-medium">
              Male Reproductive Health
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Understanding & Treating 
              <span className="text-ivf-orange block mt-2">Male Infertility</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Male infertility affects approximately 7% of men worldwide. With proper diagnosis and treatment, many couples can overcome these challenges and achieve their dream of parenthood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-ivf-orange hover:bg-ivf-light-orange text-white rounded-full px-8 py-6 text-lg font-medium"
                onClick={handleScheduleClick}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-200 text-ivf-orange hover:bg-ivf-orange rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  if (treatmentsRef.current) {
                    treatmentsRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Treatments
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Animation Section */}
      <MaleInfertilityAnimation />

      {/* New Sub-Hero Section */}
      <MaleInfertilitySubHero />

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2 stat-number" data-value="40">0%</div>
              <p className="text-white">Of infertility cases are attributed to male factors</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2 stat-number" data-value="90">0%</div>
              <p className="text-white">Success rate with proper treatment and care</p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2 stat-number" data-value="15">0M+</div>
              <p className="text-white">Men worldwide currently facing fertility challenges</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-gradient-to-b from-ivf-light-orange to-ivf-orange">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Common Causes of Male Infertility</h2>
            <p className="text-lg text-gray-600">
              Male infertility can stem from various factors affecting sperm production, function, or delivery. Understanding these causes is the first step toward effective treatment.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <cause.icon className="text-ivf-orange h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Diagnosis Process</h2>
            <p className="text-lg text-gray-600">
              We take a thorough approach to diagnose male infertility, ensuring we identify the root cause and create a personalized treatment plan.
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-600">A comprehensive discussion about your medical history, lifestyle, and fertility goals with our specialist.</p>
                </div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-1 md:order-2">
                  <span className="font-bold">1</span>
                </div>
                <div className="md:w-1/2 order-3"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-1"></div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-2">
                  <span className="font-bold">2</span>
                </div>
                <div className="md:w-1/2 text-left order-3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Physical Examination</h3>
                  <p className="text-gray-600">A thorough examination to identify any structural abnormalities or conditions that might affect fertility.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Semen Analysis</h3>
                  <p className="text-gray-600">Comprehensive testing of sperm count, morphology, motility, and other factors affecting fertility.</p>
                </div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-1 md:order-2">
                  <span className="font-bold">3</span>
                </div>
                <div className="md:w-1/2 order-3"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-1"></div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-2">
                  <span className="font-bold">4</span>
                </div>
                <div className="md:w-1/2 text-left order-3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Hormone Testing</h3>
                  <p className="text-gray-600">Evaluating hormone levels that may impact sperm production and overall reproductive health.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Genetic Testing</h3>
                  <p className="text-gray-600">When appropriate, we analyze genetic factors that could contribute to infertility.</p>
                </div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-1 md:order-2">
                  <span className="font-bold">5</span>
                </div>
                <div className="md:w-1/2 order-3"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-1"></div>
                <div className="md:w-12 h-12 bg-ivf-orange text-white rounded-full flex items-center justify-center relative z-10 order-2">
                  <span className="font-bold">6</span>
                </div>
                <div className="md:w-1/2 text-left order-3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Personalized Treatment Plan</h3>
                  <p className="text-gray-600">Based on all test results, we create a customized treatment strategy tailored to your specific needs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section ref={treatmentsRef} className="py-20 bg-ivf-orange">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Effective Treatment Options</h2>
            <p className="text-lg text-gray-600">
              We offer a range of treatments to address male infertility, personalized to your specific diagnosis and needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Timeline: {treatment.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Button 
              className="bg-ivf-orange hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium"
              onClick={handleScheduleClick}
            >
              Get Personalized Treatment Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real stories from real patients who overcame male infertility challenges with our help.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8">
              <div className="mb-4 text-white">
                <BabyIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">David & Sarah</h3>
              <p className="text-white mb-4">
                "After discovering I had low sperm count, the team created a personalized treatment plan. Within 8 months, we were thrilled to discover we were expecting."
              </p>
              <div className="text-ivf-orange font-semibold">Diagnosed with: Low sperm count</div>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8">
              <div className="mb-4 text-white">
                <BabyIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Michael & Jennifer</h3>
              <p className="text-white mb-4">
                "The varicocele repair surgery was successful, and with the help of IUI, we welcomed our twins just 14 months after starting treatment."
              </p>
              <div className="text-ivf-orange font-semibold">Diagnosed with: Varicocele</div>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-ivf-orange rounded-xl p-8">
              <div className="mb-4 text-white">
                <BabyIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">James & Lisa</h3>
              <p className="text-white mb-4">
                "After multiple failed attempts elsewhere, the team identified a hormonal imbalance. With proper medication, we conceived naturally within 6 months."
              </p>
              <div className="text-ivf-orange font-semibold">Diagnosed with: Hormonal imbalance</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ivf-orange">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-white">
              Get answers to common questions about male infertility, diagnosis, and treatment options.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How is male infertility diagnosed?</h3>
                  <p className="text-gray-600">
                    Male infertility is typically diagnosed through a comprehensive approach including medical history review, physical examination, semen analysis, hormone testing, and sometimes genetic testing or specialized imaging studies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Can lifestyle changes improve male fertility?</h3>
                  <p className="text-gray-600">
                    Yes, lifestyle modifications can significantly impact male fertility. Maintaining a healthy weight, eating a balanced diet, reducing alcohol, quitting smoking, avoiding excessive heat, and managing stress can all improve sperm quality and production.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How long does male infertility treatment take?</h3>
                  <p className="text-gray-600">
                    The timeline varies based on the cause and chosen treatment. Some men may see improvements within 3-6 months with medication or lifestyle changes, while surgical interventions might require several months of recovery before seeing results. ART treatments like IVF generally involve cycles of a few weeks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Is male infertility permanent?</h3>
                  <p className="text-gray-600">
                    Not necessarily. Many causes of male infertility are treatable or manageable. Even in cases where natural conception isn't possible, advanced reproductive technologies can often help achieve pregnancy using the man's sperm.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-20 bg-ivf-orange text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey to Fatherhood Today</h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Don't let male infertility stand in the way of building your family. Our specialists are ready to help you overcome these challenges with personalized care and advanced treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-ivf-orange hover:bg-ivf-orange rounded-full px-8 py-6 text-lg font-medium"
                onClick={handleScheduleClick}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-blue-700 rounded-full px-8 py-6 text-lg"
                onClick={() => navigate("/success-stories")}
              >
                View Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center">
                <Check className="text-blue-300 h-5 w-5 mr-2" />
                <span>Same-week appointments</span>
              </div>
              <div className="flex items-center">
                <Check className="text-blue-300 h-5 w-5 mr-2" />
                <span>Virtual consultations</span>
              </div>
              <div className="flex items-center">
                <Check className="text-blue-300 h-5 w-5 mr-2" />
                <span>Insurance accepted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default MaleInfertility;
