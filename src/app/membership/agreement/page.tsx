"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FileText, 
  ArrowRight,
  Users,
  User,
  Building,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function AgreementPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState('');
  const [agreements, setAgreements] = useState({
    dataProtection: false,
    terms: false,
    regulatory: false
  });
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    // Get account type from URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type) {
      setAccountType(type);
    }
  }, []);

  useEffect(() => {
    // Check if all agreements are checked
    setCanProceed(agreements.dataProtection && agreements.terms && agreements.regulatory);
  }, [agreements]);

  const handleAgreementChange = (type: keyof typeof agreements) => {
    setAgreements(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const getAccountInfo = () => {
    switch(accountType) {
      case 'individual':
        return { title: 'Individual Account', icon: <User size={24} /> };
      case 'joint':
        return { title: 'Joint Account', icon: <Users size={24} /> };
      case 'business':
        return { title: 'Business Account', icon: <Building size={24} /> };
      default:
        return { title: 'Account', icon: <FileText size={24} /> };
    }
  };

  const accountInfo = getAccountInfo();

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-sacco-dark pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/membership/account-type" className="text-white/60 hover:text-white transition-colors">
              ← Back to Account Selection
            </Link>
          </div>
          <div className="bg-sacco-accent text-sacco-dark px-4 py-2 rounded-lg font-black text-sm uppercase tracking-widest inline-block mb-6">
            Step 2: Terms & Agreements
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Terms & <span className="text-sacco-accent">Agreements</span>
          </h1>
          <p className="text-white/80 text-lg">
            Please review and agree to the following terms to proceed with your {accountInfo.title} application.
          </p>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            
            {/* Account Type Summary */}
            <div className="bg-sacco-mist rounded-xl p-6 mb-8 flex items-center gap-4">
              <div className="bg-sacco-light text-white w-16 h-16 rounded-full flex items-center justify-center">
                {accountInfo.icon}
              </div>
              <div>
                <h3 className="text-xl font-black text-sacco-dark">{accountInfo.title}</h3>
                <p className="text-gray-600">You selected this account type for registration</p>
              </div>
            </div>

            {/* Agreement Checkboxes */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <FileText size={24} className="text-sacco-light" />
                IMPORTANT: TERMS & CONDITIONS BEFORE PROCEEDING
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <input
                    type="checkbox"
                    id="dataProtection"
                    checked={agreements.dataProtection}
                    onChange={() => handleAgreementChange('dataProtection')}
                    className="w-5 h-5 text-sacco-light rounded focus:ring-sacco-light mt-1"
                  />
                  <label htmlFor="dataProtection" className="text-gray-700 text-sm">
                    I agree to the <a href="/privacy" target="_blank" className="text-sacco-light hover:text-sacco-dark underline font-medium">Data Protection Act, 2019</a> compliance terms and consent to the collection and processing of my personal data.
                  </label>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-sacco-mist rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreements.terms}
                    onChange={() => handleAgreementChange('terms')}
                    className="w-5 h-5 text-sacco-light rounded focus:ring-sacco-light mt-1"
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I have read and agree to the <a href="/terms" target="_blank" className="text-sacco-light hover:text-sacco-dark underline font-medium">Thamani Sacco Terms & Conditions</a> and all governing policies.
                  </label>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <input
                    type="checkbox"
                    id="regulatory"
                    checked={agreements.regulatory}
                    onChange={() => handleAgreementChange('regulatory')}
                    className="w-5 h-5 text-sacco-light rounded focus:ring-sacco-light mt-1"
                  />
                  <label htmlFor="regulatory" className="text-gray-700 text-sm">
                    I acknowledge that Thamani Sacco Society Limited is regulated by <a href="/regulatory" target="_blank" className="text-sacco-light hover:text-sacco-dark underline font-medium">SASRA</a> and I agree to comply with all regulatory requirements.
                  </label>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-6">You must agree to all terms above to proceed with the account application.</p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/membership/account-type"
                  className="bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gray-300 transition-all"
                >
                  Back
                </Link>
                <button
                  onClick={() => router.push(`/membership/form?type=${accountType}`)}
                  disabled={!canProceed}
                  className={`px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3 ${
                    canProceed 
                      ? 'bg-sacco-dark text-white hover:bg-sacco-light' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Proceed to Application
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-black text-sacco-dark mb-2">Important Notice</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  By proceeding with this application, you confirm that you have read, understood, and agree to be bound by all the terms and conditions outlined above. Your application will be processed in accordance with Thamani Sacco's policies and applicable regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
