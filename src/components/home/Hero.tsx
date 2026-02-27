"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react'; // Added for the button icon

const slides = [
  { 
    image: "/images/hero/hero1.jpg",
    title: "Empowering Your Future",
    subtitle: "Join Thamani Sacco today and experience financial growth through our tailored savings and credit solutions designed for you."
  },
  { 
    image: "/images/hero/hero2.jpg",
    title: "A Legacy of Trust",
    subtitle: "With over 35 years of experience, we provide stable and reliable financial services to help you build lasting wealth."
  },
  { 
    image: "/images/hero/hero3.jpg", 
    title: "Grow Your Business",
    subtitle: "Access affordable asset financing and development loans to take your agricultural or business venture to the next level."
  }
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
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
    <section className="relative h-[40vh] lg:h-[90vh] w-full bg-sacco-dark overflow-hidden">
      {/* Embla Slider */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 lg:px-24">
                <div className="max-w-4xl space-y-6 lg:space-y-8">
                  <h2 className="text-3xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                    {slide.title}
                  </h2>
                  
                  <p className="hidden lg:block text-xl text-white/90 max-w-2xl leading-relaxed font-medium border-l-4 border-sacco-accent pl-6">
                    {slide.subtitle}
                  </p>

                  {/* Primary Call to Action Button */}
                  <div className="pt-2 lg:pt-4">
                    <button className="bg-sacco-light text-white px-6 lg:px-10 py-3 lg:py-5 rounded-sm font-black text-xs lg:text-sm uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-2xl group">
                      Open Account 
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 lg:bottom-40 left-0 lg:left-24 z-40 flex gap-3 px-6 lg:px-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              selectedIndex === index ? "w-12 bg-sacco-accent" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Stats Bar: Large Screens Only */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-3 gap-12 border-t border-white/20 pt-8">
            <div className="flex items-center gap-5">
              <p className="text-5xl font-black text-sacco-accent tracking-tighter">35+</p>
              <p className="text-white font-bold uppercase text-xs tracking-[0.2em] leading-tight">Years Of <br/> Experience</p>
            </div>
            <div className="flex items-center gap-5 border-l border-white/10 pl-12">
              <p className="text-5xl font-black text-sacco-accent tracking-tighter uppercase">20k+</p>
              <p className="text-white font-bold uppercase text-xs tracking-[0.2em] leading-tight">Active <br/> Members</p>
            </div>
            <div className="flex items-center gap-5 border-l border-white/10 pl-12">
              <p className="text-5xl font-black text-sacco-accent tracking-tighter uppercase">6+</p>
              <p className="text-white font-bold uppercase text-xs tracking-[0.2em] leading-tight">Strategic <br/> Branches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}