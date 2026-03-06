import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-sacco-dark pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Privacy <span className="text-sacco-accent">Policy</span>
          </h1>
          <p className="text-white/80">Data Protection Act, 2019 (Kenya) - Your Privacy Rights</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-black text-sacco-dark mb-4">Data Protection Act, 2019 (Kenya) - Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Notice:</strong> Thamani Sacco Society Limited is committed to protecting your personal data in accordance with the Data Protection Act, 2019.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">1. Data Collection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect only necessary personal information for account opening and regulatory compliance purposes. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Full names and identification details</li>
                <li>Contact information (phone, email, address)</li>
                <li>Financial information for account services</li>
                <li>Employment and business details</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">2. Data Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data will be processed lawfully, fairly, and transparently in accordance with the Data Protection Act principles.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Processing is based on legitimate interest and contractual necessity</li>
                <li>Data is used solely for account opening and service provision</li>
                <li>We maintain accurate and up-to-date information</li>
                <li>Processing is limited to what is necessary for our services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">3. Your Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the Data Protection Act, 2019, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">4. Data Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Encryption of sensitive data</li>
                <li>Secure storage systems</li>
                <li>Restricted access to personal information</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">5. Data Sharing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information will not be shared without your consent except as required by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Regulatory authorities (SASRA, Central Bank of Kenya)</li>
                <li>Law enforcement agencies when required</li>
                <li>Credit reference agencies with consent</li>
                <li>Audit and compliance purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">6. Contact Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any data protection concerns or to exercise your rights, please contact:
              </p>
              <div className="bg-sacco-mist p-4 rounded-lg">
                <p className="text-gray-700"><strong>Data Protection Officer</strong></p>
                <p className="text-gray-700">Thamani Sacco Society Limited</p>
                <p className="text-gray-700">P.O. BOX 467, CHUKA, MERU SOUTH</p>
                <p className="text-gray-700">TEL: 064-630545</p>
                <p className="text-gray-700">EMAIL: privacy@thamanisacco.or.ke</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-sacco-dark mb-3">7. Complaints</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe your data protection rights have been violated, you may:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Contact our Data Protection Officer first</li>
                <li>File a complaint with the Office of the Data Protection Commissioner</li>
                <li>Seek legal recourse as provided under the Data Protection Act, 2019</li>
              </ol>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
