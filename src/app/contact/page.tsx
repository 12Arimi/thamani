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
  Building2, 
  MessageCircle, 
  Map as MapIcon 
} from 'lucide-react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Extract WhatsApp hover color dynamically from CSS variables
  const whatsappHoverColor = '#49a146'; // Matches --color-sacco-light

  // Defaulting the active map to Chuka (HQ)
  const [activeMap, setActiveMap] = useState("CHUKA (HQ)");

  // Complete branch list with Call and WhatsApp numbers
  const branches = [
    { 
      name: "CHOGORIA", 
      callNumber: "0733207508",
      whatsappNumber: "0770622116",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.467385984252!2d37.6406!3d-0.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827b99c7c4c5f5b%3A0x6a0c5c5c5c5c5c5c!2sChogoria!5e0!3m2!1sen!2ske!4v1710000000001"
    },
    { 
      name: "MARIMA", 
      callNumber: "0733207502",
      whatsappNumber: "0770621921",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4321!2d37.6123!3d-0.2789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827b!2sMarima!5e0!3m2!1sen!2ske!4v1710000000002"
    },
    { 
      name: "KIBUGUA", 
      callNumber: "0733207536",
      whatsappNumber: "0770622021",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4102!2d37.5890!3d-0.3012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827c!2sKibugua!5e0!3m2!1sen!2ske!4v1710000000003"
    },
    { 
      name: "CHUKA (HQ)", 
      callNumber: "0733207503",
      whatsappNumber: "0770622018",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7519007397814!2d37.647782!3d-0.3306053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827b87b0ba50027%3A0xac691b81f0d48a73!2sThamani%20SACCO%20Society%20Ltd!5e0!3m2!1sen!2ske!4v1772733456840!5m2!1sen!2ske"
    },
    { 
      name: "KATHWANA", 
      callNumber: "0733207531",
      whatsappNumber: "0777622152",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3556!2d37.8222!3d-0.4222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827e!2sKathwana!5e0!3m2!1sen!2ske!4v1710000000005"
    },
    { 
      name: "CHEERA", 
      callNumber: "0733207539",
      whatsappNumber: "0777622153",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4122!2d37.6888!3d-0.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827f!2sCheera!5e0!3m2!1sen!2ske!4v1710000000006"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you. Your message has been sent to Thamani Sacco.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const formatCallLink = (number: string) => {
    const cleanNumber = number.replace(/\s+/g, '');
    const formatted = cleanNumber.startsWith('0') ? `+254${cleanNumber.slice(1)}` : cleanNumber;
    return `tel:${formatted}`;
  };

  const formatWhatsAppLink = (number: string) => {
    const cleanNumber = number.replace(/\s+/g, '');
    const formatted = cleanNumber.startsWith('0') ? `254${cleanNumber.slice(1)}` : cleanNumber;
    return `https://wa.me/${formatted}`;
  };

  const currentBranch = branches.find(b => b.name === activeMap) || branches[3];

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      
      {/* 1. SLIM BANNER */}
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
          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-[10px] bg-white/5 px-4 py-2 border border-white/10">
            <span>Home</span>
            <ChevronRight size={12} className="text-sacco-accent" />
            <span className="text-sacco-accent text-xs">Support</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT INFO & FORM */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Official Details & Full Branch List */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-sacco-dark uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Building2 className="text-sacco-light" size={32} /> Headquarters
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="text-xl font-black text-sacco-dark">Thamani Sacco Society Ltd</p>
                <div className="space-y-2">
                   <p className="flex items-center gap-3"><MapPin size={20} className="text-sacco-accent" /> P.O. Box 467, Chuka</p>
                   <p className="flex items-center gap-3"><Phone size={20} className="text-sacco-accent" /> 064-5630545</p>
                   <p className="flex items-center gap-3 font-bold text-sacco-light"><Mail size={20} className="text-sacco-accent" /> info@thamanisacco.or.ke</p>
                </div>
              </div>
            </div>

            {/* Branch List with Call and WhatsApp */}
            <div>
              <h3 className="text-sm font-black text-sacco-accent uppercase tracking-[0.3em] mb-6 border-b border-gray-100 pb-2">Branch Contacts</h3>
              <ul className="space-y-6">
                {branches.map((branch) => (
                  <li key={branch.name} className="space-y-3">
                    <h4 className="text-lg font-black text-sacco-dark uppercase tracking-tight">
                      {branch.name}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Call Button */}
                      <a 
                        href={formatCallLink(branch.callNumber)}
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-50 px-4 py-3 border border-gray-200 hover:border-sacco-accent hover:text-sacco-dark transition-all group"
                      >
                        <span className="text-lg">📞</span>
                        <span>Call: {branch.callNumber}</span>
                      </a>
                      
                      {/* WhatsApp Button */}
                      <a 
                        href={formatWhatsAppLink(branch.whatsappNumber)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-50 px-4 py-3 border border-gray-200 hover:border-green-500 hover:text-green-600 transition-all group"
                      >
                        <span className="text-lg">💬</span>
                        <span>WhatsApp: {branch.whatsappNumber}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
               <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-3 text-white hover:bg-sacco-accent hover:text-sacco-dark transition-all shadow-md"
                      style={{ backgroundColor: whatsappHoverColor }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Full Restored Form */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border-2 border-gray-100 shadow-[20px_20px_0px_0px_rgba(26,60,52,0.05)]">
            <h3 className="text-2xl font-black text-sacco-dark uppercase tracking-tight mb-10">Direct Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Full Name *</label>
                    <input type="text" name="name" placeholder="e.g. Jane Doe" required className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-sacco-light transition-colors" onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Phone Number *</label>
                    <input type="tel" name="phone" placeholder="e.g. 0712 345 678" required className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-sacco-light transition-colors" onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Email (Optional)</label>
                  <input type="email" name="email" placeholder="email@example.com" className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-sacco-light transition-colors opacity-80" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Subject (Optional)</label>
                  <input type="text" name="subject" placeholder="Regarding..." className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-sacco-light transition-colors opacity-80" onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase ml-1 text-gray-400">Message *</label>
                <textarea name="message" placeholder="How can Thamani Sacco help you today?" rows={5} required className="w-full px-6 py-4 bg-gray-50 border-b-2 border-gray-200 outline-none resize-none focus:border-sacco-light transition-colors" onChange={handleInputChange}></textarea>
              </div>
              <button className="w-full bg-sacco-light text-white py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-sacco-dark shadow-md flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC BRANCH MAPS */}
      <section className="w-full max-w-7xl mx-auto mb-20 lg:px-16 px-0">
        <div className="mb-6 px-6 lg:px-0">
          <h3 className="text-xs font-black text-sacco-accent uppercase tracking-[0.4em] mb-4">Select Branch Location</h3>
          <div className="flex flex-wrap gap-2">
            {branches.map((branch) => (
              <button
                key={branch.name}
                onClick={() => setActiveMap(branch.name)}
                className={`flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border-2 shadow-md ${
                  activeMap === branch.name 
                    ? "text-white border shadow-lg" 
                    : "bg-white text-gray-400 border-gray-100 hover:border-sacco-light hover:text-sacco-light"
                }`}
                style={activeMap === branch.name ? { backgroundColor: whatsappHoverColor, borderColor: whatsappHoverColor } : {}}
              >
                <MapIcon size={14} />
                {branch.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-[400px] lg:h-[550px] overflow-hidden border-y-4 sm:border-4 border-sacco-dark/5 bg-gray-100 relative">
          <iframe 
            src={currentBranch.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Thamani Sacco ${activeMap} Map`}
            className="contrast-[1.05]"
          ></iframe>
          <div className="absolute bottom-6 right-6 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest shadow-xl pointer-events-none"
             style={{ backgroundColor: whatsappHoverColor }}
           >
             Branch: <span className="font-bold">{activeMap}</span>
           </div>
        </div>
      </section>

    </main>
  );
}