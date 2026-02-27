"use client";

import React, { useEffect, useState } from "react";
import { 
  ChevronRight, 
  Loader2, 
  ArrowRight, 
  Filter,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  product_name: string;
  slug: string;
  short_description: string;
  category: string;
}

const CATEGORIES = ["All", "FOSA PRODUCTS (Accounts)", "FOSA PRODUCTS (Loans)", "BOSA PRODUCTS"];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (cat: string, page: number) => {
    setLoading(true);
    try {
      const res = await fetch(`https://arimi.co.ke/thamani/fetch-products.php?category=${encodeURIComponent(cat)}&page=${page}`);
      const data = await res.json();
      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(activeCategory, currentPage);
  }, [activeCategory, currentPage]);

  const handleFilterChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page on filter
  };

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      {/* 1. SLIM BANNER STRIP - Responsive horizontal padding */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="Our Products"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-sacco-accent">Products</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/10">
            <span>Home</span>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">Products</span>
          </div>
        </div>
      </section>

      {/* 2. FILTER & GRID SECTION */}
      <section className="py-12 lg:py-16 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Filter Button Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="border-l-4 border-sacco-light pl-6">
              <h2 className="text-xl font-black text-sacco-dark uppercase tracking-tight">Products List</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Showing {activeCategory}</p>
            </div>

            {/* Category Filter Selector */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 p-1 rounded-none shadow-sm">
              <div className="px-3 text-gray-400">
                <Filter size={14} />
              </div>
              <div className="flex flex-wrap gap-1">
                {/* Change this section */}
                {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-none ${
                    activeCategory === cat 
                    ? 'bg-sacco-light text-white' 
                    : 'text-sacco-dark hover:bg-gray-100'
                    }`}
                >
                    {/* Updated Line Below */}
                    {cat === 'All' ? 'View All' : cat}
                </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-sacco-light animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group bg-white border border-gray-100 rounded-none p-8 flex flex-col hover:border-sacco-light transition-all duration-300 shadow-sm min-h-[280px]">
                  <span className="text-[9px] font-bold text-sacco-light uppercase tracking-[0.2em] mb-4">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-black text-sacco-dark uppercase tracking-tight mb-4 leading-tight group-hover:text-sacco-light transition-colors">
                    {product.product_name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {product.short_description}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 bg-sacco-light text-white px-6 py-3 rounded-none font-black text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-3 border border-gray-200 rounded-none disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-[10px] font-black uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-3 border border-gray-200 rounded-none disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}