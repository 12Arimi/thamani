"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Building, FileText, Upload, CreditCard, Smartphone, 
  Globe, CheckCircle2, ShieldCheck, X, Lock, Eye, UserCheck, 
  Database, Mail, MapPin, Scale, Info, AlertTriangle, ArrowRight
} from 'lucide-react';

interface BusinessFormData {
  // Common fields
  fullName: string; idNumber: string; passportNumber: string; nationality: string; kraPin: string;
  dateOfBirth: string; district: string; location: string; subLocation: string; county: string;
  division: string; village: string; address: string; postalCode: string; officePhone: string;
  mobileNumber: string; email: string; profession: string; employerName: string;
  employmentLocation: string; employerAddress: string; preferredBranch: string;
  kinRelationship: string; kinName: string; kinMobile: string; kinEmail: string; kinIdNumber: string; kinAddress: string;
  introducerName: string; introducerId: string; introducerBox: string; introducerPhone: string;
  smsMobile: string; smsAccount: string; smsRegisteredName: string;
  atmCardNumber: string;
  signatureAuthority: string; signatureAuthorityOther: string;
  agreeToTerms: boolean; agreeToDataProtection: boolean; agreeToRegulatory: boolean;
  
  // Business specific fields
  registrationDate: string; businessPostalCode: string; businessPhone: string; businessEmail: string;
  businessName: string; businessType: string; registrationNumber: string; businessAddress: string;
  mobileBanking: boolean;
  
  // Authorized Signatories
  authorizedSignatory1: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  authorizedSignatory2: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  authorizedSignatory3: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  authorizedSignatory4: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  
  // Directors
  director1: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  director2: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  director3: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
  director4: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string };
}

export default function BusinessFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // No need to set account type - this is dedicated business form

  const [formData, setFormData] = useState<BusinessFormData>({
    fullName: '', idNumber: '', passportNumber: '', nationality: '', kraPin: '',
    dateOfBirth: '', district: '', location: '', subLocation: '', county: '',
    division: '', village: '', address: '', postalCode: '', officePhone: '',
    mobileNumber: '', email: '', profession: '', employerName: '',
    employmentLocation: '', employerAddress: '', preferredBranch: '',
    kinRelationship: '', kinName: '', kinMobile: '', kinEmail: '', kinIdNumber: '', kinAddress: '',
    introducerName: '', introducerId: '', introducerBox: '', introducerPhone: '', 
    smsMobile: '', smsAccount: '', smsRegisteredName: '',
    atmCardNumber: '',
    signatureAuthority: '', signatureAuthorityOther: '',
    agreeToTerms: false, agreeToDataProtection: false, agreeToRegulatory: false,
    
    // Business specific fields
    registrationDate: '', businessPostalCode: '', businessPhone: '', businessEmail: '',
    businessName: '', businessType: '', registrationNumber: '', businessAddress: '',
    mobileBanking: false,
    
    // Authorized Signatories
    authorizedSignatory1: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    authorizedSignatory2: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    authorizedSignatory3: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    authorizedSignatory4: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    
    // Directors
    director1: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    director2: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    director3: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    director4: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as any;
    
    // Handle nested object properties (e.g., "authorizedSignatory1.fullName")
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof BusinessFormData] as any),
          [child]: value
        }
      }));
    } else {
      // Handle simple properties
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Business application submitted:', formData);
    // Navigate to success page or dashboard
    router.push('/membership/success');
  };

  return (
    <main className="bg-white min-h-screen pt-24">
      {/* Registration Form */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 5 OTHER BUSINESS ENTITIES ACCOUNT (WHERE APPLICABLE) */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <Building size={24} className="text-sacco-light" />
                5 OTHER BUSINESS ENTITIES ACCOUNT (WHERE APPLICABLE)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Names of Business *</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Business Name" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Registered under *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="sole-proprietorship" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Sole proprietorship</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="partnership" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Partnership</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="company" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Company</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="societies" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Societies</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="group" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Group</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="businessType" value="other" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Other (Specify)</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Registration/Incorporation certificate Number</label>
                  <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Registration Number" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Date of registration</label>
                  <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Registered office</label>
                  <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Registered Office Address" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Address ………………...…..…………...Code ………………...………..</label>
                  <input type="text" name="businessPostalCode" value={formData.businessPostalCode} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Postal Code" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Telephone: Office</label>
                  <input type="tel" name="businessPhone" value={formData.businessPhone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No …………………….……..…. Email…………………………………….</label>
                  <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Email Address" />
                </div>
              </div>

              {/* DETAILS OF BUSINESS OWNER / DIRECTORS / REPRESENTATIVES */}
              <div className="mt-8">
                <h4 className="text-lg font-black text-sacco-dark mb-4">DETAILS OF BUSINESS OWNER / DIRECTORS / REPRESENTATIVES (Tick as applicable)</h4>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">{num}{num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th'} Applicant</label>
                        <input type="text" name={`director${num}.fullName`} value={formData[`director${num as 1 | 2 | 3 | 4}`].fullName || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">National ID Number Specimen</label>
                        <input type="text" name={`director${num}.idNumber`} value={formData[`director${num as 1 | 2 | 3 | 4}`].idNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter ID Number" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Pin Number</label>
                        <input type="text" name={`director${num}.pinNumber`} value={formData[`director${num as 1 | 2 | 3 | 4}`].pinNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter KRA PIN" />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No ………….………….……..…. Email……………………………………..</label>
                        <input type="email" name={`director${num}.email`} value={formData[`director${num as 1 | 2 | 3 | 4}`].email || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Email Address" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2.0 SIGNATURE AUTHORITY OR ACCOUNT MANDATE */}
              <div className="mt-8">
                <h4 className="text-lg font-black text-sacco-dark mb-4">2.0 SIGNATURE AUTHORITY OR ACCOUNT MANDATE (Tick as appropriate)</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="singly" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Singly</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="either-to-sign" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Either to Sign</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="all-of-us-jointly" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">All of us jointly</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="any-two-to-sign" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Any two to sign</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="other" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Other (Specify)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* 3.0 SMS BANKING SERVICE */}
              <div className="mt-8">
                <h4 className="text-lg font-black text-sacco-dark mb-4">3.0 SMS BANKING SERVICE</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="mobileBanking" checked={formData.mobileBanking} onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Sms Alerts: Mobile No …………….…………………..…... Account No ……………..………….……..……………</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile Registered in name of</label>
                    <input type="text" name="smsRegisteredName" value={formData.smsRegisteredName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Name" />
                  </div>
                </div>
              </div>

              {/* 4.0 ATM SERVICES */}
              <div className="mt-8">
                <h4 className="text-lg font-black text-sacco-dark mb-4">4.0 ATM SERVICES</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ATM Card No</label>
                    <input type="text" name="atmCardNumber" value={formData.atmCardNumber} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter ATM Card Number" />
                  </div>
                </div>
              </div>

              {/* 5.0 DECLARATION */}
              <div className="mt-8">
                <h4 className="text-lg font-black text-sacco-dark mb-4">5.0 DECLARATION</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-700 mb-4">
                    I / We confirm that information provided herein and disclosures made are true and I /We have read and understood the general terms and conditions and undertake to comply, observe and be bound by the same.
                  </p>
                  <div className="space-y-4">
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Full Names (Block Letters) of authorized signatories</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-2">
                        <input type="text" name="authorizedSignatory1.fullName" value={formData.authorizedSignatory1.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                        <span className="text-sm">1st Applicant</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="text" name="authorizedSignatory2.fullName" value={formData.authorizedSignatory2.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                        <span className="text-sm">2nd Applicant</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="text" name="authorizedSignatory3.fullName" value={formData.authorizedSignatory3.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                        <span className="text-sm">3rd Applicant</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="text" name="authorizedSignatory4.fullName" value={formData.authorizedSignatory4.fullName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                        <span className="text-sm">4th Applicant</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              onClick={() => router.push('/membership')}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-3 bg-sacco-light text-white rounded-lg hover:bg-sacco-dark transition-colors"
            >
              Submit Business Application
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
