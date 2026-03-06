"use client";

import React from 'react';
import { 
  Baby, 
  Sprout, 
  ShieldCheck, 
  UserCheck, 
  FileText, 
  TrendingUp, 
  ChevronRight,
  HeartHandshake,
  Milestone
} from 'lucide-react';

export default function JuniorAccountPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. ASPIRATIONAL HERO SECTION */}
      <section className="bg-[#1a3c34] pt-32 pb-20 px-6 lg:px-16 relative overflow-hidden">
        {/* Subtle decorative circles for a friendlier feel */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b93a0] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffde21]/10 border border-[#ffde21]/20 px-3 py-1 rounded-full mb-6">
              <Sprout size={12} className="text-[#ffde21]" />
              <span className="text-[#ffde21] text-[9px] font-black uppercase tracking-widest">Small Steps, Giant Leaps</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Thamani <span className="text-[#3b93a0]">Junior.</span>
            </h1>
            <p className="text-white/70 text-base max-w-md leading-relaxed font-light">
              Because the most powerful force in finance is time. Start building your child's 
              financial foundation today and watch their dreams grow with every shilling.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative p-4">
               <img 
                src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80" 
                className="rounded-[3rem] w-full h-[450px] object-cover shadow-2xl" 
                alt="Child's Future Growth" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-[200px]">
                <p className="text-[#1a3c34] font-black text-2xl tracking-tighter italic">"A legacy in the making."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE "POWER OF TIME" SECTION (The Why) */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter leading-none">
              Empowering <br/><span className="text-[#3b93a0]">Young Stars.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This account is specifically designed to improve and educate our young stars 
              on the importance of savings at an early age. Opened in the child’s name but 
              operated by you, it’s a partnership for their future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#fdfcf7] rounded-2xl border-l-4 border-[#ffde21]">
                <TrendingUp className="text-[#1a3c34] mb-3" size={24} />
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest mb-2">Interest Bearing</h4>
                <p className="text-gray-500 text-[11px]">Start earning competitive interest once the balance hits <span className="font-bold">Ksh. 1,000</span>.</p>
              </div>
              <div className="p-6 bg-[#fdfcf7] rounded-2xl border-l-4 border-[#3b93a0]">
                <ShieldCheck className="text-[#1a3c34] mb-3" size={24} />
                <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest mb-2">Child-Owned</h4>
                <p className="text-gray-500 text-[11px]">The account stays in the child's name until they reach eighteen (18) years.</p>
              </div>
            </div>
          </div>

          {/* 3. REQUIREMENTS (The How) - Corporate Card Style */}
          <div className="lg:col-span-6">
            <div className="bg-[#1a3c34] rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 text-[#ffde21]">What You'll Need</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <FileText className="text-[#ffde21]" size={28} />
                    <div>
                      <h5 className="font-black text-[10px] uppercase tracking-widest">Child's Document</h5>
                      <p className="text-white/60 text-sm">Original Birth Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <UserCheck className="text-[#3b93a0]" size={28} />
                    <div>
                      <h5 className="font-black text-[10px] uppercase tracking-widest">Guardian's Identity</h5>
                      <p className="text-white/60 text-sm">National ID Card (Parent/Guardian)</p>
                    </div>
                  </div>
                </div>
              </div>
              <Baby className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GROWTH TIMELINE (Addressing the parent's desire for long-term impact) */}
      <section className="bg-[#fdfcf7] py-20 px-6 lg:px-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter">A Lifetime of Advantage</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-[#3b93a0]">
              <span className="font-black text-xl">01.</span>
            </div>
            <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest mb-3">Early Habits</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Teach them the value of money before they start earning it.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-[#ffde21]">
              <span className="font-black text-xl">02.</span>
            </div>
            <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest mb-3">Compound Growth</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Small, consistent deposits today become significant capital by year 18.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-[#1a3c34]">
              <span className="font-black text-xl">03.</span>
            </div>
            <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest mb-3">Financial Dignity</h4>
            <p className="text-gray-500 text-xs leading-relaxed">Give them a head start on their adult life, debt-free and ready to lead.</p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a3c34] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <Milestone className="absolute -top-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
          <HeartHandshake className="mx-auto text-[#ffde21] mb-8" size={48} />
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Their Future is <br/><span className="text-[#3b93a0]">in Your Hands.</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            Opening a Thamani Junior account is a promise to your child. 
            Visit us with their birth certificate and your ID to fulfill that promise today.
          </p>
          <button className="bg-white text-[#1a3c34] px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#ffde21] transition-all shadow-xl group flex items-center gap-3 mx-auto">
            Start Their Legacy <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}