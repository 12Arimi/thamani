"use client";

import React from 'react';

// Using a Named Export for flexibility in your page.tsx
export function Partners() {
  // Updated to use local paths for stability and performance
  const partners = [
    { name: "KCB Bank", logo: "/images/partners/kcb-logo.png" },
    { name: "Equity Bank", logo: "/images/partners/equity-logo.png" },
    { name: "M-Pesa", logo: "/images/partners/mpesa-logo.png" },
    { name: "Co-operative Bank", logo: "/images/partners/coop-bank-logo.png" },
    { name: "KUSCCO", logo: "/images/partners/kuscco-logo.png" },
    { name: "CIC Group", logo: "/images/partners/cic-logo.png" },
    { name: "Rabobank", logo: "/images/partners/rabobank-logo.png" },
    { name: "ABC Bank", logo: "/images/partners/abc-logo.png" },
    { name: "Tangazo Letu", logo: "/images/partners/tangazo-letu.png" },
    { name: "Centrino Technologies", logo: "/images/partners/centrino-logo.png" },
    { name: "Sky World", logo: "/images/partners/skyworld-logo.png" },
  ];

  // Duplicate for smooth infinite scroll
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-[#fdfcf7] border-t border-gray-100 overflow-hidden relative">
      {/* Dynamic Keyframes injected via standard style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-[#1a3c34] font-black text-[10px] uppercase tracking-[0.5em] opacity-50 text-center">
            Strategic Partners & Ecosystem
          </h4>
          <div className="h-[2px] w-12 bg-[#ffde21]"></div>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative group">
        {/* Left & Right Fades for professional look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-64 bg-gradient-to-r from-[#fdfcf7] to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-64 bg-gradient-to-l from-[#fdfcf7] to-transparent z-20"></div>

        <div className="marquee-container flex gap-12 lg:gap-24 items-center py-6">
          {marqueePartners.map((partner, i) => (
            <div 
              key={`${partner.name}-${i}`} 
              className="flex-shrink-0 flex items-center justify-center transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-10 lg:h-14 w-auto grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 hover:scale-110 object-contain"
                // Fallback mechanism if a local file is missing
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Optional: Text fallback for missing logos during development */}
              <span className="hidden group-hover:block ml-2 text-[10px] font-bold text-[#1a3c34] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}