"use client";

import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Maximize2, 
  Calendar, 
  MapPin, 
  Filter,
  ChevronRight,
  PlayCircle
} from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Events', 'CSR', 'Branches', 'Members'];

  const photos = [
    { 
      title: "2024 Annual General Meeting", 
      cat: "Events", 
      date: "May 2024", 
      location: "Nairobi",
      size: "large", // This will span 2 columns
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Nakuru Branch Launch", 
      cat: "Branches", 
      date: "April 2024", 
      location: "Nakuru",
      size: "small",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Tree Planting Initiative", 
      cat: "CSR", 
      date: "March 2024", 
      location: "Kiambu",
      size: "small",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Member Education Forum", 
      cat: "Members", 
      date: "Feb 2024", 
      location: "Mombasa",
      size: "medium",
      img: "https://images.unsplash.com/photo-1524178232353-12d488fb98a3?auto=format&fit=crop&q=80&w=700" 
    },
    { 
      title: "Sacco Awards Night", 
      cat: "Events", 
      date: "Dec 2023", 
      location: "Nairobi",
      size: "small",
      img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=600" 
    },
  ];

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.cat === filter);

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. GALLERY HERO - CLEAN & HIGH CONTRAST */}
      <section className="bg-[#1a3c34] pt-28 pb-32 px-6 lg:px-16 relative overflow-hidden rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#3b93a0]"></div>
            <span className="text-[#ffde21] font-black text-[10px] uppercase tracking-[0.4em]">Visual Journey</span>
            <div className="h-[1px] w-12 bg-[#3b93a0]"></div>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Our <span className="text-[#3b93a0]">Impact.</span>
          </h1>
          
          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-[#ffde21] text-[#1a3c34] scale-110 shadow-xl' 
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Abstract background elements to break the monologue */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3b93a0] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffde21] rounded-full blur-[100px] opacity-10"></div>
        </div>
      </section>

      {/* 2. DYNAMIC MASONRY GRID */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={photo.img} 
                alt={photo.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#ffde21] text-[#1a3c34] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">
                      {photo.cat}
                    </span>
                  </div>
                  <h4 className="text-white font-black uppercase text-lg leading-tight mb-2 tracking-tighter">
                    {photo.title}
                  </h4>
                  <div className="flex items-center justify-between text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {photo.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={12}/> {photo.location}</span>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full hover:bg-[#ffde21] hover:text-[#1a3c34] transition-colors">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. VIDEO SHOWCASE CTA */}
        <div className="mt-20 bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="lg:w-1/2 z-10">
            <h3 className="text-[#1a3c34] text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              Watch Our <span className="text-[#3b93a0]">Success Stories.</span>
            </h3>
            <p className="text-gray-500 text-sm font-medium mb-8 max-w-md">
              Beyond photos, our video documentaries capture the real voices of members whose lives have been transformed through Thamani Sacco.
            </p>
            <button className="flex items-center gap-4 bg-[#1a3c34] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all group">
              Explore Video Vault <PlayCircle size={18} className="group-hover:scale-125 transition-transform" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video group">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <PlayCircle size={40} className="text-[#ffde21]" />
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#3b93a0]/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}