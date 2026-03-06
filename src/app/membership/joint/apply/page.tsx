"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export default function JointApplyPage() {
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToRegulatory, setAgreedToRegulatory] = useState(false);

  const handleProceed = () => {
    if (agreedToTerms && agreedToRegulatory) {
      router.replace('/membership/joint');
    }
  };

  return (
    <main className="bg-white min-h-screen pt-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-sacco-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black text-sacco-dark uppercase tracking-tighter mb-4">
              Consent Required
            </h1>
            <p className="text-gray-600 text-lg">
              Please review and agree to the following terms before proceeding with your Joint Membership application
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <div className="flex-1">
                  <label htmlFor="terms" className="block font-black text-sacco-dark uppercase tracking-wider mb-2 cursor-pointer">
                    Terms and Conditions
                  </label>
                  <p className="text-gray-600 mb-3">
                    I have read, understood, and agree to the Terms and Conditions of Thamani Sacco
                  </p>
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sacco-light hover:text-sacco-dark font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Full Terms & Conditions
                  </a>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="regulatory"
                  checked={agreedToRegulatory}
                  onChange={(e) => setAgreedToRegulatory(e.target.checked)}
                  className="mt-1 w-5 h-5 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <div className="flex-1">
                  <label htmlFor="regulatory" className="block font-black text-sacco-dark uppercase tracking-wider mb-2 cursor-pointer">
                    Regulatory Compliance
                  </label>
                  <p className="text-gray-600 mb-3">
                    I agree to comply with all regulatory requirements and all applicants will provide accurate information
                  </p>
                  <a
                    href="/regulatory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sacco-light hover:text-sacco-dark font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Regulatory Requirements
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.back()}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all"
            >
              Go Back
            </button>
            <button
              onClick={handleProceed}
              disabled={!agreedToTerms || !agreedToRegulatory}
              className={`flex-1 px-6 py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                agreedToTerms && agreedToRegulatory
                  ? 'bg-sacco-dark text-white hover:bg-sacco-accent'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {agreedToTerms && agreedToRegulatory ? (
                <>
                  <CheckCircle2 size={20} />
                  Proceed to Application
                </>
              ) : (
                'Please Agree to Continue'
              )}
            </button>
          </div>

          {/* Important Notice */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-black text-blue-900 uppercase tracking-wider mb-1">Important Notice</h4>
                <p className="text-blue-800 text-sm">
                  By proceeding, you confirm that all information provided by all applicants will be accurate and you understand that false statements may result in application rejection or legal consequences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
