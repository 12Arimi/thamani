"use client";

import React from 'react';
import { 
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-sacco-dark pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Terms & <span className="text-sacco-accent">Conditions</span>
          </h1>
          <p className="text-white/80">Thamani Sacco Society Limited - Official Terms & Conditions</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-black text-sacco-dark mb-4">Terms & Conditions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For the purpose of these terms and conditions' Sacco' shall refer to Thamani Sacco Society Limited.
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-gray-700 font-medium leading-relaxed space-y-4">
              <p><strong>1)</strong> For the purpose of these terms and conditions' Sacco' shall refer to Thamani Sacco Society Limited.</p>
              <p><strong>2)</strong> Any person(s) opening an account with the Sacco will be deemed to have read and understood these terms and conditions.</p>
              <p><strong>3)</strong> No account shall be opened by the Sacco unless the account opening form is fully completed and the requisite supporting documents are attached and attested by the required authorities (if any).</p>
              <p><strong>4)</strong> Upon submission of duly completed account opening forms the Sacco will generate an account number for the Member in accordance with the Sacco's policies and procedures on Account Opening.</p>
              <p><strong>5)</strong> The Sacco has a statutory responsibility to apply any applicable tax on all charges on Member's accounts.</p>
              <p><strong>6)</strong> Only valid and acceptable means of identification (Kenyan National Identity Card /International passport) will be required before the Sacco opens any account.</p>
              <p><strong>7)</strong> The Sacco is authorized to affect such orders in respect of the accounts as may be required by any court order or competent authority or agency under the applicable laws of the land.</p>
              <p><strong>8)</strong> Interest on savings and fixed deposits is paid at periodic intervals as determined by the Sacco and /or upon respective maturity dates of such deposits at such rate as may be determined by the Sacco from time to time.</p>
              <p><strong>9)</strong> Upon the Sacco receiving notice of the demise of an individual Member, the Sacco will not be obliged to allow any operation or withdrawal from the account by any person except on production of death certificate and a court order from a court of competent jurisdiction or any other relevant document recognized by law for succession purposes.</p>
              <p><strong>10)</strong> In case of a joint account and one of the account holders dies then the money in the account and any other benefit, interest or obligation relating to that account will revert to the surviving joint holder(s).</p>
              <p><strong>11)</strong> The Sacco will take due care to see that the credit and debit entries are correctly recorded in the accounts of the account holder /depositor. Any discrepancy in the statement of account should be promptly brought to the notice of the Sacco in writing. In the case of any error, the Sacco reserves the right at all times to make adjusting entries to rectify the error without notice and recover any amount wrongly paid or credited to any person together with any accrued interest or profit. However the Sacco shall not be liable for any loss or damage due to such error or any consequential loss arising there from to any party.</p>
              <p><strong>12)</strong> Minimum balance requirement will be notified by the Sacco from time to time. Any failure or omission to maintain such deposit or balance criteria may result in the levy or penalty as deemed fit by the Sacco.</p>
              <p><strong>13)</strong> The Sacco reserves to itself the right to close /suspend with or without prior notice any account which in its opinion is not satisfactorily operated upon, or for any reason whatsoever on the sole discretion of the Sacco.</p>
              <p><strong>14)</strong> Account holder wishing to close the account must surrender ATM card, and any other instruments issued by the Sacco on the account. The account holder will also be liable for account closing charges as in force at the Sacco before he can be paid the last remaining credit if any.</p>
              <p><strong>15)</strong> The Sacco may from time to time revise, amend, delete or supplement any of these terms and conditions whether in whole or part including without limitations the charges levied in respect to its services. Such charges shall be effective from the date specified by the Sacco.</p>
              <p><strong>16)</strong> Where the account holder is issued with an ATM card, mobile phone access codes or any other tool or code for purpose of gaining access to one's account, the account holder undertakes not to transfer the same to any other person and undertakes to exercise due care and attention to ensure safety of the ATM card, mobile phone and PIN.</p>
            </div>

            {/* Final Acknowledgement */}
            <div className="bg-sacco-dark p-12 rounded-2xl text-center text-white">
               <ShieldCheck size={40} className="mx-auto mb-6 text-sacco-accent" />
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Acceptance of Terms</h3>
               <p className="text-white/60 text-sm max-w-md mx-auto mb-8 font-medium">
                 By opening an account with Thamani Sacco, you undertake to comply, observe, and be bound by the Terms & Conditions and Tariffs in force.
               </p>
               <div className="h-[1px] w-20 bg-white/20 mx-auto mb-8"></div>
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sacco-accent">Regulated by the Sacco Societies Regulatory Authority (SASRA)</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}