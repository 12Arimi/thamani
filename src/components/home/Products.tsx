"use client";

import React from 'react';
import { PiggyBank, Home, GraduationCap, Building2, Car, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Products() {
  const router = useRouter();
  
  const savings = [
    { title: "Ordinary Savings", rate: "Up to 6% p.a.", desc: "Flexible everyday savings with competitive interest rates.", icon: <PiggyBank className="w-5 h-5" />, href: "/savings-account" },
    { title: "Fixed Deposit", rate: "Up to 10% p.a.", desc: "Lock your savings for higher returns. Terms from 3 to 24 months.", icon: <Home className="w-5 h-5" />, href: "/fixed-deposit-account" },
    { title: "Education Savings", rate: "Up to 8% p.a.", desc: "Secure your children's future with our dedicated savings plan.", icon: <GraduationCap className="w-5 h-5" />, href: "/education-savings" },
  ];

  const loans = [
    { title: "Development Loans", rate: "From 12% p.a.", desc: "Build your dream home or invest in property with affordable financing.", icon: <Building2 className="w-5 h-5" />, href: "/bosa-products" },
    { title: "Asset Financing", rate: "From 14% p.a.", desc: "Acquire vehicles, machinery, or equipment with flexible terms.", icon: <Car className="w-5 h-5" />, href: "/fosa-product-loans" },
    { title: "Emergency Loans", rate: "From 12% p.a.", desc: "Quick access to funds when you need them most. 24hr approval.", icon: <Zap className="w-5 h-5" />, href: "/fosa-product-loans" },
  ];

  return (
    <section className="py-12 bg-[#fdfcf7] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-[#e8f0ed] text-[#1a3c34] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] mt-3">Financial Solutions for Every Need</h2>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#1a3c34] mb-6 flex items-center gap-2">
            <PiggyBank className="w-5 h-5 text-[#3b93a0]" /> Savings Accounts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savings.map((item, i) => <ProductCard key={i} {...item} actionText="View details" />)}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#1a3c34] mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#3b93a0]" /> Loan Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loans.map((item, i) => <ProductCard key={i} {...item} actionText="Apply now" />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, rate, desc, icon, actionText, href }: any) {
  const router = useRouter();
  
  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ffde21] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="flex justify-between items-start mb-4">
        <div className="bg-gray-50 p-2 rounded-lg text-[#1a3c34] group-hover:bg-[#ffde21] transition-all duration-300">{icon}</div>
        <span className="bg-[#fef3c7] text-[#92400e] text-[9px] font-bold px-2 py-1 rounded-md uppercase">{rate}</span>
      </div>
      <h4 className="font-bold text-[#1a3c34] text-sm lg:text-base mb-2">{title}</h4>
      <p className="text-gray-500 text-[11px] lg:text-xs leading-relaxed mb-4">{desc}</p>
      <div className="flex items-center gap-1 text-[#1a3c34] text-[10px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
        <span>{actionText}</span>
        <ArrowRight className="w-3 h-3 group-hover:stroke-[3px]" />
      </div>
    </div>
  );
}