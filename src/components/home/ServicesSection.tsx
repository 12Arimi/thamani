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
  // 1. Add a mount state to prevent hydration mismatch
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

  // 2. Return null or a simple skeleton on the server
  if (!mounted) return null;

  return (
    <section className="py-16 bg-white px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-[#e8f0ed] text-[#1a3c34] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] mt-4">
            Modern Banking at Your Fingertips
          </h2>
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
          className="services-swiper !pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full p-8 bg-[#fdfcf7] border border-gray-100 rounded-2xl hover:bg-[#1a3c34] transition-all duration-500 hover:shadow-xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a3c34] shadow-sm group-hover:bg-sacco-accent transition-colors duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black text-[#1a3c34] group-hover:text-white transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link 
                  href={service.href} 
                  className="text-[10px] font-black uppercase tracking-widest text-sacco-light group-hover:text-sacco-accent flex items-center gap-2"
                >
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet-active {
          background: #1a3c34 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
        .services-swiper .swiper-pagination-bullet {
          background: #1a3c34;
        }
      `}</style>
    </section>
  );
}