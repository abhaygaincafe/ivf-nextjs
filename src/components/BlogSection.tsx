
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const blogPosts = [
  {
    title: "7 Causes of a Bulky Uterus Every Woman Should Know",
    excerpt: "A bulky uterus can be concerning, especially when it shows up unexpectedly during a routine checkup or imaging test. But…",
    image: "/images/uterusbulky.jpg",
    date: "April 5, 2025",
    category: "Treatment Guide",
    slug: "causes-of-a-bulky-uterus"
  },
  {
    title: "7 Surprising Reasons of Irregular Periods Every Woman Should Know",
    excerpt: "Irregular periods are not just an inconvenience; they can also be a signal that something in your body is not….",
    image: "/images/periodsirregular.jpg",
    date: "March 28, 2025",
    category: "Lifestyle",
    slug: "reasons-of-irregular-periods"
  },
  {
    title: "Signs You Can't Get Pregnant: Common Signs, Symptoms and Causes of Female Infertility ",
    excerpt: "If a woman is unable to conceive despite having unprotected sex regularly for a period of one year, it could…",
    image: "/images/infertilitysymptoms.jpg",
    date: "March 15, 2025",
    category: "Wellness",
    slug: "signs-symptoms-causes-female-infertility"
  }
];

const BlogSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 bg-ivf-light-grey relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            Latest from Our <span className="text-ivf-orange">Blog</span>
          </h2>
          <p className="text-ivf-grey max-w-2xl mx-auto">
            Stay informed with the latest insights on fertility treatments and reproductive health
          </p>
        </div>
        
        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {blogPosts.map((post, index) => (
                <CarouselItem key={index}>
                  <Link to={`/blog/${post.slug}`} className="block">
                    <Card className="overflow-hidden border border-ivf-grey/10 rounded-xl shadow-md">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-ivf-orange text-white text-xs font-medium py-1 px-2 rounded-full">
                          {post.category}
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex items-center text-ivf-grey text-sm mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        
                        <h3 className="text-lg font-bold text-ivf-dark-grey mb-2">
                          {post.title}
                        </h3>
                        
                        <Button variant="ghost" className="text-ivf-orange hover:bg-ivf-orange/10 p-0 flex items-center">
                          Read more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`} className="block">
                <Card 
                  className="overflow-hidden border border-ivf-grey/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-ivf-orange text-white text-xs font-medium py-1 px-2 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-ivf-grey text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-ivf-dark-grey mb-2 hover:text-ivf-orange transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-ivf-grey mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="text-ivf-orange hover:bg-ivf-orange/10 p-0 flex items-center">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8 md:mt-12">
          <Link to="/blog">
            <Button 
              className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-8 py-2"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
