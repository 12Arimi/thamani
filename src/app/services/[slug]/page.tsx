"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  ChevronRight, 
  Loader2 
} from "lucide-react";

interface ServiceDetail {
  id: number;
  service_name: string;
  slug: string;
  short_description: string;
  description: string;
  full_image_path: string;
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [service, setService] = useState<ServiceDetail | null>(null);
  const [otherServices, setOtherServices] = useState<ServiceDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    const fetchDetails = fetch(`https://arimi.co.ke/thamani/fetch-service-details.php?slug=${slug}`).then(res => res.json());
    const fetchAll = fetch(`https://arimi.co.ke/thamani/fetch-services.php`).then(res => res.json());

    Promise.all([fetchDetails, fetchAll])
      .then(([detailsData, allData]) => {
        if (!detailsData.error && !detailsData.message) {
          setService(detailsData);
        }
        if (Array.isArray(allData)) {
          const filtered = (allData as ServiceDetail[]).filter((s) => s.slug !== slug);
          setOtherServices(filtered);
        }
      })
      .catch((err) => console.error("Error loading service data:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-sacco-light animate-spin mb-4" />
          <p className="text-sacco-dark font-bold uppercase tracking-widest text-[9px]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 pt-[126px]">
        <h1 className="text-2xl font-black text-sacco-dark uppercase tracking-tighter">Service Not Found</h1>
        <Link href="/" className="mt-4 text-sacco-light font-bold flex items-center gap-2 uppercase text-[10px] tracking-widest">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER STRIP - Responsive horizontal padding */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="Service Details"
        />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Service <span className="text-sacco-accent">Details</span>
          </h1>
          
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[9px] bg-white/5 px-3 py-1.5 rounded-md backdrop-blur-sm border border-white/10">
            <span>Services</span>
            <ChevronRight size={10} className="text-sacco-accent" />
            <span className="text-sacco-accent">{service.service_name}</span>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION - Width utilization improved for mobile */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tighter mb-6 lg:mb-8 px-1 lg:px-0">
              {service.service_name}
            </h2>

            {/* Reduced internal padding on mobile (p-5) to maximize text area */}
            <div className="bg-white border border-gray-100 p-5 lg:p-10 rounded-2xl shadow-sm">
              <div className="bg-sacco-light/5 border-l-4 border-sacco-earth p-5 lg:p-6 mb-8">
                <p className="text-base lg:text-lg text-sacco-dark font-bold leading-relaxed italic">
                  "{service.short_description}"
                </p>
              </div>
              
              <div className="prose prose-sacco max-w-none">
                <div 
                  className="text-gray-600 leading-loose font-medium text-sm lg:text-base html-content"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 lg:p-8 rounded-2xl lg:sticky lg:top-[150px] border border-gray-100 shadow-sm">
              <h3 className="text-sacco-dark text-lg font-black uppercase tracking-tighter mb-6 border-b border-gray-100 pb-4">
                Other Services
              </h3>
              
              <div className="flex flex-col gap-3">
                {otherServices.map((s) => (
                  <Link 
                    key={s.id} 
                    href={`/services/${s.slug}`}
                    className="block text-center py-3 rounded-lg bg-sacco-light text-white font-black text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-sm active:scale-95"
                  >
                    {s.service_name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx global>{`
        .html-content ul { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1.25rem; }
        .html-content b, .html-content strong { color: #1a3c34; font-weight: 800; }
        .html-content p { margin-bottom: 1rem; }
      `}</style>
    </main>
  );
}