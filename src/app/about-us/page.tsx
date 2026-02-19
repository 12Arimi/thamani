"use client";

import React, { useEffect, useState } from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  History, 
  Users, 
  Briefcase,
  Quote,
  Gem,
  Zap,
  Scale,
  Award
} from 'lucide-react';

export default function AboutPage() {
  const towns = ['Chogoria', 'Marima', 'Kibugua', 'Cheera', 'Kathwana', 'Chuka (HQ)'];
  
  const board = [
    { name: "Dr. Jane Doe", role: "Chairperson", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
    { name: "John Smith", role: "Secretary", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Alice Mwangi", role: "Treasurer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" },
    { name: "David Ochieng", role: "CEO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" },
    { name: "Sarah Karoki", role: "Operations Manager", img: "https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?auto=format&fit=crop&q=80" },
  ];

  const coreValues = [
    { name: "Integrity", icon: <ShieldCheck size={20} /> },
    { name: "Transparency", icon: <Eye size={20} /> },
    { name: "Innovation", icon: <Zap size={20} /> },
    { name: "Equity", icon: <Scale size={20} /> },
    { name: "Customer Focus", icon: <Users size={20} /> },
    { name: "Excellence", icon: <Award size={20} /> }
  ];

  // Auto-slide logic for Executive Management
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPos((prev) => (prev + 1) % (board.length * 300));
    }, 30);
    return () => clearInterval(interval);
  }, [board.length]);

  return (
    <main className="bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="bg-sacco-light pt-44 pb-24 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-sacco-accent font-bold text-xs uppercase tracking-[0.4em] mb-4">Deeply Rooted, Spiritually Driven</p>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            A Legacy of <span className="text-sacco-accent">Trust</span>
          </h1>
          <div className="h-1 w-24 bg-[#ffde21]"></div>
        </div>
      </section>

      {/* 2. HISTORY */}
      <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#fdfcf7] rounded-3xl -z-10 group-hover:bg-[#ffde21]/10 transition-colors"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] relative">
              <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Sacco Growth" />
              <div className="absolute top-6 left-6 bg-sacco-light text-sacco-accent px-6 py-4 rounded-xl shadow-xl">
                <span className="block text-3xl font-black italic">1987</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Where it began</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter leading-none">
                38 Years of <br/><span className="text-[#3b93a0]">Excellence & Value</span>
              </h2>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Our Journey Through Time</p>
            </div>

            <div className="relative border-l-2 border-gray-100 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-sacco-light border-4 border-white shadow-sm"></div>
                <h4 className="font-black text-[#1a3c34] text-sm uppercase mb-2">The Foundation (1987)</h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Registered as <strong>Nithi Tea Growers Sacco Ltd</strong> on 3rd November 1987. Born from the soil, we were built to empower the tea farming community with a vision for collective growth.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#3b93a0] border-4 border-white shadow-sm"></div>
                <h4 className="font-black text-[#1a3c34] text-sm uppercase mb-2">The Expansion (2000)</h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Transitioned into <strong>FOSA (Front Office)</strong> services. This redefined our identity, allowing us to serve not just tea farmers, but all agricultural and business visionaries.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#ffde21] border-4 border-white shadow-sm"></div>
                <h4 className="font-black text-[#1a3c34] text-sm uppercase mb-2">The Modern Era (2011)</h4>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  Licensed by <strong>SASRA</strong> as a deposit-taking society. Today, Thamani stands as a premier financial institution of choice for thousands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ZIG-ZAG MISSION & VISION */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[350px] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Mission" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <Target size={40} className="text-[#1a3c34]" />
            <h3 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium italic border-l-4 border-[#ffde21] pl-6">
              To mobilize savings and provide market driven financial solutions for social economic empowerment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Eye size={40} className="text-[#3b93a0]" />
            <h3 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter">Our Vision</h3>
            <p className="text-gray-600 text-2xl font-black uppercase tracking-tight">
              To be a premier financial institution of choice.
            </p>
          </div>
          <div className="h-[350px] rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Vision" />
          </div>
        </div>
      </section>

      {/* NEW: CORE VALUES SECTION (Integrated Structure) */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Core Values" />
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <Gem size={40} className="text-[#1a3c34]" />
              <h3 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter">Core Values</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((val, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="p-3 bg-[#fdfcf7] text-[#3b93a0] rounded-xl group-hover:bg-sacco-light group-hover:text-sacco-accent transition-colors">
                    {val.icon}
                  </div>
                  <span className="text-sm font-black text-[#1a3c34] uppercase tracking-tight">{val.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREA OF OPERATION */}
      <section className="py-24 bg-sacco-light px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-black text-sacco-accent uppercase tracking-tighter">Area of Operation</h3>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {towns.map((town) => (
            <div key={town} className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-[#ffde21] transition-all duration-500 cursor-default text-center">
              <MapPin size={24} className="text-sacco-accent mx-auto mb-4 group-hover:text-[#1a3c34] group-hover:scale-110 transition-all" />
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#1a3c34]">{town}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OWNERSHIP & GOVERNANCE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="shrink-0 p-8 bg-[#fdfcf7] rounded-3xl border border-[#ffde21]/30">
            <ShieldCheck size={64} className="text-[#1a3c34]" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter">Ownership & Governance</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Thamani Sacco is owned by members who have invested shares. It is governed by a well constituted Board of Directors who are non-executive in operations and has put a skillful management team that drives the strategy implementation on daily basis.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE MANAGEMENT */}
      <section className="bg-sacco-light pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-sacco-accent text-3xl font-black uppercase tracking-tighter text-center mb-16">Executive Leadership</h3>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-75 ease-linear"
              style={{ transform: `translateX(-${scrollPos % (board.length * 300)}px)` }}
            >
              {[...board, ...board].map((member, i) => (
                <div key={i} className="min-w-[300px] h-[400px] group relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8">
                    <h4 className="text-white font-black text-xl uppercase tracking-tight">{member.name}</h4>
                    <p className="text-sacco-accent text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}