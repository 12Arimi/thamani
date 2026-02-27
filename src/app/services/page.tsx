"use client";

import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  ArrowRight,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: number;
  service_name: string;
  slug: string;
  short_description: string;
  full_image_path: string;
}

export default function ServicesListPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://arimi.co.ke/thamani/fetch-services.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setServices(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading Services...</p>
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
          alt="Our Services"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-sacco-accent">Services</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-none backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">Services</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-10">
            <LayoutGrid size={14} />
            <span>Comprehensive Solutions</span>
          </div>

          {/* Grid changed to 4 columns (lg:grid-cols-4) for smaller card sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white border border-gray-100 rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Reduced Image Height (h-32) for a more compact feel */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={service.full_image_path || "/images/service-placeholder.jpg"} 
                    alt={service.service_name}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body with tighter padding */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-black text-sacco-dark uppercase tracking-tighter mb-3 leading-tight group-hover:text-sacco-light transition-colors">
                    {service.service_name}
                  </h3>
                  
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-6 line-clamp-3 font-medium">
                    {service.short_description}
                  </p>

                  <div className="mt-auto">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="block text-center py-3 rounded-none bg-sacco-light text-white font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                    >
                      Explore <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {services.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-none">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No services currently available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}