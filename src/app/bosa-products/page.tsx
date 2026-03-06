"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Building2, GraduationCap, Stethoscope, Sprout, Users2, 
  ChevronRight, CheckCircle2, Landmark, Scale, Beef, 
  Droplets, HardHat, TrendingUp, Receipt, Coffee, User
} from 'lucide-react';

export default function BosaLoansPage() {
  const allBosaProducts = [
    {
      title: "Investment Loan",
      category: "Asset Growth",
      limit: "Above 4M",
      highlights: ["Deposit x3", "72 Months", "Title Deed"],
      reqs: ["Original Title Deed", "PIN Photocopy", "Valuation & Legal Fees"],
      icon: <Landmark size={24} />
    },
    {
      title: "Institution Loan",
      category: "Corporate",
      limit: "Max 10M",
      highlights: ["Deposit x4", "84 Months", "Registered Body"],
      reqs: ["Certified Minutes", "Active 1 Year", "Registration Docs"],
      icon: <Building2 size={24} />
    },
    {
      title: "Development Loan",
      category: "Strategic",
      limit: "Max 500k",
      highlights: ["Deposit x3", "48 Months", "3 Guarantors"],
      reqs: ["Collateral may be required", "General Appraisal", "Member for 6+ months"],
      icon: <HardHat size={24} />
    },
    {
      title: "Dairy Cow Financing",
      category: "Agri-Business",
      limit: "Max 150k",
      highlights: ["Deposit x4", "24 Months", "Vet Certified"],
      reqs: ["Animal must be insured", "In-calf or <3 months", "3 Guarantors"],
      icon: <Beef size={24} />
    },
    {
      title: "Group/Micro Credit",
      category: "Community",
      limit: "Min 30k",
      highlights: ["Deposit x5", "24 Months", "10-20 Members"],
      reqs: ["Ministry Registration", "Group Savings Acc", "Co-guaranteeing"],
      icon: <Users2 size={24} />
    },
    {
      title: "Wash/Irrigation Loan",
      category: "Farming",
      limit: "Based on Needs",
      highlights: ["Deposit x5", "18 Months", "Individual/Groups"],
      reqs: ["Loans >200k need collateral", "Established Farmers", "Guarantors"],
      icon: <Droplets size={24} />
    },
    {
      title: "Milk Production Loan",
      category: "Dairy Yield",
      limit: "Max 300k",
      highlights: ["3m Avg Production", "12m Period", "3 Guarantors"],
      reqs: ["Production x Rate x 12", "Active Milk Delivery", "ID Photocopy"],
      icon: <Receipt size={24} />
    },
    {
      title: "Tea Production Loan",
      category: "Crop Yield",
      limit: "Based on Bonus",
      highlights: ["Tea Bonus Slip", "12 Months", "3 Guarantors"],
      reqs: ["Proceeds via Sacco", "Certified Tea Statement", "ID Photocopy"],
      icon: <Coffee size={24} />
    },
    {
      title: "Pigs Rearing Loan",
      category: "Livestock",
      limit: "Above 200k*",
      highlights: ["Deposit x5", "6 Months", "Min 3 Pigs"],
      reqs: ["50% Subsequent increase", "Group/Guarantor security", "Add. security for >200k"],
      icon: <Sprout size={24} />
    },
    {
      title: "Personal Loan",
      category: "Employment",
      limit: "2/3 Salary Rule",
      highlights: ["Deposit x3", "24 Months", "3 Perm Employees"],
      reqs: ["Local Institution staff", "Additional collateral potential", "ID Photocopy"],
      icon: <User size={24} />
    },
    {
      title: "School Fees Loan",
      category: "Education",
      limit: "Max 200k",
      highlights: ["Deposit x3", "12 Months", "3 Guarantors"],
      reqs: ["Instant Processing", "ID Photocopy", "Member in good standing"],
      icon: <GraduationCap size={24} />
    },
    {
      title: "Emergency Loan",
      category: "Urgent Care",
      limit: "Max 200k",
      highlights: ["Deposit x3", "12 Months", "3 Guarantors"],
      reqs: ["Immediate appraisal", "ID Photocopy", "Member for 6+ months"],
      icon: <Stethoscope size={24} />
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#1a3c34] pt-40 pb-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#3b93a0]"></div>
              <span className="text-[#3b93a0] font-bold text-[10px] uppercase tracking-[0.4em]">Back Office Portfolio</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              BOSA <br/> <span className="text-[#ffde21]">Solutions.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              12 specialized credit facilities engineered for every stage of your 
              financial journey. From education to industrial investment.
            </p>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
              className="rounded-[4rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 h-[450px] w-full object-cover"
              alt="Investments"
            />
          </div>
        </div>
      </section>

      {/* 2. ALL PRODUCTS MASTER GRID */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBosaProducts.map((p, i) => (
            <div key={i} className="group bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-[#fdfcf7] text-[#1a3c34] group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all">
                  {p.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[9px] font-black uppercase text-gray-400 tracking-widest">{p.category}</span>
                  <span className="block text-sm font-black text-[#3b93a0]">{p.limit}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">{p.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.highlights.map((h, idx) => (
                  <span key={idx} className="text-[9px] font-bold bg-[#fdfcf7] text-[#1a3c34] px-2 py-1 rounded-md border border-gray-100">
                    {h}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mb-10 flex-grow border-t border-gray-50 pt-6">
                <p className="text-[#1a3c34] font-black text-[10px] uppercase tracking-widest">Key Requirements</p>
                {p.reqs.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#3b93a0] mt-0.5 shrink-0" />
                    <span className="text-xs text-[#1a3c34] font-bold leading-tight">{r}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/portal" 
                className="flex items-center justify-between w-full p-5 rounded-2xl bg-[#1a3c34] text-white hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all group/btn"
              >
                <span className="font-black uppercase text-[10px] tracking-widest">Apply Now</span>
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRUST FOOTER */}
      <section className="py-20 bg-[#1a3c34] mx-6 lg:mx-16 rounded-[4rem] mb-24 text-center px-6 relative overflow-hidden">
         <TrendingUp className="absolute -left-10 -bottom-10 text-white/5 w-64 h-64" />
         <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-4">Empowering <span className="text-[#3b93a0]">Generations.</span></h2>
         <p className="text-white/40 text-sm max-w-md mx-auto mb-10">All BOSA loans are subject to the 2/3rd salary rule and Sacco credit policy guidelines.</p>
         <Link href="/portal" className="inline-block bg-white text-[#1a3c34] px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#ffde21] transition-all shadow-xl">
           Member Portal Login
         </Link>
      </section>
    </main>
  );
}