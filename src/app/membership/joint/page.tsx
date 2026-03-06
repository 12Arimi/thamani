'use client';

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
  Users,
  Plus,
  UserCheck,
  X
} from 'lucide-react';

interface ApplicantData {
  // Personal Information
  title: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  passportNumber: string;
  nationality: string;
  pinNumber: string;
  dateOfBirth: string;
  district: string;
  location: string;
  subLocation: string;
  currentResidence: {
    county: string;
    district: string;
    division: string;
    location: string;
    subLocation: string;
    villageTownship: string;
    address: string;
    code: string;
  };
  telephone: {
    office: string;
    mobile: string;
    email: string;
  };
  employment: {
    occupation: string;
    employer: string;
    email: string;
    location: string;
    postalAddress: string;
  };
}

interface JointFormData {
  // Account Information
  hasOtherAccounts: boolean;
  otherAccounts: Array<{
    accountNumber: string;
    bank: string;
    branch: string;
  }>;

  // Signature Authority
  signatureAuthority: string;
  signatureAuthorityOther: string;

  // SMS Banking Service
  smsAlerts: boolean;
  mobileNumber: string;
  mobileRegisteredName: string;

  // ATM Services
  atmCard: boolean;
  accountNumber: string;
  atmCardNumber: string;

  // Declaration
  declarationAgreed: boolean;
  authorizedSignatories: string[];

  // Additional Applicants Data
  additionalApplicants: ApplicantData[];

  // Applicants
  firstApplicant: ApplicantData;
  secondApplicant: ApplicantData;
}

// Additional Applicant Form Component
function AdditionalApplicantForm({ 
  applicantNumber, 
  onSubmit, 
  onCancel 
}: { 
  applicantNumber: number; 
  onSubmit: (data: ApplicantData) => void; 
  onCancel: () => void; 
}) {
  const [applicantData, setApplicantData] = useState<ApplicantData>({
    title: '',
    firstName: '',
    lastName: '',
    idNumber: '',
    passportNumber: '',
    nationality: '',
    pinNumber: '',
    dateOfBirth: '',
    district: '',
    location: '',
    subLocation: '',
    currentResidence: {
      county: '',
      district: '',
      division: '',
      location: '',
      subLocation: '',
      villageTownship: '',
      address: '',
      code: ''
    },
    telephone: {
      office: '',
      mobile: '',
      email: ''
    },
    employment: {
      occupation: '',
      employer: '',
      email: '',
      location: '',
      postalAddress: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    
    if (field) {
      setApplicantData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof ApplicantData] as any),
          [field]: value
        }
      }));
    } else {
      setApplicantData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(applicantData);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-bold text-sacco-dark">Applicant {applicantNumber}</h4>
        <button 
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {/* Row 1: Full Names and ID/No */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Full Names</label>
            <input 
              type="text" 
              name="firstName" 
              value={applicantData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter Full Names" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">ID/ No</label>
            <input 
              type="text" 
              name="idNumber" 
              value={applicantData.idNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter ID Number" 
            />
          </div>
        </div>

        {/* Row 2: Passport Number, Nationality, Pin Number */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Passport Number</label>
            <input 
              type="text" 
              name="passportNumber" 
              value={applicantData.passportNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter Passport Number" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Nationality</label>
            <input 
              type="text" 
              name="nationality" 
              value={applicantData.nationality}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter Nationality" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Pin Number</label>
            <input 
              type="text" 
              name="pinNumber" 
              value={applicantData.pinNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter PIN Number" 
            />
          </div>
        </div>

        {/* Row 3: Date of Birth, District, Location, Sub Location */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Date of Birth</label>
            <input 
              type="date" 
              name="dateOfBirth" 
              value={applicantData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
            <input 
              type="text" 
              name="district" 
              value={applicantData.district}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter District" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
            <input 
              type="text" 
              name="location" 
              value={applicantData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter Location" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
            <input 
              type="text" 
              name="subLocation" 
              value={applicantData.subLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
              placeholder="Enter Sub Location" 
            />
          </div>
        </div>

        {/* Current Residence Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h5 className="text-lg font-black text-sacco-dark mb-4">Current residence</h5>
          
          <div className="space-y-4">
            {/* Row 4: County, District, Division, Location */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">County</label>
                <input 
                  type="text" 
                  name="currentResidence.county" 
                  value={applicantData.currentResidence.county}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter County" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
                <input 
                  type="text" 
                  name="currentResidence.district" 
                  value={applicantData.currentResidence.district}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter District" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Division</label>
                <input 
                  type="text" 
                  name="currentResidence.division" 
                  value={applicantData.currentResidence.division}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Division" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
                <input 
                  type="text" 
                  name="currentResidence.location" 
                  value={applicantData.currentResidence.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Location" 
                />
              </div>
            </div>

            {/* Row 5: Sub Location, Village/Township */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
                <input 
                  type="text" 
                  name="currentResidence.subLocation" 
                  value={applicantData.currentResidence.subLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Sub Location" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Village/Township</label>
                <input 
                  type="text" 
                  name="currentResidence.villageTownship" 
                  value={applicantData.currentResidence.villageTownship}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Village/Township" 
                />
              </div>
            </div>

            {/* Row 6: Address, Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Address</label>
                <input 
                  type="text" 
                  name="currentResidence.address" 
                  value={applicantData.currentResidence.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Address" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Code</label>
                <input 
                  type="text" 
                  name="currentResidence.code" 
                  value={applicantData.currentResidence.code}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Postal Code" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="space-y-4">
            {/* Row 7: Telephone: Office, Mobile No, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Telephone: Office</label>
                <input 
                  type="tel" 
                  name="telephone.office" 
                  value={applicantData.telephone.office}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Office Phone" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Mobile No</label>
                <input 
                  type="tel" 
                  name="telephone.mobile" 
                  value={applicantData.telephone.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Mobile Number" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="telephone.email" 
                  value={applicantData.telephone.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Email Address" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Employment Information Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="space-y-4">
            {/* Row 8: Occupation, Employer, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Occupation</label>
                <input 
                  type="text" 
                  name="employment.occupation" 
                  value={applicantData.employment.occupation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Occupation" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer</label>
                <input 
                  type="text" 
                  name="employment.employer" 
                  value={applicantData.employment.employer}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Employer Name" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="employment.email" 
                  value={applicantData.employment.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Employer Email" 
                />
              </div>
            </div>

            {/* Row 9: Location of Employment, Employer's Postal Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location of Employment</label>
                <input 
                  type="text" 
                  name="employment.location" 
                  value={applicantData.employment.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Location of Employment" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer's Postal Address</label>
                <input 
                  type="text" 
                  name="employment.postalAddress" 
                  value={applicantData.employment.postalAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  placeholder="Enter Employer's Postal Address" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button 
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={() => onSubmit(applicantData)}
            className="px-6 py-3 bg-sacco-light text-white rounded-lg hover:bg-sacco-dark transition-colors"
          >
            Add Applicant
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JointApplicationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showAdditionalApplicantForm, setShowAdditionalApplicantForm] = useState(false);
  const [currentAdditionalApplicant, setCurrentAdditionalApplicant] = useState(0);

  const [formData, setFormData] = useState<JointFormData>({
    // Account Information
    hasOtherAccounts: false,
    otherAccounts: [],

    // Signature Authority
    signatureAuthority: 'jointly',
    signatureAuthorityOther: '',

    // SMS Banking Service
    smsAlerts: false,
    mobileNumber: '',
    mobileRegisteredName: '',

    // ATM Services
    atmCard: false,
    accountNumber: '',
    atmCardNumber: '',

    // Declaration
    declarationAgreed: false,
    authorizedSignatories: [],

    // Additional Applicants
    additionalApplicants: [],

    // First Applicant
    firstApplicant: {
      title: '',
      firstName: '',
      lastName: '',
      idNumber: '',
      passportNumber: '',
      nationality: '',
      pinNumber: '',
      dateOfBirth: '',
      district: '',
      location: '',
      subLocation: '',
      currentResidence: {
        county: '',
        district: '',
        division: '',
        location: '',
        subLocation: '',
        villageTownship: '',
        address: '',
        code: ''
      },
      telephone: {
        office: '',
        mobile: '',
        email: ''
      },
      employment: {
        occupation: '',
        employer: '',
        email: '',
        location: '',
        postalAddress: ''
      }
    },

    // Second Applicant
    secondApplicant: {
      title: '',
      firstName: '',
      lastName: '',
      idNumber: '',
      passportNumber: '',
      nationality: '',
      pinNumber: '',
      dateOfBirth: '',
      district: '',
      location: '',
      subLocation: '',
      currentResidence: {
        county: '',
        district: '',
        division: '',
        location: '',
        subLocation: '',
        villageTownship: '',
        address: '',
        code: ''
      },
      telephone: {
        office: '',
        mobile: '',
        email: ''
      },
      employment: {
        occupation: '',
        employer: '',
        email: '',
        location: '',
        postalAddress: ''
      }
    }
  });

  const totalSteps = 9;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const [applicant, field] = name.split('.');
    
    if (applicant === 'firstApplicant' || applicant === 'secondApplicant') {
      const [section, subField] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [applicant]: {
          ...(prev[applicant as keyof JointFormData] as any),
          [section]: {
            ...((prev[applicant as keyof JointFormData] as any)[section] || {}),
            [subField]: value
          }
        }
      }));
    } else if (name.startsWith('otherAccounts.')) {
      const index = parseInt(name.split('.')[1]);
      const fieldName = name.split('.')[2];
      const newAccounts = [...formData.otherAccounts];
      if (!newAccounts[index]) {
        newAccounts[index] = { accountNumber: '', bank: '', branch: '' };
      }
      newAccounts[index] = { ...newAccounts[index], [fieldName]: value };
      setFormData(prev => ({ ...prev, otherAccounts: newAccounts }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
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
    console.log('Joint Application Submitted:', formData);
    alert('Joint application submitted successfully!');
    router.push('/membership');
  };

  const handleAddApplicant = () => {
    setShowAdditionalApplicantForm(true);
    setCurrentAdditionalApplicant(formData.additionalApplicants.length);
  };

  const handleRemoveApplicant = () => {
    if (formData.additionalApplicants.length > 0) {
      setFormData(prev => ({
        ...prev,
        additionalApplicants: prev.additionalApplicants.slice(0, -1)
      }));
    }
  };

  const handleAdditionalApplicantSubmit = (applicantData: ApplicantData) => {
    setFormData(prev => ({
      ...prev,
      additionalApplicants: [...prev.additionalApplicants, applicantData]
    }));
    setShowAdditionalApplicantForm(false);
  };

  const handleAdditionalApplicantCancel = () => {
    setShowAdditionalApplicantForm(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">1.0 THE ACCOUNT</h3>
            
            <div className="bg-sacco-mist p-4 rounded-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                I wish to open an account at Thamani Sacco Society Ltd and undertake to comply, observe and be bound by the general terms & conditions and tariffs made by the Sacco, in force and as amended from time to time pertaining to such account.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h4 className="text-xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <User size={24} className="text-sacco-light" />
                1.2 PERSONAL ACCOUNT HOLDER – FIRST APPLICANT
              </h4>
              
              <div className="space-y-4">
                {/* Row 1: Full Names and ID/No */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Full Names</label>
                    <input 
                      type="text" 
                      name="firstApplicant.firstName" 
                      value={formData.firstApplicant.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Full Names" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">ID/ No</label>
                    <input 
                      type="text" 
                      name="firstApplicant.idNumber" 
                      value={formData.firstApplicant.idNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter ID Number" 
                    />
                  </div>
                </div>

                {/* Row 2: Passport Number, Nationality, Pin Number */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Passport Number</label>
                    <input 
                      type="text" 
                      name="firstApplicant.passportNumber" 
                      value={formData.firstApplicant.passportNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Passport Number" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Nationality</label>
                    <input 
                      type="text" 
                      name="firstApplicant.nationality" 
                      value={formData.firstApplicant.nationality}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Nationality" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Pin Number</label>
                    <input 
                      type="text" 
                      name="firstApplicant.pinNumber" 
                      value={formData.firstApplicant.pinNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter PIN Number" 
                    />
                  </div>
                </div>

                {/* Row 3: Date of Birth, District, Location, Sub Location */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Date of Birth</label>
                    <input 
                      type="date" 
                      name="firstApplicant.dateOfBirth" 
                      value={formData.firstApplicant.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
                    <input 
                      type="text" 
                      name="firstApplicant.district" 
                      value={formData.firstApplicant.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter District" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
                    <input 
                      type="text" 
                      name="firstApplicant.location" 
                      value={formData.firstApplicant.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Location" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
                    <input 
                      type="text" 
                      name="firstApplicant.subLocation" 
                      value={formData.firstApplicant.subLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Sub Location" 
                    />
                  </div>
                </div>

                {/* Current Residence Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h5 className="text-lg font-black text-sacco-dark mb-4">Current residence</h5>
                  
                  <div className="space-y-4">
                    {/* Row 4: County, District, Division, Location */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">County</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.county" 
                          value={formData.firstApplicant.currentResidence.county}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter County" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.district" 
                          value={formData.firstApplicant.currentResidence.district}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter District" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Division</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.division" 
                          value={formData.firstApplicant.currentResidence.division}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Division" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.location" 
                          value={formData.firstApplicant.currentResidence.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Location" 
                        />
                      </div>
                    </div>

                    {/* Row 5: Sub Location, Village/Township */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.subLocation" 
                          value={formData.firstApplicant.currentResidence.subLocation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Sub Location" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Village/Township</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.villageTownship" 
                          value={formData.firstApplicant.currentResidence.villageTownship}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Village/Township" 
                        />
                      </div>
                    </div>

                    {/* Row 6: Address, Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Address</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.address" 
                          value={formData.firstApplicant.currentResidence.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Address" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Code</label>
                        <input 
                          type="text" 
                          name="firstApplicant.currentResidence.code" 
                          value={formData.firstApplicant.currentResidence.code}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Postal Code" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    {/* Row 7: Telephone: Office, Mobile No, Email */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Telephone: Office</label>
                        <input 
                          type="tel" 
                          name="firstApplicant.telephone.office" 
                          value={formData.firstApplicant.telephone.office}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Office Phone" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Mobile No</label>
                        <input 
                          type="tel" 
                          name="firstApplicant.telephone.mobile" 
                          value={formData.firstApplicant.telephone.mobile}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Mobile Number" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                        <input 
                          type="email" 
                          name="firstApplicant.telephone.email" 
                          value={formData.firstApplicant.telephone.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Email Address" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employment Information Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    {/* Row 8: Occupation, Employer, Email */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Occupation</label>
                        <input 
                          type="text" 
                          name="firstApplicant.employment.occupation" 
                          value={formData.firstApplicant.employment.occupation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Occupation" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer</label>
                        <input 
                          type="text" 
                          name="firstApplicant.employment.employer" 
                          value={formData.firstApplicant.employment.employer}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                        <input 
                          type="email" 
                          name="firstApplicant.employment.email" 
                          value={formData.firstApplicant.employment.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer Email" 
                        />
                      </div>
                    </div>

                    {/* Row 9: Location of Employment, Employer's Postal Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location of Employment</label>
                        <input 
                          type="text" 
                          name="firstApplicant.employment.location" 
                          value={formData.firstApplicant.employment.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Location of Employment" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer's Postal Address</label>
                        <input 
                          type="text" 
                          name="firstApplicant.employment.postalAddress" 
                          value={formData.firstApplicant.employment.postalAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer's Postal Address" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h4 className="text-xl font-black text-sacco-dark mb-6 flex items-center gap-2">
                <User size={24} className="text-sacco-light" />
                1.3 PERSONAL ACCOUNT HOLDER – SECOND APPLICANT
              </h4>
              
              <div className="space-y-4">
                {/* Row 1: Full Names and ID/No */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Full Names</label>
                    <input 
                      type="text" 
                      name="secondApplicant.firstName" 
                      value={formData.secondApplicant.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Full Names" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">ID/ No</label>
                    <input 
                      type="text" 
                      name="secondApplicant.idNumber" 
                      value={formData.secondApplicant.idNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter ID Number" 
                    />
                  </div>
                </div>

                {/* Row 2: Passport Number, Nationality, Pin Number */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Passport Number</label>
                    <input 
                      type="text" 
                      name="secondApplicant.passportNumber" 
                      value={formData.secondApplicant.passportNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Passport Number" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Nationality</label>
                    <input 
                      type="text" 
                      name="secondApplicant.nationality" 
                      value={formData.secondApplicant.nationality}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Nationality" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Pin Number</label>
                    <input 
                      type="text" 
                      name="secondApplicant.pinNumber" 
                      value={formData.secondApplicant.pinNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter PIN Number" 
                    />
                  </div>
                </div>

                {/* Row 3: Date of Birth, District, Location, Sub Location */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Date of Birth</label>
                    <input 
                      type="date" 
                      name="secondApplicant.dateOfBirth" 
                      value={formData.secondApplicant.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
                    <input 
                      type="text" 
                      name="secondApplicant.district" 
                      value={formData.secondApplicant.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter District" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
                    <input 
                      type="text" 
                      name="secondApplicant.location" 
                      value={formData.secondApplicant.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Location" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
                    <input 
                      type="text" 
                      name="secondApplicant.subLocation" 
                      value={formData.secondApplicant.subLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      placeholder="Enter Sub Location" 
                    />
                  </div>
                </div>

                {/* Current Residence Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h5 className="text-lg font-black text-sacco-dark mb-4">Current residence</h5>
                  
                  <div className="space-y-4">
                    {/* Row 4: County, District, Division, Location */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">County</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.county" 
                          value={formData.secondApplicant.currentResidence.county}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter County" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">District</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.district" 
                          value={formData.secondApplicant.currentResidence.district}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter District" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Division</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.division" 
                          value={formData.secondApplicant.currentResidence.division}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Division" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.location" 
                          value={formData.secondApplicant.currentResidence.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Location" 
                        />
                      </div>
                    </div>

                    {/* Row 5: Sub Location, Village/Township */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Sub Location</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.subLocation" 
                          value={formData.secondApplicant.currentResidence.subLocation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Sub Location" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Village/Township</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.villageTownship" 
                          value={formData.secondApplicant.currentResidence.villageTownship}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Village/Township" 
                        />
                      </div>
                    </div>

                    {/* Row 6: Address, Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Address</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.address" 
                          value={formData.secondApplicant.currentResidence.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Address" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Code</label>
                        <input 
                          type="text" 
                          name="secondApplicant.currentResidence.code" 
                          value={formData.secondApplicant.currentResidence.code}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Postal Code" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    {/* Row 7: Telephone: Office, Mobile No, Email */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Telephone: Office</label>
                        <input 
                          type="tel" 
                          name="secondApplicant.telephone.office" 
                          value={formData.secondApplicant.telephone.office}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Office Phone" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Mobile No</label>
                        <input 
                          type="tel" 
                          name="secondApplicant.telephone.mobile" 
                          value={formData.secondApplicant.telephone.mobile}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Mobile Number" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                        <input 
                          type="email" 
                          name="secondApplicant.telephone.email" 
                          value={formData.secondApplicant.telephone.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Email Address" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employment Information Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    {/* Row 8: Occupation, Employer, Email */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Occupation</label>
                        <input 
                          type="text" 
                          name="secondApplicant.employment.occupation" 
                          value={formData.secondApplicant.employment.occupation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Occupation" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer</label>
                        <input 
                          type="text" 
                          name="secondApplicant.employment.employer" 
                          value={formData.secondApplicant.employment.employer}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Email</label>
                        <input 
                          type="email" 
                          name="secondApplicant.employment.email" 
                          value={formData.secondApplicant.employment.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer Email" 
                        />
                      </div>
                    </div>

                    {/* Row 9: Location of Employment, Employer's Postal Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Location of Employment</label>
                        <input 
                          type="text" 
                          name="secondApplicant.employment.location" 
                          value={formData.secondApplicant.employment.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Location of Employment" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">Employer's Postal Address</label>
                        <input 
                          type="text" 
                          name="secondApplicant.employment.postalAddress" 
                          value={formData.secondApplicant.employment.postalAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                          placeholder="Enter Employer's Postal Address" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Additional Applicants</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Users className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-blue-800">
                  <p className="font-bold mb-2">Add More Members:</p>
                  <p>You can add additional members to this joint account. Each additional member will fill out their application form here.</p>
                </div>
              </div>
            </div>

            {!showAdditionalApplicantForm ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Current Additional Applicants: {formData.additionalApplicants.length}</h4>
                    <p className="text-sm text-gray-600">Click "Add Applicant" to add more members to this joint account.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      type="button"
                      onClick={handleRemoveApplicant}
                      disabled={formData.additionalApplicants.length === 0}
                      className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus size={16} className="rotate-45" />
                    </button>
                    <button 
                      type="button"
                      onClick={handleAddApplicant}
                      className="px-4 py-2 bg-sacco-light text-white rounded-lg hover:bg-sacco-dark transition-colors flex items-center space-x-2"
                    >
                      <Plus size={16} />
                      <span>Add Applicant</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <AdditionalApplicantForm
                applicantNumber={currentAdditionalApplicant + 3}
                onSubmit={handleAdditionalApplicantSubmit}
                onCancel={handleAdditionalApplicantCancel}
              />
            )}

            {formData.additionalApplicants.length > 0 && (
              <div className="border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Additional Applicants Summary</h4>
                <div className="space-y-2">
                  {formData.additionalApplicants.map((applicant, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <UserCheck className="text-sacco-light" size={20} />
                        <span className="text-sm font-medium text-gray-700">
                          Applicant {index + 3} - {applicant.firstName} {applicant.lastName}
                        </span>
                      </div>
                      <span className="text-xs text-green-600">Completed</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!showAdditionalApplicantForm && formData.additionalApplicants.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <div className="text-sm text-yellow-800">
                    <p className="font-bold mb-2">Ready to proceed?</p>
                    <p>You have {formData.additionalApplicants.length} additional applicant(s). Click "Next" to continue with the joint application process.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Other Account Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="hasOtherAccounts"
                  name="hasOtherAccounts"
                  checked={formData.hasOtherAccounts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-sacco-dark border-gray-300 rounded focus:ring-sacco-light"
                />
                <label htmlFor="hasOtherAccounts" className="text-sm font-medium text-gray-700">
                  Do you have any other Account(s) with Thamani Sacco or any other Financial Institution?
                </label>
              </div>
            </div>

            {formData.hasOtherAccounts && (
              <div className="space-y-4 border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">Account Details</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Account Number</label>
                      <input 
                        type="text" 
                        name="otherAccounts.0.accountNumber" 
                        value={formData.otherAccounts[0]?.accountNumber || ''}
                        onChange={(e) => {
                          const newAccounts = [...formData.otherAccounts];
                          newAccounts[0] = { ...newAccounts[0], accountNumber: e.target.value };
                          setFormData(prev => ({ ...prev, otherAccounts: newAccounts }));
                        }}
                        placeholder="Account Number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Bank</label>
                      <input 
                        type="text" 
                        name="otherAccounts.0.bank" 
                        value={formData.otherAccounts[0]?.bank || ''}
                        onChange={(e) => {
                          const newAccounts = [...formData.otherAccounts];
                          newAccounts[0] = { ...newAccounts[0], bank: e.target.value };
                          setFormData(prev => ({ ...prev, otherAccounts: newAccounts }));
                        }}
                        placeholder="Bank Name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Branch</label>
                      <input 
                        type="text" 
                        name="otherAccounts.0.branch" 
                        value={formData.otherAccounts[0]?.branch || ''}
                        onChange={(e) => {
                          const newAccounts = [...formData.otherAccounts];
                          newAccounts[0] = { ...newAccounts[0], branch: e.target.value };
                          setFormData(prev => ({ ...prev, otherAccounts: newAccounts }));
                        }}
                        placeholder="Branch" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Signature Authority</h3>
            
            <div className="space-y-4">
              <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">SIGNATURE AUTHORITY OR ACCOUNT MANDATE (Tick as appropriate)</label>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="singly"
                    name="signatureAuthority"
                    value="singly"
                    checked={formData.signatureAuthority === 'singly'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sacco-dark border-gray-300 focus:ring-sacco-light"
                  />
                  <label htmlFor="singly" className="text-sm font-medium text-gray-700">
                    Singly (Any one can sign)
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="jointly"
                    name="signatureAuthority"
                    value="jointly"
                    checked={formData.signatureAuthority === 'jointly'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sacco-dark border-gray-300 focus:ring-sacco-light"
                  />
                  <label htmlFor="jointly" className="text-sm font-medium text-gray-700">
                    Jointly (All must sign)
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="either"
                    name="signatureAuthority"
                    value="either"
                    checked={formData.signatureAuthority === 'either'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sacco-dark border-gray-300 focus:ring-sacco-light"
                  />
                  <label htmlFor="either" className="text-sm font-medium text-gray-700">
                    Either or Survivor
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input 
                    type="radio" 
                    id="other"
                    name="signatureAuthority"
                    value="other"
                    checked={formData.signatureAuthority === 'other'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sacco-dark border-gray-300 focus:ring-sacco-light"
                  />
                  <label htmlFor="other" className="text-sm font-medium text-gray-700">
                    Other (Specify)
                  </label>
                </div>
              </div>

              {formData.signatureAuthority === 'other' && (
                <div className="space-y-2">
                  <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Specify Other Signature Authority</label>
                  <input 
                    type="text" 
                    name="signatureAuthorityOther" 
                    value={formData.signatureAuthorityOther}
                    onChange={handleInputChange}
                    placeholder="Specify other signature authority" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 6:
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
                  I would like to receive SMS alerts for my account transactions
                </label>
              </div>
            </div>

            {formData.smsAlerts && (
              <div className="space-y-4 border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">SMS Banking Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobileNumber" 
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="Mobile Number for SMS Alerts" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Registered Name</label>
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
              </div>
            )}
          </div>
        );

      case 7:
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
                  I would like to apply for an ATM card
                </label>
              </div>
            </div>

            {formData.atmCard && (
              <div className="space-y-4 border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">ATM Card Details</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Account Number</label>
                    <input 
                      type="text" 
                      name="accountNumber" 
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="Account Number for ATM Card" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">ATM Card Number</label>
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
              </div>
            )}
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Declaration</h3>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-yellow-800">
                  <p className="font-bold mb-2">Important Notice:</p>
                  <p>I / We confirm that the information provided herein and the disclosures made are true and I /We have read and understood the general terms and conditions and undertake to comply, observe and be bound by the same.</p>
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
                  I agree to the terms and conditions
                </label>
              </div>
            </div>

            {formData.declarationAgreed && (
              <div className="space-y-4 border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">Authorized Signatories</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">First Applicant Signature</label>
                    <input 
                      type="text" 
                      name="authorizedSignatories" 
                      value={formData.authorizedSignatories[0] || ''}
                      onChange={(e) => {
                        const newSignatories = [...formData.authorizedSignatories];
                        newSignatories[0] = e.target.value;
                        setFormData(prev => ({ ...prev, authorizedSignatories: newSignatories }));
                      }}
                      placeholder="Type your full name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Second Applicant Signature</label>
                    <input 
                      type="text" 
                      name="authorizedSignatories" 
                      value={formData.authorizedSignatories[1] || ''}
                      onChange={(e) => {
                        const newSignatories = [...formData.authorizedSignatories];
                        newSignatories[1] = e.target.value;
                        setFormData(prev => ({ ...prev, authorizedSignatories: newSignatories }));
                      }}
                      placeholder="Type your full name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacco-light focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-sacco-dark uppercase tracking-tighter mb-6">Review & Submit</h3>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-green-800 mb-4">Joint Application Summary</h4>
              
              {/* First Applicant */}
              <div className="mb-6">
                <h5 className="font-bold text-gray-800 mb-3">First Applicant</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <p><strong>Name:</strong> {formData.firstApplicant.firstName} {formData.firstApplicant.lastName}</p>
                  <p><strong>ID Number:</strong> {formData.firstApplicant.idNumber}</p>
                  <p><strong>Mobile:</strong> {formData.firstApplicant.telephone.mobile}</p>
                  <p><strong>Email:</strong> {formData.firstApplicant.telephone.email}</p>
                  <p><strong>Occupation:</strong> {formData.firstApplicant.employment.occupation}</p>
                  <p><strong>Employer:</strong> {formData.firstApplicant.employment.employer}</p>
                </div>
              </div>

              {/* Second Applicant */}
              <div className="mb-6">
                <h5 className="font-bold text-gray-800 mb-3">Second Applicant</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <p><strong>Name:</strong> {formData.secondApplicant.firstName} {formData.secondApplicant.lastName}</p>
                  <p><strong>ID Number:</strong> {formData.secondApplicant.idNumber}</p>
                  <p><strong>Mobile:</strong> {formData.secondApplicant.telephone.mobile}</p>
                  <p><strong>Email:</strong> {formData.secondApplicant.telephone.email}</p>
                  <p><strong>Occupation:</strong> {formData.secondApplicant.employment.occupation}</p>
                  <p><strong>Employer:</strong> {formData.secondApplicant.employment.employer}</p>
                </div>
              </div>

              {/* Additional Applicants */}
              {formData.additionalApplicants.length > 0 && (
                <div className="mb-6">
                  <h5 className="font-bold text-gray-800 mb-3">Additional Applicants ({formData.additionalApplicants.length})</h5>
                  {formData.additionalApplicants.map((applicant, index) => (
                    <div key={index} className="mb-3 p-3 bg-white rounded border border-gray-200">
                      <h6 className="font-semibold text-gray-700 mb-2">Applicant {index + 3}</h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <p><strong>Name:</strong> {applicant.firstName} {applicant.lastName}</p>
                        <p><strong>ID Number:</strong> {applicant.idNumber}</p>
                        <p><strong>Mobile:</strong> {applicant.telephone.mobile}</p>
                        <p><strong>Email:</strong> {applicant.telephone.email}</p>
                        <p><strong>Occupation:</strong> {applicant.employment.occupation}</p>
                        <p><strong>Employer:</strong> {applicant.employment.employer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Account Services */}
              <div className="mb-6">
                <h5 className="font-bold text-gray-800 mb-3">Account Services</h5>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><strong>Other Accounts:</strong> {formData.hasOtherAccounts ? 'Yes' : 'No'}</p>
                  <p><strong>Signature Authority:</strong> {formData.signatureAuthority}</p>
                  <p><strong>SMS Banking:</strong> {formData.smsAlerts ? 'Yes' : 'No'}</p>
                  <p><strong>ATM Card:</strong> {formData.atmCard ? 'Yes' : 'No'}</p>
                  <p><strong>Declaration:</strong> {formData.declarationAgreed ? 'Agreed' : 'Not Agreed'}</p>
                </div>
              </div>

              {/* Total Applicants Summary */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">Total Applicants:</span>
                  <span className="font-bold text-green-600">2 + {formData.additionalApplicants.length} additional = {2 + formData.additionalApplicants.length} total</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-blue-800">
                  <p className="font-bold mb-2">Final Review:</p>
                  <p>Please review all applicant information carefully before submitting. Once submitted, you will receive a confirmation email with next steps.</p>
                </div>
              </div>
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
              Joint Membership Application
            </h1>
            <div className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-sacco-light -translate-y-1/2 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
            
            <div className="relative flex justify-between">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    index + 1 < currentStep
                      ? 'bg-sacco-light border-sacco-light text-white'
                      : index + 1 === currentStep
                      ? 'bg-sacco-light border-sacco-light text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}
                >
                  {index + 1 < currentStep ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    index + 1
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
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
              onClick={currentStep === totalSteps ? handleSubmit : nextStep}
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
