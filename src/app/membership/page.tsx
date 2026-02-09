"use client";

import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  HandHeart, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Mail, 
  MapPin,
  Calculator,
  Award,
  ArrowRight
} from 'lucide-react';
import MembershipForm from './form';

export default function MembershipPage() {
  const [activeTab, setActiveTab] = useState('individual');
  const [showForm, setShowForm] = useState(false);

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
      type: "junior",
      title: "Junior Membership",
      desc: "Start them young with financial literacy",
      features: ["No minimum balance", "Educational resources", "Parent/guardian supervision", "Special junior events", "Future loan benefits"]
    }
  ];

  if (showForm) {
    return <MembershipForm />;
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a3c34] pt-44 pb-24 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffde21] font-bold text-xs uppercase tracking-[0.4em] mb-4">Join Our Community</p>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Become a <span className="text-[#ffde21]">Member</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Join thousands of Kenyans who have chosen Thamani Sacco as their trusted financial partner for growth and prosperity.
          </p>
          <div className="h-1 w-24 bg-[#ffde21] mt-6"></div>
        </div>
      </section>

      {/* Online Registration CTA */}
      <section className="py-20 bg-[#ffde21] px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="bg-[#1a3c34] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-[#ffde21]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              ONLINE MEMBERSHIP REGISTRATION
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Complete your membership application online in minutes. No paperwork, no hassle - just fill out our secure form and get started on your financial journey with Thamani Sacco.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1a3c34] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all flex items-center gap-3 mx-auto"
            >
              <FileText size={20} />
              Start Registration
            </button>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Choose Your <span className="text-[#3b93a0]">Membership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the membership type that best suits your financial needs and goals
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {membershipTypes.map((type) => (
              <button
                key={type.type}
                onClick={() => setActiveTab(type.type)}
                className={`px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                  activeTab === type.type
                    ? 'bg-[#1a3c34] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#fdfcf7]'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-[#1a3c34] mb-3">
                  {membershipTypes.find(t => t.type === activeTab)?.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {membershipTypes.find(t => t.type === activeTab)?.desc}
                </p>
              </div>
              
              <div className="space-y-3">
                {membershipTypes.find(t => t.type === activeTab)?.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#3b93a0] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setShowForm(true)}
                className="bg-[#ffde21] text-[#1a3c34] px-8 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center gap-3"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#fdfcf7] rounded-3xl -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src={`https://images.unsplash.com/photo-${activeTab === 'individual' ? '1554224155-1696413565d3' : activeTab === 'business' ? '1560472357-b9ff3e51b45e' : '1573496359142-b8d87734a5a2'}?auto=format&fit=crop&q=80`}
                  className="w-full h-full object-cover" 
                  alt={`${activeTab} membership`} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Member <span className="text-[#3b93a0]">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why thousands trust Thamani Sacco for their financial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-xl mb-6 group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-[#1a3c34] mb-3 uppercase tracking-tight">
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

      {/* Requirements Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
                Membership <span className="text-[#3b93a0]">Requirements</span>
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
                <div key={i} className="flex items-start gap-4 p-4 bg-[#fdfcf7] rounded-xl">
                  <div className="bg-[#ffde21] text-[#1a3c34] w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a3c34] rounded-3xl p-8 text-white">
            <FileText size={48} className="text-[#ffde21] mb-6" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
              Ready to Join?
            </h3>
            <p className="text-white/80 mb-8">
              Download our membership application form or visit any of our branches to get started on your financial journey with Thamani Sacco.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-[#ffde21] text-[#1a3c34] py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white transition-all"
              >
                Apply Online Now
              </button>
              <button className="w-full border-2 border-white text-white py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#1a3c34] transition-all">
                Find Nearest Branch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1a3c34] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-[#ffde21] uppercase tracking-tighter mb-6">
            Questions About Membership?
          </h3>
          <p className="text-white/80 mb-8">
            Our team is ready to help you understand the benefits and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Phone size={20} className="text-[#ffde21]" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail size={20} className="text-[#ffde21]" />
              <span>membership@thamanisacco.co.ke</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin size={20} className="text-[#ffde21]" />
              <span>Chuka HQ</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
