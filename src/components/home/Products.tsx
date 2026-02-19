"use client";

import React from 'react';
import { PiggyBank, Home, GraduationCap, Building2, Car, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Products() {
  const router = useRouter();
  
  const savings = [
    { title: "Ordinary Savings", rate: "Up to 6% p.a.", desc: "Flexible everyday savings with competitive interest rates.", icon: <PiggyBank className="w-6 h-6" />, href: "/savings-account" },
    { title: "Fixed Deposit", rate: "Up to 10% p.a.", desc: "Lock your savings for higher returns. Terms from 3 to 24 months.", icon: <Home className="w-6 h-6" />, href: "/fixed-deposit-account" },
    { title: "Education Savings", rate: "Up to 8% p.a.", desc: "Secure your children's future with our dedicated savings plan.", icon: <GraduationCap className="w-6 h-6" />, href: "/education-savings" },
  ];

  const loans = [
    { title: "Development Loans", rate: "From 12% p.a.", desc: "Build your dream home or invest in property with affordable financing.", icon: <Building2 className="w-6 h-6" />, href: "/bosa-products" },
    { title: "Asset Financing", rate: "From 14% p.a.", desc: "Acquire vehicles, machinery, or equipment with flexible terms.", icon: <Car className="w-6 h-6" />, href: "/fosa-product-loans" },
    { title: "Emergency Loans", rate: "From 12% p.a.", desc: "Quick access to funds when you need them most. 24hr approval.", icon: <Zap className="w-6 h-6" />, href: "/fosa-product-loans" },
  ];

  return (
    <section className="py-16 bg-[#fdfcf7] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Label text size set to 12px */}
          <span className="bg-[#e8f0ed] text-[#1a3c34] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Our Products
          </span>
          {/* Reverted to bold black-green heading */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] mt-4">
            Financial Solutions for Every Need
          </h2>
        </div>

        <div className="mb-12">
          {/* Reverted section titles to black-green */}
          <h3 className="text-xl lg:text-2xl font-bold text-[#1a3c34] mb-8 flex items-center gap-3">
            <PiggyBank className="w-7 h-7 text-sacco-light" /> Savings Accounts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {savings.map((item, i) => <ProductCard key={i} {...item} actionText="View details" />)}
          </div>
        </div>

        <div className="mb-12">
          {/* Reverted section titles to black-green */}
          <h3 className="text-xl lg:text-2xl font-bold text-[#1a3c34] mb-8 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-sacco-light" /> Loan Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-sacco-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div className="flex justify-between items-start mb-6">
        <div className="bg-gray-50 p-3 rounded-xl text-[#1a3c34] group-hover:bg-sacco-accent transition-all duration-300">
          {icon}
        </div>
        {/* Rate badge uses our new extracted earth-brown class */}
        <span className="bg-sacco-earth/10 text-sacco-earth text-xs font-bold px-3 py-1 rounded-md uppercase">
          {rate}
        </span>
      </div>

      {/* Card heading reverted to black-green */}
      <h4 className="font-bold text-[#1a3c34] text-lg mb-3">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
      
      <div className="flex items-center gap-2 text-[#1a3c34] text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
        <span>{actionText}</span>
        <ArrowRight className="w-4 h-4 group-hover:stroke-[3px]" />
      </div>
    </div>
  );
}