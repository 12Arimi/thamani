"use client";

import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  ArrowRight,
  Briefcase,
  Calendar,
  FileText
} from 'lucide-react';
import Link from 'next/link';

interface Career {
  id: number;
  title: string;
  slug: string;
  display_date: string;
  full_pdf_url: string | null;
}

export default function CareersListPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://arimi.co.ke/thamani/fetch-careers.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCareers(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading careers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading Opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER STRIP */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="Careers"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Work with <span className="text-sacco-accent">Us</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-none backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">Careers</span>
          </div>
        </div>
      </section>

      {/* 2. CAREERS LIST SECTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-10">
            <Briefcase size={14} />
            <span>Open Vacancies</span>
          </div>

          <div className="flex flex-col gap-4">
            {careers.map((job) => (
              <div 
                key={job.id} 
                className="group bg-white border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:border-sacco-accent hover:shadow-md transition-all duration-300"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tight group-hover:text-sacco-light transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                      <Calendar size={12} className="text-sacco-accent" />
                      Deadline: <span className="text-sacco-dark">{job.display_date}</span>
                    </div>
                    {job.full_pdf_url && (
                      <a 
                        href={job.full_pdf_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-red-500 font-bold text-[10px] uppercase tracking-widest hover:underline"
                      >
                        <FileText size={12} />
                        View JD (PDF)
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link 
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-sacco-light text-white font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-sm"
                  >
                    View Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {careers.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No vacancies at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}