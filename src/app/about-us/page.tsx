"use client";

import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Gem,
  CheckCircle2,
  ChevronRight,
  History, // Added missing import
  Building2 // Added missing import
} from 'lucide-react';

export default function AboutPage() {
  // Fixed: Towns is now an array of strings to match your data
  const towns = ['Chogoria', 'Marima', 'Kibugua', 'Cheera', 'Kathwana', 'Chuka (HQ)'];
  
  const coreValues = [
    "Professionalism", "Integrity", "Customer Focus", 
    "Teamwork", "Excellency", "Creativity and Innovativeness"
  ];

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]"> 
      
      {/* 1. SLIM BANNER STRIP */}
      <section className="relative h-[170px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent m-0 p-0">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Thamani Sacco Banner"
        />
        <div className="absolute inset-0 bg-sacco-dark/40"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            About <span className="text-sacco-accent">Us</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
            <span>Home</span>
            <ChevronRight size={12} className="text-sacco-accent" />
            <span className="text-sacco-accent text-xs">About Us</span>
          </div>
        </div>
      </section>
      
      {/* 2. HISTORY & DESCRIPTION */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-xs">
              <History size={16} />
              <span>Our Heritage</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tighter">
              Thamani Sacco Society Ltd
            </h2>
            <div className="w-16 h-1.5 bg-sacco-earth rounded-full"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Formerly <strong className="text-sacco-dark font-black">Nithi Tea Growers Sacco Ltd</strong>, we are a co-operative society registered under the Co-operative Act CAP 12 of 1997. Our mandate is rooted in the mobilization of members&apos; savings and providing accessible credit. The society was officially registered on <span className="font-bold text-sacco-dark">3rd November 1987</span>.
              </p>
              <p>
                We operated back-office activities until September 2000, when we opened our <strong>Front Office (FOSA)</strong> services. At this turning point, we expanded our common bond beyond tea growers to include people from all agricultural undertakings and business enterprises. 
              </p>
              <div className="p-5 bg-sacco-mist/50 border-l-4 border-sacco-light rounded-r-xl italic font-medium text-sacco-dark text-sm lg:text-base">
                In October 2011, Thamani Sacco achieved a major milestone, being licensed by SASRA as a deposit-taking society.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
              <img 
                src="/images/members.jpg" 
                alt="Thamani Sacco Members" 
                className="rounded-xl w-full h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-sacco-dark text-white px-4 py-2 rounded-lg font-black text-xs uppercase tracking-widest">
                Since 1987
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-sacco-mist/30 py-20 px-6 lg:px-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-sm border border-sacco-light/5 relative overflow-hidden group">
            <Target size={40} className="text-sacco-light mb-6" />
            <h3 className="text-2xl font-black text-sacco-dark uppercase mb-4 tracking-tighter">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              &quot;To mobilize savings and provide market driven financial solutions for social economic empowerment and transformation of members.&quot;
            </p>
          </div>

          <div className="bg-sacco-dark p-10 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden group">
            <Eye size={40} className="text-sacco-accent mb-6" />
            <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">Our Vision</h3>
            <p className="text-white/90 leading-relaxed text-xl font-bold uppercase tracking-tight">
              To be a premier financial institution of choice.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Gem size={48} className="mx-auto text-sacco-earth mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tighter">Our Core Values</h3>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] mt-2 font-bold">The Thamani Standards</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="flex items-center gap-5 p-8 bg-sacco-mist/20 border border-transparent rounded-2xl hover:border-sacco-light hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-10 h-10 rounded-full bg-sacco-light/10 flex items-center justify-center group-hover:bg-sacco-light">
                  <CheckCircle2 size={20} className="text-sacco-light group-hover:text-white" />
                </div>
                <span className="font-black text-sacco-dark uppercase text-sm tracking-widest">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREA OF OPERATION */}
      <section className="py-24 bg-sacco-dark px-6 lg:px-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <Building2 size={40} className="text-sacco-accent mb-4" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Area of Operation</h3>
            <div className="w-20 h-1 bg-sacco-accent mt-4"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {towns.map((town) => (
              <div key={town} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center group hover:bg-sacco-accent transition-all duration-300">
                <MapPin size={28} className="text-sacco-accent mx-auto mb-4 group-hover:text-sacco-dark transition-transform group-hover:scale-110" />
                <p className="text-[11px] font-black uppercase tracking-widest leading-tight group-hover:text-sacco-dark">{town}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 mt-16 text-xs uppercase tracking-[0.3em] font-bold italic">
            Headquarters: Chuka | Mobile Office: Chuka Town Center
          </p>
        </div>
      </section>

      {/* 6. OWNERSHIP & GOVERNANCE */}
      <section className="py-28 px-6 lg:px-16 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="relative inline-block">
             <ShieldCheck size={72} className="text-sacco-dark mx-auto" />
             <div className="absolute -top-2 -right-2 w-6 h-6 bg-sacco-accent rounded-full border-4 border-white"></div>
          </div>
          <h3 className="text-4xl font-black text-sacco-dark uppercase tracking-tighter">Ownership & Governance</h3>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Thamani Sacco is owned by members who have invested shares. It is governed by a well-constituted <span className="font-bold text-sacco-dark">Board of Directors</span> who are non-executive in operations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our leadership has established a <span className="font-bold text-sacco-dark">skillful management team</span> that drives strategy implementation on a daily basis to ensure consistent growth and member satisfaction.
            </p>
          </div>
          
          <button className="bg-sacco-light text-white px-14 py-5 rounded-xl font-black text-xs uppercase tracking-[0.25em] hover:bg-sacco-accent hover:text-sacco-dark transition-all shadow-xl active:scale-95">
            Discover Our Governance
          </button>
        </div>
      </section>
    </main>
  );
}