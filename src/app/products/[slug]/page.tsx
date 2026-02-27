"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ChevronRight, 
  ChevronLeft,
  Loader2, 
  ArrowRight,
  ListFilter 
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  category: string;
  product_name: string;
  slug: string;
  short_description: string;
  description: string;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      setLoading(true);
      fetch(`https://arimi.co.ke/thamani/fetch-product-details.php?slug=${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          setProduct(data);
          return fetch(`https://arimi.co.ke/thamani/fetch-products.php?category=${encodeURIComponent(data.category)}&limit=15`);
        })
        .then((res) => res.json())
        .then((data) => {
          const filtered = (data.products || []).filter((p: Product) => p.slug !== params.slug);
          setRelated(filtered);
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
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Loading Product Info...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="text-2xl font-black text-sacco-dark uppercase">Product Not Found</h2>
        <Link href="/products" className="mt-8 bg-sacco-dark text-white px-8 py-3 rounded-none font-bold uppercase text-xs tracking-widest">
          Go to Catalog
        </Link>
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

      {/* 2. CONTENT AREA */}
      <section className="py-12 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[9px] mb-12">
            <Link href="/products" className="hover:text-sacco-light transition-colors">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: DESCRIPTION */}
            <div className="lg:col-span-8">
              <div className="mb-10">
                <h2 className="text-4xl lg:text-5xl font-black text-sacco-dark uppercase tracking-tight mb-8">
                  {product.product_name}
                </h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-6">
                  {product.short_description}
                </p>
              </div>

              <div className="mt-16 prose prose-p:text-gray-600 prose-headings:text-sacco-dark prose-headings:uppercase prose-strong:text-sacco-dark max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: product.description }} 
                  className="space-y-6"
                />
              </div>
            </div>

            {/* RIGHT: COMPACT RELATED PRODUCTS LIST */}
            <div className="lg:col-span-4">
              <div className="sticky top-[150px]">
                <div className="border border-gray-100 bg-gray-50/50 p-0 rounded-none shadow-sm">
                  {/* Sidebar Header */}
                  <div className="bg-sacco-dark p-4 flex items-center gap-3">
                    <ListFilter size={16} className="text-sacco-accent" />
                    <h4 className="text-[12px] font-black text-white uppercase tracking-widest">
                      Related Products
                    </h4>
                  </div>
                  
                  {/* The List - Tight Padding & Inline Layout */}
                  <div className="divide-y divide-gray-100">
                    {related.length > 0 ? (
                      related.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-white transition-colors flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                          <h5 className="text-[11px] font-black text-sacco-dark uppercase tracking-tight leading-tight max-w-[70%]">
                            {item.product_name}
                          </h5>
                          <Link 
                            href={`/products/${item.slug}`}
                            className="inline-flex items-center gap-1 text-sacco-light font-black text-[9px] uppercase tracking-[0.15em] hover:text-sacco-dark transition-colors whitespace-nowrap"
                          >
                            Learn More <ArrowRight size={12} />
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-[10px] text-gray-400 italic">
                        No other products found.
                      </div>
                    )}
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