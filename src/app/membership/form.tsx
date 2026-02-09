"use client";

import React, { useState } from 'react';
import { 
  User, Users, Building, FileText, Upload, CreditCard, Smartphone, 
  Globe, CheckCircle2, ArrowRight, ShieldCheck, Calculator, Award,
  TrendingUp, HandHeart
} from 'lucide-react';

interface FormData {
  // Personal Details
  idNumber: string;
  profession: string;
  preferredBranch: string;
  dateOfBirth: string;
  fullName: string;
  gender: string;
  maritalStatus: string;
  kraPin: string;
  mobileNumber: string;
  email: string;
  county: string;
  village: string;
  
  // Next of Kin
  kinRelationship: string;
  kinName: string;
  kinMobile: string;
  kinEmail: string;
  kinIdNumber: string;
  
  // Employment
  employerName: string;
  payrollNumber: string;
  employmentTerms: string;
  
  // Services
  mobileBanking: boolean;
  atm: boolean;
  membersPortal: boolean;
  agencyBanking: boolean;
  
  // Agreement
  agreeToTerms: boolean;
}

export default function MembershipForm() {
  const [formData, setFormData] = useState<FormData>({
    idNumber: '', profession: '', preferredBranch: '', dateOfBirth: '', fullName: '',
    gender: '', maritalStatus: '', kraPin: '', mobileNumber: '', email: '', county: '',
    village: '', kinRelationship: '', kinName: '', kinMobile: '', kinEmail: '',
    kinIdNumber: '', employerName: '', payrollNumber: '', employmentTerms: '',
    mobileBanking: false, atm: false, membersPortal: false, agencyBanking: false,
    agreeToTerms: false
  });

  const branches = ["Chuka (HQ)", "Chogoria", "Marima", "Kibugua", "Kathwana", "Cheera"];
  const counties = ["Tharaka Nithi", "Meru", "Embu", "Isiolo", "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kitui"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Membership application submitted:', formData);
    alert('Membership application submitted successfully! We will contact you within 24 hours.');
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1a3c34] pt-44 pb-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#ffde21] text-[#1a3c34] px-4 py-2 rounded-lg font-black text-sm uppercase tracking-widest inline-block mb-6">
            Online Registration
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Membership <span className="text-[#ffde21]">Registration</span>
          </h1>
          <p className="text-white/80">Complete the form below to join Thamani Sacco</p>
        </div>
      </section>

      {/* Payment Guide */}
      <section className="bg-[#ffde21] py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-black text-[#1a3c34] mb-4 flex items-center gap-2">
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
            
            {/* 1.0 Personal Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#1a3c34] mb-6 flex items-center gap-2">
                <User size={24} className="text-[#3b93a0]" />
                1.0 PERSONAL DETAILS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    ID No *
                  </label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter ID Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Profession *
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Profession"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Preferred Sacco Branch *
                  </label>
                  <select
                    name="preferredBranch"
                    value={formData.preferredBranch}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select Branch</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Full Name (As per ID) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Marital Status *
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    KRA PIN *
                  </label>
                  <input
                    type="text"
                    name="kraPin"
                    value={formData.kraPin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter KRA PIN"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Current County of Residence *
                  </label>
                  <select
                    name="county"
                    value={formData.county}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select County</option>
                    {counties.map(county => (
                      <option key={county} value={county}>{county}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Village *
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Village"
                  />
                </div>
              </div>
            </div>

            {/* 2.0 Next of Kin Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#1a3c34] mb-6 flex items-center gap-2">
                <Users size={24} className="text-[#3b93a0]" />
                2.0 NEXT OF KIN DETAILS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Relationship *
                  </label>
                  <select
                    name="kinRelationship"
                    value={formData.kinRelationship}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select Relation</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Next of Kin Name *
                  </label>
                  <input
                    type="text"
                    name="kinName"
                    value={formData.kinName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Next of Kin Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Next of Kin Mobile *
                  </label>
                  <input
                    type="tel"
                    name="kinMobile"
                    value={formData.kinMobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Next of Kin Email
                  </label>
                  <input
                    type="email"
                    name="kinEmail"
                    value={formData.kinEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* 3.0 Identification Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#1a3c34] mb-6 flex items-center gap-2">
                <FileText size={24} className="text-[#3b93a0]" />
                3.0 IDENTIFICATION DETAILS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['ID Card Front', 'ID Card Back', 'KRA PIN', 'Passport Photo'].map((label, index) => (
                  <div key={index}>
                    <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                      {label}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3b93a0] transition-colors">
                      <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drop a file here or click to upload
                      </p>
                      <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
                      <input
                        type="file"
                        className="hidden"
                        id={`file-${index}`}
                        accept="image/*,.pdf"
                      />
                      <label
                        htmlFor={`file-${index}`}
                        className="inline-block mt-2 bg-[#fdfcf7] text-[#1a3c34] px-4 py-2 rounded-lg text-sm font-black uppercase tracking-wider cursor-pointer hover:bg-[#ffde21] transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.0 Employment Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#1a3c34] mb-6 flex items-center gap-2">
                <Building size={24} className="text-[#3b93a0]" />
                4.0 EMPLOYMENT DETAILS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Name of Employer
                  </label>
                  <input
                    type="text"
                    name="employerName"
                    value={formData.employerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Employer Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Payroll No
                  </label>
                  <input
                    type="text"
                    name="payrollNumber"
                    value={formData.payrollNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                    placeholder="Enter Payroll Number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                    Terms of Employment (Permanent/Contract)
                  </label>
                  <select
                    name="employmentTerms"
                    value={formData.employmentTerms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0]"
                  >
                    <option value="">Select Employment Terms</option>
                    <option value="permanent">Permanent</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="self-employed">Self Employed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 5.0 Alternative Channel Registration */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#1a3c34] mb-6 flex items-center gap-2">
                <Smartphone size={24} className="text-[#3b93a0]" />
                5.0 ALTERNATIVE CHANNEL REGISTRATION
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'mobileBanking', label: 'Mobile Banking', icon: <Smartphone size={20} /> },
                  { name: 'atm', label: 'ATM', icon: <CreditCard size={20} /> },
                  { name: 'membersPortal', label: 'Members Portal', icon: <Globe size={20} /> },
                  { name: 'agencyBanking', label: 'Agency Banking', icon: <Building size={20} /> }
                ].map((service) => (
                  <label key={service.name} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#fdfcf7] transition-colors">
                    <input
                      type="checkbox"
                      name={service.name}
                      checked={formData[service.name as keyof FormData] as boolean}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-[#3b93a0] border-gray-300 rounded focus:ring-[#3b93a0]"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-[#3b93a0]">{service.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{service.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-[#3b93a0] border-gray-300 rounded focus:ring-[#3b93a0] mt-1"
                />
                <span className="text-sm text-gray-700">
                  Yes, I agree with the <a href="#" className="text-[#3b93a0] font-black underline">Privacy Policy</a> and <a href="#" className="text-[#3b93a0] font-black underline">Terms and Conditions</a>
                </span>
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#ffde21] text-[#1a3c34] py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                <CheckCircle2 size={20} />
                Apply for Membership
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 bg-gray-100 text-[#1a3c34] py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-all"
              >
                Start Over
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
