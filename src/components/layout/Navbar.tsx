"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, Mail, ShieldCheck, ChevronDown, Menu, X, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for a "Sticky" feel
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Savings", submenu: ["Savings Account", "Fixed Deposit Account", "Education Savings", "Business Account", "Thamani Junior Account"] },
    { name: "Loans", submenu: ["FOSA Product Loans", "BOSA Products"] },
    { name: "Membership", href: "/membership" },
    { 
      name: "Services", 
      submenu: ["Mobile Banking", "Agency Banking", "Paybill Services", "ATM Services", "Western Union", "Till Numbers"] 
    },
    { name: "Media Center", submenu: ["News", "Gallery", "Downloads", "Careers"] },
    { name: "Contacts", href: "/contacts" },
  ];

  const toggleSubmenu = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] shadow-xl">
      
      {/* 1. TOP UTILITY BAR (Brand Colors) */}
      <div className={`hidden sm:flex bg-sacco-light text-white py-2 px-6 lg:px-16 justify-between items-center transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="flex gap-6 items-center text-[10px] font-bold tracking-tight">
          <span className="flex items-center gap-1.5"><Phone size={12} className="text-sacco-accent" /> +254 700 000 000</span>
          <span className="hidden md:flex items-center gap-1.5"><Mail size={12} className="text-sacco-accent" /> info@thamanisacco.co.ke</span>
        </div>
        <div className="flex gap-6 items-center uppercase tracking-[0.15em] text-[9px]">
          <span className="text-sacco-accent font-black flex items-center gap-1.5 italic">
            <ShieldCheck size={14} /> Licensed by SASRA
          </span>
          <button 
            onClick={() => alert('Portal login coming soon!')}
            className="bg-[#ffde21] text-[#1a3c34] px-4 py-1.5 rounded-sm font-black hover:bg-white transition-colors shadow-md"
          >
            Join Us
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className={`bg-white transition-all duration-300 px-6 lg:px-16 flex justify-between items-center ${isScrolled ? 'py-3' : 'py-5'}`}>
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-sacco-dark text-white w-10 h-10 flex items-center justify-center rounded shadow-lg font-black text-xl">T</div>
          <div className="leading-tight">
            <h1 className="font-black text-xl text-[#1a3c34] uppercase tracking-tighter">Thamani <span className="text-sacco-accent drop-shadow-sm">Sacco</span></h1>
            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em]">Excellence & Value</p>
          </div>
        </div>

        {/* Desktop Menu (XL and up) */}
        <div className="hidden xl:flex items-center justify-end w-full gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.href ? (
                <Link href={item.href} className="text-[10px] font-black text-gray-700 hover:text-[#1a3c34] uppercase tracking-widest transition-all">
                  {item.name}
                </Link>
              ) : (
                <div className="flex items-center gap-1 text-[10px] font-black text-gray-700 cursor-pointer group-hover:text-[#1a3c34] uppercase tracking-widest">
                  {item.name} <ChevronDown size={10} className="group-hover:rotate-180 transition-transform" />
                </div>
              )}

              {/* Mega Dropdown */}
              {item.submenu && (
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                  <div className="w-64 bg-white shadow-2xl border-t-4 border-[#1a3c34] rounded-b-lg">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub}>
                          <Link href={`/${sub.toLowerCase().replace(/ /g, '-')}`} className="block px-6 py-3 text-[10px] font-bold text-gray-500 hover:bg-gray-50 hover:text-[#1a3c34] border-l-2 border-transparent hover:border-[#ffde21] uppercase transition-all">
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Member Portal Button */}
          <button 
            onClick={() => alert('Member portal coming soon!')}
            className="ml-4 flex items-center gap-2 bg-sacco-dark text-white px-5 py-2.5 rounded shadow-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all"
          >
            <User size={14} /> Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden p-2 text-[#1a3c34]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* 3. MOBILE OVERLAY MENU */}
      <div className={`xl:hidden fixed inset-0 top-[60px] bg-white z-[99] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="h-full overflow-y-auto pb-32 p-6">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100">
              {item.href ? (
                <Link href={item.href} className="block py-4 font-black text-[#1a3c34] uppercase text-xs tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                <div className="w-full">
                  <button onClick={() => toggleSubmenu(item.name)} className="w-full py-4 flex justify-between items-center font-black text-[#1a3c34] uppercase text-xs tracking-widest">
                    {item.name} <ChevronDown size={14} className={expandedItem === item.name ? 'rotate-180' : ''} />
                  </button>
                  <div className={`bg-gray-50/50 rounded-lg overflow-hidden transition-all duration-300 ${expandedItem === item.name ? 'max-h-[400px] mb-4' : 'max-h-0'}`}>
                    {item.submenu?.map((sub) => (
                      <Link key={sub} href={`/${sub.toLowerCase().replace(/ /g, '-')}`} className="block px-6 py-3 text-[10px] font-bold text-gray-500 active:text-[#1a3c34] border-b border-white/50 uppercase" onClick={() => setIsMobileMenuOpen(false)}>
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button 
              onClick={() => {router.push('/membership'); setIsMobileMenuOpen(false);}}
              className="bg-gray-100 text-[#1a3c34] py-4 rounded font-black text-[10px] uppercase tracking-widest"
            >
              Portal Login
            </button>
            <button 
              onClick={() => {router.push('/membership'); setIsMobileMenuOpen(false);}}
              className="bg-[#ffde21] text-[#1a3c34] py-4 rounded font-black text-[10px] uppercase tracking-widest"
            >
              Join Thamani
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}