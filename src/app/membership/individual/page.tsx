"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Camera, 
  Upload,
  Eye,
  EyeOff,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Building2,
  Calendar,
  CreditCard,
  ShieldCheck,
  Users
} from 'lucide-react';

interface FormData {
  // Personal Information
  title: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  passportNumber: string;
  nationality: string;
  dateOfBirth: string;
  district: string;
  location: string;
  currentResidence: string;
  county: string;
  division: string;
  subLocation: string;
  villageTownship: string;
  address: string;
  code: string;
  telephoneOffice: string;
  telephoneMobile: string;
  email: string;
  occupation: string;
  employer: string;
  employerEmail: string;
  locationOfEmployment: string;
  employerPostalAddress: string;

  // Next of Kin Information
  nextOfKinName: string;
  nextOfKinRelationship: string;
  nextOfKinIdNumber: string;
  nextOfKinAddress: string;
  nextOfKinTelephone: string;

  // SMS Banking Service
  smsAlerts: boolean;
  mobileNumber: string;
  mobileRegisteredName: string;
  accountNumber: string;

  // ATM Services
  atmCard: boolean;
  atmCardNumber: string;

  // Declaration
  declarationAgreed: boolean;
  authorizedSignatories: string[];
  nationalIdSpecimen: string;
  firstApplicantSignature: string;
}

export default function IndividualApplicationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    title: '',
    firstName: '',
    lastName: '',
    idNumber: '',
    passportNumber: '',
    nationality: '',
    dateOfBirth: '',
    district: '',
    location: '',
    currentResidence: '',
    county: '',
    division: '',
    subLocation: '',
    villageTownship: '',
    address: '',
    code: '',
    telephoneOffice: '',
    telephoneMobile: '',
    email: '',
    occupation: '',
    employer: '',
    employerEmail: '',
    locationOfEmployment: '',
    employerPostalAddress: '',

    // Next of Kin Information
    nextOfKinName: '',
    nextOfKinRelationship: '',
    nextOfKinIdNumber: '',
    nextOfKinAddress: '',
    nextOfKinTelephone: '',

    // SMS Banking Service
    smsAlerts: false,
    mobileNumber: '',
    mobileRegisteredName: '',
    accountNumber: '',

    // ATM Services
    atmCard: false,
    atmCardNumber: '',

    // Declaration
    declarationAgreed: false,
    authorizedSignatories: [],
    nationalIdSpecimen: '',
    firstApplicantSignature: '',
  });

  const totalSteps = 6;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit form
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    router.push('/membership');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Title</label>
                <select 
                  name="title" 
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                >
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Full Names</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">ID/No</label>
                <input 
                  type="text" 
                  name="idNumber" 
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  placeholder="ID Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Passport Number</label>
                <input 
                  type="text" 
                  name="passportNumber" 
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  placeholder="Passport Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Nationality</label>
                <input 
                  type="text" 
                  name="nationality" 
                  value={formData.nationality}
                  onChange={handleInputChange}
                  placeholder="Nationality" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">District</label>
                <input 
                  type="text" 
                  name="district" 
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="District" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Location</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Current Residence</label>
                <input 
                  type="text" 
                  name="currentResidence" 
                  value={formData.currentResidence}
                  onChange={handleInputChange}
                  placeholder="Current Residence" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">County</label>
                <input 
                  type="text" 
                  name="county" 
                  value={formData.county}
                  onChange={handleInputChange}
                  placeholder="County" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">District</label>
                <input 
                  type="text" 
                  name="district" 
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="District" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Division</label>
                <input 
                  type="text" 
                  name="division" 
                  value={formData.division}
                  onChange={handleInputChange}
                  placeholder="Division" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Sub Location</label>
                <input 
                  type="text" 
                  name="subLocation" 
                  value={formData.subLocation}
                  onChange={handleInputChange}
                  placeholder="Sub Location" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Village/Township</label>
                <input 
                  type="text" 
                  name="villageTownship" 
                  value={formData.villageTownship}
                  onChange={handleInputChange}
                  placeholder="Village/Township" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Address</label>
              <textarea 
                name="address" 
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Full Address" 
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Code</label>
                <input 
                  type="text" 
                  name="code" 
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="Code" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Telephone: Office</label>
                <input 
                  type="tel" 
                  name="telephoneOffice" 
                  value={formData.telephoneOffice}
                  onChange={handleInputChange}
                  placeholder="Office Telephone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Mobile No</label>
                <input 
                  type="tel" 
                  name="telephoneMobile" 
                  value={formData.telephoneMobile}
                  onChange={handleInputChange}
                  placeholder="Mobile Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Occupation</label>
                <input 
                  type="text" 
                  name="occupation" 
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="Occupation" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Employer</label>
                <input 
                  type="text" 
                  name="employer" 
                  value={formData.employer}
                  onChange={handleInputChange}
                  placeholder="Employer Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  name="employerEmail" 
                  value={formData.employerEmail}
                  onChange={handleInputChange}
                  placeholder="Employer Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Location of Employment</label>
                <input 
                  type="text" 
                  name="locationOfEmployment" 
                  value={formData.locationOfEmployment}
                  onChange={handleInputChange}
                  placeholder="Location of Employment" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Employer's Postal Address</label>
              <textarea 
                name="employerPostalAddress" 
                value={formData.employerPostalAddress}
                onChange={handleInputChange}
                placeholder="Employer Postal Address" 
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Next of Kin Information</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Next of Kin/Nominee</label>
              <input 
                type="text" 
                name="nextOfKinName" 
                value={formData.nextOfKinName}
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Relationship</label>
              <select 
                name="nextOfKinRelationship" 
                value={formData.nextOfKinRelationship}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              >
                <option value="">Select Relationship</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="friend">Friend</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Next of Kin ID No</label>
              <input 
                type="text" 
                name="nextOfKinIdNumber" 
                value={formData.nextOfKinIdNumber}
                onChange={handleInputChange}
                placeholder="ID Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Address</label>
              <textarea 
                name="nextOfKinAddress" 
                value={formData.nextOfKinAddress}
                onChange={handleInputChange}
                placeholder="Full Address" 
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Tel No</label>
              <input 
                type="tel" 
                name="nextOfKinTelephone" 
                value={formData.nextOfKinTelephone}
                onChange={handleInputChange}
                placeholder="Telephone Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">SMS Banking Service</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="smsAlerts"
                  name="smsAlerts"
                  checked={formData.smsAlerts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <label htmlFor="smsAlerts" className="text-sm font-medium text-gray-700">
                  SMS Alerts: Mobile No
                </label>
              </div>
              <input 
                type="text" 
                name="mobileNumber" 
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="smsAlerts2"
                  name="smsAlerts"
                  checked={formData.smsAlerts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <label htmlFor="smsAlerts2" className="text-sm font-medium text-gray-700">
                  SMS Alerts: Account No
                </label>
              </div>
              <input 
                type="text" 
                name="accountNumber" 
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Account Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Mobile Registered in the name of</label>
              <input 
                type="text" 
                name="mobileRegisteredName" 
                value={formData.mobileRegisteredName}
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">ATM Services</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="atmCard"
                  name="atmCard"
                  checked={formData.atmCard}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <label htmlFor="atmCard" className="text-sm font-medium text-gray-700">
                  ATM Card
                </label>
              </div>
              <input 
                type="text" 
                name="atmCardNumber" 
                value={formData.atmCardNumber}
                onChange={handleInputChange}
                placeholder="ATM Card Number" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Declaration</h3>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-yellow-800">
                  <p className="font-bold mb-2">Important Notice:</p>
                  <p>I confirm that the information provided herein and the disclosures made are true and I have read and understood the general terms and conditions and undertake to comply, observe and be bound by the same.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="declarationAgreed"
                  name="declarationAgreed"
                  checked={formData.declarationAgreed}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <label htmlFor="declarationAgreed" className="text-sm font-medium text-gray-700">
                  I agree to terms and conditions
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Full Names (Block Letters) of authorized signatories</label>
              <textarea 
                name="authorizedSignatories" 
                value={formData.authorizedSignatories.join('\n')}
                onChange={(e) => setFormData(prev => ({ ...prev, authorizedSignatories: e.target.value.split('\n') }))}
                placeholder="Enter names (one per line)" 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">National ID Number Specimen</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input 
                  type="text" 
                  name="nationalIdSpecimen" 
                  value={formData.nationalIdSpecimen}
                  onChange={handleInputChange}
                  placeholder="Enter ID Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">1st Applicant Signature</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input 
                  type="text" 
                  name="firstApplicantSignature" 
                  value={formData.firstApplicantSignature}
                  onChange={handleInputChange}
                  placeholder="Type your full name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Review & Submit</h3>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-green-800 mb-4">Application Summary</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Personal Information:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>ID Number:</strong> {formData.idNumber}</p>
                <p><strong>Mobile:</strong> {formData.telephoneMobile}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Next of Kin:</strong> {formData.nextOfKinName}</p>
                <p><strong>Services Requested:</strong> {formData.atmCard ? 'ATM Card' : 'No ATM Card'}, {formData.smsAlerts ? 'SMS Alerts' : 'No SMS Alerts'}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button 
                type="submit" 
                onClick={handleSubmit}
                className="px-6 py-3 bg-sacco-light text-white rounded-lg hover:bg-sacco-dark transition-colors"
              >
                Submit Application
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="bg-white min-h-screen pt-32">
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-black text-sacco-dark uppercase tracking-tighter">
              Individual Membership Application
            </h1>
            <div className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-sacco-light h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}
          
          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <button 
              type="button" 
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button 
              type="button" 
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className="px-6 py-3 bg-sacco-light text-white rounded-lg hover:bg-sacco-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === totalSteps ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
