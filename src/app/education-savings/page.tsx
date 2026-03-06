"use client";

import React from 'react';
import { 
  GraduationCap, 
  BookOpenCheck, 
  CalendarCheck2, 
  PiggyBank, 
  ChevronRight,
  LineChart,
  ShieldCheck,
  School
} from 'lucide-react';

export default function EducationSavingsPage() {
  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. COMPACT HERO SECTION */}
      <section className="bg-[#1a3c34] pt-32 pb-16 px-6 lg:px-16 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#ffde21]"></div>
              <span className="text-[#ffde21] font-bold text-[9px] uppercase tracking-[0.4em]">Future-Proofing Legacy</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Education <span className="text-[#ffde21]">Savings.</span>
            </h1>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-10 lg:max-w-md">
            <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light">
              Secure your child's academic journey with a structured, high-yield savings 
              vehicle designed to meet the rising costs of quality education.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE CORPORATE GRID (Requirements & Terms) */}
      <section className="relative -mt-8 px-6 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white border border-gray-100">
          
          {/* Key Parameters */}
          <div className="lg:col-span-4 bg-[#fdfcf7] p-10 flex flex-col justify-between border-r border-gray-100">
            <div className="space-y-10">
              <div>
                <h3 className="text-[#1a3c34] font-black text-[10px] uppercase tracking-[0.2em] mb-8 opacity-50">Account Terms</h3>
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-gray-400 text-[9px] font-bold uppercase mb-1">Minimum Contribution</p>
                    <p className="text-3xl font-black text-[#1a3c34]">Ksh. 500</p>
                    <p className="text-[10px] text-gray-500 font-medium">Monthly consistent savings</p>
                    <div className="h-0.5 w-8 group-hover:w-full bg-[#3b93a0] transition-all duration-500 mt-2"></div>
                  </div>
                  <div className="group">
                    <p className="text-gray-400 text-[9px] font-bold uppercase mb-1">Target Period</p>
                    <p className="text-3xl font-black text-[#1a3c34]">Flexible</p>
                    <p className="text-[10px] text-gray-500 font-medium">Tailored to school calendars</p>
                    <div className="h-0.5 w-8 group-hover:w-full bg-[#ffde21] transition-all duration-500 mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a3c34] p-5 rounded-xl border-l-4 border-[#3b93a0]">
                <p className="text-white/80 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                  Earn competitive interest on cumulative balances.
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Features */}
          <div className="lg:col-span-4 p-10 flex flex-col justify-center space-y-8">
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#1a3c34] group-hover:text-white transition-colors duration-300">
                <BookOpenCheck size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Structured Withdrawals</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">Withdrawals are aligned with school terms to ensure funds are used for their intended purpose.</p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#3b93a0] group-hover:text-white transition-colors duration-300">
                <LineChart size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Interest Accumulation</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">Unlike regular accounts, education savings attract higher interest to beat inflation.</p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="bg-[#fdfcf7] p-3 rounded-xl group-hover:bg-[#ffde21] group-hover:text-[#1a3c34] transition-colors duration-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-tight mb-1">Financial Guarantee</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">The Sacco acts as a guarantor for education-related credit based on these savings.</p>
              </div>
            </div>
          </div>

          {/* aspirational Image */}
          <div className="lg:col-span-4 relative min-h-[350px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1523050853023-8c2d27443ef8?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000" 
              alt="Education Future" 
            />
            <div className="absolute inset-0 bg-[#1a3c34]/20 mix-blend-multiply"></div>
            <div className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-xl">
               <GraduationCap className="text-[#1a3c34]" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE STRIP */}
      <section className="py-20 px-6 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-3">Academic Excellence</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              We help you build a solid financial bridge from primary education to university level and beyond.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <div className="text-center">
              <p className="text-4xl font-black text-[#3b93a0]">Ksh. 500</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em] mt-1">Starting Balance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#1a3c34]">Termly</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em] mt-1">Access Window</p>
            </div>
            <div className="text-center">
              <School className="mx-auto text-[#ffde21] mb-2" size={28} />
              <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em]">Goal Oriented</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-[#1a3c34] rounded-3xl p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
           <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              Invest in their <br/><span className="text-[#ffde21]">Endless Potential.</span>
            </h2>
            <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Open an account for your child at any branch</p>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-[#1a3c34] px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#ffde21] transition-all shadow-xl flex items-center gap-3 group">
              Get Started <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <PiggyBank className="absolute right-[-2%] bottom-[-5%] text-white/5 w-64 h-64" />
        </div>
      </section>
    </main>
  );
}