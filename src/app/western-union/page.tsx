"use client";

import React from 'react';
import { 
  Globe2, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  Banknote,
  ArrowRight
} from 'lucide-react';

export default function WesternUnionPage() {
  const steps = [
    {
      title: "Tracking Number (MTCN)",
      desc: "Send the tracking number (MTCN) to the recipient.",
      icon: <Send className="text-[#3b93a0]" size={24} />
    },
    {
      title: "Visit Thamani Branch",
      desc: "The recipient should visit the nearest Thamani Sacco Bank branch.",
      icon: <MapPin className="text-[#ffde21]" size={24} />
    },
    {
      title: "Complete Form",
      desc: "The recipient should complete the remittance form – available at our branches.",
      icon: <FileText className="text-[#3b93a0]" size={24} />
    },
    {
      title: "Receive Funds",
      desc: "Once verified, the recipient will receive the money (usually in local currency (Kenya shillings).",
      icon: <CheckCircle2 className="text-[#ffde21]" size={24} />
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#1a3c34] pt-28 pb-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#ffde21]"></div>
              <span className="text-[#ffde21] font-bold text-[10px] uppercase tracking-[0.4em]">Western Union Services</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Global <br/> <span className="text-[#3b93a0]">Connectivity.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-md leading-relaxed">
              Send and receive money locally or around the globe within minutes via 
              Western Union from any of our Thamani Sacco branches.
            </p>
          </div>

          {/* WESTERN UNION PARTNERSHIP STICKER - FIXED VISIBILITY */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-[#ffde21]/20 blur-3xl rounded-full group-hover:bg-[#ffde21]/30 transition-all"></div>
            <div className="relative bg-[#ffde21] p-4 rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[400px]">
              {/* Using a reliable logo source */}
              <div className="bg-black p-8 rounded-[1.2rem] flex flex-col items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Western_Union_logo.svg/1024px-Western_Union_logo.svg.png" 
                  alt="Western Union" 
                  className="w-full h-auto"
                />
                <div className="mt-4 border-t border-white/20 pt-4 w-full text-center">
                   <p className="text-[#ffde21] font-black text-lg tracking-widest uppercase italic">Money Transfer</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[#1a3c34] font-black text-[10px] uppercase tracking-[0.2em]">Authorized Thamani Sacco Agent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECEIVE MONEY SECTION - EXACT SACCO WORDING */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
            Receive money <span className="text-[#3b93a0]">via Western Union.</span>
          </h2>
          <div className="h-1 w-20 bg-[#ffde21] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group h-full">
              <div className="mb-6 p-4 bg-[#fdfcf7] rounded-2xl w-fit group-hover:bg-[#1a3c34] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">{step.icon}</div>
              </div>
              <h3 className="text-lg font-black text-[#1a3c34] uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-bold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAYOUT NOTIFICATION */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a3c34] rounded-[4rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Banknote className="text-[#ffde21] mx-auto mb-6" size={48} />
            <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">
              Instant Payouts in <span className="text-[#3b93a0]">KES</span>
            </h3>
            <p className="text-white/50 text-sm max-w-lg mx-auto mb-10 font-medium italic leading-relaxed">
              "Once verified, the recipient will receive the money (usually in local currency (Kenya shillings)."
            </p>
            <button className="bg-[#ffde21] text-[#1a3c34] px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all flex items-center gap-3 mx-auto shadow-xl">
              Locate a Thamani Branch <ArrowRight size={16} />
            </button>
          </div>
          <Globe2 size={300} className="absolute -right-20 -bottom-20 text-white/5 -rotate-12" />
        </div>
      </section>
    </main>
  );
}