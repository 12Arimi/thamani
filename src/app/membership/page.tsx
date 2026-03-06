"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, Building, FileText, CreditCard, Smartphone,
  Globe, CheckCircle2, ShieldCheck, X, Lock, Eye, UserCheck,
  Database, Mail, MapPin, Scale, Info, AlertTriangle, ArrowRight, TrendingUp, Award, Calculator, HandHeart, Phone, ChevronRight, User
} from 'lucide-react';
import Link from 'next/link';

export default function MembershipPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('individual');
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  const handleStartRegistration = () => {
    setShowAccountModal(true);
  };

  const handleAccountTypeSelect = (accountType: string) => {
    setShowAccountModal(false);
    router.push(`/membership/${accountType}/apply`);
  };

  const handleApplyNow = (accountType: string) => {
    router.push(`/membership/${accountType}/apply`);
  };

  const benefits = [
    {
      title: "Competitive Interest Rates",
      desc: "Enjoy better returns on savings and lower interest on loans compared to commercial banks.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Member Ownership",
      desc: "As a member, you're part owner of the Sacco with voting rights and share dividends.",
      icon: <Users size={24} />
    },
    {
      title: "Financial Education",
      desc: "Access regular training and workshops on financial literacy and investment opportunities.",
      icon: <Award size={24} />
    },
    {
      title: "Flexible Loan Products",
      desc: "Tailored loan solutions including emergency, development, and asset financing.",
      icon: <Calculator size={24} />
    },
    {
      title: "Secure & Regulated",
      desc: "Licensed by SASRA ensuring your deposits are protected and operations are transparent.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Community Support",
      desc: "Be part of a community that supports each other's growth and financial wellbeing.",
      icon: <HandHeart size={24} />
    }
  ];

  const membershipTypes = [
    {
      type: "individual",
      title: "Individual Membership",
      desc: "Perfect for personal savings and loan needs",
      features: ["Personal savings account", "Access to all loan products", "Mobile banking", "Annual dividends", "Voting rights"]
    },
    {
      type: "business",
      title: "Business Membership",
      desc: "Ideal for businesses and organizations",
      features: ["Business operating account", "Trade finance solutions", "Overdraft facilities", "Corporate loans", "Dedicated relationship manager"]
    },
    {
      type: "joint",
      title: "Joint Membership",
      desc: "Open a joint account with family, friends, or business partners.",
      features: ["Multiple account holders", "Shared responsibility", "Combined savings power", "Joint loan applications", "Flexible account management"]
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-24">
      
      {/* 1. UPDATED HERO SECTION WITH IMAGE */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img 
          src="/images/membership-hero.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="Thamani Sacco Membership"
        />
        <div className="absolute inset-0 bg-sacco-dark/30"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center gap-4">
          <div className="space-y-4">
            <p className="text-sacco-accent font-black uppercase tracking-[0.4em] text-sm">Join Our Community</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              Become a <span className="text-sacco-accent">Member</span>
            </h1>
          </div>
          
          <p className="text-white/95 text-xl max-w-2xl font-medium drop-shadow-lg">
        
                  </p>

          <div className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-[0.2em] text-sm bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10">
            <span>Home</span>
            <ChevronRight size={12} className="text-sacco-accent" />
            <span className="text-sacco-accent text-sm uppercase">Membership</span>
          </div>
        </div>
      </section>

      {/* 2. RESTORED ONLINE REGISTRATION CTA */}
      <section className="py-20 bg-sacco-accent px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="bg-sacco-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-sacco-accent" />
            </div>
            <h2 className="text-3xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
              ONLINE MEMBERSHIP REGISTRATION
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Complete your membership application online in minutes. No paperwork, no hassle - just fill out our secure form and get started on your financial journey with Thamani Sacco.
            </p>
            <button
              onClick={handleStartRegistration}
              className="bg-sacco-dark text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all flex items-center gap-3 mx-auto"
            >
              <FileText size={20} />
              Start Registration
            </button>
          </div>
        </div>
      </section>

      {/* 3. RESTORED MEMBERSHIP TYPES */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
              Choose Your <span className="text-sacco-light">Membership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the membership type that best suits your financial needs and goals
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {membershipTypes.map((type) => (
              <button
                key={type.type}
                onClick={() => setActiveTab(type.type)}
                className={`px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                  activeTab === type.type
                    ? 'bg-sacco-dark text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-sacco-mist'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-sacco-dark mb-3">
                  {membershipTypes.find(t => t.type === activeTab)?.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {membershipTypes.find(t => t.type === activeTab)?.desc}
                </p>
              </div>
              
              <div className="space-y-3">
                {membershipTypes.find(t => t.type === activeTab)?.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-sacco-light flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleApplyNow(activeTab)}
                className="bg-sacco-accent text-sacco-dark px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center gap-3"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-sacco-mist rounded-3xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src={`https://images.unsplash.com/photo-${activeTab === 'individual' ? '1554224155-1696413565d3' : (activeTab === 'business' ? '1560472357-b9ff3e51b45e' : '1573496359142-b8d87734a5a2')}?auto=format&fit=crop&q=80`}
                  className="w-full h-full object-cover" 
                  alt={`${activeTab} membership`} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESTORED BENEFITS SECTION */}
      <section className="py-20 bg-sacco-mist px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
              Member <span className="text-sacco-light">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why thousands trust Thamani Sacco for their financial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="bg-sacco-mist text-sacco-light p-4 rounded-xl mb-6 group-hover:bg-sacco-dark group-hover:text-sacco-accent transition-all inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-sacco-dark mb-3 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESTORED REQUIREMENTS SECTION */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
                Membership <span className="text-sacco-light">Requirements</span>
              </h2>
              <p className="text-gray-600">
                Get started with these simple requirements and join our growing community
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Be 18 years and above",
                "Have a valid National ID or Passport",
                "Complete membership application form",
                "Pay registration fee of Ksh 1,000",
                "Purchase minimum shares (Ksh 10,000)",
                "Provide recent passport photo",
                "Proof of residence (utility bill or rent agreement)"
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-sacco-mist rounded-xl">
                  <div className="bg-sacco-accent text-sacco-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sacco-dark rounded-3xl p-8 text-white">
            <FileText size={48} className="text-sacco-accent mb-6" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
              Ready to Join?
            </h3>
            <p className="text-white/80 mb-8">
              Download our membership application form or visit any of our branches to get started on your financial journey with Thamani Sacco.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => router.push('/membership/individual')}
                className="w-full bg-sacco-accent text-sacco-dark py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white transition-all"
              >
                Apply Online Now
              </button>
              <button className="w-full border-2 border-white text-white py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:text-sacco-dark transition-all">
                Find Nearest Branch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESTORED CONTACT CTA */}
      <section className="bg-sacco-dark py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-sacco-accent uppercase tracking-tighter mb-6">
            Questions About Membership?
          </h3>
          <p className="text-white/80 mb-8">
            Our team is ready to help you understand the benefits and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Phone size={20} className="text-sacco-accent" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail size={20} className="text-sacco-accent" />
              <span>membership@thamanisacco.co.ke</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin size={20} className="text-sacco-accent" />
              <span>Chuka HQ</span>
            </div>
          </div>
        </div>
      </section>
    {/* Account Type Selection Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
                Choose Account Type
              </h3>
              <p className="text-gray-600">
                Select the type of membership account you want to open
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <button
                onClick={() => handleAccountTypeSelect('individual')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-sacco-accent hover:bg-sacco-mist transition-all text-left group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-sacco-light w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-sacco-accent transition-all">
                    <User size={32} className="text-white" />
                  </div>
                  <h4 className="font-black text-sacco-dark uppercase tracking-tighter mb-2">
                    Individual Membership
                  </h4>
                  <p className="text-sm text-gray-600">
                    Personal account for individual members
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleAccountTypeSelect('business')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-sacco-accent hover:bg-sacco-mist transition-all text-left group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-sacco-light w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-sacco-accent transition-all">
                    <Building size={32} className="text-white" />
                  </div>
                  <h4 className="font-black text-sacco-dark uppercase tracking-tighter mb-2">
                    Business Membership
                  </h4>
                  <p className="text-sm text-gray-600">
                    Account for businesses and organizations
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleAccountTypeSelect('joint')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-sacco-accent hover:bg-sacco-mist transition-all text-left group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-sacco-light w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-sacco-accent transition-all">
                    <Users size={32} className="text-white" />
                  </div>
                  <h4 className="font-black text-sacco-dark uppercase tracking-tighter mb-2">
                    Joint Membership
                  </h4>
                  <p className="text-sm text-gray-600">
                    Account for multiple account holders
                  </p>
                </div>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowAccountModal(false)}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
