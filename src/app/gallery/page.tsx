"use client";

import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  ArrowRight,
  Image as ImageIcon,
  Camera,
  Layers
} from 'lucide-react';
import Link from 'next/link';

interface GalleryListItem {
  id: number;
  album_name: string;
  slug: string; // Used for routing
  total_images: number;
}

export default function GalleryListPage() {
  const [galleries, setGalleries] = useState<GalleryListItem[]>([]);
  const [loading, setLoading] = useState(true);

  // API Configuration
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://arimi.co.ke/thamani';
  const API_URL = `${BASE_URL}/fetch-galleries.php`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setGalleries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gallery Fetch Error:", err);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading Archives...</p>
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
          alt="Gallery Archives"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-sacco-accent">Moments</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-none backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">Media Gallery</span>
          </div>
        </div>
      </section>

      {/* 2. GALLERY LIST SECTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-10">
            <Layers size={14} />
            <span>Photo Collections</span>
          </div>

          <div className="flex flex-col gap-4">
            {galleries.map((album) => (
              <div 
                key={album.id} 
                className="group bg-white border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-sacco-accent hover:shadow-md transition-all duration-300"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tight group-hover:text-sacco-light transition-colors mb-2">
                    {album.album_name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                      <Camera size={12} className="text-sacco-accent" />
                      Files: <span className="text-sacco-dark">{album.total_images} Images</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {/* CRITICAL CHANGE: This now points to /[slug] instead of /[id] */}
                  <Link 
                    href={`/gallery/${album.slug}`}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-sacco-light text-white font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-sm"
                  >
                    Open Album <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {galleries.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100">
              <ImageIcon className="w-8 h-8 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                No collections available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}