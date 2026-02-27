'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Button from '@/components/ui/Button'

interface Applicant {
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

interface BusinessOwner {
  fullNames: string
  idNumber: string
  pinNumber: string
  mobileNumber: string
  email: string
}

interface OtherAccount {
  accountNumber: string
  bank: string
  branch: string
}

interface FormData {
  accountType: 'personal' | 'joint' | 'business' | null
  firstApplicant: Applicant
  secondApplicant: Applicant
  thirdApplicant: Applicant
  showThirdApplicant: boolean
  introducer: {
    fullNames: string
    idNumber: string
    poBox: string
    telephoneNumber: string
    accountNumber: string
    relationship: string
  }
  hasOtherAccounts: boolean
  otherAccounts: OtherAccount[]
  whyThamaniSacco: string
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
  otherSignatureAuthority: string
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

const initialFormData: FormData = {
  accountType: null,
  firstApplicant: {
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
  secondApplicant: {
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
  thirdApplicant: {
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
  showThirdApplicant: false,
  introducer: {
    fullNames: '',
    idNumber: '',
    poBox: '',
    telephoneNumber: '',
    accountNumber: '',
    relationship: ''
  },
  hasOtherAccounts: false,
  otherAccounts: [
    { accountNumber: '', bank: '', branch: '' },
    { accountNumber: '', bank: '', branch: '' }
  ],
  whyThamaniSacco: '',
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
  otherSignatureAuthority: '',
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

export function MembershipFormWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('thamaniSaccoDraft', JSON.stringify(formData))
    }, 2000)
    return () => clearTimeout(timer)
  }, [formData])

  // Load draft from localStorage
  useEffect(() => {
    const draft = localStorage.getItem('thamaniSaccoDraft')
    if (draft) {
      try {
        setFormData(JSON.parse(draft))
      } catch (error) {
        console.error('Failed to load draft:', error)
      }
    }
  }, [])

  const getTotalSteps = useCallback(() => {
    if (!formData.accountType) return 1
    switch (formData.accountType) {
      case 'personal': return 6
      case 'joint': return 7
      case 'business': return 7
      default: return 1
    }
  }, [formData.accountType])

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }, [])

  const updateApplicant = useCallback((applicant: 'firstApplicant' | 'secondApplicant' | 'thirdApplicant', updates: Partial<Applicant>) => {
    setFormData(prev => ({
      ...prev,
      [applicant]: { ...prev[applicant], ...updates }
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
    if (currentStep < getTotalSteps()) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep, getTotalSteps])

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(() => {
    console.log('Form submitted:', formData)
    alert('Form submitted successfully! Check console for data.')
  }, [formData])

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1: return formData.accountType !== null
      case 2: 
        if (formData.accountType === 'personal') {
          return formData.firstApplicant.fullNames && formData.firstApplicant.idNumber
        } else if (formData.accountType === 'joint') {
          return formData.firstApplicant.fullNames && formData.firstApplicant.idNumber && 
                 formData.secondApplicant.fullNames && formData.secondApplicant.idNumber
        } else if (formData.accountType === 'business') {
          return formData.businessDetails.namesOfBusiness && formData.businessDetails.registrationNumber
        }
        return false
      default: return true
    }
  }, [currentStep, formData])

  const renderStep = () => {
    switch (currentStep) {
      case 1: return renderAccountTypeSelection()
      case 2: return renderApplicantDetails()
      case 3: return renderAdditionalApplicants()
      case 4: return renderBusinessDetails()
      case 5: return renderSharedSections()
      case 6: return renderDeclaration()
      case 7: return renderJointSpecific()
      default: return null
    }
  }

  const renderAccountTypeSelection = () => (
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
          <Input placeholder="……………………………………………………………………………………………………" />
        </div>

        <div>
          <Label className="font-bold text-lg">1.2 ACCOUNT TYPE SELECTION</Label>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="personal"
                checked={formData.accountType === 'personal'}
                onCheckedChange={(checked) => updateFormData({ accountType: checked ? 'personal' : null })}
              />
              <Label htmlFor="personal">Personal Account</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="joint"
                checked={formData.accountType === 'joint'}
                onCheckedChange={(checked) => updateFormData({ accountType: checked ? 'joint' : null })}
              />
              <Label htmlFor="joint">Joint Account</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="business"
                checked={formData.accountType === 'business'}
                onCheckedChange={(checked) => updateFormData({ accountType: checked ? 'business' : null })}
              />
              <Label htmlFor="business">Business Entity Account</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderApplicantDetails = () => {
    if (formData.accountType === 'personal') {
      return renderPersonalApplicant('firstApplicant', '1.2.1 FIRST (and only) APPLICANT')
    } else if (formData.accountType === 'joint') {
      return renderPersonalApplicant('firstApplicant', '1.2.1 FIRST APPLICANT')
    } else if (formData.accountType === 'business') {
      return renderBusinessDetails()
    }
    return null
  }

  const renderPersonalApplicant = (applicantKey: 'firstApplicant' | 'secondApplicant' | 'thirdApplicant', title: string) => {
    const applicant = formData[applicantKey]
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Full Names</Label>
              <Input 
                value={applicant.fullNames}
                onChange={(e) => updateApplicant(applicantKey, { fullNames: e.target.value })}
              />
            </div>
            <div>
              <Label>ID Number</Label>
              <Input 
                value={applicant.idNumber}
                onChange={(e) => updateApplicant(applicantKey, { idNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Passport Number</Label>
              <Input 
                value={applicant.passportNumber}
                onChange={(e) => updateApplicant(applicantKey, { passportNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Nationality</Label>
              <Input 
                value={applicant.nationality}
                onChange={(e) => updateApplicant(applicantKey, { nationality: e.target.value })}
              />
            </div>
            <div>
              <Label>PIN Number</Label>
              <Input 
                value={applicant.pinNumber}
                onChange={(e) => updateApplicant(applicantKey, { pinNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Date of Birth</Label>
              <Input 
                type="date"
                value={applicant.dateOfBirth}
                onChange={(e) => updateApplicant(applicantKey, { dateOfBirth: e.target.value })}
              />
            </div>
            <div>
              <Label>District</Label>
              <Input 
                value={applicant.district}
                onChange={(e) => updateApplicant(applicantKey, { district: e.target.value })}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input 
                value={applicant.location}
                onChange={(e) => updateApplicant(applicantKey, { location: e.target.value })}
              />
            </div>
            <div>
              <Label>Sub Location</Label>
              <Input 
                value={applicant.subLocation}
                onChange={(e) => updateApplicant(applicantKey, { subLocation: e.target.value })}
              />
            </div>
            <div>
              <Label>Current Residence County</Label>
              <Input 
                value={applicant.currentResidenceCounty}
                onChange={(e) => updateApplicant(applicantKey, { currentResidenceCounty: e.target.value })}
              />
            </div>
            <div>
              <Label>Division</Label>
              <Input 
                value={applicant.division}
                onChange={(e) => updateApplicant(applicantKey, { division: e.target.value })}
              />
            </div>
            <div>
              <Label>Village / Township</Label>
              <Input 
                value={applicant.villageTownship}
                onChange={(e) => updateApplicant(applicantKey, { villageTownship: e.target.value })}
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input 
                value={applicant.address}
                onChange={(e) => updateApplicant(applicantKey, { address: e.target.value })}
              />
            </div>
            <div>
              <Label>Postal Code</Label>
              <Input 
                value={applicant.postalCode}
                onChange={(e) => updateApplicant(applicantKey, { postalCode: e.target.value })}
              />
            </div>
            <div>
              <Label>Office Telephone</Label>
              <Input 
                value={applicant.officeTelephone}
                onChange={(e) => updateApplicant(applicantKey, { officeTelephone: e.target.value })}
              />
            </div>
            <div>
              <Label>Mobile Number</Label>
              <Input 
                value={applicant.mobileNumber}
                onChange={(e) => updateApplicant(applicantKey, { mobileNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input 
                type="email"
                value={applicant.email}
                onChange={(e) => updateApplicant(applicantKey, { email: e.target.value })}
              />
            </div>
            <div>
              <Label>Occupation</Label>
              <Input 
                value={applicant.occupation}
                onChange={(e) => updateApplicant(applicantKey, { occupation: e.target.value })}
              />
            </div>
            <div>
              <Label>Employer</Label>
              <Input 
                value={applicant.employer}
                onChange={(e) => updateApplicant(applicantKey, { employer: e.target.value })}
              />
            </div>
            <div>
              <Label>Employer Email</Label>
              <Input 
                type="email"
                value={applicant.employerEmail}
                onChange={(e) => updateApplicant(applicantKey, { employerEmail: e.target.value })}
              />
            </div>
            <div>
              <Label>Location of Employment</Label>
              <Input 
                value={applicant.locationOfEmployment}
                onChange={(e) => updateApplicant(applicantKey, { locationOfEmployment: e.target.value })}
              />
            </div>
            <div>
              <Label>Employer's Postal Address</Label>
              <Input 
                value={applicant.employerPostalAddress}
                onChange={(e) => updateApplicant(applicantKey, { employerPostalAddress: e.target.value })}
              />
            </div>
            <div>
              <Label>Next of Kin / Nominee</Label>
              <Input 
                value={applicant.nextOfKinNominee}
                onChange={(e) => updateApplicant(applicantKey, { nextOfKinNominee: e.target.value })}
              />
            </div>
            <div>
              <Label>Relationship</Label>
              <Input 
                value={applicant.relationship}
                onChange={(e) => updateApplicant(applicantKey, { relationship: e.target.value })}
              />
            </div>
            <div>
              <Label>Next of Kin ID Number</Label>
              <Input 
                value={applicant.nextOfKinIdNumber}
                onChange={(e) => updateApplicant(applicantKey, { nextOfKinIdNumber: e.target.value })}
              />
            </div>
            <div>
              <Label>Next of Kin Address</Label>
              <Input 
                value={applicant.nextOfKinAddress}
                onChange={(e) => updateApplicant(applicantKey, { nextOfKinAddress: e.target.value })}
              />
            </div>
            <div>
              <Label>Next of Kin Telephone</Label>
              <Input 
                value={applicant.nextOfKinTelephone}
                onChange={(e) => updateApplicant(applicantKey, { nextOfKinTelephone: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderAdditionalApplicants = () => {
    if (formData.accountType === 'joint') {
      return (
        <div className="space-y-6">
          {renderPersonalApplicant('secondApplicant', '1.2.2 SECOND APPLICANT')}
          
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>THIRD APPLICANT (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox 
                  id="showThird"
                  checked={formData.showThirdApplicant}
                  onCheckedChange={(checked) => updateFormData({ showThirdApplicant: checked as boolean })}
                />
                <Label htmlFor="showThird">Include Third Applicant</Label>
              </div>
              
              {formData.showThirdApplicant && renderPersonalApplicant('thirdApplicant', '1.2.3 THIRD APPLICANT')}
            </CardContent>
          </Card>

          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Additional Joint Account Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Do you have any other Account(s) with Thamani Sacco or any other Financial Institution?</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasOtherYes"
                      checked={formData.hasOtherAccounts}
                      onCheckedChange={(checked) => updateFormData({ hasOtherAccounts: checked as boolean })}
                    />
                    <Label htmlFor="hasOtherYes">YES</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasOtherNo"
                      checked={!formData.hasOtherAccounts}
                      onCheckedChange={(checked) => updateFormData({ hasOtherAccounts: !(checked as boolean) })}
                    />
                    <Label htmlFor="hasOtherNo">NO</Label>
                  </div>
                </div>
              </div>

              {formData.hasOtherAccounts && (
                <div className="space-y-4">
                  <h3 className="font-medium">Account Details:</h3>
                  {formData.otherAccounts.map((account, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Account Number</Label>
                        <Input 
                          value={account.accountNumber}
                          onChange={(e) => {
                            const updated = [...formData.otherAccounts]
                            updated[index].accountNumber = e.target.value
                            updateFormData({ otherAccounts: updated })
                          }}
                        />
                      </div>
                      <div>
                        <Label>Bank</Label>
                        <Input 
                          value={account.bank}
                          onChange={(e) => {
                            const updated = [...formData.otherAccounts]
                            updated[index].bank = e.target.value
                            updateFormData({ otherAccounts: updated })
                          }}
                        />
                      </div>
                      <div>
                        <Label>Branch</Label>
                        <Input 
                          value={account.branch}
                          onChange={(e) => {
                            const updated = [...formData.otherAccounts]
                            updated[index].branch = e.target.value
                            updateFormData({ otherAccounts: updated })
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <Label>Why did you choose Thamani Sacco?</Label>
                <textarea 
                  className="w-full p-2 border rounded"
                  rows={4}
                  value={formData.whyThamaniSacco}
                  onChange={(e) => updateFormData({ whyThamaniSacco: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
    return null
  }

  const renderBusinessDetails = () => (
    <div className="space-y-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>1.5 BUSINESS DETAILS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Names of Business</Label>
            <Input 
              value={formData.businessDetails.namesOfBusiness}
              onChange={(e) => updateFormData({ 
                businessDetails: { ...formData.businessDetails, namesOfBusiness: e.target.value }
              })}
            />
          </div>

          <div>
            <Label>Registered under:</Label>
            <RadioGroup 
              value={formData.businessDetails.registeredUnder}
              onValueChange={(value) => updateFormData({ 
                businessDetails: { ...formData.businessDetails, registeredUnder: value as any }
              })}
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
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, otherSpecification: e.target.value }
                })}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Registration / Incorporation Certificate Number</Label>
              <Input 
                value={formData.businessDetails.registrationNumber}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, registrationNumber: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Date of Registration</Label>
              <Input 
                type="date"
                value={formData.businessDetails.dateOfRegistration}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, dateOfRegistration: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Registered Office</Label>
              <Input 
                value={formData.businessDetails.registeredOffice}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, registeredOffice: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Business Address</Label>
              <Input 
                value={formData.businessDetails.businessAddress}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, businessAddress: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Postal Code</Label>
              <Input 
                value={formData.businessDetails.postalCode}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, postalCode: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Office Telephone</Label>
              <Input 
                value={formData.businessDetails.officeTelephone}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, officeTelephone: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Mobile Number</Label>
              <Input 
                value={formData.businessDetails.mobileNumber}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, mobileNumber: e.target.value }
                })}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input 
                type="email"
                value={formData.businessDetails.email}
                onChange={(e) => updateFormData({ 
                  businessDetails: { ...formData.businessDetails, email: e.target.value }
                })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

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
    </div>
  )

  const renderSharedSections = () => (
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
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other (specify):</Label>
            </div>
          </RadioGroup>
          
          {formData.signatureAuthority === 'other' && (
            <Input 
              placeholder="Please specify"
              value={formData.otherSignatureAuthority}
              onChange={(e) => updateFormData({ otherSignatureAuthority: e.target.value })}
            />
          )}
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
              <Label>Mobile Registered in the name of</Label>
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
                    atmServices: { ...formData.atmServices, requested: !(checked as boolean) }
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
            I / We confirm that information provided herein and disclosures made are true and I / We have read and understood general terms and conditions and undertake to comply, observe and be bound by the same.
          </p>
          
          <div className="mb-4">
            <h4 className="font-bold mb-2">GENERAL TERMS & CONDITIONS</h4>
            <div className="text-xs space-y-2">
              <p>1. The Sacco shall have the right to accept or reject any application for membership without assigning any reason thereof.</p>
              <p>2. Every member shall be required to purchase and maintain at least the minimum number of shares as prescribed by the Sacco from time to time.</p>
              <p>3. The Sacco may require members to pay entrance fees, registration fees, and such other fees as may be prescribed from time to time.</p>
              <p>4. The minimum share capital shall be as determined by the Sacco and shall be payable upon admission to membership.</p>
              <p>5. A member shall be entitled to dividends as declared by the Sacco from time to time based on the shares held.</p>
              <p>6. The Sacco may at its absolute discretion require a member to withdraw from membership if the member contravenes any of the by-laws.</p>
              <p>7. Upon withdrawal, a member shall be entitled to the value of their shares subject to the Sacco's withdrawal policy.</p>
              <p>8. The Sacco shall provide loan facilities to members who meet the prescribed conditions.</p>
              <p>9. Loan interest rates and other charges shall be as determined by the Sacco from time to time.</p>
              <p>10. The Sacco shall have the right to set off any amounts due from a member against any amounts owed by the Sacco to that member.</p>
              <p>11. Members shall be required to provide security for loans as may be prescribed by the Sacco.</p>
              <p>12. The Sacco may vary the terms and conditions of operation of accounts and services provided to members.</p>
              <p>13. The Sacco shall not be liable for any loss arising from the use of any services provided to members.</p>
              <p>14. Members shall be required to maintain minimum balances in their accounts as may be prescribed by the Sacco.</p>
              <p>15. The Sacco may close any account that remains inactive for a period as may be determined by the Sacco.</p>
              <p>16. Any dispute between a member and the Sacco shall be resolved through arbitration as prescribed by the Sacco.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="agreeTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => updateFormData({ agreeToTerms: checked as boolean })}
            />
            <Label htmlFor="agreeTerms">
              I/We hereby agree with the terms, conditions and undertakings as above which I/We have read and understood and confirm that information supplied is correct to the best of my/our knowledge.
            </Label>
          </div>
        </div>

        <div className="mt-6">
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
            
            {formData.accountType === 'business' && (
              <>
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
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderJointSpecific = () => {
    if (formData.accountType === 'personal') {
      return renderIntroducer()
    }
    return null
  }

  const renderIntroducer = () => (
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
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, fullNames: e.target.value }
              })}
            />
          </div>
          <div>
            <Label>ID Number</Label>
            <Input 
              value={formData.introducer.idNumber}
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, idNumber: e.target.value }
              })}
            />
          </div>
          <div>
            <Label>P.O. Box</Label>
            <Input 
              value={formData.introducer.poBox}
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, poBox: e.target.value }
              })}
            />
          </div>
          <div>
            <Label>Telephone Number</Label>
            <Input 
              value={formData.introducer.telephoneNumber}
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, telephoneNumber: e.target.value }
              })}
            />
          </div>
          <div>
            <Label>Account Number</Label>
            <Input 
              value={formData.introducer.accountNumber}
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, accountNumber: e.target.value }
              })}
            />
          </div>
          <div>
            <Label>Relationship to Applicant</Label>
            <Input 
              value={formData.introducer.relationship}
              onChange={(e) => updateFormData({ 
                introducer: { ...formData.introducer, relationship: e.target.value }
              })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Thamani Sacco Membership Registration</h1>
          <div className="flex justify-center items-center space-x-4 mb-8">
            {Array.from({ length: getTotalSteps() }, (_, i) => (
              <div 
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > i + 1 ? 'bg-green-600 text-white' : 
                  currentStep === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          <button 
            className="px-6 py-3 border-2 border-[#1a3c34] text-[#1a3c34] rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#1a3c34] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          {currentStep === getTotalSteps() ? (
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
