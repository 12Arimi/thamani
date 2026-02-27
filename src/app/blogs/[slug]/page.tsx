"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  ChevronRight, 
  Loader2, 
  Calendar, 
  User, 
  ArrowLeft,
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  content: string;
  category: string;
  author: string;
  formatted_date: string;
  full_image_path: string;
}

interface RecentPost {
  title: string;
  slug: string;
  formatted_date: string;
  full_image_path: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [data, setData] = useState<{post: BlogPost, recent: RecentPost[]} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual domain/API endpoint
    fetch(`https://arimi.co.ke/thamani/fetch-blog-details.php?slug=${slug}`)
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blog details:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading Article...</p>
        </div>
      </div>
    );
  }

  if (!data?.post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Article Not Found</p>
          <Link href="/blogs" className="text-sacco-light font-black uppercase text-[10px] underline">Return to News</Link>
        </div>
      </div>
    );
  }

  const { post, recent } = data;

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER STRIP (Identical to /blogs) */}
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
            <Link href="/blogs" className="hover:text-white transition-colors">News</Link>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">Article</span>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Main Article */}
          <article className="lg:col-span-8">
            {/* Back Button */}
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sacco-light font-black uppercase text-[10px] tracking-widest mb-8 hover:text-sacco-dark transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to all News
            </Link>

            {/* Meta Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-sacco-accent text-sacco-dark px-3 py-1 font-black text-[9px] uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-[9px] uppercase tracking-widest">
                <Calendar size={12} className="text-sacco-light" /> {post.formatted_date}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-black text-sacco-dark uppercase tracking-tighter mb-8 leading-[1.1]">
              {post.title}
            </h2>

            {/* CONSTRAINED COVER IMAGE (200px Height) */}
            {post.full_image_path && (
              <div className="mb-10 border-b-8 border-sacco-accent shadow-md relative w-full h-[200px] overflow-hidden bg-gray-50">
                <img 
                  src={post.full_image_path} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-100">
               <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-none border border-gray-200">
                  <User size={18} className="text-sacco-light" />
               </div>
               <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Written By</p>
                  <p className="text-sm font-black text-sacco-dark uppercase tracking-tight">{post.author}</p>
               </div>
            </div>

            {/* Main Post Content */}
            <div 
              className="prose prose-sm max-w-none text-gray-600 leading-relaxed font-medium 
              [&>p]:mb-6 [&>h3]:uppercase [&>h3]:font-black [&>h3]:text-sacco-dark [&>h3]:tracking-tighter [&>h3]:text-xl [&>h3]:mt-10 [&>h3]:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* RIGHT COLUMN: Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Recent Posts List */}
            <div>
              <h4 className="text-xs font-black text-sacco-dark uppercase tracking-[0.3em] mb-8 flex items-center gap-2 border-b-2 border-sacco-accent pb-2 w-fit">
                <Clock size={14} className="text-sacco-light" /> Recent Updates
              </h4>
              
              <div className="space-y-8">
                {recent.map((item, idx) => (
                  <Link href={`/blogs/${item.slug}`} key={idx} className="group flex gap-4 items-start">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100">
                      <img 
                        src={item.full_image_path || "/images/blogs/news-placeholder.jpg"} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        alt={item.title}
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-[11px] font-black text-sacco-dark uppercase tracking-tight leading-tight group-hover:text-sacco-light transition-colors mb-1.5">
                        {item.title}
                      </h5>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        {item.formatted_date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="sticky top-24 bg-sacco-dark p-8 rounded-none border-l-4 border-sacco-accent text-white shadow-lg">
              <h4 className="font-black uppercase tracking-tighter text-xl mb-4">
                Grow with <span className="text-sacco-accent">Thamani</span>
              </h4>
              <p className="text-[11px] text-white/60 leading-relaxed mb-6 font-medium">
                Become a member of Thamani Sacco today and unlock a world of financial possibilities.
              </p>
              <Link 
                href="/membership" 
                className="inline-flex items-center gap-2 bg-white text-sacco-dark px-6 py-3 font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-white transition-all duration-300"
              >
                Join Us <ArrowRight size={12} />
              </Link>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}