"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

export function Partners() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    // Keeps the movement natural and non-elastic
    dragFree: true,
    containScroll: false 
  }, [
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false, 
      stopOnMouseEnter: true 
    })
  ]);

  const partners = [
    { name: "ABC Bank", logo: "/images/partners/abc-logo.png" },
    { name: "Centrino", logo: "/images/partners/centrino-logo.png" },
    { name: "CIC Group", logo: "/images/partners/cic-logo.png" },
    { name: "Co-operative Bank", logo: "/images/partners/coop-bank-logo.png" },
    { name: "Equity Bank", logo: "/images/partners/equity-logo.png" },
    { name: "KCB Bank", logo: "/images/partners/kcb-logo.png" },
    { name: "KUSCCO", logo: "/images/partners/kuscco-logo.png" },
    { name: "M-Pesa", logo: "/images/partners/mpesa-logo.png" },
    { name: "Rabobank", logo: "/images/partners/rabobank-logo.png" },
    { name: "SASRA", logo: "/images/partners/sasra-logo.png" },
    { name: "Skyworld", logo: "/images/partners/skyworld-logo.png" },
    { name: "Tangazo Letu", logo: "/images/partners/tangazo-letu.png" },
  ];

  return (
    <section className="py-24 bg-[#fdfcf7] border-t border-gray-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-2xl lg:text-3xl font-black text-sacco-dark mt-4">
            Strategic Partners & Regulators
          </h4>
          <div className="w-16 h-1.5 bg-sacco-earth mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Carousel Viewport - Clean appeal with no masks/fog */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing" 
          ref={emblaRef}
        >
          <div className="flex items-center min-h-[100px] md:min-h-[120px]">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="flex-none w-[160px] md:w-[240px] px-6"
              >
                <div className="flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    style={{ maxWidth: 'none' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x80?text=${partner.name}`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}