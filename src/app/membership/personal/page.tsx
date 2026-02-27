'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PersonalFormData {
  accountType: 'personal'
  serialNumber: string
  applicant: {
    fullNames: string
    idNumber: string
    passportNumber: string
    nationality: string
    pinNumber: string
    dateOfBirth: string
    district: string
    location: string
    subLocation: string
    currentResidenceCounty: string
    division: string
    villageTownship: string
    address: string
    postalCode: string
    officeTelephone: string
    mobileNumber: string
    email: string
    occupation: string
    employer: string
    employerEmail: string
    locationOfEmployment: string
    employerPostalAddress: string
    nextOfKinNominee: string
    relationship: string
    nextOfKinIdNumber: string
    nextOfKinAddress: string
    nextOfKinTelephone: string
  }
  introducer: {
    fullNames: string
    idNumber: string
    poBox: string
    telephoneNumber: string
    accountNumber: string
    relationship: string
  }
  signatureAuthority: 'singly' | 'either-to-sign' | 'all-jointly' | 'any-two' | 'other'
  smsBanking: {
    mobileNumber: string
    accountNumber: string
    registeredName: string
  }
  atmServices: {
    requested: boolean
    cardNumber: string
  }
  agreeToTerms: boolean
  files: {
    [key: string]: File | null
  }
}

const initialFormData: PersonalFormData = {
  accountType: 'personal',
  serialNumber: '',
  applicant: {
    fullNames: '',
    idNumber: '',
    passportNumber: '',
    nationality: '',
    pinNumber: '',
    dateOfBirth: '',
    district: '',
    location: '',
    subLocation: '',
    currentResidenceCounty: '',
    division: '',
    villageTownship: '',
    address: '',
    postalCode: '',
    officeTelephone: '',
    mobileNumber: '',
    email: '',
    occupation: '',
    employer: '',
    employerEmail: '',
    locationOfEmployment: '',
    employerPostalAddress: '',
    nextOfKinNominee: '',
    relationship: '',
    nextOfKinIdNumber: '',
    nextOfKinAddress: '',
    nextOfKinTelephone: ''
  },
  introducer: {
    fullNames: '',
    idNumber: '',
    poBox: '',
    telephoneNumber: '',
    accountNumber: '',
    relationship: ''
  },
  signatureAuthority: 'singly',
  smsBanking: {
    mobileNumber: '',
    accountNumber: '',
    registeredName: ''
  },
  atmServices: {
    requested: false,
    cardNumber: ''
  },
  agreeToTerms: false,
  files: {}
}

export default function PersonalAccountPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<PersonalFormData>(initialFormData)

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('thamaniSaccoPersonalDraft', JSON.stringify(formData))
    }, 2000)
    return () => clearTimeout(timer)
  }, [formData])

  // Load draft from localStorage
  useEffect(() => {
    const draft = localStorage.getItem('thamaniSaccoPersonalDraft')
    if (draft) {
      try {
        setFormData(JSON.parse(draft))
      } catch (error) {
        console.error('Failed to load draft:', error)
      }
    }
  }, [])

  const updateFormData = useCallback((updates: Partial<PersonalFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }, [])

  const updateApplicant = useCallback((updates: Partial<PersonalFormData['applicant']>) => {
    setFormData(prev => ({
      ...prev,
      applicant: { ...prev.applicant, ...updates }
    }))
  }, [])

  const updateIntroducer = useCallback((updates: Partial<PersonalFormData['introducer']>) => {
    setFormData(prev => ({
      ...prev,
      introducer: { ...prev.introducer, ...updates }
    }))
  }, [])

  const handleFileChange = useCallback((field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      files: { ...prev.files, [field]: file }
    }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep])

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(() => {
    console.log('Personal Account Form submitted:', formData)
    alert('Personal Account application submitted successfully! Check console for data.')
  }, [formData])

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1: return true
      case 2: return true
      case 3: return true
      case 4: return true
      case 5: return formData.agreeToTerms
      default: return false
    }
  }, [currentStep, formData])

  const renderStep = () => {
    switch (currentStep) {
      case 1: return renderAccountDeclaration()
      case 2: return renderApplicantDetails()
      case 3: return renderIntroducerDetails()
      case 4: return renderDeclaration()
      case 5: return renderDocuments()
      default: return null
    }
  }

  const renderAccountDeclaration = () => (
    <div className="p-8 lg:p-12">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-[#1a3c34] uppercase tracking-tighter mb-6">
          1.1 THE <span className="text-[#ffde21]">ACCOUNT</span>
        </h2>
      </div>
      
      <div className="bg-[#fdfcf7] p-6 rounded-xl mb-8 border border-[#ffde21]/20">
        <p className="text-gray-700 leading-relaxed font-medium">
          I / We wish to open an account at Thamani Sacco Society Ltd and undertake to comply, observe and be bound by general terms & conditions and tariffs made by Sacco, in force and as amended from time to time pertaining to such account.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label className="text-gray-700 font-semibold text-sm uppercase tracking-wider">APPLICATION FORM SERIAL NUMBER</Label>
          <Input 
            placeholder="……………………………………………………………………………………………………"
            value={formData.serialNumber}
            onChange={(e) => updateFormData({ serialNumber: e.target.value })}
            className="border-gray-300 focus:border-[#ffde21] focus:ring-[#ffde21]/20"
          />
        </div>

        <div>
          <Label className="text-gray-700 font-semibold text-sm uppercase tracking-wider">1.2 ACCOUNT TYPE</Label>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#ffde21]/50 transition-colors">
              <Checkbox 
                id="personal"
                checked={formData.accountType === 'personal'}
                disabled
                className="w-5 h-5 text-[#1a3c34] border-gray-300"
              />
              <Label htmlFor="personal" className="text-gray-700 font-medium">Personal Account</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderApplicantDetails = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>1.2.1 APPLICANT DETAILS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Full Names</Label>
            <Input 
              value={formData.applicant.fullNames}
              onChange={(e) => updateApplicant({ fullNames: e.target.value })}
            />
          </div>
          <div>
            <Label>ID Number</Label>
            <Input 
              value={formData.applicant.idNumber}
              onChange={(e) => updateApplicant({ idNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Passport Number</Label>
            <Input 
              value={formData.applicant.passportNumber}
              onChange={(e) => updateApplicant({ passportNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Nationality</Label>
            <Input 
              value={formData.applicant.nationality}
              onChange={(e) => updateApplicant({ nationality: e.target.value })}
            />
          </div>
          <div>
            <Label>PIN Number</Label>
            <Input 
              value={formData.applicant.pinNumber}
              onChange={(e) => updateApplicant({ pinNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input 
              type="date"
              value={formData.applicant.dateOfBirth}
              onChange={(e) => updateApplicant({ dateOfBirth: e.target.value })}
            />
          </div>
          <div>
            <Label>District</Label>
            <Input 
              value={formData.applicant.district}
              onChange={(e) => updateApplicant({ district: e.target.value })}
            />
          </div>
          <div>
            <Label>Location</Label>
            <Input 
              value={formData.applicant.location}
              onChange={(e) => updateApplicant({ location: e.target.value })}
            />
          </div>
          <div>
            <Label>Sub Location</Label>
            <Input 
              value={formData.applicant.subLocation}
              onChange={(e) => updateApplicant({ subLocation: e.target.value })}
            />
          </div>
          <div>
            <Label>Current Residence County</Label>
            <Input 
              value={formData.applicant.currentResidenceCounty}
              onChange={(e) => updateApplicant({ currentResidenceCounty: e.target.value })}
            />
          </div>
          <div>
            <Label>Division</Label>
            <Input 
              value={formData.applicant.division}
              onChange={(e) => updateApplicant({ division: e.target.value })}
            />
          </div>
          <div>
            <Label>Village / Township</Label>
            <Input 
              value={formData.applicant.villageTownship}
              onChange={(e) => updateApplicant({ villageTownship: e.target.value })}
            />
          </div>
          <div>
            <Label>Address</Label>
            <Input 
              value={formData.applicant.address}
              onChange={(e) => updateApplicant({ address: e.target.value })}
            />
          </div>
          <div>
            <Label>Postal Code</Label>
            <Input 
              value={formData.applicant.postalCode}
              onChange={(e) => updateApplicant({ postalCode: e.target.value })}
            />
          </div>
          <div>
            <Label>Office Telephone</Label>
            <Input 
              value={formData.applicant.officeTelephone}
              onChange={(e) => updateApplicant({ officeTelephone: e.target.value })}
            />
          </div>
          <div>
            <Label>Mobile Number</Label>
            <Input 
              value={formData.applicant.mobileNumber}
              onChange={(e) => updateApplicant({ mobileNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input 
              type="email"
              value={formData.applicant.email}
              onChange={(e) => updateApplicant({ email: e.target.value })}
            />
          </div>
          <div>
            <Label>Occupation</Label>
            <Input 
              value={formData.applicant.occupation}
              onChange={(e) => updateApplicant({ occupation: e.target.value })}
            />
          </div>
          <div>
            <Label>Employer</Label>
            <Input 
              value={formData.applicant.employer}
              onChange={(e) => updateApplicant({ employer: e.target.value })}
            />
          </div>
          <div>
            <Label>Employer Email</Label>
            <Input 
              type="email"
              value={formData.applicant.employerEmail}
              onChange={(e) => updateApplicant({ employerEmail: e.target.value })}
            />
          </div>
          <div>
            <Label>Location of Employment</Label>
            <Input 
              value={formData.applicant.locationOfEmployment}
              onChange={(e) => updateApplicant({ locationOfEmployment: e.target.value })}
            />
          </div>
          <div>
            <Label>Employer's Postal Address</Label>
            <Input 
              value={formData.applicant.employerPostalAddress}
              onChange={(e) => updateApplicant({ employerPostalAddress: e.target.value })}
            />
          </div>
          <div>
            <Label>Next of Kin / Nominee</Label>
            <Input 
              value={formData.applicant.nextOfKinNominee}
              onChange={(e) => updateApplicant({ nextOfKinNominee: e.target.value })}
            />
          </div>
          <div>
            <Label>Relationship</Label>
            <Input 
              value={formData.applicant.relationship}
              onChange={(e) => updateApplicant({ relationship: e.target.value })}
            />
          </div>
          <div>
            <Label>Next of Kin ID Number</Label>
            <Input 
              value={formData.applicant.nextOfKinIdNumber}
              onChange={(e) => updateApplicant({ nextOfKinIdNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Next of Kin Address</Label>
            <Input 
              value={formData.applicant.nextOfKinAddress}
              onChange={(e) => updateApplicant({ nextOfKinAddress: e.target.value })}
            />
          </div>
          <div>
            <Label>Next of Kin Telephone</Label>
            <Input 
              value={formData.applicant.nextOfKinTelephone}
              onChange={(e) => updateApplicant({ nextOfKinTelephone: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderIntroducerDetails = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>1.3 INTRODUCER</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Full Names</Label>
            <Input 
              value={formData.introducer.fullNames}
              onChange={(e) => updateIntroducer({ fullNames: e.target.value })}
            />
          </div>
          <div>
            <Label>ID Number</Label>
            <Input 
              value={formData.introducer.idNumber}
              onChange={(e) => updateIntroducer({ idNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>P.O. Box</Label>
            <Input 
              value={formData.introducer.poBox}
              onChange={(e) => updateIntroducer({ poBox: e.target.value })}
            />
          </div>
          <div>
            <Label>Telephone Number</Label>
            <Input 
              value={formData.introducer.telephoneNumber}
              onChange={(e) => updateIntroducer({ telephoneNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Account Number</Label>
            <Input 
              value={formData.introducer.accountNumber}
              onChange={(e) => updateIntroducer({ accountNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Relationship to Applicant</Label>
            <Input 
              value={formData.introducer.relationship}
              onChange={(e) => updateIntroducer({ relationship: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderServices = () => (
    <div className="space-y-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>2.0 SIGNATURE AUTHORITY / ACCOUNT MANDATE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup 
            value={formData.signatureAuthority}
            onValueChange={(value) => updateFormData({ signatureAuthority: value as any })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="singly" id="singly" />
              <Label htmlFor="singly">Singly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="either-to-sign" id="either" />
              <Label htmlFor="either">Either to sign</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all-jointly" id="all" />
              <Label htmlFor="all">All of us jointly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any-two" id="any-two" />
              <Label htmlFor="any-two">Any two to sign</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>3.0 SMS BANKING SERVICE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Mobile Number for SMS Alerts</Label>
              <Input 
                value={formData.smsBanking.mobileNumber}
                onChange={(e) => updateFormData({ 
                  smsBanking: { ...formData.smsBanking, mobileNumber: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Account Number</Label>
              <Input 
                value={formData.smsBanking.accountNumber}
                onChange={(e) => updateFormData({ 
                  smsBanking: { ...formData.smsBanking, accountNumber: e.target.value }
                })}
              />
            </div>
            <div className="md:col-span-2">
              <Label>Mobile Registered in name of</Label>
              <Input 
                value={formData.smsBanking.registeredName}
                onChange={(e) => updateFormData({ 
                  smsBanking: { ...formData.smsBanking, registeredName: e.target.value }
                })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>4.0 ATM SERVICES</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>ATM Card Requested:</Label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="atmYes"
                  checked={formData.atmServices.requested}
                  onCheckedChange={(checked) => updateFormData({ 
                    atmServices: { ...formData.atmServices, requested: checked as boolean }
                  })}
                />
                <Label htmlFor="atmYes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="atmNo"
                  checked={!formData.atmServices.requested}
                  onCheckedChange={(checked) => updateFormData({ 
                    atmServices: { ...formData.atmServices, requested: !checked as boolean }
                  })}
                />
                <Label htmlFor="atmNo">No</Label>
              </div>
            </div>
          </div>

          {formData.atmServices.requested && (
            <div>
              <Label>If yes – preferred Card Number (if known):</Label>
              <Input 
                value={formData.atmServices.cardNumber}
                onChange={(e) => updateFormData({ 
                  atmServices: { ...formData.atmServices, cardNumber: e.target.value }
                })}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const renderDeclaration = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>5.0 DECLARATION</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">
            I / We confirm that information provided herein and disclosures made are true and I / We have read and understood general terms and conditions and undertake to comply, observe and be bound by same.
          </p>
          
          <div className="mb-4">
            <h4 className="font-bold mb-2">GENERAL TERMS & CONDITIONS</h4>
            <div className="text-xs space-y-2">
              <p>1. The Sacco shall have right to accept or reject any application for membership without assigning any reason thereof.</p>
              <p>2. Every member shall be required to purchase and maintain at least the minimum number of shares as prescribed by the Sacco from time to time.</p>
              <p>3. The Sacco may require members to pay entrance fees, registration fees, and such other fees as may be prescribed from time to time.</p>
              <p>4. The minimum share capital shall be as determined by the Sacco and shall be payable upon admission to membership.</p>
              <p>5. A member shall be entitled to dividends as declared by the Sacco from time to time based on the shares held.</p>
              <p>6. The Sacco may at its absolute discretion require a member to withdraw from membership if the member contravenes any of the by-laws.</p>
              <p>7. Upon withdrawal, a member shall be entitled to the value of their shares subject to the Sacco's withdrawal policy.</p>
              <p>8. The Sacco shall provide loan facilities to members who meet the prescribed conditions.</p>
              <p>9. Loan interest rates and other charges shall be as determined by the Sacco from time to time.</p>
              <p>10. The Sacco shall have the right to set off any amounts due from a member against any amounts owed by the Sacco to that member.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="agreeTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => updateFormData({ agreeToTerms: checked as boolean })}
            />
            <Label htmlFor="agreeTerms">
              I/We hereby agree with terms, conditions and undertakings as above which I/We have read and understood and confirm that information supplied is correct to the best of my/our knowledge.
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderDocuments = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>6.0 DOCUMENT UPLOAD</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="font-medium mb-4">Required Documents (to be uploaded)</h3>
        <div className="space-y-2">
          <div>
            <Label>Copy of National ID / Passport</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('idCopy', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Copy of PIN Certificate</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('pinCopy', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Passport size photo</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('passportPhoto', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Signed application form</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('signedForm', e.target.files?.[0] || null)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/membership" className="flex items-center gap-2 text-gray-600 hover:text-[#1a3c34] transition-colors">
              <ArrowLeft size={20} />
              Back to Membership
            </Link>
          </div>
          <div className="text-center mb-8">
            <p className="text-[#ffde21] font-bold text-xs uppercase tracking-[0.4em] mb-4">Personal Account</p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Registration <span className="text-[#ffde21]">Form</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your personal account application with Thamani Sacco
            </p>
            <div className="h-1 w-24 bg-[#ffde21] mt-6 mx-auto"></div>
          </div>
          <div className="flex justify-center items-center space-x-3 mb-8">
            {Array.from({ length: 5 }, (_, i) => (
              <div 
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentStep > i + 1 ? 'bg-[#1a3c34] text-white' : 
                  currentStep === i + 1 ? 'bg-[#ffde21] text-[#1a3c34]' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {renderStep()}
        </div>

        <div className="flex justify-between mt-8">
          <button 
            className="px-6 py-3 border-2 border-[#1a3c34] text-[#1a3c34] rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#1a3c34] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          {currentStep === 5 ? (
            <button 
              className="px-6 py-3 bg-[#ffde21] text-[#1a3c34] rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!formData.agreeToTerms}
            >
              Submit Application
            </button>
          ) : (
            <button 
              className="px-6 py-3 bg-[#1a3c34] text-white rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
