"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  ChevronRight, 
  Loader2, 
  Calendar, 
  ArrowLeft,
  FileText,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

interface CareerDetail {
  title: string;
  description: string;
  formatted_deadline: string;
  full_pdf_url: string | null;
}

export default function CareerDetailPage() {
  const { slug } = useParams();
  const [job, setJob] = useState<CareerDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://arimi.co.ke/thamani/fetch-career-details.php?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) setJob(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-sacco-light animate-spin" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 font-black uppercase text-xs mb-4">Position Not Found</p>
          <Link href="/careers" className="text-sacco-light font-black uppercase text-[10px] underline">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. BANNER */}
      <section className="relative h-[120px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img src="/images/mobile-banking-bg02.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Banner" />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-2">
          <h1 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter">Career <span className="text-sacco-accent">Details</span></h1>
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-widest text-[8px] bg-white/5 px-2 py-1 border border-white/10">
            <Link href="/careers">Careers</Link>
            <ChevronRight size={8} className="text-sacco-accent" />
            <span className="text-sacco-accent">Details</span>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-10 lg:py-16 px-4 lg:px-16">
        <div className="max-w-4xl mx-auto">
          
          <Link href="/careers" className="inline-flex items-center gap-2 text-sacco-light font-black uppercase text-[10px] tracking-widest mb-6 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={14} /> Back to Openings
          </Link>

          <div className="mb-8 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sacco-light font-black uppercase text-[9px] tracking-[0.2em] mb-2">
                <Briefcase size={12} /> Vacancy Detail
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tight leading-tight">
                {job.title}
              </h2>
            </div>
            
            <div className="bg-gray-50 px-5 py-4 border-l-4 border-sacco-accent flex-shrink-0">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Apply By</p>
              <div className="flex items-center gap-2 text-sacco-dark font-black text-base">
                <Calendar size={16} className="text-sacco-light" /> {job.formatted_deadline}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div 
                className="prose prose-sm max-w-none text-gray-600 leading-relaxed font-medium 
                [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-5 [&>strong]:text-sacco-dark [&>strong]:font-black"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                
                {/* PDF Button with size-only hover effect */}
                {job.full_pdf_url && (
                  <a 
                    href={job.full_pdf_url} 
                    target="_blank" 
                    className="flex items-center justify-between bg-gray-50 border-2 border-red-100 p-5 group transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div>
                      <p className="text-[9px] text-red-600 font-black uppercase tracking-widest">Official Document</p>
                      <p className="text-xs font-black text-sacco-dark uppercase group-hover:text-[13px] transition-all duration-300">Download Job Spec</p>
                    </div>
                    <FileText size={24} className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )}

                <div className="bg-sacco-dark p-6 text-white border-b-4 border-sacco-accent">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle size={18} className="text-sacco-accent" />
                    <h4 className="font-black uppercase tracking-tight text-lg">Have Questions?</h4>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed mb-6 font-medium">
                    If you have any inquiries regarding this position or the application process, please reach out to our team.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block text-center w-full bg-sacco-light text-white py-3 font-black text-[9px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}