"use client";

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

export default function FosaLoansPage() {
  const allFosaProducts = [
    {
      title: "Milk Advances",
      image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80",
      description: "Immediate liquidity based on your frisian dairy production cycles.",
      requirements: [
        "Average 3 months production",
        "Dairy Society Certification",
        "Repayment: 03 Months",
        "Security: 3 Guarantors"
      ],
      color: "#3b93a0"
    },
    {
      title: "Coffee Improvement",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
      description: "Scale your coffee output with high-limit capital investment.",
      requirements: [
        "Max Amount: Ksh. 2,000,000",
        "Produce-based consideration",
        "Repayment: 12 Months",
        "Security: 3 Guarantors/Collateral"
      ],
      color: "#1a3c34"
    },
    {
      title: "Salary Advances",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      description: "Quick credit facilities for employees channeled through FOSA.",
      requirements: [
        "3 or 6 months salary advance",
        "Employer Recommendations",
        "Salary channeled via Sacco",
        "Security: ID & Guarantors"
      ],
      color: "#ffde21"
    },
    {
      title: "Special Crop Advances",
      image: "https://images.unsplash.com/photo-1594488310377-299e83ce9a63?auto=format&fit=crop&q=80",
      description: "Optimized funding for tea farmers during peak production seasons.",
      requirements: [
        "Max Loan: Ksh. 50,000",
        "Rate: Ksh. 10 per Kg",
        "Repayment: 03 Months",
        "Security: 2 Guarantors"
      ],
      color: "#3b93a0"
    },
    {
      title: "Mini Bonus Advances",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e40?auto=format&fit=crop&q=80",
      description: "Access your bonus funds early to manage mid-year or end-year needs.",
      requirements: [
        "Dec/June Pay Slip required",
        "Based on Mini/Main Bonus",
        "National ID Photocopy",
        "Security: 3 Guarantors"
      ],
      color: "#1a3c34"
    },
    {
      title: "Monthly Crop Advances",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
      description: "Consistent monthly cash flow support based on your tea delivery.",
      requirements: [
        "3 months tea production avg",
        "Rate: Ksh. 10 per Kg",
        "Repayment: 03 Months",
        "Security: 2 Guarantors"
      ],
      color: "#ffde21"
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. COMPACT HERO */}
      <section className="bg-[#1a3c34] pt-32 pb-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={14} className="text-[#ffde21] fill-[#ffde21]" />
              <span className="text-[#ffde21] font-bold text-[9px] uppercase tracking-[0.4em]">FOSA Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Credit <br/> <span className="text-[#3b93a0]">Advances.</span>
            </h1>
            <p className="text-white/40 text-sm max-w-lg leading-relaxed border-l border-white/10 pl-6">
              From the dairy farm to the corporate office—we provide instant liquidity 
              tailored to your production cycles and income schedules.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3b93a0]/10 -skew-x-12 transform origin-top"></div>
      </section>

      {/* 2. UNIFIED PRODUCT GRID */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allFosaProducts.map((p, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="h-60 relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-[#1a3c34]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }}></div>
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Immediate Facility</span>
                </div>
                <h3 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">{p.title}</h3>
                <p className="text-gray-500 text-xs mb-8 leading-relaxed line-clamp-2">{p.description}</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {p.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-[#3b93a0] mt-0.5 shrink-0" />
                      <span className="text-[11px] text-[#1a3c34] font-medium leading-tight">{req}</span>
                    </div>
                  ))}
                </div>
                
                {/* UPDATED CLICKABLE LINK BUTTON WITH ANIMATION */}
                <Link 
                  href="/portal" 
                  className="w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-300 flex items-center justify-center gap-2 bg-[#fdfcf7] text-[#1a3c34] border border-gray-100 hover:bg-[#1a3c34] hover:text-[#ffde21] hover:scale-[1.02] active:scale-95 group/btn"
                >
                  Apply for Advance 
                  <ChevronRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORPORATE TRUST BANNER */}
      <section className="py-20 bg-[#1a3c34] px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">Efficient <span className="text-[#ffde21]">Appraisals.</span></h2>
            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Fast tracking your production value</p>
          </div>
          <div className="flex gap-10">
            <div className="text-center">
              <TrendingUp className="text-[#3b93a0] mx-auto mb-2" />
              <p className="text-white font-black text-xl">24hrs</p>
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Processing</p>
            </div>
            <div className="text-center">
              <Zap className="text-[#ffde21] mx-auto mb-2" />
              <p className="text-white font-black text-xl">Direct</p>
              <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Disbursement</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1a3c34] uppercase tracking-tighter mb-6">Powering <span className="text-[#3b93a0]">Production.</span></h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed mb-10">
          Whether it's your monthly tea delivery or your annual salary bonus, we ensure 
          you have the liquidity to keep moving forward.
        </p>
        <Link 
          href="/portal" 
          className="inline-block bg-[#1a3c34] text-[#ffde21] px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#3b93a0] hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          Access Member Portal
        </Link>
      </section>
    </main>
  );
}