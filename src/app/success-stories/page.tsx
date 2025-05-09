"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, Star, Quote, ArrowRight, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import OptimizedImage from '@/components/OptimizedImage';

const SuccessStories = () => {
    // const { t } = useTranslation('common');

    const successStories = {
        "heroTitle1": "Real Stories",
        "heroTitle2": "Real Success",
        "heroDescription": "Meet the families who found their path to parenthood with us. Every journey is unique, every success story special.",
        "stats": {
            "babies": "3,000+ Babies Born",
            "successRate": "92% Success Rate",
            "experience": "15+ Years Experience"
        },
        "startYourStory": "Start Your Success Story",
        "featuredStoriesTitle": "Featured Success Stories",
        "featuredStoriesDescription": "Every family has a unique journey. Here are some of the remarkable stories from patients who overcame significant challenges.",
        "challenge": "Challenge:",
        "treatment": "Treatment:",
        "viewMore": "View More Stories",
        "agePrefix": "Ages",
        "journeyTitle": "Our Success Journey",
        "journeyDescription": "Follow our clinic's growth and milestones as we've helped families around the world.",
        "babies": "Babies",
        "familyWordsTitle": "Words From Our Families",
        "familyWordsDescription": "Brief moments of joy shared by parents who found success with our treatments.",
        "readyTitle": "Ready to Write Your Success Story?",
        "readyDescription": "Join the thousands of families who found their path to parenthood with our world-class fertility treatments and compassionate care.",
        "bookConsultation": "Book a Consultation",
        "contactUs": "Contact Us"
    }

    // Animation variants for consistent use
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    // Featured success stories
    const featuredStories = [
        {
            id: 1,
            couple: "Siddhika",
            age: "38 & 40",
            challenge: "Multiple failed IVF cycles elsewhere",
            story: `I have taken treatment for IVF from Dr. Ritu Agarwal and successfully have been blessed with two twins daughters. When all hopes were failed of conceiving, Dr. Ritu Agarwal proved to be a blessing for me.
    She is very patient with her patients and tries hard by all means for a successful chance.
    Now I can say I am a big fan of her and I would truly and definitely recommend her. She treats every patient like a family member and is always available 24x7 for her patients. I can't thank her enough for everything she has given`,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
            treatment: "IVF with preimplantation genetic testing"
        },
        {
            id: 2,
            couple: "Abhishek mittal – Jyoti mittal",
            age: "35 & 37",
            challenge: "Unexplained infertility for 6 years",
            story: `First of all I want to say thanks we are really so thankful that Dr. Ritu Agarwal makes our dreams come true, she is so much helpful and a really good doctor I ever met before,i would say she not only listens to everyone very patiently and calmy but also gives a personal touch to all`,
            image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop",
            treatment: "Comprehensive diagnosis & hormonal therapy"
        },
        {
            id: 3,
            couple: "Lajwannti- Rishi Raj",
            age: "34 & 36",
            challenge: "Donor sperm selection & timing",
            story: `We got referred from priyanka yadav,my colleague in bank .She told me about behaviour of Ritu mam and her experience with Ritu mam.
From the very  1st  time since we met with mam,our experience was really  very good,We were very happy with our experience with Dr. Ritu ma'am  ,
And we will definitely advice other patients to start their beautiful journey of IVF with the most humblest and attentive doctor ,Dr. Ritu Agarwal
Thankyou so much ma'am`,
            image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&auto=format&fit=crop",
            treatment: "IUI with donor sperm"
        }
    ];

    // Mini testimonials
    const miniTestimonials = [
        "Our rainbow baby after 7 years of trying!",
        "From recurrent miscarriages to a healthy pregnancy",
        "Twins after being told we had a 2% chance",
        "Found answers no other clinic could provide",
        "Baby girl after endometriosis treatment",
        "Successful pregnancy at 44 with own eggs",
        "Surprise natural conception after failed IVF",
        "Pregnancy after reversal of tubal ligation",
        "Successful IVF after three failed cycles elsewhere",
        "Our miracle baby after cancer treatment"
    ];

    return (
        <div className="bg-white overflow-hidden pt-20">
            {/* Hero Section with curved design and overlapping elements */}
            <section className="relative pt-24 pb-20 overflow-hidden">
               
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ivf-orange/10 to-ivf-orange/5 rounded-bl-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-ivf-orange/10 to-ivf-orange/5 rounded-tr-[100px] -z-10" />

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/2 md:pr-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            variants={fadeIn}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivf-dark-grey leading-tight mb-6">
                                {successStories.heroTitle1} <br />
                                <span className="text-ivf-orange">{successStories.heroTitle2}</span>
                            </h1>
                            <p className="text-xl text-ivf-grey mb-8">
                                {successStories.heroDescription}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-ivf-orange/10 px-4 py-2 rounded-full flex items-center">
                                    <Trophy className="w-5 h-5 text-ivf-orange mr-2" />
                                    <span className="text-ivf-dark-grey font-medium">5000+ Babies</span>
                                </div>
                                <div className="bg-ivf-orange/10 px-4 py-2 rounded-full flex items-center">
                                    <Star className="w-5 h-5 text-ivf-orange mr-2" />
                                    <span className="text-ivf-dark-grey font-medium">90% Success Rate</span>
                                </div>
                                <div className="bg-ivf-orange/10 px-4 py-2 rounded-full flex items-center">
                                    <Heart className="w-5 h-5 text-ivf-orange mr-2" />
                                    <span className="text-ivf-dark-grey font-medium">13+ Years Experience</span>
                                </div>
                            </div>

                            <Button
                                className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-8 py-6"
                                asChild
                            >
                                <Link href="/book-consultation">
                                    {successStories.startYourStory}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="md:w-1/2 mt-12 md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            variants={scaleIn}
                        >
                            <div className="relative">
                                {/* Main image - Updated */}
                                <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white rotate-3 z-20 relative">
                                    <img
                                        src="/lovable-uploads/4d0dccac-5209-4c22-ade2-15e3db89558c.png"
                                        alt="Happy family with newborn baby"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Decorative smaller images */}
                                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white -rotate-6 z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=200&auto=format&fit=crop"
                                        alt="Baby feet"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute -top-10 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white rotate-12 z-10">
                                    <img
                                        src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=200&auto=format&fit=crop"
                                        alt="Pregnant woman"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl z-30">
                                    <Trophy className="w-12 h-12 text-ivf-orange" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Success Stories Mosaic */}
            <section className="py-20 bg-gradient-to-b from-white to-ivf-orange/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
                            {successStories.featuredStoriesTitle}
                        </h2>
                        <p className="text-lg text-ivf-grey">
                            {successStories.featuredStoriesDescription}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                variants={fadeIn}
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={`${story.couple} success story`}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-ivf-dark-grey">{story.couple}</h3>
                                        <span className="bg-ivf-orange/10 text-ivf-orange text-sm px-3 py-1 rounded-full">
                                            {successStories.agePrefix} {story.age}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-sm text-ivf-grey font-medium">{successStories.challenge}</span>
                                        <p className="text-ivf-dark-grey font-semibold">{story.challenge}</p>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-sm text-ivf-grey font-medium">{successStories.treatment}</span>
                                        <p className="text-ivf-dark-grey">{story.treatment}</p>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-ivf-grey italic">
                                            <Quote className="w-5 h-5 text-ivf-orange inline mr-1 mb-1" />
                                            {story.story}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            className="border-ivf-orange text-ivf-orange hover:bg-ivf-orange/10 rounded-full px-8 py-6"
                        >
                            {successStories.viewMore}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonial Wall Section */}
            <section className="py-20 bg-gradient-to-b from-ivf-orange/5 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
                            {successStories.familyWordsTitle}
                        </h2>
                        <p className="text-lg text-ivf-grey">
                            {successStories.familyWordsDescription}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {miniTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md flex items-center min-h-24"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                variants={scaleIn}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <p className="text-ivf-dark-grey text-sm">
                                    <Quote className="w-4 h-4 text-ivf-orange inline mr-1 mb-1" />
                                    {testimonial}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
