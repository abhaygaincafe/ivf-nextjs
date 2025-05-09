"use client"
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronDown, Filter, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLoader from "./PageLoader";


export default function BlogCard({ posts }: { posts: any }) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (

    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post?.yoast_head_json?.og_image?.[0]?.url || '/placeholder.svg'}
                      alt={post.title?.rendered || "Blog post image"}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-ivf-grey text-sm mb-3">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </div>

                    <h3
                      className="text-xl font-bold text-ivf-dark-grey mb-2 hover:text-ivf-orange transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
                    ></h3>

                    <div
                      className="text-ivf-grey mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                    ></div>

                    <Button
                      variant="ghost"
                      className="text-ivf-orange hover:bg-ivf-orange/10 p-0"
                    >
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-16">
            <p className="text-ivf-grey text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </>
  );
}
