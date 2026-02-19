"use client"; // Include this if you have any interactions or hooks

import React from "react";
import Link from "next/link"; // <--- This line fixes the error

export function AboutSection() {
  return (
    <section className="py-20 bg-white px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Consistent Section Header */}
        <div className="text-center mb-16">
          <span className="bg-sacco-light/10 text-sacco-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-sacco-light/20">
            Welcome to Thamani
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark mt-4">
            A Legacy of Trust Since 1987
          </h2>
          
          <div className="w-16 h-1.5 bg-sacco-earth mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          
          {/* Video Side (60%) */}
          <div className="w-full lg:col-span-7 relative group">
            <div className="relative aspect-video w-full overflow-hidden rounded-[--radius-sacco] shadow-2xl bg-gray-100 ring-1 ring-gray-200">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/7Y__cwHAVZ8?start=6" 
                title="Thamani Sacco Corporate Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Side (40%) */}
          <div className="w-full lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
              <p>
                <strong className="text-sacco-dark">Thamani Sacco Society Ltd</strong>, formerly Nithi Tea Growers Sacco Ltd, is a co-operative society registered on 3rd November 1987 under the Co-operative Act (CAP 12 of 1997). Our mandate remains rooted in the mobilization of savings and providing accessible credit to our members.
              </p>
              <p>
                Since opening our Front Office Services (FOSA) in 2000, we expanded our bond beyond tea growers to include all agricultural and business entrepreneurs. In October 2011, we achieved a major milestone by being licensed by <strong className="text-sacco-dark">SASRA</strong> as a deposit-taking society.
              </p>
            </div>

            <Link href="/about-us" className="inline-block mt-4">
              <button className="bg-sacco-light text-white px-8 py-3.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-md active:scale-95">
                Discover Our Story
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}