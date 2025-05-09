
"use client"

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";

const ContactInfo = () => {
  const isMobile = useIsMobile();
  
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "First Floor, Sunshine Sheodan Heights, Plot No. 15, New Sanganer Rd, Vivek Vihar, Shyam Nagar, Jaipur, Rajasthan 302019, India"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9057000555"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "drrituivf@gmail.com"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "+91 9057000555",
      href: "https://api.whatsapp.com/send?phone=919057000555"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-ivf-dark-grey mb-4 md:mb-8">Contact Information</h2>
      <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 md:gap-4"
          >
            <div className="bg-ivf-orange/10 p-2 md:p-3 rounded-full flex-shrink-0">
              <detail.icon className="w-5 h-5 md:w-6 md:h-6 text-ivf-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-ivf-dark-grey">{detail.title}</h3>
              {detail.href ? (
                <a 
                  href={detail.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ivf-grey text-sm md:text-base hover:text-ivf-orange transition-colors"
                >
                  {isMobile && detail.title === "Visit Us" 
                    ? "Sunshine Sheodan Heights, New Sanganer Rd, Jaipur, Rajasthan" 
                    : detail.content}
                </a>
              ) : (
                <p className="text-ivf-grey text-sm md:text-base">
                  {isMobile && detail.title === "Visit Us" 
                    ? "Sunshine Sheodan Heights, New Sanganer Rd, Jaipur, Rajasthan" 
                    : detail.content}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="border-t pt-4 md:pt-6">
        <h3 className="font-semibold text-ivf-dark-grey mb-3 md:mb-4">Follow Us</h3>
        <div className="flex gap-3 md:gap-4">
          {[
            { icon: Instagram, href:"https://www.instagram.com/rituivf/" }, 
            { icon: Facebook, href:"https://www.facebook.com/RITUIVF" },
            { icon: MessageSquare, href:"https://api.whatsapp.com/send?phone=919057000555", color: "text-green-600" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-ivf-orange/10 p-2 md:p-3 rounded-full hover:bg-ivf-orange/20 transition-colors ${item.color || ''}`}
            >
              <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color || 'text-ivf-orange'}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
