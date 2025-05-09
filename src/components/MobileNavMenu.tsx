"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Home, Phone, Mail, ExternalLink, Hammer, Wrench, Calculator, ClipboardCheck, Facebook, Instagram, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MobileNavMenuProps {
  open: boolean;
  onClose: () => void;
  tools?: any[];
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ open, onClose, tools = [] }) => {
  const { t, i18n } = useTranslation('common');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item) 
        : [...prev, item]
    );
  };

  const isExpanded = (item: string) => expandedItems.includes(item);

  const submenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/rituivf", color: "text-ivf-orange" },
    { icon: Instagram, url: "https://instagram.com/rituivf", color: "text-ivf-orange" },
    { icon: Twitter, url: "https://twitter.com/rituivf", color: "text-ivf-orange" },
    { icon: Linkedin, url: "https://linkedin.com/company/rituivf", color: "text-ivf-orange" },
    { icon: Youtube, url: "https://youtube.com/c/rituivf", color: "text-ivf-orange" },
  ];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent side="right" className="p-0 overflow-y-auto sm:max-w-md w-[85vw]">
        <SheetHeader className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-ivf-dark-grey font-semibold">
              {t('menu', 'Menu')}
            </SheetTitle>
            <div className="flex items-center gap-2">
              {/* Compact Language Selector */}
              <div className="mr-2">
                <Select 
                  value={i18n.language} 
                  onValueChange={changeLanguage}
                >
                  <SelectTrigger className="h-8 w-20 text-xs border-ivf-orange text-ivf-orange">
                    <Globe size={14} className="mr-1" />
                    <SelectValue placeholder={i18n.language === 'hi' ? 'हिंदी' : 'EN'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en" className="text-xs">English</SelectItem>
                    <SelectItem value="hi" className="text-xs">हिंदी</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <SheetClose 
                onClick={onClose}
                className="p-2 text-ivf-grey hover:text-ivf-orange rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </SheetClose>
            </div>
          </div>
        </SheetHeader>

        <div className="flex flex-col divide-y divide-gray-100">
          {/* Home */}
          <Link 
            to="/" 
            className="p-4 flex items-center text-ivf-dark-grey hover:bg-gray-50"
            onClick={onClose}
          >
            <Home className="mr-3 text-ivf-orange" size={20} />
            {t('navigation.home')}
          </Link>

          {/* Services Dropdown */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleItem('services')}
              className="p-4 flex justify-between items-center text-ivf-dark-grey hover:bg-gray-50 w-full text-left"
            >
              <div className="flex items-center">
                <Hammer className="mr-3 text-ivf-orange" size={20} />
                {t('navigation.services')}
              </div>
              {isExpanded('services') ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            
            <AnimatePresence>
              {isExpanded('services') && (
                <motion.div 
                  className="pl-4 pb-2 overflow-hidden"
                  variants={submenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link 
                    to="/services" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    {t('navigation.allServices', 'All Services')}
                  </Link>
                  <Link 
                    to="/services/ivf" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    IVF
                  </Link>
                  <Link 
                    to="/services/icsi" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    ICSI
                  </Link>
                  <Link 
                    to="/services/iui" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    IUI
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tools Dropdown - New section */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleItem('tools')}
              className="p-4 flex justify-between items-center text-ivf-dark-grey hover:bg-gray-50 w-full text-left"
            >
              <div className="flex items-center">
                <Wrench className="mr-3 text-ivf-orange" size={20} />
                {t('navigation.tools', 'Tools')}
              </div>
              {isExpanded('tools') ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            
            <AnimatePresence>
              {isExpanded('tools') && (
                <motion.div 
                  className="pl-4 pb-2 overflow-hidden"
                  variants={submenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link 
                    to="/fertility-assessment" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    <ClipboardCheck className="mr-2" size={16} />
                    {t('fertilityAssessment.badge', 'Fertility Assessment')}
                  </Link>
                  <Link 
                    to="/success-rate-calculator" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    <Calculator className="mr-2" size={16} />
                    {t('successRateCalculator', 'Success Rate Calculator')}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown */}
          <div className="flex flex-col">
            <button 
              onClick={() => toggleItem('resources')}
              className="p-4 flex justify-between items-center text-ivf-dark-grey hover:bg-gray-50 w-full text-left"
            >
              <div className="flex items-center">
                <ExternalLink className="mr-3 text-ivf-orange" size={20} />
                {t('navigation.resources')}
              </div>
              {isExpanded('resources') ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            
            <AnimatePresence>
              {isExpanded('resources') && (
                <motion.div 
                  className="pl-4 pb-2 overflow-hidden"
                  variants={submenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link 
                    to="/blog" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    {t('navigation.blog', 'Blog')}
                  </Link>
                  <Link 
                    to="/learn-about-ivf" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    {t('navigation.learnAboutIVF', 'Learn About IVF')}
                  </Link>
                  <Link 
                    to="/faqs" 
                    className="p-3 flex items-center text-ivf-dark-grey hover:text-ivf-orange block"
                    onClick={onClose}
                  >
                    {t('navigation.faqs', 'FAQs')}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <Link 
            to="/about-us" 
            className="p-4 flex items-center text-ivf-dark-grey hover:bg-gray-50"
            onClick={onClose}
          >
            {t('navigation.about')}
          </Link>

          {/* Success */}
          <Link 
            to="/success-stories" 
            className="p-4 flex items-center text-ivf-dark-grey hover:bg-gray-50"
            onClick={onClose}
          >
            {t('navigation.success')}
          </Link>

          {/* Contact */}
          <Link 
            to="/contact-us" 
            className="p-4 flex items-center text-ivf-dark-grey hover:bg-gray-50"
            onClick={onClose}
          >
            {t('navigation.contact')}
          </Link>

          {/* Contact Info */}
          <div className="p-4 flex flex-col gap-3 bg-gray-50">
            <div className="flex items-center text-ivf-dark-grey">
              <Phone className="mr-3 text-ivf-orange" size={18} />
              <a href="tel:+919057000555">+91 9057000555</a>
            </div>
            <div className="flex items-center text-ivf-dark-grey">
              <Mail className="mr-3 text-ivf-orange" size={18} />
              <a href="mailto:info@ivfjourney.com">info@ivfjourney.com</a>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="p-4 flex justify-center space-x-4 bg-gray-50">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 text-ivf-orange"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
