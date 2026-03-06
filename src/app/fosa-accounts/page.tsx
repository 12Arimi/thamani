"use client";

import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Wallet, 
  ArrowRight, 
  Loader2, 
  Plus
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  product_name: string;
  slug: string;
  short_description: string;
  description: string;
}

export default function FosaAccountsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://arimi.co.ke/thamani/fetch-fosa-accounts.php')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]"> 
      
      {/* 1. SLIM BANNER STRIP */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="FOSA Accounts"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Fosa <span className="text-sacco-accent">Accounts</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/10">
            <span>Home</span>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">FOSA Accounts</span>
          </div>
        </div>
      </section>

      {/* 2. COMPACT PRODUCT GRID */}
      <section className="py-16 px-6 lg:px-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-3">
                <Wallet size={14} />
                <span>Product Portfolio</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-sacco-dark uppercase tracking-tighter">
                Savings & Transaction Accounts
              </h2>
            </div>
            <div className="text-sacco-dark/40 text-[10px] font-black uppercase tracking-widest border-b border-gray-200 pb-2">
              Showing {products.length} Products
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-sacco-light mb-4" size={32} />
              <p className="text-gray-400 font-bold uppercase text-[9px] tracking-widest">Accessing Secure Database...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.slug}`}
                  className="group bg-white border border-gray-100 p-6 rounded-xl hover:shadow-xl hover:border-sacco-light/30 transition-all duration-300 flex flex-col relative overflow-hidden"
                >
                  {/* Subtle Numbering or Accent */}
                  <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Plus size={40} className="text-sacco-dark" />
                  </div>

                  <h3 className="text-lg font-black text-sacco-dark uppercase tracking-tight mb-2 group-hover:text-sacco-light transition-colors">
                    {product.product_name}
                  </h3>
                  
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                    {product.short_description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sacco-dark font-black uppercase text-[9px] tracking-[0.15em] opacity-60 group-hover:opacity-100 transition-all">
                    View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No accounts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. MINIMAL CTA */}
      <section className="py-12 bg-sacco-dark px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black text-white uppercase tracking-tighter">Ready to join Thamani Sacco?</h4>
            <p className="text-white/50 text-sm mt-1">Visit our Chuka HQ or any branch near you.</p>
          </div>
          <button className="bg-sacco-light text-white px-10 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all whitespace-nowrap">
            Open Account Today
          </button>
        </div>
      </section>
    </main>
  );
}