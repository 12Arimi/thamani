"use client";

import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  ArrowRight,
  Newspaper,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_image_path: string;
  category: string;
  author: string;
  formatted_date: string;
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://arimi.co.ke/thamani/fetch-blogs.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading News...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER STRIP */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="Media Center"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Media <span className="text-sacco-accent">Center</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-none backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">News & Updates</span>
          </div>
        </div>
      </section>

      {/* 2. BLOGS GRID SECTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-10">
            <Newspaper size={14} />
            <span>Latest From Thamani Sacco</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="group bg-white border border-gray-100 rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.full_image_path || "/images/blogs/news-placeholder.jpg"} 
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-sacco-accent text-sacco-dark px-3 py-1 font-black text-[8px] uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 text-gray-400 font-bold text-[8px] uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={10} className="text-sacco-light" /> {blog.formatted_date}</span>
                  </div>

                  <h3 className="text-lg font-black text-sacco-dark uppercase tracking-tighter mb-3 leading-tight group-hover:text-sacco-light transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-6 line-clamp-3 font-medium">
                    {blog.short_description}
                  </p>

                  <div className="mt-auto">
                    {/* CHANGED LINK TO /blogs/[slug] */}
                    <Link 
                      href={`/blogs/${blog.slug}`}
                      className="block text-center py-3 rounded-none bg-sacco-light text-white font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-none">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No news articles currently available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}