"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, Globe, BookOpen, HelpCircle, ShieldCheck, Calculator, Heart, Users, Map, Wrench, ArrowRight, Dumbbell, Snowflake, Calendar, ClipboardCheck } from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import MobileNavMenu from './MobileNavMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import faviconbg from "../../public/images/Favicon.png"
import Logocolor from "../../public/images/Header-logosvg.svg"
import Logoimage from "../../public/images/ivfOg.svg"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ivf-orange/10 hover:text-ivf-orange focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const TestTube = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 2v16.5a4 4 0 0 0 4 4 4 4 0 0 0 4-4V2"></path>
    <path d="M3 2h18"></path>
    <path d="M9 16 3.5 12.5"></path>
    <path d="M21 16l-5.5-3.5"></path>
  </svg>
);

const Microscope = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 18h8"></path>
    <path d="M3 22h18"></path>
    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
    <path d="M9 14h2"></path>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
  </svg>
);

const Baby = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12h.01"></path>
    <path d="M15 12h.01"></path>
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 5 6.3"></path>
    <path d="M8 9h8"></path>
  </svg>
);

const Egg = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c4.97 0 9-4.92 9-11S16.97 0 12 0 3 4.92 3 11s4.03 11 9 11z"></path>
  </svg>
);

const Beaker = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 3h15"></path>
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
    <path d="M6 14h12"></path>
  </svg>
);

const Dna = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 15c6.667-6 13.333 0 20-6"></path>
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
    <path d="m17 6-2.5-2.5"></path>
    <path d="m14 8-1-1"></path>
    <path d="m7 18 2.5 2.5"></path>
    <path d="m3.5 14.5.5.5"></path>
    <path d="m20 9 .5.5"></path>
    <path d="m6.5 12.5 1 1"></path>
    <path d="m16.5 10.5 1 1"></path>
    <path d="m10 16 1.5 1.5"></path>
  </svg>
);

const Syringe = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m14 10-7.5 7.5"></path>
    <path d="m14 10 1 4 4 1"></path>
    <path d="m12 12 10.5-10.5"></path>
    <path d="M18 6 5 19"></path>
    <path d="m5 9 4-4"></path>
    <path d="m15 15-4 4"></path>
    <path d="m5 19-3 1 1-3"></path>
  </svg>
);

const fertilityTreatments = [
  {
    title: "In Vitro Fertilization (IVF)",
    href: "/services/ivf",
    description: "Our comprehensive IVF program with personalized protocols.",
    icon: TestTube,
  },
  {
    title: "Intra-Cytoplasmic Sperm Injection (ICSI)",
    href: "/services/icsi",
    description: "Advanced technique for male factor infertility.",
    icon: Microscope,
  },
  {
    title: "Intrauterine Insemination (IUI)",
    href: "/services/iui",
    description: "A less invasive fertility treatment option.",
    icon: Syringe,
  },
  {
    title: "Blastocyst Culture",
    href: "/services/blastocyst-culture",
    description: "Extended embryo culture for optimal development.",
    icon: Beaker,
  },
  {
    title: "Blastocyst Transfer",
    href: "/services/blastocyst-transfer",
    description: "Advanced embryo transfer technique for optimal implantation.",
    icon: Baby,
  }
];

const maleFertilityTreatments = [
  {
    title: "Micro-TESE",
    href: "/services/micro-tese",
    description: "Microsurgical sperm extraction for men with no sperm in ejaculate.",
    icon: Microscope,
  },
  {
    title: "Testicular Sperm Aspiration (TESA)",
    href: "/services/tesa",
    description: "Procedure to retrieve sperm directly from the testicle.",
    icon: Syringe,
  },
  {
    title: "Testicular Tissue Biopsy",
    href: "/services/testicular-biopsy",
    description: "Diagnostic procedure to examine testicular tissue.",
    icon: Microscope,
  },
  {
    title: "Varicocele Treatment",
    href: "/services/varicocele",
    description: "Treatment for enlarged veins in the scrotum.",
    icon: Wrench,
  },
  {
    title: "Sperm Freezing",
    href: "/services/sperm-freezing-pres",
    description: "Preservation of sperm for future use.",
    icon: Snowflake,
  },
];

const femaleFertilityTreatments = [
  {
    title: "Egg Freezing",
    href: "/services/egg-freezing",
    description: "Preserve fertility for future family planning.",
    icon: Egg,
  },
  {
    title: "Blastocyst Transfer",
    href: "/services/blastocyst-transfer",
    description: "Transfer of blastocyst-stage embryos to the uterus.",
    icon: Baby,
  },
  {
    title: "Laser Assisted Hatching",
    href: "/services/laser-assisted-hatching",
    description: "Using laser technology to assist embryo implantation.",
    icon: Wrench,
  },
  {
    title: "Ovulation Induction",
    href: "/services/ovulation-induction",
    description: "Medications to stimulate egg production.",
    icon: Calendar,
  },
  {
    title: "Egg Donor Program",
    href: "/services/egg-donor-program",
    description: "Using donated eggs for fertility treatment.",
    icon: Heart,
  },
];

const screeningsAndTests = [
  {
    title: "Female Diagnosis",
    href: "/services/female-diagnosis",
    description: "Comprehensive testing for female fertility factors.",
    icon: Microscope,
  },
  {
    title: "Male Diagnosis",
    href: "/services/male-diagnosis",
    description: "Evaluating male fertility potential.",
    icon: TestTube,
  },
  {
    title: "Genomics",
    href: "/services/genomics",
    description: "Genetic testing for reproductive health.",
    icon: Dna,
  },
  {
    title: "Advanced Genetics & Diagnostics",
    href: "/services/advanced-genetics",
    description: "Specialized genetic testing for fertility treatments.",
    icon: Microscope,
  },
];

const fertilityPreservation = [
  {
    title: "Sperm Freezing",
    href: "/services/sperm-freezing-pres",
    description: "Long-term sperm preservation options.",
    icon: Snowflake,
  },
  {
    title: "Embryo Freezing",
    href: "/services/embryo-freezing",
    description: "Preserving embryos for future family building.",
    icon: Baby,
  },
  {
    title: "Egg Freezing",
    href: "/services/egg-freezing",
    description: "Preserving eggs for future use.",
    icon: Egg,
  },
  {
    title: "Preservation for Cancer Patients",
    href: "/services/oncofertility",
    description: "Fertility options before cancer treatment.",
    icon: Heart,
  },
];

const secondOpinion = [
  {
    title: "Repeated IVF Failures",
    href: "/services/repeated-ivf-failures",
    description: "Expert consultation for unsuccessful IVF attempts.",
    icon: ShieldCheck,
  },
  {
    title: "Recurrent Implantation Failure",
    href: "/services/recurrent-implantation-failure",
    description: "Specialized care for implantation issues.",
    icon: ShieldCheck,
  },
  {
    title: "Recurrent Miscarriages",
    href: "/services/recurrent-miscarriages",
    description: "Investigation and treatment for repeated pregnancy loss.",
    icon: Heart,
  },
  {
    title: "Fertility and Cancer",
    href: "/services/fertility-and-cancer",
    description: "Specialized fertility care for cancer patients.",
    icon: ShieldCheck,
  },
];

const tools = [
  {
    title: "Fertility Assessment",
    href: "/fertility-assessment",
    description: "Take our self-assessment to evaluate your fertility health.",
    icon: ClipboardCheck,
  },
  {
    title: "Success Rate Calculator",
    href: "/success-rate-calculator",
    description: "Estimate your potential IVF success rate based on your profile.",
    icon: Calculator,
  }
];

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Read our latest articles and updates about IVF treatments.",
    icon: BookOpen,
  },
  {
    title: "Learn About IVF",
    href: "/learn-about-ivf",
    description: "Comprehensive information about the IVF process.",
    icon: BookOpen,
  },
  {
    title: "Is IVF Safe?",
    href: "/is-ivf-safe",
    description: "Information about IVF safety and risks.",
    icon: ShieldCheck,
  },
  {
    title: "Myth vs Fact",
    href: "/myth-vs-fact",
    description: "Learn the truth about common IVF misconceptions.",
    icon: ShieldCheck,
  },
  {
    title: "Male Infertility",
    href: "/male-infertility",
    description: "Understand causes and treatments for male infertility.",
    icon: Users,
  },
  {
    title: "Female Infertility",
    href: "/female-infertility",
    description: "Understand causes and treatments for female infertility.",
    icon: Users,
  },
  {
    title: "Fertility Assessment",
    href: "/fertility-assessment",
    description: "Take our self-assessment to evaluate your fertility health.",
    icon: ClipboardCheck,
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Find answers to commonly asked questions about IVF.",
    icon: HelpCircle,
  },
  {
    title: "Age and Fertility",
    href: "/age-and-fertility",
    description: "Understanding how age impacts fertility and reproductive options.",
    icon: Calendar,
  },
  {
    title: "Lifestyle and Fertility",
    href: "/lifestyle-and-fertility",
    description: "Explore how lifestyle factors impact reproductive health and fertility.",
    icon: Dumbbell,
  },
];

const navigation = {
  "home": "Home",
  "services": "Services",
  "tools": "Tools",
  "resources": "Resources",
  "about": "About",
  "success": "Success",
  "contact": "Contact",
  "allServices": "All Services",
  "blog": "Blog",
  "learnAboutIVF": "Learn About IVF",
  "faqs": "FAQs"
}

const languageNames = {
  "en": "English",
  "en-US": "English (US)",
  "en-GB": "English (UK)",
  "en-IN": "English (India)",
  "hi": "Hindi"
}

const TopBar = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation('common');
  const currentLanguage = i18n.language || 'en';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  // const isTablet = !isMobile && window.innerWidth < 1024;

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu called, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const getAvailableLanguages = () => {
    try {
      return Object.keys(i18n.options?.resources || { en: {}, hi: {} });
    } catch (error) {
      console.error("Error accessing language resources:", error);
      return ['en', 'hi']; // Fallback languages
    }
  };

  const getLanguageDisplayName = (langCode: string): string => {
    const baseLanguage = langCode.split('-')[0];

    if (languageNames[langCode as keyof typeof languageNames]) {
      return languageNames[langCode as keyof typeof languageNames];
    }

    if (languageNames[baseLanguage as keyof typeof languageNames]) {
      return languageNames[baseLanguage as keyof typeof languageNames];
    }

    return langCode.charAt(0).toUpperCase() + langCode.slice(1);
  };

  console.log("Mobile menu state:", isMobileMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-ivf-light-grey">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Modified this section to center logo on mobile */}
        <div className="flex-1 flex md:justify-start justify-center md:flex-none">
          <div onClick={() => router.push('/')} className="cursor-pointer flex items-center">
            <img className="w-52 h-28 object-contain" src="/images/ivfOg.svg" alt="Ritu IVF Logo" />
          </div>
        </div>

        {/* Show navigation menu on desktop */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-ivf-dark-grey hover:text-ivf-orange transition-colors"
                  )}
                  asChild
                >
                  <Link href="/">{navigation.home}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-ivf-dark-grey hover:text-ivf-orange">
                  {navigation.services}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-screen max-w-screen-lg gap-3 p-4 md:grid-cols-5">
                    <div>
                      <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Fertility Treatments</h3>
                      <ul className="space-y-1">
                        {fertilityTreatments.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                              >
                                <div className="flex items-center">
                                  <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Male Fertility</h3>
                      <ul className="space-y-1">
                        {maleFertilityTreatments.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                              >
                                <div className="flex items-center">
                                  <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Female Fertility</h3>
                      <ul className="space-y-1">
                        {femaleFertilityTreatments.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                              >
                                <div className="flex items-center">
                                  <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Screenings & Tests</h3>
                      <ul className="space-y-1">
                        {screeningsAndTests.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                              >
                                <div className="flex items-center">
                                  <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                  <span>{item.title}</span>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Fertility Preservation</h3>
                        <ul className="space-y-1">
                          {fertilityPreservation.slice(0, 3).map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                                >
                                  <div className="flex items-center">
                                    <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                    <span>{item.title}</span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-ivf-orange mb-2 text-base border-b pb-1">Second Opinion</h3>
                        <ul className="space-y-1">
                          {secondOpinion.slice(0, 3).map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block text-sm py-1 px-2 rounded-md hover:bg-ivf-orange/10 hover:text-ivf-orange"
                                >
                                  <div className="flex items-center">
                                    <item.icon className="w-4 h-4 mr-2 text-ivf-orange/70" />
                                    <span>{item.title}</span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block text-sm py-1 px-2 rounded-md bg-ivf-orange/10 text-ivf-orange hover:bg-ivf-orange/20"
                        >
                          <div className="flex items-center justify-center">
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Tools Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-ivf-dark-grey hover:text-ivf-orange">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {tools.map((tool) => (
                      <ListItem
                        key={tool.title}
                        title={tool.title}
                        href={tool.href}
                      >
                        <div className="flex items-center gap-2">
                          <tool.icon className="w-4 h-4" />
                          <span>{tool.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-ivf-dark-grey hover:text-ivf-orange">
                  {navigation.resources}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        <div className="flex items-center gap-2">
                          <resource.icon className="w-4 h-4" />
                          <span>{resource.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-ivf-dark-grey hover:text-ivf-orange transition-colors"
                  )}
                  asChild
                >
                  <Link href="/about-us">{navigation.about}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-ivf-dark-grey hover:text-ivf-orange transition-colors"
                  )}
                  asChild
                >
                  <Link href="/success-stories">{navigation.success}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 text-ivf-dark-grey hover:text-ivf-orange transition-colors"
                  )}
                  asChild
                >
                  <Link href="/contact-us">{navigation.contact}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Language dropdown - only visible on desktop/tablet */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border border-ivf-orange text-ivf-orange rounded-full hover:bg-ivf-orange/10 px-4 py-2 h-auto gap-2 font-normal"
                >
                  <Globe className="h-4 w-4" />
                  <span>{getLanguageDisplayName(currentLanguage)}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                {getAvailableLanguages().map((lng) => (
                  <DropdownMenuItem
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={currentLanguage === lng ? 'bg-ivf-orange/10 text-ivf-orange' : ''}
                  >
                    {getLanguageDisplayName(lng)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center bg-ivf-orange/10 text-ivf-orange font-medium px-4 py-2 rounded-full">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 9057000555</span>
          </div>

          {/* Show hamburger menu on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-ivf-dark-grey"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Tablet view - only show hamburger when in tablet size */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex lg:hidden text-ivf-dark-grey"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavMenu
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        tools={[...tools, {
          title: "Fertility Assessment",
          href: "/fertility-assessment",
          description: "Take our self-assessment to evaluate your fertility health.",
          icon: ClipboardCheck
        }]}
      />
    </div>
  );
};

export default TopBar;
