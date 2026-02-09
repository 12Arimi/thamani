"use client";

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  Search,
  Briefcase
} from 'lucide-react';

export default function CareersPage() {
  const vacancies = [
    {
      title: "Internal Auditor",
      department: "Risk & Compliance",
      location: "Head Office",
      deadline: "June 15, 2024",
      summary: "Responsible for evaluating the effectiveness of the Sacco's risk management and governance processes."
    },
    {
      title: "ICT Support Officer",
      department: "Information Technology",
      location: "Nakuru Branch",
      deadline: "June 10, 2024",
      summary: "Ensuring high availability of Sacco systems and providing technical support to staff."
    }
  ];

  return (
    <main className="bg-[#fcfdfc] min-h-screen">
      {/* 1. COMPACT BLENDED HERO */}
      <section className="relative bg-[#1a3c34] pt-24 pb-12 px-6 lg:px-16 overflow-hidden">
        {/* Yellow Translucent Blend Layer */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffde21]/10 skew-x-[-20deg] translate-x-32 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Career <span className="text-[#ffde21]">Opportunities.</span>
            </h1>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">
              Join the Thamani Sacco Professional Team
            </p>
          </div>
          <div className="hidden md:block h-12 w-[1px] bg-white/10"></div>
          <div className="max-w-sm">
            <p className="text-white/50 text-[11px] font-medium leading-relaxed">
              We empower our staff to innovate and grow, providing a stable foundation for a fulfilling professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INCLUSIVITY STRIP - HIGHLIGHTED */}
      <section className="bg-[#ffde21] py-4 px-6 lg:px-16 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <ShieldCheck className="text-[#1a3c34] shrink-0" size={18} />
          <p className="text-[#1a3c34] font-black uppercase text-[9px] leading-tight tracking-tight">
            "This organization values integrity and inclusivity, guaranteeing that opportunities are awarded on merit alone, and persons with disabilities are strongly supported and recommended to apply."
          </p>
        </div>
      </section>

      {/* 3. VACANCIES LIST */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
          <h3 className="text-[#1a3c34] font-black text-xl uppercase tracking-tighter flex items-center gap-2">
            <Briefcase size={18} className="text-[#3b93a0]" /> 
            Active Vacancies
          </h3>
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
            <input 
              type="text" 
              placeholder="Filter roles..." 
              className="bg-white border border-gray-200 rounded-full py-2 pl-10 pr-4 text-[10px] font-bold outline-none focus:border-[#3b93a0] w-64 transition-all"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {vacancies.map((job, i) => (
            <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#ffde21] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#3b93a0] text-[8px] font-black uppercase tracking-widest">{job.department}</span>
                  <span className="text-gray-300 text-[10px]">•</span>
                  <span className="text-gray-400 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                    <Clock size={10} /> Deadline: {job.deadline}
                  </span>
                </div>
                <h4 className="text-lg font-black text-[#1a3c34] uppercase tracking-tighter group-hover:text-[#3b93a0] transition-colors">
                  {job.title}
                </h4>
                <p className="text-gray-500 text-[11px] font-medium mt-1 line-clamp-1">{job.summary}</p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-none pt-4 md:pt-0">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={12} />
                  <span className="text-[9px] font-black uppercase tracking-widest">{job.location}</span>
                </div>
                <Link href="#" className="bg-[#1a3c34] text-white p-3 rounded-xl hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* TALENT POOL MINI-SECTION */}
        <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#1a3c34] font-black text-xs uppercase tracking-tight">No relevant opening today?</p>
            <p className="text-gray-500 text-[10px] font-medium mt-1">Submit your CV to our database for future consideration.</p>
          </div>
          <button className="whitespace-nowrap bg-white border border-gray-200 text-[#1a3c34] px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-[#1a3c34] hover:text-white transition-all">
            General Application
          </button>
        </div>
      </section>
    </main>
  );
} 