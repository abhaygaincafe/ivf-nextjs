
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GalleryHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";


const images = [
  {
    src: "/images/gallery1.svg",
    alt: "Modern IVF laboratory with advanced equipment",
    caption: "Our state-of-the-art embryology laboratory"
  },
  {
    src: "/images/gallery2.svg",
    alt: "Doctor consulting with a couple",
    caption: "Personalized consultations with our fertility specialists"
  },
  {
    src: "/images/gallery3.svg",
    alt: "Modern and comfortable waiting area",
    caption: "Comfortable and welcoming reception area"
  },
  {
    src: "/images/gallery4.png",
    alt: "Doctor examining test results",
    caption: "Comprehensive diagnostic testing"
  },
  {
    src: "/images/gallery5.svg",
    alt: "Modern treatment room",
    caption: "Private and comfortable treatment rooms"
  },
  {
    src: "/images/gallery6.png",
    alt: "Lab technician working with equipment",
    caption: "Experienced embryologists and laboratory technicians"
  },
];

const PhotoGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // Function to close dialog
  const closeDialog = () => {
    const closeButton = document.querySelector('[data-state="open"] button[aria-label="Close"]');
    if (closeButton instanceof HTMLElement) {
      closeButton.click();
    }
  };

  return (
    <section className="py-6 md:py-10 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Our Facility
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-ivf-dark-grey mb-2 md:mb-4">
            Take a Virtual Tour of <span className="text-ivf-orange">Ritu IVF</span>
          </h2>
          {!isMobile && (
            <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
              Experience our world-class facilities through our photo gallery. Our modern clinic
              is designed with your comfort and care in mind.
            </p>
          )}
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Gallery Carousel - Optimized for touch on mobile */}
          <Carousel className="mb-4 md:mb-8" opts={{ dragFree: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className={`${isMobile ? 'basis-4/5' : 'md:basis-1/2 lg:basis-1/3'}`}>
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                          <div className={`${isMobile ? 'aspect-[4/3]' : 'aspect-square'} relative overflow-hidden`}>
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                            />
                            {!isMobile && (
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                              </div>
                            )}
                          </div>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                        <div className="relative">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full rounded-lg shadow-2xl"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-2 right-2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                            onClick={closeDialog}
                          >
                            <X className="h-5 w-5" />
                          </Button>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                            <p className="text-white text-center">{image.caption}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="left-1 md:-left-12" />
                <CarouselNext className="right-1 md:-right-12" />
              </>
            )}
          </Carousel>
          
          {/* Mobile indicator dots */}
          {isMobile && (
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-ivf-orange' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
