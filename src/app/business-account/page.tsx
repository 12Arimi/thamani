"use client";

import React from 'react';
import { 
  Briefcase, 
  ArrowRightLeft, 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  Zap, 
  ChevronRight,
  BarChart3,
  Building2
} from 'lucide-react';

export default function BusinessAccountPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. MINIMALIST CORPORATE HERO */}
      <section className="bg-[#1a3c34] pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
              <Building2 size={12} className="text-[#ffde21]" />
              <span className="text-white/80 text-[9px] font-black uppercase tracking-widest">Enterprise Banking</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Business <span className="text-[#ffde21]">Account.</span>
            </h1>
            <p className="text-white/60 text-base max-w-md leading-relaxed">
              The ultimate financial hub for your enterprise. Manage your cash flow with 
              unmatched flexibility and professional tools built for Kenyan commerce.
            </p>
          </div>
          <div className="hidden lg:block relative">
             <div className="absolute -inset-4 bg-[#ffde21]/10 blur-3xl rounded-full"></div>
             <div className="relative border border-white/10 rounded-[3rem] p-4 bg-white/5 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80" 
                  className="rounded-[2.5rem] w-full h-[400px] object-cover" 
                  alt="Business Management" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2. CORE UTILITY SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Operational Flexibility */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">Unrestricted <br/>Operations</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your business moves fast; your bank account should keep up. We provide 
                the infrastructure you need to handle high-volume trade without friction.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-[#fdfcf7] hover:border-[#3b93a0] transition-colors group">
                <div className="bg-[#1a3c34] text-white p-3 rounded-xl group-hover:bg-[#3b93a0] transition-colors">
                  <ArrowRightLeft size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest">Unlimited Access</h4>
                  <p className="text-gray-500 text-[11px]">Withdrawals can be made as many times as your business requires—no limits.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-[#fdfcf7] hover:border-[#ffde21] transition-colors group">
                <div className="bg-[#1a3c34] text-white p-3 rounded-xl group-hover:bg-[#ffde21] group-hover:text-[#1a3c34] transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1a3c34] uppercase text-xs tracking-widest">Professional Payments</h4>
                  <p className="text-gray-500 text-[11px]">Access Internal and Bankers Cheque books for formal trade and supplier settlements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Account Requirements */}
          <div className="lg:col-span-7">
            <div className="bg-[#1a3c34] rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden h-full flex flex-col justify-center">
              <BarChart3 className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
              
              <div className="grid sm:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#ffde21]">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Zero <br/> Opening Fees.</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    No minimum account opening balance. We remove the initial barriers so you can focus on trading.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#ffde21]">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Global <br/> Reach.</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Full ATM services available, ensuring you have 24/7 access to your capital at any Visa/Sacco terminal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REPLACING THE PLAIN WHITE STRIP (Now High Contrast & Textured) */}
      <section className="bg-[#1a3c34] py-20 px-6 lg:px-16 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-[#ffde21] transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black text-[#ffde21] group-hover:text-[#1a3c34]">01.</span>
              <h4 className="text-white group-hover:text-[#1a3c34] font-black uppercase text-xs tracking-widest leading-tight">Unlimited <br/>Transactions</h4>
            </div>
            <p className="text-white/40 group-hover:text-[#1a3c34]/70 text-[10px] leading-relaxed">Move your capital without restriction. We support your business velocity.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-[#3b93a0] transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black text-[#3b93a0] group-hover:text-white">02.</span>
              <h4 className="text-white group-hover:text-white font-black uppercase text-xs tracking-widest leading-tight">Full Cheque <br/>Facilities</h4>
            </div>
            <p className="text-white/40 group-hover:text-white/70 text-[10px] leading-relaxed">Access both internal and bankers cheques for guaranteed institutional trust.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black text-white group-hover:text-[#1a3c34]">03.</span>
              <h4 className="text-white group-hover:text-[#1a3c34] font-black uppercase text-xs tracking-widest leading-tight">24/7 ATM <br/>Network</h4>
            </div>
            <p className="text-white/40 group-hover:text-[#1a3c34]/70 text-[10px] leading-relaxed">Access your business funds anytime via our extensive ATM network nationwide.</p>
          </div>
        </div>
      </section>

      {/* 4. REVISED CALL TO ACTION (Business Account Focused) */}
      <section className="py-24 px-6 bg-[#fdfcf7]">
        <div className="max-w-4xl mx-auto text-center">
          <Briefcase className="mx-auto text-[#3b93a0] mb-8" size={40} />
          <h2 className="text-4xl lg:text-6xl font-black text-[#1a3c34] uppercase tracking-tighter mb-6">Elevate your <br/><span className="text-[#3b93a0]">Enterprise.</span></h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            Our business bankers are ready to help you set up an account that matches 
            the scale of your ambition. Visit any Thamani Sacco branch today.
          </p>
          <button className="bg-[#1a3c34] text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all shadow-xl group flex items-center gap-3 mx-auto">
            Open Business Account <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}