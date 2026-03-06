"use client";

import React from 'react';
import { 
  CreditCard, 
  Banknote, 
  Smartphone, 
  FileText, 
  UserPlus, 
  ShieldCheck, 
  Clock, 
  Globe 
} from 'lucide-react';

export default function ATMServicesPage() {
  const features = [
    {
      title: "Cash Withdrawals",
      desc: "Fast and secure cash access for all Thamani members.",
      icon: <Banknote className="text-[#3b93a0]" size={28} />
    },
    {
      title: "Verve Card Scheme",
      desc: "Interoperability for members of other banks using Verve.",
      icon: <Globe className="text-[#ffde21]" size={28} />
    },
    {
      title: "M-Pesa to ATM",
      desc: "Conveniently withdraw your M-Pesa funds from our machines.",
      icon: <Smartphone className="text-[#3b93a0]" size={28} />
    },
    {
      title: "Mini Statements",
      desc: "Get a quick snapshot of your recent transactions instantly.",
      icon: <FileText className="text-[#ffde21]" size={28} />
    },
    {
      title: "Account Opening",
      desc: "Begin your journey with us directly at our service points.",
      icon: <UserPlus className="text-[#3b93a0]" size={28} />
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. COMPACT HERO SECTION */}
      <section className="bg-[#1a3c34] pt-32 pb-16 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={14} className="text-[#ffde21]" />
              <span className="text-[#ffde21] font-bold text-[9px] uppercase tracking-[0.4em]">24/7 Access</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
              Your Cash, <br/> <span className="text-[#3b93a0]">Anytime.</span>
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed border-l-2 border-[#ffde21] pl-6">
              Experience the power of instant liquidity. Our ATM network is built to ensure 
              your money is always within reach, wherever you go.
            </p>
          </div>

          <div className="lg:w-1/3 relative">
             <div className="absolute inset-0 bg-[#3b93a0]/20 blur-[80px] rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80" 
               alt="Modern ATM Machine" 
               className="relative z-10 rounded-[2.5rem] border-4 border-white/10 shadow-2xl h-[400px] w-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* 2. ATM FEATURES & REQUIREMENTS */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Requirements Content */}
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-6">
              ATM <span className="text-[#3b93a0]">Services</span>
            </h2>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <h4 className="text-[#1a3c34] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                <Clock size={16} className="text-[#3b93a0]" /> Reliability Standard
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Our ATMs provide comprehensive services beyond just cash. Designed for the modern member who values time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-black text-[#1a3c34] uppercase tracking-tighter p-4 bg-[#fdfcf7] rounded-xl border border-dashed border-gray-200">
                  <CreditCard size={18} className="text-[#3b93a0]" />
                  Verve Card Accepted
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="mb-6 p-4 bg-[#fdfcf7] rounded-2xl w-fit group-hover:bg-[#1a3c34] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-[#1a3c34] uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-bold">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PROMISE BANNER */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a3c34] rounded-[4rem] p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10">
              <h3 className="text-white text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4">
                Ready to Access Your <span className="text-[#ffde21]">Money?</span>
              </h3>
              <p className="text-white/50 text-sm max-w-lg mx-auto mb-10">
                Visit any Thamani Sacco branch or partner ATM network to experience 
                hassle-free withdrawals today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                  Secure
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                  Convenient
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                  24/7 Support
                </div>
              </div>
           </div>
           {/* Visual element */}
           <CreditCard size={300} className="absolute -left-20 -bottom-20 text-white/5 -rotate-12" />
        </div>
      </section>
    </main>
  );
}