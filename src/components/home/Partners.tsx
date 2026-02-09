"use client";

import React from 'react';

export function Partners() {
  const partners = [
    { name: "Co-operative Bank", logo: "https://via.placeholder.com/200x80?text=Co-op+Bank" },
    { name: "KUSCCO", logo: "https://via.placeholder.com/200x80?text=KUSCCO" },
    { name: "CIC Group", logo: "https://via.placeholder.com/200x80?text=CIC+Insurance" },
    { name: "Rabobank", logo: "https://via.placeholder.com/200x80?text=Rabobank" },
    { name: "ABC Bank", logo: "https://via.placeholder.com/200x80?text=ABC+Bank" },
  ];

  return (
    <section className="py-12 bg-[#fdfcf7] border-t border-gray-100 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <h4 className="text-[#1a3c34] font-bold text-[10px] uppercase tracking-[0.3em] opacity-50 mb-2">
              Strategic Partners & Regulators
            </h4>
            <div className="h-0.5 w-12 bg-[#ffde21] mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20">
            {partners.map((partner, i) => (
              <div key={i} className="group transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-7 lg:h-9 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}