'use client'

import { useState } from 'react'
import { SharedInformationCluster } from './SharedInformationCluster'
import { PersonalAccountHolderCluster } from './PersonalAccountHolderCluster'
import { JointAccountHoldersCluster } from './JointAccountHoldersCluster'
import { BusinessEntitiesCluster } from './BusinessEntitiesCluster'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Button from '@/components/ui/Button'

interface RegistrationData {
  shared: any
  personal: any
  joint: any
  business: any
}

export function MembershipRegistration() {
  const [currentStep, setCurrentStep] = useState(0)
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    shared: null,
    personal: null,
    joint: null,
    business: null
  })

  const handleSharedNext = (data: any) => {
    setRegistrationData(prev => ({ ...prev, shared: data }))
    
    // Determine next step based on account type
    if (data.accountType === 'personal') {
      setCurrentStep(1) // Personal Account Holder
    } else if (data.accountType === 'joint') {
      setCurrentStep(2) // Joint Account Holders
    } else if (data.accountType === 'business') {
      setCurrentStep(3) // Business Entities
    }
  }

  const handlePersonalNext = (data: any) => {
    setRegistrationData(prev => ({ ...prev, personal: data }))
    // Registration complete for personal accounts
    setCurrentStep(4)
  }

  const handleJointNext = (data: any) => {
    setRegistrationData(prev => ({ ...prev, joint: data }))
    // Registration complete for joint accounts
    setCurrentStep(4)
  }

  const handleBusinessNext = (data: any) => {
    setRegistrationData(prev => ({ ...prev, business: data }))
    // Registration complete for business accounts
    setCurrentStep(4)
  }

  const handleBack = () => {
    setCurrentStep(0) // Always go back to shared information
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <SharedInformationCluster
            onNext={handleSharedNext}
          />
        )
      case 1:
        return (
          <PersonalAccountHolderCluster
            onNext={handlePersonalNext}
            onBack={handleBack}
          />
        )
      case 2:
        return (
          <JointAccountHoldersCluster
            onNext={handleJointNext}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <BusinessEntitiesCluster
            onNext={handleBusinessNext}
            onBack={handleBack}
          />
        )
      case 4:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Registration Complete!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-green-600 font-medium">
                  Thank you for completing your Thamani Sacco membership registration.
                </p>
                <p>Your application has been received and is being processed.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Registration Summary:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Account Type: {registrationData.shared?.accountType}</li>
                    <li>• Terms Accepted: {registrationData.shared?.termsAccepted ? 'Yes' : 'No'}</li>
                    {registrationData.shared?.introducer?.fullName && (
                      <li>• Introducer: {registrationData.shared.introducer.fullName}</li>
                    )}
                  </ul>
                </div>
                <Button 
                  text="Start New Registration"
                  onClick={() => setCurrentStep(0)}
                />
              </div>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Thamani Sacco Membership Registration</h1>
          <p className="text-center text-gray-600">Complete your membership application in a few simple steps</p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${currentStep >= 0 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 0 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">Shared Information</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Account Details</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                ✓
              </div>
              <span className="ml-2 text-sm font-medium">Complete</span>
            </div>
          </div>
        </div>

        {renderCurrentStep()}
      </div>
    </div>
  )
}
