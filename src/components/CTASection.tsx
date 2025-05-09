"use client"
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-6 md:py-8 bg-gradient-to-r from-ivf-orange/90 to-ivf-orange relative overflow-hidden">
      {/* Decorative elements - simplified */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-md"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Begin Your Journey to Parenthood?</h2>
          {!isMobile && (
            <p className="text-base md:text-lg opacity-90 mb-5">
              Our team of fertility specialists is ready to guide you through every step of your fertility journey.
            </p>
          )}
          
          <div className="flex justify-center">
            <Button 
              className="bg-white text-ivf-orange hover:bg-white/90 rounded-full px-6 py-2 text-base font-medium"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919057000555', '_blank')}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat with us on WhatsApp
            </Button>
          </div>
          
          <p className="mt-4 text-xs opacity-80">
            No waiting lists • Same-week appointments available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
