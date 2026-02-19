"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin 
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NEW: Logic to handle clicking a link you are already on
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault(); // Stop standard navigation
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      router.refresh(); // Re-fetch server data
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Savings", submenu: ["Savings Account", "Fixed Deposit Account", "Education Savings", "Business Account", "Thamani Junior Account"] },
    { name: "Loans", submenu: ["FOSA Product Loans", "BOSA Products"] },
    { name: "Membership", href: "/membership" },
    { name: "Services", submenu: ["Mobile Banking", "Agency Banking", "Paybill Services", "ATM Services", "Western Union", "Till Numbers"] },
    { name: "Media Center", submenu: ["News", "Gallery", "Downloads", "Careers"] },
    { name: "Contacts", href: "/contacts" },
  ];

  const toggleSubmenu = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
      isScrolled ? 'sm:-translate-y-10' : 'translate-y-0'
    }`}>
      
{/* 1. TOP UTILITY BAR */}
<div className="hidden sm:flex bg-sacco-light text-white h-10 px-6 lg:px-16 justify-between items-center shadow-sm">
  
  {/* Left Side: Location, Phone, Email */}
  <div className="flex gap-6 items-center text-xs font-bold tracking-tight">
    <span className="flex items-center gap-1.5">
      <MapPin size={14} strokeWidth={3} className="text-sacco-accent fill-sacco-accent/20" /> Chuka Town
    </span>
    <span className="flex items-center gap-1.5">
      <Phone size={14} strokeWidth={3} className="text-sacco-accent" /> +254 700 000 000
    </span>
    <span className="hidden md:flex items-center gap-1.5">
      <Mail size={14} strokeWidth={3} className="text-sacco-accent" /> info@thamanisacco.co.ke
    </span>
  </div>

  {/* Right Side: Socials, Join Us, Members Portal */}
  <div className="flex gap-4 lg:gap-6 items-center">
    
    {/* Social Media Icons (Bold/Filled) */}
    <div className="flex items-center gap-4 border-r border-white/20 pr-4">
      <a href="https://www.facebook.com/thamanisacco" target="_blank" rel="noopener noreferrer" className="hover:text-sacco-accent transition-all">
        <Facebook size={14} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="https://twitter.com/thamanisaccoltd?t=qkUYQW227Yw5u_aMxuLpig&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-sacco-accent transition-all">
        <Twitter size={14} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="https://youtube.com/channel/UCKjnQO-SFsfDycCpLs31raQ" target="_blank" rel="noopener noreferrer" className="hover:text-sacco-accent transition-all">
        <Youtube size={14} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="https://www.linkedin.com/company/thamani-sacco/" target="_blank" rel="noopener noreferrer" className="hover:text-sacco-accent transition-all">
        <Linkedin size={14} fill="currentColor" strokeWidth={0} />
      </a>
    </div>

    {/* Buttons Area */}
    <div className="flex gap-2 items-center">
      {/* Join Us Button (Styled like Portal) */}
      <Link 
        href="/membership" 
        className="bg-sacco-accent text-[#1a3c34] px-4 py-1.5 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors shadow-md"
      >
        Join Us
      </Link>
      
      {/* Members Portal Button */}
      <button 
        onClick={() => window.open('https://members.thamanisacco.or.ke/account/login', '_blank', 'noopener,noreferrer')}
        className="bg-sacco-accent text-[#1a3c34] px-4 py-1.5 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors shadow-md"
      >
        Members Portal
      </button>
    </div>
  </div>
</div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className={`bg-white transition-all duration-300 px-6 lg:px-16 flex justify-between items-center shadow-xl ${
        isScrolled ? 'py-3' : 'py-4 lg:py-5'
      }`}>
        
        {/* Logo Section */}
        <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12">
            <Image src="/logo.png" alt="Thamani Sacco Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-black text-base lg:text-lg text-[#1a3c34] uppercase tracking-tighter leading-none">Thamani</span>
            <span className="font-bold text-[10px] lg:text-[14px] text-sacco-light uppercase tracking-[0.55em] lg:tracking-[0.65em] leading-none mt-1">Sacco</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center justify-end w-full gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.href ? (
                <Link 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item.href!)}
                  className="text-xs font-black text-gray-700 hover:text-[#1a3c34] uppercase tracking-widest transition-all"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="flex items-center gap-1 text-xs font-black text-gray-700 cursor-pointer group-hover:text-[#1a3c34] uppercase tracking-widest">
                  {item.name} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                </div>
              )}

              {item.submenu && (
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                  <div className="w-64 bg-white shadow-2xl border-t-4 border-[#1a3c34] rounded-b-lg">
                    <ul className="py-2">
                      {item.submenu.map((sub) => {
                        const subHref = `/${sub.toLowerCase().replace(/ /g, '-')}`;
                        return (
                          <li key={sub}>
                            <Link 
                              href={subHref} 
                              onClick={(e) => handleLinkClick(e, subHref)}
                              className="block px-6 py-3 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-[#1a3c34] border-l-2 border-transparent hover:border-sacco-accent uppercase transition-all"
                            >
                              {sub}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <button className="ml-4 flex items-center gap-2 bg-sacco-dark text-white px-6 py-3 rounded shadow-lg font-bold text-xs uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all">
            <User size={16} /> Portal
          </button>
        </div>

        <button className="xl:hidden p-2 text-[#1a3c34]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* 3. MOBILE OVERLAY MENU */}
      <div className={`xl:hidden fixed inset-0 top-0 h-screen bg-white z-[99] transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 relative"><Image src="/logo.png" alt="Logo" fill className="object-contain" /></div>
             <span className="font-black text-sm text-[#1a3c34] uppercase">Thamani</span>
           </div>
           <button onClick={() => setIsMobileMenuOpen(false)}><X size={28} className="text-[#1a3c34]" /></button>
        </div>
        
        <div className="h-full overflow-y-auto pb-32 p-8">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100">
              {item.href ? (
                <Link 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item.href!)}
                  className="block py-5 font-black text-[#1a3c34] uppercase text-sm tracking-widest"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="w-full">
                  <button onClick={() => toggleSubmenu(item.name)} className="w-full py-5 flex justify-between items-center font-black text-[#1a3c34] uppercase text-sm tracking-widest">
                    {item.name} <ChevronDown size={18} className={expandedItem === item.name ? 'rotate-180' : ''} />
                  </button>
                  <div className={`bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${expandedItem === item.name ? 'max-h-[500px] mb-4' : 'max-h-0'}`}>
                    {item.submenu?.map((sub) => {
                      const subHref = `/${sub.toLowerCase().replace(/ /g, '-')}`;
                      return (
                        <Link 
                          key={sub} 
                          href={subHref} 
                          onClick={(e) => handleLinkClick(e, subHref)}
                          className="block px-8 py-4 text-xs font-bold text-gray-500 active:text-[#1a3c34] border-b border-white uppercase"
                        >
                          {sub}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}