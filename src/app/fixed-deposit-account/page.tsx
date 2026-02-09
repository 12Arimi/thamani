"use client";

import React from 'react';
import { 
  Scale, 
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  Award
} from 'lucide-react';

export default function FixedDepositPage() {
  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. COMPACT CORPORATE HEADER (Reduced height and empty space) */}
      <section className="bg-[#1a3c34] pt-32 pb-16 px-6 lg:px-16 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#ffde21]"></div>
              <span className="text-[#ffde21] font-bold text-[9px] uppercase tracking-[0.4em]">Investment Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Fixed <span className="text-[#ffde21]">Deposit.</span>
            </h1>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-10 lg:max-w-md">
            <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light">
              Sophisticated wealth management solutions designed for members seeking 
              guaranteed, high-yield capital appreciation through disciplined investment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE OVERLAP SECTION (The "Floating" Corporate Grid) */}
      <section className="relative -mt-8 px-6 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
          
          {/* Requirement Parameters - Left Side */}
          <div className="lg:col-span-4 bg-[#fdfcf7] p-10 flex flex-col justify-between border-r border-gray-100">
            <div className="space-y-10">
              <div>
                <h3 className="text-[#1a3c34] font-black text-[10px] uppercase tracking-[0.2em] mb-8 opacity-50">Parameters</h3>
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-gray-400 text-[9px] font-bold uppercase mb-1">Minimum Investment</p>
                    <p className="text-3xl font-black text-[#1a3c34]">Ksh. 10,000</p>
                    <div className="h-0.5 w-8 group-hover:w-full bg-[#3b93a0] transition-all duration-500 mt-2"></div>
                  </div>
                  <div className="group">
                    <p className="text-gray-400 text-[9px] font-bold uppercase mb-1">Minimum Tenure</p>
                    <p className="text-3xl font-black text-[#1a3c34]">03 Months</p>
                    <div className="h-0.5 w-8 group-hover:w-full bg-[#ffde21] transition-all duration-500 mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a3c34] p-5 rounded-xl border-l-4 border-[#ffde21]">
                <p className="text-white/80 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                  Negotiable interest rates tailored to your volume.
                </p>
              </div>
            </div>
          </div>

          {/* Core Benefits - Middle */}
          <div className="lg:col-span-4 p-10 flex flex-col justify-center space-y-8">
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#3b93a0] group-hover:text-white transition-colors duration-300">
                <Scale size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Negotiable Rates</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">Personalized interest structures based on duration and capital.</p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#1a3c34] group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Capital Protection</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">SASRA-regulated security ensuring safety of your principal.</p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#3b93a0] group-hover:text-white transition-colors duration-300">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Yield Certainty</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">Fixed returns guaranteed from the date of deposit.</p>
              </div>
            </div>
          </div>

          {/* High-Impact Visual - Right Side */}
          <div className="lg:col-span-4 relative min-h-[350px]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Corporate Finance" 
            />
            <div className="absolute inset-0 bg-[#1a3c34]/30 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
               <p className="text-white font-black text-[9px] uppercase tracking-widest">Premium Banking</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE STATS BANNER */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-3">Wealth Management</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              Achieve long-term stability through disciplined investment vehicles and expert financial advisory.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <div className="text-center">
              <p className="text-4xl font-black text-[#3b93a0]">100%</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em] mt-1">Principal Security</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#1a3c34]">3mo+</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em] mt-1">Flexible Tenure</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto text-[#ffde21] mb-2" size={28} />
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em]">SASRA Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (Corporate Slab) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-[#1a3c34] rounded-3xl p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
           <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              Consult with an <br/><span className="text-[#ffde21]">Investment Officer.</span>
            </h2>
            <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">In-person negotiation available at all branches</p>
          </div>
          <div className="relative z-10">
            <button className="bg-[#ffde21] text-[#1a3c34] px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-3 group">
              Speak to us <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <TrendingUp className="absolute right-[-2%] bottom-[-5%] text-white/5 w-64 h-64" />
        </div>
      </section>
    </main>
  );
}