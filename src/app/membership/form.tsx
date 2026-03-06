"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  User, Users, Building, FileText, Upload, CreditCard, Smartphone, 
  Globe, CheckCircle2, ShieldCheck, X, Lock, Eye, UserCheck, 
  Database, Mail, MapPin, Scale, Info, AlertTriangle, ArrowRight
} from 'lucide-react';

interface FormData {
  // Membership Type
  membershipType: string;
  
  // Personal Details
  fullName: string; idNumber: string; passportNumber: string; nationality: string; kraPin: string;
  dateOfBirth: string; district: string; location: string; subLocation: string; county: string;
  division: string; village: string; address: string; postalCode: string; officePhone: string;
  mobileNumber: string; email: string; profession: string; employerName: string;
  employmentLocation: string; employerAddress: string; preferredBranch: string;
  
  // Next of Kin
  kinRelationship: string; kinName: string; kinMobile: string; kinEmail: string; kinIdNumber: string; kinAddress: string;
  
  // Introducer
  introducerName: string; introducerId: string; introducerBox: string; introducerPhone: string; 
  introducerAccount: string; introducerRelationship: string;
  
  // Additional Questions
  hasOtherAccounts: 'yes' | 'no';
  otherAccount1: string; otherBank1: string; otherBranch1: string;
  otherAccount2: string; otherBank2: string; otherBranch2: string;
  whyChooseThamani: string;
  
  // SMS Banking
  smsMobile: string; smsAccount: string; smsRegisteredName: string;
  
  // Employment
  payrollNumber: string; employmentTerms: string;
  
  // ATM Services
  atmCardNumber: string;
  
  // Signature Authority
  signatureAuthority: string; signatureAuthorityOther: string;
  
  // Business Registration
  registrationDate: string; businessPostalCode: string; businessPhone: string;
  
  // Directors (for business membership)
  director1: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string; };
  director2: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string; };
  director3: { fullName: string; idNumber: string; pinNumber: string; mobileNumber: string; email: string; };
  
  // Joint Applicants (for joint membership)
  applicants: Array<{
    fullName: string; idNumber: string; passportNumber: string; nationality: string; kraPin: string;
    dateOfBirth: string; district: string; location: string; subLocation: string; county: string;
    division: string; village: string; address: string; postalCode: string; officePhone: string;
    mobileNumber: string; email: string; profession: string; employerName: string;
    employmentLocation: string; employerAddress: string;
  }>;
  
  // Business Details (for business membership)
  businessName: string; businessType: string; registrationNumber: string; businessAddress: string;
  businessMobile: string; businessEmail: string;
  
  // Services
  mobileBanking: boolean; atm: boolean; membersPortal: boolean; agencyBanking: boolean;
  
  // Agreement
  agreeToTerms: boolean; agreeToDataProtection: boolean; agreeToRegulatory: boolean;
}

export default function MembershipForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accountType, setAccountType] = useState('individual');

  useEffect(() => {
    // Get account type from URL
    const type = searchParams.get('type');
    if (type && ['individual', 'joint', 'business'].includes(type)) {
      setAccountType(type);
    }
  }, [searchParams]);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [canProceedToApplication, setCanProceedToApplication] = useState(true); // Set to true since user already agreed on previous page
  
  const [formData, setFormData] = useState<FormData>({
    membershipType: accountType === 'individual' ? 'ordinary' : accountType === 'joint' ? 'joint' : 'business',
    fullName: '', idNumber: '', passportNumber: '', nationality: '', kraPin: '',
    dateOfBirth: '', district: '', location: '', subLocation: '', county: '',
    division: '', village: '', address: '', postalCode: '', officePhone: '',
    mobileNumber: '', email: '', profession: '', employerName: '',
    employmentLocation: '', employerAddress: '', preferredBranch: '',
    kinRelationship: '', kinName: '', kinMobile: '', kinEmail: '', kinIdNumber: '', kinAddress: '',
    introducerName: '', introducerId: '', introducerBox: '', introducerPhone: '', 
    introducerAccount: '', introducerRelationship: '',
    hasOtherAccounts: 'no',
    otherAccount1: '', otherBank1: '', otherBranch1: '',
    otherAccount2: '', otherBank2: '', otherBranch2: '',
    whyChooseThamani: '',
    mobileBanking: false, atm: false, membersPortal: false, agencyBanking: false,
    smsMobile: '', smsAccount: '', smsRegisteredName: '',
    atmCardNumber: '',
    signatureAuthority: '', signatureAuthorityOther: '',
    registrationDate: '', businessPostalCode: '', businessPhone: '',
    director1: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    director2: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    director3: { fullName: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    payrollNumber: '', employmentTerms: '',
    applicants: [],
    businessName: '', businessType: '', registrationNumber: '', businessAddress: '',
    businessMobile: '', businessEmail: '',
    agreeToTerms: false, agreeToDataProtection: false, agreeToRegulatory: false
  });

  const branches = ["Chuka (HQ)", "Chogoria", "Marima", "Kibugua", "Kathwana", "Cheera"];
  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", 
    "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", 
    "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", 
    "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", 
    "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ].sort(); // Full 47 counties, sorted alphabetically

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.') || name.includes('[')) {
      // Handle nested object updates
      const keys = name.replace(/[\[\]]/g, '.').split('.').filter(Boolean);
      setFormData(prev => {
        const newData = { ...prev };
        let current: any = newData;
        
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        return newData;
      });
    } else {
      // Handle direct property updates
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
      
      // Check if all agreements are checked
      if (name === 'agreeToDataProtection' || name === 'agreeToTerms' || name === 'agreeToRegulatory') {
        const isChecked = (e.target as HTMLInputElement).checked;
        const updatedFormData = {
          ...formData,
          [name]: isChecked
        };
        
        // Update canProceedToApplication based on all three checkboxes
        setCanProceedToApplication(
          updatedFormData.agreeToDataProtection && 
          updatedFormData.agreeToTerms && 
          updatedFormData.agreeToRegulatory
        );
      }
    }
  };

  const addApplicant = () => {
    setFormData(prev => ({
      ...prev,
      applicants: [...prev.applicants, {
        fullName: '', idNumber: '', passportNumber: '', nationality: '', kraPin: '',
        dateOfBirth: '', district: '', location: '', subLocation: '', county: '',
        division: '', village: '', address: '', postalCode: '', officePhone: '',
        mobileNumber: '', email: '', profession: '', employerName: '',
        employmentLocation: '', employerAddress: ''
      }]
    }));
  };

  const removeApplicant = (index: number) => {
    setFormData(prev => ({
      ...prev,
      applicants: prev.applicants.filter((_, i) => i !== index
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Conditions to continue.");
      return;
    }
    console.log('Membership application submitted:', formData);
    alert('Membership application submitted successfully! We will contact you within 24 hours.');
  };

  return (
    <main className="bg-white min-h-screen relative">
      {/* Header */}
      <section className="bg-[#1a3c34] pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sacco-accent text-sacco-dark px-4 py-2 rounded-lg font-black text-sm uppercase tracking-widest inline-block mb-6">
            Account Application
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            {accountType === 'individual' ? 'Individual' : accountType === 'joint' ? 'Joint' : 'Business'} <span className="text-sacco-accent">Account</span>
          </h1>
          <p className="text-white/80">Complete the form below to open your {accountType} account with Thamani Sacco</p>
        </div>
      </section>

      {/* Payment Guide */}
      <section className="bg-sacco-accent py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-black text-sacco-dark mb-4 flex items-center gap-2">
              <CreditCard size={24} /> PAYMENT GUIDE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="font-bold">Pay KES 200 through Paybill 170573</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="font-bold">Account No: Your ID Number</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1.0 THE ACCOUNT */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <FileText size={24} className="text-sacco-light" />
                1.0 THE ACCOUNT
              </h3>
              <div className="bg-sacco-mist p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  I wish to open an account at Thamani Sacco Society Ltd and undertake to comply, observe and be bound by the general terms & conditions and tariffs made by the Sacco, in force and as amended from time to time pertaining to such account.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">TYPE OF ACCOUNT *</label>
                  <select name="accountType" value={accountType} disabled className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-600">
                    <option value="individual">Individual Account</option>
                    <option value="joint">Joint Account</option>
                    <option value="business">Business Account</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* BUSINESS ENTITIES ACCOUNT - Only show for business membership */}
            {accountType === 'business' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <Building size={24} className="text-sacco-light" />
                  5 OTHER BUSINESS ENTITIES ACCOUNT (WHERE APPLICABLE)
                </h3>
                <div className="space-y-6">
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
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Registration/Incorporation certificate Number</label>
                      <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Registration Number" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Date of registration</label>
                      <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Registered office</label>
                      <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Registered Office Address" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Address ………………...…..…………...Code ………………...………..</label>
                      <input type="text" name="businessPostalCode" value={formData.businessPostalCode} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Postal Code" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Telephone: Office</label>
                      <input type="tel" name="businessPhone" value={formData.businessPhone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No …………………….……..…. Email…………………………………….</label>
                      <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Email Address" />
                    </div>
                  </div>
                </div>

                {/* DETAILS OF BUSINESS OWNER / DIRECTORS / REPRESENTATIVES */}
                <div className="mt-8">
                  <h4 className="text-lg font-black text-sacco-dark mb-4">DETAILS OF BUSINESS OWNER / DIRECTORS / REPRESENTATIVES</h4>
                  <div className="space-y-6">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Full Names {num}</label>
                          <input type="text" name={`director${num}.fullName`} value={formData[`director${num as 1 | 2 | 3}`].fullName || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ID/ No {num}</label>
                          <input type="text" name={`director${num}.idNumber`} value={formData[`director${num as 1 | 2 | 3}`].idNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter ID Number" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Pin Number {num}</label>
                          <input type="text" name={`director${num}.pinNumber`} value={formData[`director${num as 1 | 2 | 3}`].pinNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter KRA PIN" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No {num}</label>
                          <input type="tel" name={`director${num}.mobileNumber`} value={formData[`director${num as 1 | 2 | 3}`].mobileNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Email {num}</label>
                          <input type="email" name={`director${num}.email`} value={formData[`director${num as 1 | 2 | 3}`].email || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="email@example.com" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* 1.2 PERSONAL ACCOUNT HOLDER – FIRST APPLICANT */}
            {(accountType === 'individual' || accountType === 'joint') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <User size={24} className="text-sacco-light" />
                  1.2 PERSONAL ACCOUNT HOLDER – FIRST APPLICANT
                </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Full Names *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Full Names" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ID/ No *</label>
                  <input type="text" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter ID Number" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Passport Number</label>
                  <input type="text" name="passportNumber" value={formData.passportNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Passport Number" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Nationality *</label>
                  <input type="text" name="nationality" value={formData.nationality || ''} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Nationality" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Pin Number *</label>
                  <input type="text" name="kraPin" value={formData.kraPin} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter KRA PIN" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Date of Birth *</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">District *</label>
                  <input type="text" name="district" value={formData.district || ''} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter District" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Location *</label>
                  <input type="text" name="location" value={formData.location || ''} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Location" />
                </div>
                <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Sub Location *</label>
                <input type="text" name="subLocation" value={formData.subLocation || ''} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Sub Location" />
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">County *</label>
                  <select name="county" value={formData.county} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]">
                    <option value="">Select County</option>
                    {counties.map(county => <option key={county} value={county}>{county}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Division</label>
                  <input type="text" name="division" value={formData.division || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Division" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Village/Township *</label>
                  <input type="text" name="village" value={formData.village} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Village/Township" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Address</label>
                  <input type="text" name="address" value={formData.address || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Address" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Code</label>
                  <input type="text" name="postalCode" value={formData.postalCode || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Postal Code" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Telephone: Office</label>
                  <input type="tel" name="officePhone" value={formData.officePhone || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Office Phone" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No *</label>
                  <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Occupation *</label>
                  <input type="text" name="profession" value={formData.profession} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Occupation" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Employer</label>
                  <input type="text" name="employerName" value={formData.employerName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Employer Name" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Location of Employment</label>
                  <input type="text" name="employmentLocation" value={formData.employmentLocation || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Employment Location" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Employer's Postal Address</label>
                  <input type="text" name="employerAddress" value={formData.employerAddress || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Employer's Postal Address" />
                </div>
              </div>
            </div>
            )}

            {/* 2.0 NEXT OF KIN/NOMINEE */}
            {accountType === 'individual' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <Users size={24} className="text-sacco-light" />
                  2.0 NEXT OF KIN/NOMINEE
                </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Next of Kin/Nominee *</label>
                  <input type="text" name="kinName" value={formData.kinName} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Next of Kin Name" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Relationship *</label>
                  <select name="kinRelationship" value={formData.kinRelationship} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]">
                    <option value="">Select Relation</option>
                    <option value="spouse">Spouse</option><option value="parent">Parent</option><option value="child">Child</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Next of Kin ID No *</label>
                  <input type="text" name="kinIdNumber" value={formData.kinIdNumber} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Next of Kin ID Number" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Address</label>
                  <input type="text" name="kinAddress" value={formData.kinAddress || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Next of Kin Address" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Tel No *</label>
                  <input type="tel" name="kinMobile" value={formData.kinMobile} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                </div>
              </div>
            </div>
            )}

            {/* Joint Account Applicants - Only show for joint membership */}
            {accountType === 'joint' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <Users size={24} className="text-sacco-light" />
                  JOINT ACCOUNT APPLICANTS
                </h3>
                
                {/* Dynamic Applicants - Successive Layout */}
                <div className="space-y-8">
                  {formData.applicants.map((applicant, index) => (
                    <div key={index} className="border-l-4 border-[#3b93a0] pl-6">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-black text-sacco-dark bg-sacco-mist px-4 py-2 rounded-lg">
                          {index === 0 ? 'SECOND APPLICANT' : `APPLICANT ${index + 2}`}
                        </h4>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeApplicant(index)}
                            className="text-red-600 hover:text-red-800 font-black text-sm bg-red-50 px-3 py-1 rounded-lg"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Full Names *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.fullName`} 
                          value={applicant.fullName} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Full Names" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ID/ No *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.idNumber`} 
                          value={applicant.idNumber} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter ID Number" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Passport Number</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.passportNumber`} 
                          value={applicant.passportNumber || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Passport Number" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Nationality *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.nationality`} 
                          value={applicant.nationality || ''} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Nationality" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Pin Number *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.kraPin`} 
                          value={applicant.kraPin} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter KRA PIN" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Date of Birth *</label>
                        <input 
                          type="date" 
                          name={`applicants.${index}.dateOfBirth`} 
                          value={applicant.dateOfBirth} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">District *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.district`} 
                          value={applicant.district || ''} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter District" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Location *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.location`} 
                          value={applicant.location || ''} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Location" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Sub Location *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.subLocation`} 
                          value={applicant.subLocation || ''} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Sub Location" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">County *</label>
                        <select 
                          name={`applicants.${index}.county`} 
                          value={applicant.county} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                        >
                          <option value="">Select County</option>
                          {counties.map(county => <option key={county} value={county}>{county}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Division</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.division`} 
                          value={applicant.division || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Division" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Village/Township *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.village`} 
                          value={applicant.village} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Village/Township" 
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Address</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.address`} 
                          value={applicant.address || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Address" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Code</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.postalCode`} 
                          value={applicant.postalCode || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Postal Code" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Telephone: Office</label>
                        <input 
                          type="tel" 
                          name={`applicants.${index}.officePhone`} 
                          value={applicant.officePhone || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Office Phone" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile No *</label>
                        <input 
                          type="tel" 
                          name={`applicants.${index}.mobileNumber`} 
                          value={applicant.mobileNumber} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="+254 700 000 000" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Email *</label>
                        <input 
                          type="email" 
                          name={`applicants.${index}.email`} 
                          value={applicant.email} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="email@example.com" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Occupation *</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.profession`} 
                          value={applicant.profession} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Occupation" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Employer</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.employerName`} 
                          value={applicant.employerName || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Employer Name" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Location of Employment</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.employmentLocation`} 
                          value={applicant.employmentLocation || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Employment Location" 
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Employer's Postal Address</label>
                        <input 
                          type="text" 
                          name={`applicants.${index}.employerAddress`} 
                          value={applicant.employerAddress || ''} 
                          onChange={handleInputChange} 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" 
                          placeholder="Enter Employer's Postal Address" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                
                {/* Add More Applicants Button */}
                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={addApplicant}
                    className="bg-[#3b93a0] text-white px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wider hover:bg-[#1a3c34] transition-all flex items-center gap-2"
                  >
                    <Users size={20} />
                    Add More Applicants
                  </button>
                </div>
              </div>
            )}

            {/* 1.3 INTRODUCER - Only show for individual and joint membership */}
            {(accountType === 'individual' || accountType === 'joint') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <Users size={24} className="text-sacco-light" />
                  1.3 INTRODUCER
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Full Names *</label>
                    <input type="text" name="introducerName" value={formData.introducerName || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Introducer Full Names" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ID / No *</label>
                    <input type="text" name="introducerId" value={formData.introducerId || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Introducer ID Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">P.O. Box</label>
                    <input type="text" name="introducerBox" value={formData.introducerBox || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter P.O. Box" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Telephone No</label>
                    <input type="tel" name="introducerPhone" value={formData.introducerPhone || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Telephone Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Account No</label>
                    <input type="text" name="introducerAccount" value={formData.introducerAccount || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Account Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Relationship</label>
                    <input type="text" name="introducerRelationship" value={formData.introducerRelationship || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Relationship" />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Questions */}
            {(accountType === 'individual' || accountType === 'joint') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <FileText size={24} className="text-sacco-light" />
                  ADDITIONAL QUESTIONS
                </h3>
              <div className="space-y-4">
                <div className="bg-sacco-mist p-4 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Do you have any other Account(s) with Thamani Sacco or any other Financial Institution? *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasOtherAccounts" value="yes" checked={formData.hasOtherAccounts === 'yes'} onChange={handleInputChange} className="text-sacco-light" />
                        <span className="text-sm">YES</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasOtherAccounts" value="no" checked={formData.hasOtherAccounts === 'no'} onChange={handleInputChange} className="text-sacco-light" />
                        <span className="text-sm">NO</span>
                      </label>
                    </div>
                  </div>
                  {formData.hasOtherAccounts === 'yes' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Account Number</label>
                          <input type="text" name="otherAccount1" value={formData.otherAccount1 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Account Number" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Bank</label>
                          <input type="text" name="otherBank1" value={formData.otherBank1 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Bank Name" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Branch</label>
                          <input type="text" name="otherBranch1" value={formData.otherBranch1 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Branch" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Account Number</label>
                          <input type="text" name="otherAccount2" value={formData.otherAccount2 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Account Number" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Bank</label>
                          <input type="text" name="otherBank2" value={formData.otherBank2 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Bank Name" />
                        </div>
                        <div>
                          <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Branch</label>
                          <input type="text" name="otherBranch2" value={formData.otherBranch2 || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Branch" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="bg-sacco-mist p-4 rounded-lg">
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Why did you choose Thamani Sacco?</label>
                  <textarea 
                    name="whyChooseThamani" 
                    value={formData.whyChooseThamani || ''} 
                    onChange={handleInputChange} 
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Explain why you chose Thamani Sacco"
                  />
                </div>
              </div>
              </div>
            )}

            {/* 3.0 SMS BANKING SERVICE */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <Smartphone size={24} className="text-sacco-light" />
                3.0 SMS BANKING SERVICE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Sms Alerts: Mobile No</label>
                  <input type="tel" name="smsMobile" value={formData.smsMobile || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="+254 700 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Account No</label>
                  <input type="text" name="smsAccount" value={formData.smsAccount || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Account Number" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">Mobile Registered in the name of</label>
                <input type="text" name="smsRegisteredName" value={formData.smsRegisteredName || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter Registered Name" />
              </div>
            </div>

            {/* 4.0 ATM SERVICES */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <CreditCard size={24} className="text-sacco-light" />
                4.0 ATM SERVICES
              </h3>
              <div>
                <label className="block text-sm font-black text-sacco-dark uppercase tracking-wider mb-2">ATM Card No</label>
                <input type="text" name="atmCardNumber" value={formData.atmCardNumber || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]" placeholder="Enter ATM Card Number" />
              </div>
            </div>

            
            
            {/* 2.0 SIGNATURE AUTHORITY OR ACCOUNT MANDATE - Only show for joint and business accounts */}
            {(accountType === 'joint' || accountType === 'business') && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                  <FileText size={24} className="text-sacco-light" />
                  2.0 SIGNATURE AUTHORITY OR ACCOUNT MANDATE (Tick as appropriate)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="signatureAuthority" value="singly" onChange={handleInputChange} className="text-sacco-light" />
                    <span className="text-sm">Singly</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="signatureAuthority" value="either-to-sign" onChange={handleInputChange} className="text-sacco-light" />
                    <span className="text-sm">Either to Sign</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="signatureAuthority" value="all-jointly" onChange={handleInputChange} className="text-sacco-light" />
                    <span className="text-sm">All of us jointly</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="signatureAuthority" value="any-two" onChange={handleInputChange} className="text-sacco-light" />
                    <span className="text-sm">Any two to sign</span>
                  </label>
                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="signatureAuthority" value="other" onChange={handleInputChange} className="text-sacco-light" />
                      <span className="text-sm">Other (Specify)</span>
                    </label>
                    <input type="text" name="signatureAuthorityOther" value={formData.signatureAuthorityOther || ''} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] mt-2" placeholder="Specify other signature authority" />
                  </div>
                </div>
              </div>
            )}

            {/* 5.0 DECLARATION */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <FileText size={24} className="text-sacco-light" />
                5.0 DECLARATION
              </h3>
              <div className="bg-sacco-mist p-4 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  I / We confirm that the information provided herein and the disclosures made are true and I /We have read and understood the general terms and conditions and undertake to comply, observe and be bound by the same.
                </p>
              </div>
              
              {/* Signature Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1a3c34] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Full Names (Block Letters) of authorized signatories</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">National ID Number</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Specimen Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1st Applicant</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                    {(accountType === 'joint' || accountType === 'business') && (
                      <>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2nd Applicant</td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">3rd Applicant</td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">4th Applicant</td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                          <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-sacco-dark text-white px-12 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all flex items-center gap-3"
              >
                Submit Application
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3c34] text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sacco-accent font-black text-lg mb-2">THAMANI SAVINGS & CREDIT CO-OPERATIVE SOCIETY LTD</p>
          <p className="text-white/80">"Bridge to wealth"</p>
          <div className="mt-4 text-sm text-white/60">
            <p>P.O. BOX 467, CHUKA, MERU SOUTH</p>
            <p>TEL: 064-630545 | EMAIL: info@thamanisacco.or.ke</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Helper Components */
function ModalLayout({ title, children, close }: { title: string, children: React.ReactNode, close: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a3c34]/95 backdrop-blur-sm">
      <div className="bg-sacco-mist w-full max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
          <h2 className="text-xl font-black text-sacco-dark uppercase tracking-tight">{title}</h2>
          <button onClick={close} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} className="text-gray-400" /></button>
        </div>
        <div className="overflow-y-auto p-8 space-y-6">{children}</div>
        <div className="p-6 bg-white border-t border-gray-200 text-center">
          <button onClick={close} className="bg-[#1a3c34] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#3b93a0] transition-colors">Close and Return</button>
        </div>
      </div>
    </div>
  );
}

function ModalSection({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-2 text-sacco-light font-black uppercase text-xs tracking-widest">
        {icon} <h3>{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed pl-8">{children}</p>
    </section>
  );
}