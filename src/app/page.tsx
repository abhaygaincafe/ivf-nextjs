"use client"
import Image from "next/image";

// import "../../i18n"
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AffordabilitySection from "@/components/AffordabilitySection";
import EMIOptionsSection from "@/components/EMIOptionsSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import BookingFormSection from "@/components/BookingFormSection";


import { useIsMobile } from "@/hooks/use-mobile";



export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="overflow-x-hidden">

      <EnhancedHeroSection />

      {!isMobile && <ProcessSection />}

      <ServicesSection />
      <WhyUsSection />
      <AffordabilitySection />
      {!isMobile ? <EMIOptionsSection /> : (
        <div className="py-4">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-center text-ivf-dark-grey mb-2">
              Flexible Payment Options Available
            </h3>
            <p className="text-center text-ivf-grey text-sm">
              Contact us to learn about our EMI options with leading banks
            </p>
          </div>
        </div>
      )}

      <PhotoGallerySection />
      <VideoTestimonialsSection />
      <FAQSection />
      {/* <BlogSection /> */}
      <BookingFormSection />

    </div>
  );
}
