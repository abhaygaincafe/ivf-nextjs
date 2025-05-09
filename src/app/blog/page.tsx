// app/blog/page.tsx
import React from "react";
import { format } from "date-fns";
import SEOHead from "@/components/SEOHead";
// const BlogCard = dynamic(() => import('@/components/BlogCard'), {
//   loading: () => <div className="py-20 flex justify-center">
//     <PageLoader />
//   </div>,
// })
import BlogCard from "@/components/BlogCard"; // You can create this to separate logic
import { PaginationControls } from "@/components/PaginationControls"; // Optional
import { motion } from "framer-motion";
import BlogBanner from "@/components/BlogBanner";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";

// Fetch categories and posts server-side
async function fetchCategories() {
  try {
    const res = await fetch("https://rituivf.com/wp-json/wp/v2/categories?per_page=100", { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.filter((cat: any) => cat.count > 0);
  } catch (error: any) {
    console.log("error while fetch : ", error?.message)
  }
}

async function fetchBlogPosts(page: number = 1) {
  const res = await fetch(`https://rituivf.com/wp-json/wp/v2/posts?page=${page}&per_page=9`, { cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch blog posts");

  const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);
  const totalPages = Math.ceil(totalPosts / 9);
  const data = await res.json();

  return { posts: data, totalPages };
}

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {




  const currentPage = Number(searchParams.page || 1);
  console.log("currentPage: ", currentPage)
  const [categories, { posts, totalPages }] = await Promise.all([
    fetchCategories(),
    fetchBlogPosts(currentPage)
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* <SEOHead 
        title="Blog - Ritu IVF | Latest Fertility Articles and News"
        description="Stay informed with the latest insights..."
        canonicalUrl="https://rituivf.com/blog/"
        ogImage="https://rituivf.com/wp-content/uploads/fertility-blog-og-image.jpg" 
        ogType="website"
        twitterCard="summary_large_image"
        twitterCreator="@RituIVF"
        twitterSite="@RituIVF"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Ritu IVF Blog...",
          "description": "Expert insights...",
          "publisher": {
            "@type": "Organization",
            "name": "Ritu IVF",
            "logo": {
              "@type": "ImageObject",
              "url": "https://rituivf.com/wp-content/uploads/ritu-ivf-logo.png"
            }
          }
        }}
      /> */}

      <div className="relative overflow-hidden bg-ivf-orange/5 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ivf-orange/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <BlogBanner />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Our <span className="text-orange-500">Blog</span></h1>


        {/* <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div> */}
        <Suspense fallback={<div className="py-20 flex justify-center">
          <PageLoader />
        </div>}>
          <BlogCard posts={posts} />
        </Suspense>



        <PaginationControls currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
