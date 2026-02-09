"use client";

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function News() {
  const announcements = [
    {
      category: "AGM Notice",
      date: "February 10, 2026",
      title: "Annual General Meeting 2026",
      desc: "We invite all members to our 26th AGM scheduled for March 15, 2026 at Safari Park Hotel, Nairobi.",
    },
    {
      category: "Expansion",
      date: "February 5, 2026",
      title: "New Branch Opening in Kisumu",
      desc: "We're excited to announce the opening of our 13th branch in Kisumu, expanding our services to the lakeside region.",
    },
    {
      category: "Financial",
      date: "January 28, 2026",
      title: "Dividend Declaration: 15% for FY 2025",
      desc: "The Board is pleased to announce a dividend rate of 15% for the financial year ending December 2025.",
    }
  ];

  return (
    <section className="py-10 lg:py-12 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with View All Button */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] font-serif tracking-tight">
              Latest Announcements
            </h2>
          </div>
          <button className="flex items-center gap-2 border-2 border-[#1a3c34] text-[#1a3c34] px-6 py-2 rounded-lg font-bold text-xs hover:bg-[#1a3c34] hover:text-white transition-all duration-300">
            View All News <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {announcements.map((news, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-2">
              {/* Top Accent Bar */}
              <div className="h-1.5 w-full bg-[#1a3c34] opacity-80" />
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-[#fdfcf7] text-[#1a3c34] text-[10px] font-bold px-3 py-1 rounded-full border border-gray-100">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-medium">{news.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1a3c34] mb-4 leading-snug group-hover:text-[#1a3c34] transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {news.desc}
                </p>

                <button className="flex items-center gap-2 text-[#1a3c34] font-bold text-xs group/btn w-fit">
                  <span className="border-b-2 border-transparent group-hover/btn:border-[#ffde21] transition-all">Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}