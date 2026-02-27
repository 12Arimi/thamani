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

interface BusinessOwner {
  fullNames: string
  idNumber: string
  pinNumber: string
  mobileNumber: string
  email: string
}

interface BusinessFormData {
  accountType: 'business'
  serialNumber: string
  businessDetails: {
    namesOfBusiness: string
    registeredUnder: 'sole-proprietorship' | 'partnership' | 'company' | 'societies' | 'group' | 'other'
    otherSpecification: string
    registrationNumber: string
    dateOfRegistration: string
    registeredOffice: string
    businessAddress: string
    postalCode: string
    officeTelephone: string
    mobileNumber: string
    email: string
  }
  businessOwners: BusinessOwner[]
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

const initialFormData: BusinessFormData = {
  accountType: 'business',
  serialNumber: '',
  businessDetails: {
    namesOfBusiness: '',
    registeredUnder: 'sole-proprietorship',
    otherSpecification: '',
    registrationNumber: '',
    dateOfRegistration: '',
    registeredOffice: '',
    businessAddress: '',
    postalCode: '',
    officeTelephone: '',
    mobileNumber: '',
    email: ''
  },
  businessOwners: [
    { fullNames: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    { fullNames: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' },
    { fullNames: '', idNumber: '', pinNumber: '', mobileNumber: '', email: '' }
  ],
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

export default function BusinessAccountPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<BusinessFormData>(initialFormData)

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('thamaniSaccoBusinessDraft', JSON.stringify(formData))
    }, 2000)
    return () => clearTimeout(timer)
  }, [formData])

  // Load draft from localStorage
  useEffect(() => {
    const draft = localStorage.getItem('thamaniSaccoBusinessDraft')
    if (draft) {
      try {
        setFormData(JSON.parse(draft))
      } catch (error) {
        console.error('Failed to load draft:', error)
      }
    }
  }, [])

  const updateFormData = useCallback((updates: Partial<BusinessFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }, [])

  const updateBusinessDetails = useCallback((updates: Partial<BusinessFormData['businessDetails']>) => {
    setFormData(prev => ({
      ...prev,
      businessDetails: { ...prev.businessDetails, ...updates }
    }))
  }, [])

  const updateBusinessOwner = useCallback((index: number, updates: Partial<BusinessOwner>) => {
    setFormData(prev => ({
      ...prev,
      businessOwners: prev.businessOwners.map((owner, i) => 
        i === index ? { ...owner, ...updates } : owner
      )
    }))
  }, [])

  const handleFileChange = useCallback((field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      files: { ...prev.files, [field]: file }
    }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep])

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(() => {
    console.log('Business Account Form submitted:', formData)
    alert('Business Account application submitted successfully! Check console for data.')
  }, [formData])

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1: return true
      case 2: return true
      case 3: return true
      case 4: return true
      case 5: return formData.agreeToTerms
      case 6: return true
      default: return false
    }
  }, [currentStep, formData])

  const renderStep = () => {
    switch (currentStep) {
      case 1: return renderAccountDeclaration()
      case 2: return renderBusinessDetails()
      case 3: return renderBusinessOwners()
      case 4: return renderServices()
      case 5: return renderDeclaration()
      case 6: return renderDocuments()
      default: return null
    }
  }

  const renderAccountDeclaration = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>1.1 THE ACCOUNT</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm leading-relaxed">
            I / We wish to open an account at Thamani Sacco Society Ltd and undertake to comply, observe and be bound by general terms & conditions and tariffs made by Sacco, in force and as amended from time to time pertaining to such account.
          </p>
        </div>
        
        <div>
          <Label>APPLICATION FORM SERIAL NUMBER</Label>
          <Input 
            placeholder="……………………………………………………………………………………………………"
            value={formData.serialNumber}
            onChange={(e) => updateFormData({ serialNumber: e.target.value })}
          />
        </div>

        <div>
          <Label className="font-bold text-lg">1.2 ACCOUNT TYPE</Label>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="business"
                checked={formData.accountType === 'business'}
                disabled
              />
              <Label htmlFor="business">Business Entity Account</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderBusinessDetails = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>1.5 BUSINESS DETAILS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Names of Business</Label>
          <Input 
            value={formData.businessDetails.namesOfBusiness}
            onChange={(e) => updateBusinessDetails({ namesOfBusiness: e.target.value })}
          />
        </div>

        <div>
          <Label>Registered under:</Label>
          <RadioGroup 
            value={formData.businessDetails.registeredUnder}
            onValueChange={(value) => updateBusinessDetails({ registeredUnder: value as any })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sole-proprietorship" id="sole" />
              <Label htmlFor="sole">Sole proprietorship</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="partnership" id="partnership" />
              <Label htmlFor="partnership">Partnership</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company">Company</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="societies" id="societies" />
              <Label htmlFor="societies">Societies</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="group" id="group" />
              <Label htmlFor="group">Group</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other (specify):</Label>
            </div>
          </RadioGroup>
          
          {formData.businessDetails.registeredUnder === 'other' && (
            <Input 
              placeholder="Please specify"
              value={formData.businessDetails.otherSpecification}
              onChange={(e) => updateBusinessDetails({ otherSpecification: e.target.value })}
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Registration / Incorporation Certificate Number</Label>
            <Input 
              value={formData.businessDetails.registrationNumber}
              onChange={(e) => updateBusinessDetails({ registrationNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Date of Registration</Label>
            <Input 
              type="date"
              value={formData.businessDetails.dateOfRegistration}
              onChange={(e) => updateBusinessDetails({ dateOfRegistration: e.target.value })}
            />
          </div>
          <div>
            <Label>Registered Office</Label>
            <Input 
              value={formData.businessDetails.registeredOffice}
              onChange={(e) => updateBusinessDetails({ registeredOffice: e.target.value })}
            />
          </div>
          <div>
            <Label>Business Address</Label>
            <Input 
              value={formData.businessDetails.businessAddress}
              onChange={(e) => updateBusinessDetails({ businessAddress: e.target.value })}
            />
          </div>
          <div>
            <Label>Postal Code</Label>
            <Input 
              value={formData.businessDetails.postalCode}
              onChange={(e) => updateBusinessDetails({ postalCode: e.target.value })}
            />
          </div>
          <div>
            <Label>Office Telephone</Label>
            <Input 
              value={formData.businessDetails.officeTelephone}
              onChange={(e) => updateBusinessDetails({ officeTelephone: e.target.value })}
            />
          </div>
          <div>
            <Label>Mobile Number</Label>
            <Input 
              value={formData.businessDetails.mobileNumber}
              onChange={(e) => updateBusinessDetails({ mobileNumber: e.target.value })}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input 
              type="email"
              value={formData.businessDetails.email}
              onChange={(e) => updateBusinessDetails({ email: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderBusinessOwners = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>DETAILS OF BUSINESS OWNERS / DIRECTORS / REPRESENTATIVES</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {formData.businessOwners.map((owner, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-medium">Person {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Full Names</Label>
                <Input 
                  value={owner.fullNames}
                  onChange={(e) => updateBusinessOwner(index, { fullNames: e.target.value })}
                />
              </div>
              <div>
                <Label>ID Number</Label>
                <Input 
                  value={owner.idNumber}
                  onChange={(e) => updateBusinessOwner(index, { idNumber: e.target.value })}
                />
              </div>
              <div>
                <Label>PIN Number</Label>
                <Input 
                  value={owner.pinNumber}
                  onChange={(e) => updateBusinessOwner(index, { pinNumber: e.target.value })}
                />
              </div>
              <div>
                <Label>Mobile Number</Label>
                <Input 
                  value={owner.mobileNumber}
                  onChange={(e) => updateBusinessOwner(index, { mobileNumber: e.target.value })}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input 
                  type="email"
                  value={owner.email}
                  onChange={(e) => updateBusinessOwner(index, { email: e.target.value })}
                />
              </div>
            </div>
          </div>
        ))}
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
            <Label>Copy of National ID / Passport (All Owners/Directors)</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('idCopy', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Copy of PIN Certificate (All Owners/Directors)</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('pinCopy', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Passport size photo (All Owners/Directors)</Label>
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
          <div>
            <Label>Certificate of Registration / Incorporation</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('businessCert', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label>Business PIN Certificate</Label>
            <Input 
              type="file"
              onChange={(e) => handleFileChange('businessPin', e.target.files?.[0] || null)}
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
            <p className="text-[#ffde21] font-bold text-xs uppercase tracking-[0.4em] mb-4">Business Account</p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Registration <span className="text-[#ffde21]">Form</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your business account application with Thamani Sacco
            </p>
            <div className="h-1 w-24 bg-[#ffde21] mt-6 mx-auto"></div>
          </div>
          <div className="flex justify-center items-center space-x-3 mb-8">
            {Array.from({ length: 6 }, (_, i) => (
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
          {currentStep === 6 ? (
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
