"use client";

import React, { useState } from 'react';
import { 
  Smartphone, 
  Search, 
  CreditCard, 
  Info, 
  ArrowRightLeft, 
  BadgeCheck,
  ChevronRight
} from 'lucide-react';

export default function PaybillPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const keywords = [
    { code: "BA", product: "BONUS ADVANCE" },
    { code: "BB", product: "Boda Boda Deposits" },
    { code: "BD", product: "Benevolent Deposits" },
    { code: "BL", product: "Biashara Imara Loan" },
    { code: "BS", product: "Biashara Account FOSA" },
    { code: "CA", product: "Share Capital" },
    { code: "FS", product: "FOSA Deposits" },
    { code: "GD", product: "Group Deposits" },
    { code: "GL", product: "Group Loan" },
    { code: "GS", product: "Group Shares" },
    { code: "DL", product: "Development Loan" },
    { code: "DS", product: "Housing" },
    { code: "CD", product: "Coffee Development Loan" },
    { code: "EA", product: "Education Savings" },
    { code: "EL", product: "Emergency Loan" },
    { code: "FT", product: "Tea Growers Account" },
    { code: "MB", product: "Mini Bonus Advance" },
    { code: "ML", product: "Milk Loan" },
    { code: "MP", product: "Milk Production" },
    { code: "NT", product: "Current Account" },
    { code: "PL", product: "Production Loan" },
    { code: "QL", product: "Quick Loan" },
    { code: "TJ", product: "Thamani Junior" },
  ];

  const filteredKeywords = keywords.filter(k => 
    k.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
    k.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#1a3c34] pt-40 pb-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck size={16} className="text-[#ffde21]" />
              <span className="text-[#ffde21] font-bold text-[10px] uppercase tracking-[0.4em]">Verified Payment Gateway</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              M-PESA <br/> <span className="text-[#3b93a0]">Paybill.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Fast, secure, and automated. Transact directly into your Thamani Sacco 
              account using our dedicated Business Number.
            </p>
          </div>
          
          {/* PAYBILL INFO CARD */}
          <div className="bg-[#3b93a0] p-10 rounded-[3rem] text-white shadow-2xl relative border border-white/10">
             <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Business Number</span>
                    <span className="text-4xl font-black tracking-tighter">170573</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Payee Name</span>
                    <span className="text-xl font-bold uppercase tracking-tighter">Thamani Sacco</span>
                </div>
             </div>
             <Smartphone size={140} className="absolute -right-10 -bottom-10 text-white/10 -rotate-12" />
          </div>
        </div>
      </section>

      {/* 2. INSTRUCTIONS SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter">How to <span className="text-[#3b93a0]">Pay.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cash Deposits */}
          <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl group transition-all hover:border-[#3b93a0]">
            <div className="w-14 h-14 bg-[#fdfcf7] rounded-2xl flex items-center justify-center text-[#1a3c34] mb-8 group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all">
              <ArrowRightLeft size={28} />
            </div>
            <h3 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-6">Depositing Cash</h3>
            <ul className="space-y-4">
              {["Go to M-PESA", "Select Lipa na M-PESA", "Select Paybill", "Enter Business No: 170573", "Enter Account: ID NUMBER (e.g. 20206396)", "Enter Amount & Send"].map((step, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                  <ChevronRight size={14} className="text-[#3b93a0]" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Loan/Shares Repayments */}
          <div className="bg-[#1a3c34] p-12 rounded-[3.5rem] shadow-xl text-white relative overflow-hidden group">
            <div className="w-14 h-14 bg-[#3b93a0] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-[#ffde21] group-hover:text-[#1a3c34] transition-all">
              <CreditCard size={28} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Loans & Shares Repayments</h3>
            <ul className="space-y-4 relative z-10">
              {["Go to M-PESA", "Select Lipa na M-PESA", "Select Paybill", "Enter Business No: 170573", "Enter Account: Keyword + ID NUMBER (e.g. SD20206396)", "Enter Amount & Send"].map((step, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm font-bold text-white/70">
                  <ChevronRight size={14} className="text-[#ffde21]" />
                  {step}
                </li>
              ))}
            </ul>
            <Smartphone size={200} className="absolute -right-20 -bottom-20 text-white/5 -rotate-12" />
          </div>
        </div>
      </section>

      {/* 3. KEYWORD DIRECTORY TABLE */}
      <section className="py-24 bg-white px-6 lg:px-16 rounded-[4rem] shadow-inner border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">Product <span className="text-[#3b93a0]">Keywords.</span></h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">Key in the Keyword in Capital letters followed by your ID NUMBER</p>
          </div>

          {/* SEARCH BAR - Fixed Font Visibility */}
          <div className="mb-12 relative max-w-md mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#3b93a0]" size={18} />
            <input 
              type="text" 
              placeholder="Search product or code..." 
              className="w-full pl-16 pr-8 py-5 rounded-2xl bg-[#fdfcf7] border border-gray-100 focus:ring-2 focus:ring-[#3b93a0] font-bold text-sm outline-none text-[#1a3c34] placeholder:text-gray-400 shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#fdfcf7] border-b border-gray-100">
                  <th className="py-6 px-8 text-[#1a3c34] font-black uppercase text-[10px] tracking-widest">Keyword</th>
                  <th className="py-6 px-8 text-[#1a3c34] font-black uppercase text-[10px] tracking-widest">Input Parameter</th>
                  <th className="py-6 px-8 text-[#1a3c34] font-black uppercase text-[10px] tracking-widest">Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredKeywords.map((item, i) => (
                  <tr key={i} className="hover:bg-[#fdfcf7] transition-colors group">
                    <td className="py-6 px-8">
                      <span className="bg-[#1a3c34] text-[#ffde21] px-4 py-1.5 rounded-lg font-black text-xs tracking-tighter shadow-sm">{item.code}</span>
                    </td>
                    <td className="py-6 px-8 font-mono text-sm font-bold text-[#3b93a0]">
                      {item.code}********
                    </td>
                    <td className="py-6 px-8 font-black text-[#1a3c34] uppercase text-[12px] tracking-tight">
                      {item.product}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 bg-[#ffde21] p-10 rounded-[3rem] shadow-xl flex gap-8 items-start relative overflow-hidden">
             <div className="bg-[#1a3c34] p-3 rounded-xl text-white relative z-10 shrink-0">
                <Info size={24} />
             </div>
             <div className="relative z-10">
                <p className="text-[#1a3c34] text-xs font-black uppercase tracking-widest mb-2">Important Note:</p>
                <p className="text-[#1a3c34]/80 text-sm font-bold leading-relaxed">
                  Always ensure there are no spaces or dashes between the Keyword and your ID Number. 
                  Example: Enter <span className="underline italic text-[#1a3c34]">CA12345678</span> immediately followed by your ID.
                </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}