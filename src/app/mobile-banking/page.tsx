"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  Hash, 
  Download, 
  Zap, 
  ShieldCheck, 
  RefreshCcw,
  Banknote,
  ChevronRight
} from 'lucide-react';

export default function MobileBankingPage() {
  const bankingServices = [
    {
      category: "Enquiries",
      icon: <ShieldCheck size={24} />,
      items: ["Balance Enquiry", "Mini Statement", "Loan Balance", "Share Balance"]
    },
    {
      category: "Transactions",
      icon: <RefreshCcw size={24} />,
      items: [
        "Deposit & Withdraw", 
        "Buy Airtime", 
        "Inter Account Transfer", 
        "Pay Utilities (DSTV, WATER, KPLC)", 
        "FOSA to Bank", 
        "Float Purchase"
      ]
    },
    {
      category: "Loans",
      icon: <Banknote size={24} />,
      items: ["Check Eligibility", "Apply Loans", "Repay Loans", "My Loans"]
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen font-sans">
      {/* 1. COMPACT HERO SECTION */}
      <section className="bg-[#1a3c34] pt-32 pb-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={14} className="text-[#ffde21] fill-[#ffde21]" />
            <span className="text-[#ffde21] font-bold text-[9px] uppercase tracking-[0.4em]">Digital Banking</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
            Banking at <br/> Your <span className="text-[#3b93a0]">Fingertips.</span>
          </h1>
          <p className="text-white/40 text-sm max-w-lg leading-relaxed border-l border-[#3b93a0] pl-6">
            Our platforms are programmed to bring ultimate convenience to your banking experience. 
            The best of their kind in the market.
          </p>
        </div>
      </section>

      {/* 2. PLATFORMS: DEVICE ON LEFT, SERVICES ON RIGHT */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* DEVICE MOCKUP (Left Side) */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-10 bg-[#3b93a0]/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-[#1a3c34] rounded-[4rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10 max-w-[340px] mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80" 
                className="rounded-[3.5rem] w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Thamani App Interface"
              />
            </div>
          </div>

          {/* TWO PLATFORMS (Right Side Stack) */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* USSD PLATFORM CARD */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl group hover:border-[#3b93a0] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-[#fdfcf7] rounded-2xl flex items-center justify-center text-[#1a3c34] group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all">
                  <Hash size={28} />
                </div>
                <div className="bg-[#1a3c34] text-white py-3 px-6 rounded-xl font-black text-xl tracking-widest shadow-lg">
                  *645#
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-2">Short Code Platform</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Access your account instantly from any mobile device, even without an internet connection. 
                Reliable banking for every member.
              </p>
            </div>

            {/* MOBILE APP CARD */}
            <div className="bg-[#1a3c34] p-10 rounded-[3rem] shadow-2xl text-white group relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <div className="w-14 h-14 bg-[#3b93a0] rounded-2xl flex items-center justify-center text-white mb-6">
                      <Smartphone size={28} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Mobile Application</h3>
                    <p className="text-white/50 text-xs max-w-[280px] leading-relaxed">
                      Available on Google Play Store. Designed for high-speed transactions 
                      and enterprise-grade security.
                    </p>
                 </div>
                 <Link 
                    href="https://play.google.com/store/apps/details?id=com.thamanisacco" 
                    target="_blank" 
                    className="shrink-0"
                 >
                  <img 
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_104,h_142/https://thamanisacco.or.ke/wp-content/uploads/2022/05/get-it-on-google-play.png" 
                    alt="Get it on Google Play"
                    className="h-14 hover:scale-105 transition-transform"
                  />
                </Link>
               </div>
               {/* Decorative Background Icon */}
               <Smartphone size={150} className="absolute -right-10 -bottom-10 text-white/5 -rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED SERVICES GRID (Banking Without Limits) */}
      <section className="py-24 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Banking Without <span className="text-[#3b93a0]">Limits.</span>
            </h2>
            <div className="h-1 w-20 bg-[#ffde21] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bankingServices.map((service, i) => (
              <div 
                key={i} 
                className="bg-[#fdfcf7] p-10 rounded-[2.5rem] border border-gray-50 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-[#1a3c34] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-[#1a3c34] uppercase mb-6 tracking-tight border-b border-[#1a3c34]/10 pb-4">
                  {service.category}
                </h4>
                <ul className="space-y-4 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] text-gray-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3b93a0]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD FORM SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#ffde21] rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">Registration Form</h3>
            <p className="text-[#1a3c34]/70 text-sm font-black uppercase tracking-widest mb-10">
              Download and fill the application form below to activate your mobile banking
            </p>
            <Link 
              href="https://thamanisacco.or.ke/wp-content/uploads/2022/08/M-Banking-Sacco-members-application-form-2016-2.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#1a3c34] text-white px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#3b93a0] transition-all"
            >
              <Download size={18} />
              Download M-Banking Form (PDF)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}