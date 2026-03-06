"use client";

import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { MissionVision } from '@/components/home/MissionVision';
import { News } from '@/components/home/News';
import { Partners } from '@/components/home/Partners';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProductsSection } from '@/components/home/ProductsSection';

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <AboutSection />
      <MissionVision />
      <ServicesSection />
      <ProductsSection />
      <News />
      <Partners />
    </main>
  );
}