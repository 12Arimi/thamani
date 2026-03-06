import React from 'react';

export default function RegulatoryCompliance() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-sacco-dark pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Regulatory <span className="text-sacco-accent">Compliance</span>
          </h1>
          <p className="text-white/80">SASRA Regulations and Compliance Requirements</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-black text-sacco-dark mb-4">SASRA Regulations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>SASRA Regulations:</strong> Thamani Sacco Society Limited operates under the supervision of the Sacco Societies Regulatory Authority (SASRA).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">1. Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We operate under the following legal framework:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Sacco Societies Act, Cap. 490B Laws of Kenya</li>
                <li>Sacco Societies (Deposit Protection) Regulations, 2010</li>
                <li>Sacco Societies (Corporate Governance) Guidelines, 2013</li>
                <li>Sacco Societies (Risk Management) Guidelines, 2013</li>
                <li>Sacco Societies (Anti-Money Laundering and Combating Financing of Terrorism) Regulations, 2013</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">2. Anti-Money Laundering (AML) Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We adhere to strict AML and CFT regulations as per:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proceeds of Crime and Anti-Money Laundering Act, 2009</li>
                <li>Central Bank of Kenya AML/CFT Guidelines</li>
                <li>Financial Action Task Force (FATF) Recommendations</li>
                <li>Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) procedures</li>
                <li>Suspicious Transaction Reporting (STR) requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">3. Know Your Customer (KYC) Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As per Central Bank of Kenya guidelines, we implement comprehensive KYC procedures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Verification of customer identity using valid identification documents</li>
                <li>Screening against sanctions lists and politically exposed persons (PEPs)</li>
                <li>Understanding the nature and purpose of customer relationships</li>
                <li>Ongoing monitoring of customer transactions</li>
                <li>Risk-based approach to customer due diligence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">4. Regulatory Reporting</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain regular reporting to regulatory bodies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Monthly and quarterly returns to SASRA</li>
                <li>Annual financial statements and audit reports</li>
                <li>Prudential returns on capital adequacy and liquidity</li>
                <li>Credit risk reports and portfolio quality assessments</li>
                <li>Compliance reports on AML/CFT measures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">5. Capital Adequacy Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain capital levels as per SASRA requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Minimum core capital of Ksh 10 million for deposit-taking Saccos</li>
                <li>Capital adequacy ratio maintained above regulatory minimum</li>
                <li>Regular stress testing and capital planning</li>
                <li>Contingency capital buffers for risk absorption</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">6. Deposit Protection Fund</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Member deposits are protected through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Annual contributions to the Sacco Societies Deposit Protection Fund</li>
                <li>Protection of member deposits up to Ksh 100,000 per member</li>
                <li>Regular monitoring of fund contributions and compliance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">7. Corporate Governance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain high standards of corporate governance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Board of Directors with appropriate qualifications and experience</li>
                <li>Supervisory Committee for oversight functions</li>
                <li>Credit Committee for loan approval processes</li>
                <li>Audit Committee for financial oversight</li>
                <li>Regular board training and capacity building</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">8. Consumer Protection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to protecting our members' interests:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Transparent disclosure of terms and conditions</li>
                <li>Fair and responsible lending practices</li>
                <li>Effective complaints handling mechanisms</li>
                <li>Financial literacy and member education programs</li>
                <li>Protection against unfair business practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">9. Contact Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For regulatory compliance inquiries, please contact:
              </p>
              <div className="bg-sacco-mist p-4 rounded-lg">
                <p className="text-gray-700"><strong>Compliance Officer</strong></p>
                <p className="text-gray-700">Thamani Sacco Society Limited</p>
                <p className="text-gray-700">P.O. BOX 467, CHUKA, MERU SOUTH</p>
                <p className="text-gray-700">TEL: 064-630545</p>
                <p className="text-gray-700">EMAIL: compliance@thamanisacco.or.ke</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
