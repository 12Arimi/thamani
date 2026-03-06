"use client";

import React from 'react';
import { CheckCircle2, UserCircle2, FileText, CreditCard, TrendingUp, BadgeCheck } from 'lucide-react';

export default function SavingsPage() {
  const benefits = [
    { 
      title: "No Minimum Balance", 
      desc: "Start your journey with us without the pressure of a high opening deposit.",
      icon: <BadgeCheck size={24} />
    },
    { 
      title: "Competitive Interest", 
      desc: "Earn interest on any balance above Ksh. 2,000.",
      icon: <TrendingUp size={24} />
    },
    { 
      title: "Cheque Books", 
      desc: "Access internal and bankers cheque books for your formal transactions.",
      icon: <FileText size={24} />
    },
    { 
      title: "ATM Services", 
      desc: "Our ATM services ensure you have access to your money 24/7.",
      icon: <CreditCard size={24} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#1a3c34] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black text-white uppercase tracking-tighter">
            Savings <span className="text-[#ffde21]">Account</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">The foundation of financial freedom for every Kenyan aged 18 and above.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-[#fdfcf7] p-8 rounded-3xl border border-[#ffde21]/20">
            <h2 className="text-2xl font-black text-[#1a3c34] mb-4 flex items-center gap-2">
              <UserCircle2 /> ELIGIBILITY
            </h2>
            <p className="text-gray-600">Open to any person in Kenya who is 18 years and above.</p>
            <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-3">
              <FileText className="text-[#3b93a0]" />
              <span className="font-bold text-sm text-[#1a3c34]">REQUIREMENT: Photocopy of ID card</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#1a3c34] text-white group hover:bg-[#ffde21] transition-colors duration-300">
                <div className="text-[#ffde21] group-hover:text-[#1a3c34] mb-4">{b.icon}</div>
                <h4 className="font-bold uppercase text-sm mb-1 group-hover:text-[#1a3c34]">{b.title}</h4>
                <p className="text-white/50 text-xs group-hover:text-[#1a3c34]/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-[500px] sticky top-32">
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Savings" 
          />
        </div>
      </section>

      {/* Bottom Trust Strip */}
      <section className="bg-[#fdfcf7] py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-2 text-[#1a3c34] font-bold text-xs uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-[#3b93a0]" /> No Opening Balance
          </div>
          <div className="flex items-center gap-2 text-[#1a3c34] font-bold text-xs uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-[#3b93a0]" /> Interest from 2,000/-
          </div>
          <div className="flex items-center gap-2 text-[#1a3c34] font-bold text-xs uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-[#3b93a0]" /> ATM Available
          </div>
        </div>
      </section>
    </div>
  );
}