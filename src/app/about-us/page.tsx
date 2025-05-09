
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, MessageSquare, Microscope, Stethoscope, GraduationCap, BookOpen, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation('common');

   const aboutUs = {
    "hero": {
      "title1": "Helping Dreams of",
      "title2": "Parenthood Come True",
      "description": "Since 2008, we've been dedicated to providing world-class fertility care with compassion, innovation, and a commitment to helping families grow."
    },
    "stats": {
      "experience": "Years of Experience",
      "patients": "Happy Patients",
      "successRate": "Success Rate",
      "support": "Patient Support"
    },
    "doctor": {
      "title": "Meet Dr. Ritu",
      "paragraph1": "With over 15 years of dedicated experience in reproductive medicine, Dr. Ritu has established herself as one of the leading fertility specialists in the country. Her journey in reproductive medicine began at prestigious institutions, where she honed her expertise in advanced fertility treatments.",
      "paragraph2": "Dr. Ritu's approach combines cutting-edge medical expertise with deep empathy for her patients. She has successfully helped thousands of couples achieve their dream of parenthood, earning recognition both nationally and internationally.",
      "paragraph3": "Beyond her clinical practice, Dr. Ritu is actively involved in research and has published numerous papers in renowned medical journals. She regularly speaks at international conferences, sharing her insights and contributing to the advancement of fertility treatments."
    },
    "values": {
      "title": "Our Core Values",
      "excellence": {
        "title": "Excellence in Care",
        "description": "We maintain the highest standards in fertility treatment, constantly updating our methods with the latest advancements."
      },
      "patientCentered": {
        "title": "Patient-Centered Approach",
        "description": "Every treatment plan is personalized, considering each patient's unique circumstances and needs."
      },
      "compassionate": {
        "title": "Compassionate Support",
        "description": "Our team provides emotional support throughout your journey, understanding the challenges of fertility treatment."
      }
    },
    "achievements": {
      "specialist": "Best Fertility Specialist 2023",
      "research": "Published Research in Reproductive Medicine",
      "speaker": "International Speaker on IVF Advances",
      "member": "Member of Global Fertility Association"
    },
    "patientStory": {
      "title": "A Journey of Hope",
      "subtitle": "Real stories from our patients that inspire hope and determination",
      "quote": "We got referred from Priyanka Yadav, my colleague in the bank. She told me about the behavior of Ritu ma'am and her experience. From the very first time since we met with ma'am, our experience was really very good. We were very happy with our experience with Dr. Ritu ma'am, and we will definitely advise other patients to start their beautiful journey of IVF with the most humblest and attentive doctor, Dr. Ritu Agarwal. Thank you so much ma'am.",
      "author": "Lajwanti - Rishi Raj",
      "role": "Successful IVF Journey, 2024"
    }
  }
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { icon: Heart, value: "13+", label: aboutUs.stats.experience },
    { icon: Users, value: "10,000+", label: aboutUs.stats.patients },
    { icon: Award, value: "90%", label: aboutUs.stats.successRate },
    { icon: Clock, value: "24/7", label: aboutUs.stats.support }
  ];

  const values = [
    {
      title: aboutUs.values.excellence.title,
      description: aboutUs.values.excellence.description,
      icon: Microscope
    },
    {
      title: aboutUs.values.patientCentered.title,
      description: aboutUs.values.patientCentered.description,
      icon: Stethoscope
    },
    {
      title: aboutUs.values.compassionate.title,
      description: aboutUs.values.compassionate.description,
      icon: MessageSquare
    }
  ];

  const achievements = [
    { title: "Best IVF Doctor in Jaipur", icon: Trophy },
    { title: "Fellowship in Assisted Reproductive Technologies", icon: GraduationCap },
    { title: "Expert in ICSI, IVF, and IUI procedures", icon: Star },
    { title: "Post-graduation in Obstetrics and Gynecology", icon: BookOpen }
  ];

 

  return (
    <div className="bg-white pt-20">
      {/* Hero Section with Diagonal Design */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ivf-orange/10 to-ivf-orange/5 transform -skew-y-6" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-ivf-dark-grey mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {aboutUs.hero.title1} <br />
              <span className="text-ivf-orange">{aboutUs.hero.title2}</span>
            </motion.h1>
            <motion.p
              className="text-xl text-ivf-grey mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={fadeIn}
            >
              {aboutUs.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-ivf-orange/20 to-ivf-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={fadeIn}
              >
                <stat.icon className="w-10 h-10 text-ivf-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-ivf-dark-grey mb-2">{stat.value}</div>
                <div className="text-ivf-grey">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Ritu's Profile Section */}
      <section className="py-20 bg-gradient-to-br from-ivf-orange/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/drritu.svg"
                  alt="Dr. Ritu"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {achievements.map((achievement, index) => (
                    <achievement.icon key={index} className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-ivf-dark-grey">
                Meet Dr. Ritu Agarwal
              </h2>
              <div className="space-y-4 text-ivf-grey">
                <p>
                  Dr. Ritu Agarwal is a well-known IVF doctor in Jaipur with more than 13+ years of experience in this field. She completed her post-graduation in obstetrics and gynecology from RNT Medical College and a fellowship in Assisted Reproductive Technologies from IKDRC Ahmedabad.
                </p>
                <p>
                  She has worked selflessly to help infertile couples become parents through proper treatment and alleviating emotional suffering. Dr. Ritu has brought happiness to the homes of over 18,000 couples with a success rate of nearly 90%.
                </p>
                <p>
                  She holds the rare distinction of becoming an expert in ICSI, IVF, and IUI procedures. She is the <Link href="/best-gynecologist-in-jaipur" className="text-ivf-orange hover:underline">best gynecologist in Jaipur</Link> who puts their best efforts in terms of proper guidance and mental support to assist patients in getting the best solution for becoming a parent. Whether you are a young couple with a history of miscarriages or <Link href="/ivf-treatment-for-over-40" className="text-ivf-orange hover:underline">over the 40s</Link> with a low AMH, she can help at our fertility center in Jaipur.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                  >
                    <achievement.icon className="w-4 h-4 text-ivf-orange" />
                    <span className="text-sm text-ivf-dark-grey">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-ivf-dark-grey mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {aboutUs.values.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative p-8 rounded-xl bg-gradient-to-br from-white to-ivf-orange/5 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                variants={fadeIn}
              >
                <div className="absolute -top-6 left-8">
                  <div className="bg-ivf-orange text-white p-4 rounded-xl">
                    <value.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ivf-dark-grey mb-4 mt-4">{value.title}</h3>
                <p className="text-ivf-grey">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Story Section */}
      <section className="py-20 bg-gradient-to-br from-white to-ivf-orange/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
                {aboutUs.patientStory.title}
              </h2>
              <p className="text-ivf-grey text-lg">
                {aboutUs.patientStory.subtitle}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Avatar className="w-16 h-16 border-4 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>

              <div className="pt-8 text-center">
                <p className="text-2xl text-ivf-dark-grey font-medium mb-6">
                  {aboutUs.patientStory.quote}
                </p>
                <div className="text-ivf-grey">
                  <p className="font-medium">{aboutUs.patientStory.author}</p>
                  <p className="text-sm">{aboutUs.patientStory.role}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1557939574-a2cb399f443f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Happy family moment"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Baby smiling"
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Family together"
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Removed the duplicated CTA section that was here */}
    </div>
  );
};

export default AboutUs;
