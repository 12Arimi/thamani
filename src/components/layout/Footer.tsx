"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Smartphone
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const WHATSAPP_NUMBER = "+254769207535";
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.thamani.tangazoletu&gl=US";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", submenu: ["All Services", "Mobile Banking", "Agency Banking", "Paybill Services", "ATM Services", "Western Union", "Till Numbers"] },
    { name: "Products", href: "/products" },
    { name: "Membership", href: "/membership" },
    { name: "Careers", href: "/careers" },
    { name: "Media Center", submenu: ["News", "Gallery", "Downloads"] },
    { name: "Contact", href: "/contact" },
  ];

  const getSubmenuHref = (parentName: string, sub: string) => {
    const slug = sub.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');
    if (parentName === "Services") return sub === "All Services" ? "/services" : `/services/${slug}`;
    if (parentName === "Products") return sub === "All Products" ? "/products" : `/products/${slug}`;
    if (sub === "News") return "/blogs";
    return `/${slug}`;
  };

  return (
    <>
      {/* 1. FLOATING WHATSAPP BUTTON */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] hover:scale-110 transition-transform flex items-center justify-center shadow-2xl rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="/images/whatsapp.svg" 
          alt="WhatsApp" 
          className="w-12 h-12 block" 
        />
      </a>

      <footer className="bg-sacco-dark text-white pt-16 pb-8 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand & App Download */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* Replaced 'T' box with actual logo */}
                <img src="/images/logo.png" alt="Thamani Logo" className="h-12 w-auto object-contain" />
                <span className="font-black text-xl tracking-tighter uppercase">Thamani<span className="text-sacco-accent">Sacco</span></span>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed max-w-xs uppercase tracking-wider font-medium">
                Thamani Sacco Society Limited, formerly Nithi Tea Growers Sacco Ltd is a co-operative society registered under co-operative Act CAP 12 of 1997 with a mandate for mobilization of member’s savings and availing credit to them.
              </p>
              
              <div className="pt-0">
                <a 
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Changed rounded-[1.25rem] to rounded-none for perfectly sharp edges */
                  className="inline-flex items-center gap-5 bg-sacco-accent border-2 border-sacco-accent px-8 py-5 rounded-none transition-all duration-300 group shadow-xl hover:scale-105"
                >
                  <Smartphone size={32} className="text-sacco-dark group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="text-left">
                    <p className="text-[11px] font-black text-sacco-earth uppercase tracking-[0.25em] leading-none mb-1.5">
                      Get it on
                    </p>
                    <p className="text-[18px] font-black text-sacco-dark uppercase tracking-widest leading-none">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-sacco-accent hover:text-sacco-dark transition-all">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sacco-accent font-black text-[10px] uppercase tracking-[0.2em] mb-8">Quick Navigation</h4>
              <ul className="space-y-4">
                {menuItems.map((item) => {
                  const href = item.href || (item.submenu ? getSubmenuHref(item.name, item.submenu[0]) : "#");
                  return (
                    <li key={item.name}>
                      <Link href={href} className="text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:text-sacco-accent transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-sacco-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-sacco-accent font-black text-[10px] uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                  <MapPin size={18} className="text-sacco-accent shrink-0" />
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest leading-loose">
                    Thamani Plaza, Main Street<br />P.O. Box 467, Chuka, Kenya
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone size={18} className="text-sacco-accent shrink-0" />
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">{WHATSAPP_NUMBER}</p>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail size={18} className="text-sacco-accent shrink-0" />
                  <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">info@thamanisacco.or.ke</p>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-sacco-accent font-black text-[10px] uppercase tracking-[0.2em] mb-8">Newsletter</h4>
              <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">
                Stay updated with our latest financial tips and announcements.
              </p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-sacco-accent transition-all text-white placeholder:text-gray-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sacco-accent hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">
              © {currentYear} Thamani Sacco Society Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-500 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}