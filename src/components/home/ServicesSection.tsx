"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Smartphone, 
  ArrowRight
} from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ServiceData {
  id: number;
  service_name: string;
  short_description: string;
  slug: string;
  full_image_path: string;
}

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    setMounted(true);
    fetch("https://arimi.co.ke/thamani/fetch-services.php")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setServices(data);
      })
      .catch(err => console.error("Failed to load services", err));
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-sacco-light/10 text-sacco-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-sacco-light/20">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark mt-4">
            Modern Banking at Your Fingertips
          </h2>
          <div className="w-16 h-1.5 bg-sacco-earth mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={services.length > 4}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="services-swiper !pb-16"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="group h-full bg-gray-50 border border-transparent rounded-[--radius-sacco] overflow-hidden hover:bg-sacco-light transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={service.full_image_path} 
                    alt={service.service_name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-sacco-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -bottom-7 left-8 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-sacco-dark shadow-lg group-hover:bg-sacco-accent group-hover:text-sacco-light transition-all duration-500 z-10">
                    <Smartphone className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 pt-12 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-sacco-dark group-hover:text-white transition-colors mb-3">
                    {service.service_name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors leading-relaxed mb-8 text-sm">
                    {service.short_description}
                  </p>
                  
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-xs font-black uppercase tracking-widest text-sacco-light group-hover:text-sacco-accent flex items-center gap-2 mt-auto"
                  >
                    Explore More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet-active {
          background: var(--color-sacco-light) !important;
          width: 24px !important;
          border-radius: 6px !important;
        }
        .services-swiper .swiper-pagination-bullet {
          background: var(--color-sacco-light);
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
}