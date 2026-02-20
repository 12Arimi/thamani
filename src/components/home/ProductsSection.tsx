"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ProductsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const productGroups = [
    {
      title: "FOSA PRODUCTS (Accounts)",
      description: "Secure accounts for daily transactions and building your financial base.",
      items: ["Savings Account", "Fixed Deposits", "Business Account", "Education Account", "Thamani Junior"],
      link: "/fosa-accounts"
    },
    {
      title: "FOSA PRODUCTS (Loans)",
      description: "Quick advances for crop improvement, salaries, and asset financing.",
      items: ["Special Crop Advance", "Coffee Improvement", "Milk Advance", "Salary Advance", "Asset Financing"],
      link: "/fosa-loans"
    },
    {
      title: "BOSA PRODUCTS",
      description: "Development and investment loans based on your Sacco shares.",
      items: ["Development Loan", "School Fees Loan", "Biashara Loan", "Group/Micro Credit", "Emergency Loan"],
      link: "/bosa"
    }
  ];

  if (!mounted) return null;

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-sacco-light/10 text-sacco-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-sacco-light/20">
            Our Products
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-sacco-dark mt-4">
            Financial Growth Solutions
          </h2>
          <div className="w-16 h-1.5 bg-sacco-earth mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productGroups.map((group, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full bg-white border border-gray-200 rounded-[--radius-sacco] overflow-hidden hover:shadow-[0_20px_50px_rgba(46,99,43,0.08)] transition-all duration-500 group"
            >
              {/* COMPACT CARD HEADER */}
              <div className="px-8 pt-8 pb-4">
                <h3 className="text-xl font-black text-sacco-dark leading-tight border-b-2 border-sacco-light/20 pb-4">
                  {group.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <p className="text-gray-500 text-xs leading-relaxed mb-6 italic">
                  {group.description}
                </p>

                {/* Product List */}
                <div className="space-y-3.5 flex-grow">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <CheckCircle2 size={16} className="text-sacco-light flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-sacco-dark/90">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button - Updated Link & Text Only */}
                <div className="mt-8">
                  <Link 
                    href={group.link} 
                    className="block text-center py-3 rounded-lg bg-sacco-light text-white font-black text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-sm active:scale-95"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-16">
          <Link href="/products" className="text-sacco-dark/50 text-sm hover:text-sacco-light transition-colors font-medium">
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}