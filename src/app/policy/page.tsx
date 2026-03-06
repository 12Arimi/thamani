"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Eye, FileSearch, UserCheck, 
  Database, Mail, MapPin 
} from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "28 January 2026"; // [cite: 3]

  const sections = [
    {
      id: "introduction",
      title: "1.0 Introduction",
      icon: <ShieldCheck className="text-[#3b93a0]" />,
      content: "This Privacy Statement describes how Thamani Sacco protects the personal data it processes, why and how we collect and use your personal data, and how you can exercise your rights[cite: 4]. This statement should be read together with our Terms and Conditions of Use[cite: 5]."
    },
    {
      id: "collection",
      title: "2.0 Collection of Data",
      icon: <Database className="text-[#3b93a0]" />,
      content: "We collect personal data necessary to achieve the purposes set out in this Statement[cite: 28]. This includes identity information (name, ID number, photo), contact details, employment info, and financial status[cite: 46, 47, 48]. Data is collected when you apply for membership, use our digital platforms, or visit our branches[cite: 32, 33, 35]."
    },
    {
      id: "usage",
      title: "3.0 How We Use Your Data",
      icon: <Eye className="text-[#3b93a0]" />,
      content: "Your data is used to verify your identity (KYC), assess credit scores, prevent fraud, and perform our contractual obligations[cite: 99, 108, 109, 110]. We also use it to keep you informed about new products, unless you opt out of marketing communications[cite: 119, 120]."
    },
    {
      id: "sensitive-data",
      title: "4.0 Sensitive Personal Data",
      icon: <Lock className="text-[#3b93a0]" />,
      content: "We may process sensitive data including biometric data (fingerprints/voice), marital status, and family details[cite: 130]. We process such data only with your explicit consent or as permitted by Data Protection Laws[cite: 131]."
    },
    {
      id: "sharing",
      title: "5.0 Data Sharing & Transfers",
      icon: <FileSearch className="text-[#3b93a0]" />,
      content: "We may share data with regulators, credit reference bureaus, and third-party service providers who are contractually bound to maintain confidentiality and security[cite: 135, 137, 154, 155]."
    },
    {
      id: "rights",
      title: "6.0 Your Rights",
      icon: <UserCheck className="text-[#3b93a0]" />,
      content: "Subject to legal conditions, you have the right to be informed of data collection, access your data, rectify incorrect info, object to processing, request data erasure, and request data portability[cite: 196, 197, 198, 200, 201, 205, 207]."
    }
  ];

  return (
    <main className="bg-[#fdfcf7] min-h-screen">
      <section className="bg-[#1a3c34] pt-40 pb-20 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#ffde21] text-[#1a3c34] px-4 py-2 rounded-lg font-black text-sm uppercase tracking-widest inline-block mb-6">
            Privacy & Trust
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Data Privacy <span className="text-[#ffde21]">Statement</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            At Thamani Sacco, we are committed to protecting your personal information and your right to privacy.
          </p>
          <p className="text-[#ffde21] mt-4 font-bold">Last Updated: {lastUpdated} [cite: 3]</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h3 className="font-black text-[#1a3c34] uppercase tracking-wider mb-6 text-sm">Policy Sections</h3>
              <nav className="space-y-4">
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 text-gray-600 hover:text-[#3b93a0] font-bold transition-colors group">
                    <span className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#3b93a0]/10 transition-colors">
                      {React.cloneElement(section.icon as React.ReactElement, { size: 18 } as any)}
                    </span>
                    {section.title.split(' ').slice(1).join(' ')}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    {React.cloneElement(section.icon as React.ReactElement, { size: 24 } as any)}
                  </div>
                  <h2 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tight">{section.title}</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-600 leading-relaxed">
                  {section.content}
                  {section.id === "usage" && (
                    <p className="mt-4 text-sm italic border-l-4 border-[#ffde21] pl-4">
                      We may retain your personal data for a period of up to seven (7) years or as required by law[cite: 190].
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#3b93a0] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-6">Contact Our Data Office</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#ffde21]" />
                    <p className="text-sm">Thamani Sacco HQ,<br />Chuka, Kenya</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#ffde21]" />
                    <p className="text-sm">dpo@thamanisacco.com [cite: 187, 225]</p>
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