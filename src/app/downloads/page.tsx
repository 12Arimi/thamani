"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Users, 
  Briefcase, 
  TrendingUp,
  FileCheck,
  ChevronRight,
  Info
} from 'lucide-react';

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Membership", icon: <Users size={18} />, count: 12 },
    { name: "Loans", icon: <TrendingUp size={18} />, count: 8 },
    { name: "Corporate", icon: <Briefcase size={18} />, count: 5 },
    { name: "FOSA/BOSA", icon: <FileCheck size={18} />, count: 10 },
  ];

  const files = [
    { title: "Individual Membership Form", cat: "Membership", size: "1.2 MB", version: "v2.1" },
    { title: "Corporate Membership Form", cat: "Membership", size: "1.4 MB", version: "v1.0" },
    { title: "FOSA Loan Application Form", cat: "Loans", size: "2.1 MB", version: "v4.2" },
    { title: "BOSA Development Loan Form", cat: "Loans", size: "1.9 MB", version: "v3.1" },
    { title: "Thamani Junior Account Opening", cat: "FOSA/BOSA", size: "850 KB", version: "v1.1" },
    { title: "Strategic Plan 2024-2028", cat: "Corporate", size: "4.5 MB", version: "Final" },
    { title: "Dividend Payment Form", cat: "Corporate", size: "600 KB", version: "2024" },
  ];

  return (
    <main className="bg-[#f2f4f2] min-h-screen font-sans">
      {/* 1. SPLIT HERO SECTION */}
      <section className="relative bg-[#1a3c34] min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#3b93a0] hidden lg:block skew-x-[-12deg] translate-x-20 shadow-2xl"></div>
        
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-12">
          <div className="pt-20 pb-12">
            <div className="bg-[#ffde21] text-[#1a3c34] font-black text-[10px] uppercase tracking-[0.3em] px-3 py-1 w-fit rounded mb-6">
              Official Archives
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              The <span className="text-[#3b93a0]">Vault</span>
            </h1>
            <p className="text-white/50 text-sm font-medium max-w-sm border-l border-white/20 pl-4">
              Secure access to Thamani Sacco's compliance documents and membership resources.
            </p>
          </div>
          
          <div className="flex flex-col justify-center lg:items-end pb-12 lg:pb-0">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3b93a0]" size={20} />
                <input 
                  type="text"
                  placeholder="Quick search documents..."
                  className="w-full bg-transparent border-none py-4 pl-12 pr-6 text-white placeholder:text-white/30 focus:ring-0 font-bold"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DASHBOARD BODY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 -mt-10 pb-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: MINIMALIST SIDEBAR */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-[#1a3c34] font-black text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <Info size={14} className="text-[#3b93a0]" /> Categories
              </h4>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button key={cat.name} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#f2f4f2] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-[#1a3c34]">{cat.icon}</div>
                      <span className="text-gray-500 group-hover:text-[#1a3c34] font-bold text-xs uppercase">{cat.name}</span>
                    </div>
                    <span className="bg-gray-100 text-gray-400 text-[9px] px-2 py-1 rounded-md font-bold">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: TACTILE LIST VIEW */}
          <div className="lg:col-span-9">
            <div className="space-y-4">
              {files.filter(f => f.title.toLowerCase().includes(searchTerm.toLowerCase())).map((file, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 bg-[#1a3c34]/5 rounded-2xl flex items-center justify-center text-[#1a3c34] group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#1a3c34] font-black uppercase text-sm tracking-tight">{file.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] font-bold text-[#3b93a0] uppercase">{file.cat}</span>
                        <span className="text-gray-300 text-[10px]">•</span>
                        <span className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">Size: {file.size}</span>
                        <span className="text-gray-400 text-[10px] font-medium uppercase tracking-widest hidden md:inline">Ver: {file.version}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-grow md:flex-none flex items-center justify-center gap-2 bg-[#f2f4f2] text-[#1a3c34] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#ffde21] transition-all">
                      <Download size={14} /> Download
                    </button>
                    <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-300 hover:text-[#3b93a0] transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-12 flex justify-center">
              <button className="group flex items-center gap-4 text-[#1a3c34] font-black uppercase text-xs tracking-widest border-b-2 border-[#ffde21] pb-2">
                Load More Resources
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}