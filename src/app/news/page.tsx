"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  Facebook, 
  Instagram, 
  ArrowUpRight, 
  Calendar, 
  MessageCircle, 
  Share2, 
  ExternalLink, 
  Zap,
  Globe,
  Mail
} from 'lucide-react';

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

export default function NewsSocialPage() {
  const [activeSocial, setActiveSocial] = useState('facebook');

  const news = [
    {
      title: "Thamani Sacco 2024 Dividend Payouts",
      excerpt: "The Board is pleased to announce a record-breaking interest on deposits for all active members.",
      date: "May 20, 2024",
      cat: "Corporate",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "New Branch Opening: Nakuru City",
        excerpt: "Expanding our footprint to better serve our members in the Rift Valley region.",
        date: "May 18, 2024",
        cat: "Expansion",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
      }
  ];

  return (
    /* Changed bg-[#f2f4f2] to a standard tailwind slate or your light theme */
    <main className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION - Uses sacco-dark */}
      <section className="bg-sacco-dark pt-28 pb-16 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {/* Uses sacco-accent (The Yellow/Gold) */}
            <div className="w-2 h-2 bg-sacco-accent rounded-full animate-ping"></div>
            <span className="text-sacco-accent font-black text-[10px] uppercase tracking-[0.4em]">Live Newsroom</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            News & <span className="opacity-80">Social Hub.</span>
          </h1>
        </div>
      </section>

      {/* 2. DUAL STREAM LAYOUT */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: OFFICIAL NEWS */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Newspaper size={18} className="text-sacco-light" />
                <h3 className="text-sacco-dark font-black uppercase text-sm tracking-widest">Official Bulletins</h3>
              </div>
              <Link href="#" className="text-[10px] font-black uppercase text-sacco-light flex items-center gap-2 hover:text-sacco-dark transition-colors">
                Archive <ArrowUpRight size={12} />
              </Link>
            </div>

            {news.map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] p-5 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-all border border-gray-100 overflow-hidden">
                <div className="md:w-1/3 h-44 md:h-auto rounded-2xl overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute top-3 left-3 bg-sacco-dark/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white text-[8px] font-black uppercase tracking-widest">{item.cat}</span>
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                    <Calendar size={12} /> {item.date}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-black text-sacco-dark uppercase tracking-tighter mb-3 leading-tight group-hover:text-sacco-light transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-5 line-clamp-2 font-medium leading-relaxed">{item.excerpt}</p>
                  <button className="w-fit flex items-center gap-3 bg-slate-100 text-sacco-dark px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest group-hover:bg-sacco-accent transition-all">
                    Read Full Story <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: SOCIAL MEDIA JUGGLER */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-sacco-dark rounded-[3.5rem] p-8 shadow-2xl relative overflow-hidden border border-white/5">
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] opacity-40">Thamani Pulse</h4>
                    <Zap size={14} className="text-sacco-accent animate-pulse" />
                  </div>
                  
                  {/* TABS */}
                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {['facebook', 'instagram', 'twitter'].map((social) => (
                        <button 
                          key={social}
                          onClick={() => setActiveSocial(social)}
                          className={`flex justify-center p-4 rounded-2xl transition-all border ${activeSocial === social ? 'bg-sacco-light text-white border-sacco-light shadow-lg scale-105' : 'bg-white/5 text-white/20 border-white/5 hover:bg-white/10'}`}
                        >
                          {social === 'facebook' && <Facebook size={18} />}
                          {social === 'instagram' && <Instagram size={18} />}
                          {social === 'twitter' && <XIcon size={18} />}
                        </button>
                    ))}
                  </div>

                  {/* FEED CONTENT */}
                  <div className="bg-white/5 rounded-[2.5rem] p-7 border border-white/10 min-h-[300px] flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sacco-light to-sacco-accent flex items-center justify-center text-sacco-dark font-black text-xs">T</div>
                        <div>
                          <p className="text-white text-[10px] font-black uppercase tracking-tight">Thamani Sacco</p>
                          <p className="text-sacco-light text-[8px] uppercase font-bold tracking-widest">Authorized Feed</p>
                        </div>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed font-medium italic">
                        {activeSocial === 'facebook' && "Celebrating a year of shared prosperity! #ThamaniGrowth"}
                        {activeSocial === 'instagram' && "Behind the scenes at our Nakuru branch! 🏙️✨ #TeamThamani"}
                        {activeSocial === 'twitter' && "Thamani Sacco will NEVER ask for your OTP or PIN over the phone. #SafeSacco"}
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
                      <div className="flex gap-4 text-white/30">
                        <MessageCircle size={14} className="hover:text-sacco-accent cursor-pointer" />
                        <Share2 size={14} className="hover:text-sacco-accent cursor-pointer" />
                      </div>
                      <Link href="#" className="flex items-center gap-2 text-sacco-accent text-[8px] font-black uppercase tracking-[0.2em] group">
                        Open {activeSocial} <ExternalLink size={10} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEWSLETTER CARD - Uses sacco-light */}
              <div className="bg-sacco-light rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <Mail className="text-sacco-accent mb-4" size={28} />
                    <h5 className="font-black uppercase text-lg tracking-tighter leading-tight mb-2">Direct <br/> Updates.</h5>
                    <div className="space-y-3">
                        <input 
                            type="email" 
                            placeholder="yourname@email.com" 
                            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white text-[10px] focus:ring-1 focus:ring-sacco-accent outline-none" 
                        />
                        <button className="w-full bg-sacco-dark text-sacco-accent py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-white hover:text-sacco-dark transition-all">
                            Subscribe Now
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}