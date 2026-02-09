"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  { image: "https://images.unsplash.com/photo-1600880210837-0629597a0f39?auto=format&fit=crop&q=80" },
  { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" },
  { image: "https://images.unsplash.com/photo-1573163060274-051470733f3e?auto=format&fit=crop&q=80" },
  { image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80" },
  { image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80" }
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="relative h-[85vh] lg:h-[90vh] w-full bg-sacco-light">
      <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Overlay using sacco-light at 40% opacity */}
              <div className="absolute inset-0 bg-sacco-light/40 z-10" />
              <img src={slide.image} alt="Thamani Sacco" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-40 left-0 w-full z-40 flex justify-center gap-2 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              selectedIndex === index ? "w-10 bg-sacco-accent" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-sacco-light to-transparent pt-16 pb-4 lg:pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter">35+</p>
            <p className="text-white/80 font-bold uppercase text-[9px] tracking-widest leading-tight">Years Of Experience</p>
          </div>
          <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-12">
            <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase">20,000+</p>
            <p className="text-white/80 font-bold uppercase text-[9px] tracking-widest leading-tight">Active Members</p>
          </div>
          <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-12">
            <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase">6+</p>
            <p className="text-white/80 font-bold uppercase text-[9px] tracking-widest leading-tight">Branches</p>
          </div>
        </div>
      </div>
    </section>
  );
}