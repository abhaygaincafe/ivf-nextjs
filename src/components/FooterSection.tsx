
"use client"

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logocolor from "../../public/images/Footer-Logo.png";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const FooterSection = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-ivf-dark-grey text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center mb-6">
              <img
                className="w-auto h-11 md:h-14 object-contain"
                src="/images/Footer-Logo.png"
                alt="Ritu IVF Logo"
              />
            </div>
            <p className="text-ivf-grey/90 mb-6">
              Leading fertility clinic dedicated to helping you build your family through personalized care and advanced reproductive technologies.
            </p>

            <div className="flex space-x-3">
              <a href="https://www.facebook.com/RITUIVF" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-ivf-orange h-8 w-8">
                  <Facebook size={16} />
                </Button>
              </a>
              <a href="https://www.instagram.com/rituivf/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-ivf-orange h-8 w-8">
                  <Instagram size={16} />
                </Button>
              </a>
              <a href="https://twitter.com/RITUIVF" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-ivf-orange h-8 w-8">
                  <Twitter size={16} />
                </Button>
              </a>
              <a href="https://www.youtube.com/@RITUIVF5/featured" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-ivf-orange h-8 w-8">
                  <Youtube size={16} />
                </Button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919057000555" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-ivf-orange h-8 w-8">
                  <MessageSquare size={16} />
                </Button>
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-ivf-orange mr-3 flex-shrink-0" />
                <span className="text-ivf-grey/90">
                  1st Floor, Sunshine Sheodan Heights, Plot No. 15, New Sanganer Rd,<br />
                  Vivek Vihar, Shyam Nagar,<br />
                  Jaipur, Rajasthan 302019 India
                </span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-ivf-orange mr-3 flex-shrink-0" />
                <div className="text-ivf-grey/90">
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sun: 9:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Pricing</Link></li>
              <li><Link href="/success-stories" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Blog</Link></li>
              <li><Link href="/contact-us" className="text-ivf-grey/90 hover:text-ivf-orange transition-colors">Contact</Link></li>
            </ul>
          </div>


          <div className="border-l border-ivf-orange pl-4">
            <h3 className="text-xl font-bold mb-4">Ready to Talk?</h3>
            <p className="text-ivf-grey/90 mb-4">
              Contact us for a free consultation
            </p>
            <div className="space-y-3">
              <a href="tel:+919057000555" className="inline-flex items-center text-ivf-orange hover:text-ivf-orange/90 transition-all group">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-lg font-medium group-hover:underline">+91 9057000555</span>
              </a>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=919057000555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ivf-orange hover:text-ivf-orange/90 transition-all group"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span className="text-lg font-medium group-hover:underline">WhatsApp Chat</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:drrituivf@gmail.com"
                  className="inline-flex items-center text-ivf-orange hover:text-ivf-orange/90 transition-all group"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="text-lg font-medium group-hover:underline">drrituivf@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-ivf-grey/20 my-4 md:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-ivf-grey/70">
            © {new Date().getFullYear()} FertilityFirst
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms-and-conditions" className="text-ivf-grey/70 hover:text-ivf-orange text-sm">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-ivf-grey/70 hover:text-ivf-orange text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
