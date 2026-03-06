"use client";

import React from 'react';
import { 
  User, 
  Users, 
  Building, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function AccountTypePage() {
  const accountTypes = [
    {
      id: 'individual',
      title: 'Individual Account',
      description: 'Perfect for personal banking needs with competitive interest rates and flexible loan options.',
      icon: <User size={48} />,
      features: [
        'Personal savings and current accounts',
        'Competitive interest rates on deposits',
        'Quick loan processing',
        'Mobile and internet banking',
        'ATM services',
        'Financial advisory services'
      ],
      color: 'bg-sacco-light',
      hoverColor: 'hover:bg-sacco-dark'
    },
    {
      id: 'joint',
      title: 'Joint Account',
      description: 'Ideal for couples, families, or business partners who want to share financial responsibilities.',
      icon: <Users size={48} />,
      features: [
        'Shared account management',
        'Multiple signatories',
        'Flexible withdrawal options',
        'Combined savings power',
        'Joint loan applications',
        'Family financial planning'
      ],
      color: 'bg-sacco-accent',
      hoverColor: 'hover:bg-sacco-dark'
    },
    {
      id: 'business',
      title: 'Business Account',
      description: 'Comprehensive banking solutions for businesses, organizations, and institutions.',
      icon: <Building size={48} />,
      features: [
        'Business current accounts',
        'Trade financing solutions',
        'Payroll management',
        'Merchant services',
        'Business loans and overdrafts',
        'Corporate advisory services'
      ],
      color: 'bg-sacco-earth',
      hoverColor: 'hover:bg-sacco-dark'
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-sacco-dark pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/membership" className="text-white/60 hover:text-white transition-colors">
              ← Back to Membership
            </Link>
          </div>
          <div className="bg-sacco-accent text-sacco-dark px-4 py-2 rounded-lg font-black text-sm uppercase tracking-widest inline-block mb-6">
            Step 1: Choose Account Type
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Select Your <span className="text-sacco-accent">Account Type</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Choose the account type that best suits your needs. Each account type is designed with specific features to serve different financial requirements.
          </p>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {accountTypes.map((account) => (
              <div key={account.id} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`${account.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {account.icon}
                    </div>
                    <h3 className="text-2xl font-black text-sacco-dark uppercase tracking-tight mb-3">
                      {account.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {account.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <h4 className="text-sm font-black text-sacco-dark uppercase tracking-wider mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {account.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-sacco-light mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link 
                      href={`/membership/agreement?type=${account.id}`}
                      className={`${account.color} ${account.hoverColor} text-white px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 w-full`}
                    >
                      Choose {account.title}
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-sacco-mist rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck size={32} className="text-sacco-light flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-sacco-dark mb-3">Why Choose Thamani Sacco?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Thamani Sacco Society Limited is regulated by SASRA, ensuring your deposits are protected and our operations meet the highest standards of governance and transparency.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      With over [X] years of service, we've helped thousands of members achieve their financial goals through competitive rates, personalized service, and innovative banking solutions.
                    </p>
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
