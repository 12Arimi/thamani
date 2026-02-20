"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  Loader2, 
  Share2, 
  FileText 
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  category: string;
  product_name: string;
  short_description: string;
  description: string;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetch(`https://arimi.co.ke/thamani/fetch-product-details.php?slug=${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-sacco-light mb-4" size={40} />
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Verifying Product Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-2xl font-black text-sacco-dark uppercase">Product Not Found</h2>
        <button onClick={() => router.back()} className="mt-8 bg-sacco-dark text-white px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER STRIP (Matching other pages) */}
      <section className="relative h-[170px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent m-0 p-0">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={product.product_name}
        />
        <div className="absolute inset-0 bg-sacco-dark/40"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Product <span className="text-sacco-accent">Details</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
            <span>Products</span>
            <ChevronRight size={12} className="text-sacco-accent" />
            <span className="text-sacco-accent text-xs">{product.category}</span>
          </div>
        </div>
      </section>

      {/* 2. BACK NAVIGATION & CONTENT */}
      <section className="py-12 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => router.push('/products')}
            className="flex items-center gap-2 text-sacco-dark/40 hover:text-sacco-light transition-colors font-black uppercase text-[10px] tracking-widest mb-12"
          >
            <ChevronLeft size={16} /> See All Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT: CONTENT */}
            <div className="lg:col-span-8">
              <div className="mb-10">
                <h2 className="text-4xl lg:text-6xl font-black text-sacco-dark uppercase tracking-tighter leading-tight mb-6">
                  {product.product_name}
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-sacco-earth pl-6">
                  {product.short_description}
                </p>
              </div>

              {/* PRODUCT DESCRIPTION - HTML RENDERING */}
              <div className="mt-16 prose prose-lg max-w-none prose-headings:uppercase prose-headings:font-black prose-headings:text-sacco-dark prose-strong:text-sacco-dark prose-p:text-gray-700 prose-li:text-gray-700">
                <div 
                  dangerouslySetInnerHTML={{ __html: product.description }} 
                  className="space-y-4"
                />
              </div>
            </div>

            {/* RIGHT: SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="sticky top-[150px] space-y-6">
                <div className="bg-sacco-dark p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">Get Started</h4>
                    <p className="text-white/60 text-sm mb-8 leading-relaxed">Interested in {product.product_name}? Join Thamani Sacco today and enjoy competitive rates.</p>
                    
                    <div className="space-y-4">
                      <button className="w-full bg-sacco-accent text-sacco-dark py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                        Apply for this product
                      </button>
                      <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <Share2 size={14} /> Share
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50/50">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-sacco-light mb-6 flex items-center gap-2">
                    <FileText size={16} /> Requirements
                  </h4>
                  <ul className="space-y-4">
                    {['National ID', 'KRA Pin', 'Passport Photo', 'Membership Fee'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-black text-sacco-dark uppercase tracking-tight">
                        <CheckCircle2 size={14} className="text-sacco-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}