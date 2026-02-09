"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sacco-dark text-white pt-16 pb-8 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-sacco-accent text-sacco-dark w-10 h-10 flex items-center justify-center rounded font-black text-xl">T</div>
              <span className="font-black text-xl tracking-tighter uppercase">Thamani<span className="text-sacco-accent">Sacco</span></span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs uppercase tracking-wider font-medium">
              Empowering our members through innovative financial solutions since 1987. Regulated by SASRA.
            </p>
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
              {['About Thamani', 'Our History', 'Board of Directors', 'Management Team', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:text-sacco-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-sacco-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sacco-accent font-black text-[10px] uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-sacco-accent shrink-0" />
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest leading-loose">
                  Thamani Plaza, Main Street<br />P.O. Box 123-456, Nairobi, Kenya
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-sacco-accent shrink-0" />
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">+254 700 000 000</p>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-sacco-accent shrink-0" />
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">info@thamanisacco.co.ke</p>
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
            <Link href="#" className="text-gray-500 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}