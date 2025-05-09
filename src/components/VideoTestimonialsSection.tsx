"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const videoTestimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    title: "Parents to Emma, 6 months",
    videoUrl: "https://rituivf.com/wp-content/uploads/2023/06/Twins-in-First-Attempt-_-Patient-Testimonial-_-Baby-After-19-Year-of-Marriage-_-Ritu-IVF-Jaipur-Raj.mp4",
    quote: "After three failed attempts elsewhere, Ritu IVF's personalized approach made all the difference.",
  },
  {
    id: 2,
    name: "Jennifer & David",
    title: "Parents to twins, 1 year",
    videoUrl: "https://rituivf.com/wp-content/uploads/2023/06/Patient-Testimonial-A-Journey-of-Hope-and-Gratitude-at-Ritu-IVF-and-Fertility-Center-Jaipur.mp4",
    quote: "The doctors at Ritu IVF truly cared about our journey. We couldn't have asked for better care.",
  }
];

const getImageForAuthor = (author: string): string => {
  const imageMap: { [key: string]: string } = {
    'सिद्धिका': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
    'Siddhika': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
    'अभिषेक ज्योति मित्तल': 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop',
    'Abhishek Jyoti mittal': 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop',
    'लज्जावंती - ऋषि राज': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
    'Lajwannti- Rishi Raj': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
    'प्रिया और अभि': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    'Priya & Abhi': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
  };
  return imageMap[author] || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop';
};


const testimonials = {
  "title": "Success Stories",
  "subtitle": "Hear from our happy families",
  "description": "Nothing showcases our success better than the families we've helped create. Read their inspiring stories.",
  "showMore": "Show More",
  "showLess": "Show Less",
  "readMore": "Read More Success Stories",
  "stories": [
    {
      "quote": "I took IVF treatment from Dr Ritu Agarwal and got blessed with two twin daughters successfully. When all hopes of conceiving were lost, Dr Ritu Agarwal proved to be a blessing for me. She is very patient with her patients and makes every possible effort to succeed. Now I can say that I am her big fan and would really recommend her.",
      "author": "Siddhika",
      "role": "Parents of Emma, 6 months"
    },
    {
      "quote": "First of all I want to say thank you that we are really grateful that Dr Ritu Agarwal has made our dreams come true. She is very helpful and really a good doctor I have ever met. She not only listens to everyone's issue very patiently and peacefully but also gives a personal touch to everyone.",
      "author": "Abhishek Jyoti Mittal",
      "role": "Twin parents, 1 year"
    },
    {
      "quote": "We got referred from Priyanka Yadav, my colleague in the bank. She told me about the behavior of Ritu ma'am and her experience. From the very first time since we met with ma'am, our experience was really very good. We were very happy with our experience with Dr. Ritu ma'am.",
      "author": "Lajwanti - Rishi Raj",
      "role": "First-time mom"
    },
    {
      "quote": "It is actually not a difficult task to describe the journey of the arrival of 'Avaneesh'. It has been possible by the grace of god and the great efforts of ma'am Dr Ritu Agarwal. I remember the date 11/07/2021, when we first met ma'am. Her smile and confidence always supported us and cooperated in our goal.",
      "author": "Priya and Abhi",
      "role": "Parents of Oliver, 3 months"
    }
  ]
}

const VideoTestimonialsSection = () => {
  const { t } = useTranslation('common');
  // const { t } = useTranslation('');
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showFull, setShowFull] = useState(false);
  const isMobile = useIsMobile();
  const wordLimit = 56;
  // console.log("testimonials", typeof t('testimonials.stories'));
  // Text testimonials from the translation
  const textTestimonials = testimonials.stories.map((story: any) => ({
    ...story,
    rating: 5,
    image: getImageForAuthor(story.author)
  }));

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videoTestimonials.length);
    setPlaying(false);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setPlaying(false);
  };

  const nextTextTestimonial = () => {
    setActiveTextIndex((prev) => (prev + 1) % textTestimonials.length);
    setShowFull(false);
  };

  const prevTextTestimonial = () => {
    setActiveTextIndex((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
    setShowFull(false);
  };

  const quote = textTestimonials[activeTextIndex]?.quote || "";
  const words = quote.split(" ");
  const isLong = words.length > wordLimit;
  const displayedQuote = showFull ? quote : words.slice(0, wordLimit).join(" ") + (isLong ? "..." : "");

  return (
    <section className="py-10 bg-gradient-to-b from-ivf-light-grey to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            {testimonials.title}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-ivf-dark-grey mb-2 md:mb-4">
            {testimonials.subtitle} <span className="text-ivf-orange">Stories</span>
          </h2>
          {!isMobile && (
            <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
              Real families sharing their experiences with Ritu IVF and how we helped them achieve their dreams of parenthood.
            </p>
          )}
        </div>

        <Tabs defaultValue="video" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-6 bg-ivf-orange/10">
            <TabsTrigger value="video" className="data-[state=active]:bg-ivf-orange data-[state=active]:text-white">Video Testimonials</TabsTrigger>
            <TabsTrigger value="text" className="data-[state=active]:bg-ivf-orange data-[state=active]:text-white">Written Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-ivf-dark-grey">
              {/* Main video display */}
              <div className={`aspect-video relative ${isMobile ? 'aspect-square' : ''}`}>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  src={videoTestimonials[activeVideo].videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Thumbnails navigation */}
              <div className="bg-white p-2 md:p-4 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={prevVideo}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === activeVideo ? "bg-ivf-orange scale-125" : "bg-ivf-grey/30"}`}
                      onClick={() => {
                        setActiveVideo(index);
                        setPlaying(false);
                      }}
                      aria-label={`View video testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={nextVideo}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="text" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-ivf-orange/20 opacity-50 hidden md:block">
                <Quote size={120} />
              </div>

              <Card className="p-8 md:p-12 rounded-2xl border border-ivf-grey/10 shadow-lg bg-white relative z-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-ivf-orange/20">
                      <img
                        src={textTestimonials[activeTextIndex]?.image || ""}
                        alt={textTestimonials[activeTextIndex]?.author || ""}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(textTestimonials[activeTextIndex]?.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-ivf-orange text-ivf-orange" />
                      ))}
                    </div>
                    <h4 className="font-bold text-ivf-dark-grey">{textTestimonials[activeTextIndex]?.author || ""}</h4>
                    <p className="text-sm text-ivf-grey">{textTestimonials[activeTextIndex]?.role || ""}</p>
                  </div>

                  <div className="md:w-3/4">
                    <p className="text-xl text-ivf-dark-grey italic leading-relaxed">
                      "{displayedQuote}"
                    </p>

                    {isLong && (
                      <button
                        className="text-ivf-orange underline mt-2 text-sm"
                        onClick={() => setShowFull(!showFull)}
                      >
                        {showFull ? testimonials.showLess : testimonials.showMore}
                      </button>
                    )}

                    <div className="flex justify-center md:justify-end gap-4 mt-8">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-ivf-grey/30 hover:bg-ivf-orange/10 hover:border-ivf-orange/20"
                        onClick={prevTextTestimonial}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-ivf-grey/30 hover:bg-ivf-orange/10 hover:border-ivf-orange/20"
                        onClick={nextTextTestimonial}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-8 flex justify-center">
                {textTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 transition-all ${index === activeTextIndex ? "bg-ivf-orange scale-125" : "bg-ivf-grey/30"}`}
                    onClick={() => {
                      setActiveTextIndex(index);
                      setShowFull(false);
                    }}
                    aria-label={`View text testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-6 py-2">
            {testimonials.readMore}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
