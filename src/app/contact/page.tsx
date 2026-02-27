"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Building2 // Moved import here for cleanliness
} from 'lucide-react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const branches = [
    { name: "Chogoria", tel: "0733207508 / 0770622116" },
    { name: "Kibugua", tel: "0733207536 / 0770622021" },
    { name: "Marima", tel: "0733207502 / 0770621921" },
    { name: "Chuka Office", tel: "0733207503 / 0770622018" },
    { name: "Kathwana", tel: "0733207531 / 0777622152" },
    { name: "Cheera", tel: "0733207539 / 0777622153" }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you. Your message has been sent to Thamani Sacco.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER - Sharp Edges */}
      <section className="relative h-[170px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/mobile-banking-bg02.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Contact Thamani Sacco"
        />
        <div className="absolute inset-0 bg-sacco-dark/60"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Contact <span className="text-sacco-accent">Us</span>
          </h1>
          {/* Boxy Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 px-4 py-2 rounded-none backdrop-blur-sm border border-white/10">
            <span>Home</span>
            <ChevronRight size={12} className="text-sacco-accent" />
            <span className="text-sacco-accent text-xs">Support</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT INFO & FORM */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Official Details & Branch List */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-sacco-dark uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Building2 className="text-sacco-light" size={32} /> Headquarters
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-xl font-black text-sacco-dark">Thamani Sacco Society Ltd</p>
                <div className="space-y-2 text-lg">
                   <p className="flex items-center gap-3"><MapPin size={20} className="text-sacco-accent" /> P.O. Box 467, Chuka</p>
                   <p className="flex items-center gap-3"><Phone size={20} className="text-sacco-accent" /> 064-5630545</p>
                   <p className="flex items-center gap-3 font-bold text-sacco-light"><Mail size={20} className="text-sacco-accent" /> info@thamanisacco.or.ke</p>
                </div>
              </div>
            </div>

            {/* Branch List - Boxy labels */}
            <div>
              <h3 className="text-sm font-black text-sacco-accent uppercase tracking-[0.3em] mb-6 border-b border-gray-100 pb-2">Branch Contacts</h3>
              <ul className="space-y-6">
                {branches.map((branch) => (
                  <li key={branch.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                    <span className="text-lg font-black text-sacco-dark uppercase tracking-tight group-hover:text-sacco-light transition-colors">
                      {branch.name}
                    </span>
                    <span className="text-md font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-none border border-gray-200">
                      {branch.tel}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
               <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 bg-sacco-dark text-white rounded-none hover:bg-sacco-accent hover:text-sacco-dark transition-all border border-transparent">
                      <Icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Updated Form - Rounded corners removed */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-none shadow-[20px_20px_0px_0px_rgba(26,60,52,0.05)] border-2 border-gray-100">
            <div className="mb-10">
                <h3 className="text-2xl font-black text-sacco-dark uppercase tracking-tight">Direct Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Jane Doe"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-none border-b-2 border-gray-200 focus:border-sacco-light outline-none transition-colors"
                      onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 0712 345 678"
                      required
                      className="w-full px-6 py-4 bg-gray-50 rounded-none border-b-2 border-gray-200 focus:border-sacco-light outline-none transition-colors"
                      onChange={handleInputChange}
                    />
                </div>
              </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-gray-50 rounded-none border-b-2 border-gray-200 focus:border-sacco-light outline-none transition-colors opacity-80"
                      onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Subject (Optional)</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Regarding..."
                      className="w-full px-6 py-4 bg-gray-50 rounded-none border-b-2 border-gray-200 focus:border-sacco-light outline-none transition-colors opacity-80"
                      onChange={handleInputChange}
                    />
                </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Message *</label>
                <textarea
                  name="message"
                  placeholder="How can Thamani Sacco help you today?"
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-gray-50 rounded-none border-b-2 border-gray-200 focus:border-sacco-light outline-none resize-none transition-colors"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button className="w-full bg-sacco-light text-white py-5 rounded-none font-black uppercase tracking-[0.3em] text-xs hover:bg-sacco-dark transition-all shadow-md flex items-center justify-center gap-3 active:scale-[0.98]">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION - 100% Width on Small Screens */}
      <section className="w-full max-w-7xl mx-auto mb-20 lg:px-16 px-0">
        <div className="w-full h-[400px] lg:h-[500px] rounded-none overflow-hidden border-y-4 sm:border-4 border-gray-100 bg-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=Thamani%20Sacco%20Society%20Ltd,%20Chuka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Thamani Sacco Headquarters Map"
            ></iframe>
        </div>
      </section>

    </main>
  );
}