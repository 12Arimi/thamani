"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Smartphone, 
  Store, 
  CreditCard, 
  SmartphoneNfc, 
  Globe, 
  UserCircle, 
  Receipt,
  ArrowRight
} from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    { title: "Mobile Banking", desc: "Bank on the go via USSD *645# or our Mobile App.", icon: <Smartphone className="w-6 h-6" />, href: "/mobile-banking" },
    { title: "Agency Banking", desc: "Access Sacco services at an authorized agent near you.", icon: <Store className="w-6 h-6" />, href: "/agency-banking" },
    { title: "Paybill Services", desc: "Conveniently deposit or repay loans via Paybill 170573.", icon: <Receipt className="w-6 h-6" />, href: "/paybill-services" },
    { title: "ATM Services", desc: "24/7 access to your funds with Thamani Sacco Link cards.", icon: <CreditCard className="w-6 h-6" />, href: "/atm-services" },
    { title: "Till Numbers", desc: "Facilitate business payments with ease and security.", icon: <SmartphoneNfc className="w-6 h-6" />, href: "/till-numbers" },
    { title: "Western Union", desc: "Receive or send money globally through our branches.", icon: <Globe className="w-6 h-6" />, href: "/western-union" },
    { title: "Members Portal", desc: "Digital access to your statements and account activity.", icon: <UserCircle className="w-6 h-6" />, href: "https://members.thamanisacco.or.ke/account/login" }
  ];

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
          
          {/* UPDATED DASH: Matches the ProductsSection style precisely */}
          <div className="w-16 h-1.5 bg-sacco-earth mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
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
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full p-8 bg-gray-50 border border-transparent rounded-[--radius-sacco] hover:bg-sacco-light transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-sacco-dark shadow-sm group-hover:bg-sacco-accent group-hover:text-sacco-light transition-all duration-500 mb-8">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-sacco-dark group-hover:text-white transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <Link 
                  href={service.href} 
                  className="text-xs font-black uppercase tracking-widest text-sacco-light group-hover:text-sacco-accent flex items-center gap-2 mt-auto"
                >
                  Explore More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
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