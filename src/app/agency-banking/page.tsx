"use client";

import React from 'react';
import { 
  UserPlus, 
  Store, 
  Wallet, 
  FileCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  MapPin, 
  Landmark,
  GraduationCap,
  Home,
  FileText,
  Download
} from 'lucide-react';

export default function AgencyBankingPage() {
  const agencyServices = [
    { title: "Cash Deposits", desc: "Instantly credit your FOSA account.", icon: <Wallet size={24}/> },
    { title: "School Fees", desc: "Direct payments to institution accounts.", icon: <GraduationCap size={24}/> },
    { title: "Rent Payments", desc: "Secure and verifiable rent transfers.", icon: <Home size={24}/> },
    { title: "Balance Inquiries", desc: "Real-time account status updates.", icon: <FileText size={24}/> },
    { title: "Account Opening", desc: "Onboard new members at the agency.", icon: <UserPlus size={24}/> },
    { title: "Pay Loans", desc: "Pay your installments conveniently.", icon: <Landmark size={24}/> },
    { title: "Top up Shares", desc: "Increase your stake in the Sacco.", icon: <ArrowUpRight size={24}/> }
  ];

  const agentRequirements = [
    "Registered member of Thamani SACCO",
    "One colored passport size photo",
    "KRA PIN Certificate",
    "Original Identification Document",
    "Valid Certificate of Good Conduct",
    "Valid Business License",
    "Must have an existing physical business",
    "6-month Bank or M-Pesa statement"
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. CORPORATE HERO WITH CUSTOM BACKGROUND */}
      <section className="relative bg-sacco-light pt-40 pb-32 px-6 lg:px-16 overflow-hidden">
        {/* The Requested Image with Translucent Blend */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://thamanisacco.or.ke/wp-content/uploads/2022/09/agency-bg.jpg" 
            alt="Agency Banking Background"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c34] via-[#1a3c34]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#ffde21]"></div>
            <span className="text-[#ffde21] font-bold text-[10px] uppercase tracking-[0.4em]">Strategic Partnership</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Agency <br/> <span className="text-[#3b93a0]">Banking.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed font-medium">
            Deposit, withdraw, and pay bills at any authorized Thamani Agent. 
            We are bringing professional financial services to your doorstep.
          </p>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter">
            Authorized <span className="text-[#3b93a0]">Transactions.</span>
          </h2>
          <div className="h-1 w-20 bg-[#ffde21] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyServices.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 bg-[#fdfcf7] rounded-xl flex items-center justify-center text-[#1a3c34] mb-6 group-hover:bg-sacco-light group-hover:text-[#ffde21] transition-all">
                {service.icon}
              </div>
              <h4 className="text-lg font-black text-[#1a3c34] uppercase tracking-tight mb-2">{service.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
          <div className="bg-[#3b93a0] p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white">
             <MapPin className="text-[#ffde21] mb-4 animate-bounce" size={32} />
             <p className="font-black text-[10px] uppercase tracking-[0.2em]">Find an Agent</p>
          </div>
        </div>
      </section>

      {/* 3. AGENT ONBOARDING (Requirements) */}
      <section className="py-24 bg-sacco-light rounded-[4rem] mx-4 lg:mx-10 mb-24 overflow-hidden relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-16 relative z-10">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              Become a <br/><span className="text-[#ffde21]">Thamani Agent.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Sign up today and grow your business footprint. Our agency model is 
              designed to empower local entrepreneurs while serving our members.
            </p>
            
            <div className="space-y-4">
              <p className="text-[#3b93a0] font-black text-xs uppercase tracking-[0.3em]">Next Step</p>
              <button className="flex items-center gap-4 bg-[#ffde21] text-[#1a3c34] px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl">
                <Download size={18} />
                Download Application Form
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl p-10 lg:p-12 rounded-[3rem] border border-white/10 shadow-inner">
            <h4 className="text-[#ffde21] font-black text-lg uppercase tracking-tighter mb-8 flex items-center gap-3">
              <FileCheck className="text-[#3b93a0]" /> Agent Requirements
            </h4>
            <div className="grid gap-4">
              {agentRequirements.map((req, i) => (
                <div key={i} className="flex items-center gap-4 group border-b border-white/5 pb-3">
                  <CheckCircle2 size={16} className="text-[#3b93a0] shrink-0" />
                  <span className="text-white/90 text-[13px] font-bold group-hover:text-[#ffde21] transition-colors leading-tight">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Subtle Watermark */}
        <Store size={400} className="absolute -right-20 -bottom-20 text-white/5 -rotate-12 pointer-events-none" />
      </section>
    </main>
  );
}