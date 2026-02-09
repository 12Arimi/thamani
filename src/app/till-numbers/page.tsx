"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  TrendingUp, 
  Smartphone, 
  ArrowRightLeft, 
  FileText, 
  CheckCircle2, 
  UserCheck, 
  LayoutDashboard,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function TillNumbersPage() {
  const requirements = [
    { label: "KRA PIN", icon: <FileText size={18} /> },
    { label: "Copy of ID", icon: <UserCheck size={18} /> },
    { label: "Bank Letter", icon: <Smartphone size={18} /> },
    { label: "Business Permit", icon: <CheckCircle2 size={18} />, optional: true }
  ];

  const valueProps = [
    {
      title: "Secure Transactions",
      desc: "Reduces risk of accidental transfers by clearly distinguishing between payment destination (Till) and management.",
      icon: <ShieldCheck size={28} className="text-[#3b93a0]" />
    },
    {
      title: "Business Credibility",
      desc: "Acts as a digital identity used by lenders to assess turnover for specialized M-Pesa Business Loans.",
      icon: <TrendingUp size={28} className="text-[#ffde21]" />
    },
    {
      title: "Operational Efficiency",
      desc: "Enables quick payments for utility bills, buying goods, and selling airtime seamlessly from your business.",
      icon: <LayoutDashboard size={28} className="text-[#3b93a0]" />
    },
    {
      title: "Interoperability",
      desc: "Facilitates payments from any mobile money wallet or bank account directly into your Thamani account.",
      icon: <ArrowRightLeft size={28} className="text-[#ffde21]" />
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. HERO SECTION - REDUCED TOP MARGIN (pt-28) */}
      <section className="bg-[#1a3c34] pt-28 pb-32 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#ffde21]"></div>
              <span className="text-[#ffde21] font-bold text-[10px] uppercase tracking-[0.4em]">Merchant Services</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Till <br/> <span className="text-[#3b93a0]">Numbers.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md leading-relaxed mb-10">
              We issue till numbers to members with a KRA PIN. Professionalize your 
              collection process and link your sales directly to your Sacco account.
            </p>
            <Link 
              href="/member-portal" 
              className="inline-flex items-center gap-3 bg-[#ffde21] text-[#1a3c34] px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl group"
            >
              Get Your Till Number <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* CUSTOM TILL CARD CREATION */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md bg-[#3db149] rounded-[2rem] p-8 shadow-2xl border-4 border-white/20 transform hover:-rotate-2 transition-transform">
              <div className="bg-white rounded-xl p-4 mb-6 flex justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png" 
                  alt="Lipa Na M-Pesa" 
                  className="h-12 object-contain"
                />
              </div>
              <div className="text-center text-white mb-6">
                <p className="font-black text-xl uppercase tracking-tighter">Till Number</p>
              </div>
              <div className="grid grid-cols-6 gap-2 mb-8">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="bg-white h-16 rounded-lg flex items-center justify-center text-[#1a3c34] text-3xl font-black shadow-inner">
                    {n}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/20 pt-4 text-center">
                <p className="text-white/80 font-bold text-[10px] uppercase tracking-widest">Authorized Thamani Sacco Merchant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REQUIREMENTS & FEATURES */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Requirements Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 sticky top-32">
              <h4 className="text-[#1a3c34] font-black text-lg uppercase tracking-tighter mb-8">Application Requirements</h4>
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#fdfcf7] rounded-2xl border border-gray-100 hover:border-[#3b93a0] transition-colors">
                    <div className="text-[#3b93a0]">{req.icon}</div>
                    <span className="text-[#1a3c34] font-bold text-xs uppercase tracking-tight">
                      {req.label} {req.optional && <span className="text-[10px] text-gray-400 block tracking-normal">(Optional)</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-6 p-4 bg-[#fdfcf7] rounded-2xl w-fit group-hover:bg-[#1a3c34] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors">{prop.icon}</div>
                </div>
                <h3 className="text-xl font-black text-[#1a3c34] uppercase tracking-tight mb-4">{prop.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA FOOTER */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a3c34] rounded-[4rem] p-12 relative overflow-hidden shadow-2xl group">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-[#3b93a0] p-4 rounded-2xl mb-6">
              <Smartphone className="text-white" size={32} />
            </div>
            <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">
              Digital <span className="text-[#ffde21]">Business Management</span>
            </h3>
            <p className="text-white/50 text-sm max-w-lg mb-10">
              Apply via the Thamani Member Portal to access real-time tracking, 
              analytics, and automated Sacco deposits.
            </p>
            <Link 
              href="/member-portal" 
              className="bg-white text-[#1a3c34] px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#ffde21] transition-all flex items-center gap-3"
            >
              <ExternalLink size={16} />
              Apply via Member Portal
            </Link>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-20 -bottom-20 bg-[#3b93a0]/10 w-80 h-80 rounded-full blur-3xl group-hover:bg-[#3b93a0]/20 transition-all"></div>
          <div className="absolute -left-20 -top-20 bg-[#ffde21]/5 w-60 h-60 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}