"use client";

import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { MissionVision } from '@/components/home/MissionVision';
import { Products } from '@/components/home/Products';
import { News } from '@/components/home/News';
import { Partners } from '@/components/home/Partners';

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />
      <AboutSection />
      <MissionVision />
      <Products />
      <News />
      <Partners />
    </main>
  );
}