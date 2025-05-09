"use client"

import { Card } from "@/components/ui/card";
import { ArrowRight, TestTube, Microscope, Baby, HeartPulse, FlaskRound, Syringe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const services = [
  {
    icon: <TestTube className="h-10 w-10 text-ivf-orange" />,
    href: "/services/ivf",
    title: "In Vitro Fertilization",
    description: "Our comprehensive IVF program tailored to your unique fertility needs with state-of-the-art laboratory technology.",
  },
  {
    icon: <Microscope className="h-10 w-10 text-ivf-orange" />,
    title: "Genetic Testing",
    href: "/services/genomics",
    description: "Advanced preimplantation genetic testing to select the healthiest embryos for transfer.",
  },
  {
    icon: <FlaskRound className="h-10 w-10 text-ivf-orange" />,
    href: "/services/egg-freezing",
    title: "Egg Freezing",
    description: "Preserve your fertility options for the future with our advanced egg freezing technology.",
  },
  {
    icon: <Syringe className="h-10 w-10 text-ivf-orange" />,
    href: "/services/iui",
    title: "Intrauterine Insemination",
    description: "A less invasive fertility treatment that places sperm directly into the uterus during ovulation.",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-ivf-orange" />,
    href: "/services/male-diagnosis",
    title: "Male Fertility Treatment",
    description: "Comprehensive testing and treatment options for male factor infertility including Micro-TESE and TESA.",
  },
  {
    icon: <Baby className="h-10 w-10 text-ivf-orange" />,
    href: "/services/egg-donor-program",
    title: "Donor Programs",
    description: "Access to thoroughly screened egg, sperm, and embryo donors to help build your family.",
  },
];

const ServicesSection = () => {
  // Create refs for the icon containers
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();
  const [openService, setOpenService] = useState<number | null>(null);

  const navigate = useRouter();

  // Set up the animation observer
  useEffect(() => {
    if (isMobile) return; // Skip animations on mobile for better performance
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pulse-gentle');
            
            // Add floating effect after pulse animation
            setTimeout(() => {
              entry.target.classList.remove('animate-pulse-gentle');
              entry.target.classList.add('animate-float');
            }, 1500);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all icon containers
    iconRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      iconRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);

  const toggleService = (index: number) => {
    if (openService === index) {
      setOpenService(null);
    } else {
      setOpenService(index);
    }
  };

  const handleServiceClick = (index: number, href?: string) => {
    if (isMobile) {
      toggleService(index);
    } else if (href) {
      navigate(href);
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-ivf-dark-grey mb-2 md:mb-4">Our Comprehensive <span className="text-ivf-orange">Fertility Services</span></h2>
          {!isMobile && (
            <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
              We offer a complete range of fertility treatments using the latest technologies and personalized care protocols.
            </p>
          )}
        </div>
        
        {isMobile ? (
          <div className="space-y-3">
            {services.map((service, index) => (
              <Collapsible key={index} open={openService === index} onOpenChange={() => toggleService(index)}>
                <div className="border border-ivf-grey/10 rounded-xl shadow-sm">
                  <CollapsibleTrigger className="w-full flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <div className="mr-3 bg-ivf-orange/10 w-10 h-10 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-medium text-ivf-dark-grey text-left">{service.title}</h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-ivf-grey transition-transform ${openService === index ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-ivf-grey mb-3 pl-12">{service.description}</p>
                    {service.href && (
                      <div className="pl-12">
                        <Button variant="ghost" className="text-ivf-orange hover:bg-ivf-orange/10 p-0 flex items-center" onClick={() => navigate(service.href || '')}>
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="cursor-pointer p-6 rounded-xl border border-ivf-grey/10 shadow-md hover:shadow-lg transition-all duration-300 hover:border-ivf-orange/20 group"
                onClick={() => navigate(service.href || '')}
              >
                <div 
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="mb-4 bg-ivf-orange/10 w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ivf-orange/10 to-ivf-light-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with animated effects */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Animated ring */}
                  <div className="absolute inset-0 border-2 border-ivf-orange/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold text-ivf-dark-grey mb-2 group-hover:text-ivf-orange transition-colors duration-300">{service.title}</h3>
                <p className="text-ivf-grey mb-4">{service.description}</p>
                <Button variant="ghost" className="text-ivf-orange hover:bg-ivf-orange/10 p-0 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-8 md:mt-16 text-center">
          <Button onClick={() => navigate('/services')} className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-6 py-4 md:px-8 md:py-6 text-base md:text-lg shadow-md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
