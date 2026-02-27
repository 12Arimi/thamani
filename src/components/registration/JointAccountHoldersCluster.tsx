'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

interface JointAccountHoldersClusterProps {
  onNext: (data: any) => void
  onBack: () => void
}

export function JointAccountHoldersCluster({ onNext, onBack }: JointAccountHoldersClusterProps) {
  const [secondApplicant, setSecondApplicant] = useState({
    fullName: '',
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
      villageTownship: ''
    },
    address: {
      address: '',
      code: ''
    },
    telephone: {
      office: '',
      mobile: '',
      email: ''
    },
    occupation: '',
    employer: '',
    employerEmail: '',
    locationOfEmployment: '',
    employerPostalAddress: ''
  })

  const [thirdApplicant, setThirdApplicant] = useState({
    fullName: '',
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
      villageTownship: ''
    },
    address: {
      address: '',
      code: ''
    },
    telephone: {
      office: '',
      mobile: '',
      email: ''
    },
    occupation: '',
    employer: '',
    employerEmail: '',
    locationOfEmployment: '',
    employerPostalAddress: ''
  })

  const [hasOtherAccounts, setHasOtherAccounts] = useState(false)
  const [otherAccounts, setOtherAccounts] = useState([
    { accountNumber: '', bank: '', branch: '' },
    { accountNumber: '', bank: '', branch: '' }
  ])

  const handleSubmit = () => {
    onNext({
      secondApplicant,
      thirdApplicant,
      hasOtherAccounts,
      otherAccounts: hasOtherAccounts ? otherAccounts : []
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Second Applicant */}
      <Card>
        <CardHeader>
          <CardTitle>1.4 Joint Account Holders</CardTitle>
          <CardDescription>Second Applicant Information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="secondFullName">Full Names</Label>
              <Input
                id="secondFullName"
                value={secondApplicant.fullName}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, fullName: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondIdNumber">ID/No</Label>
              <Input
                id="secondIdNumber"
                value={secondApplicant.idNumber}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, idNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondPassportNumber">Passport Number</Label>
              <Input
                id="secondPassportNumber"
                value={secondApplicant.passportNumber}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, passportNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondNationality">Nationality</Label>
              <Input
                id="secondNationality"
                value={secondApplicant.nationality}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, nationality: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondPinNumber">Pin Number</Label>
              <Input
                id="secondPinNumber"
                value={secondApplicant.pinNumber}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, pinNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondDateOfBirth">Date of Birth</Label>
              <Input
                id="secondDateOfBirth"
                type="date"
                value={secondApplicant.dateOfBirth}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, dateOfBirth: e.target.value})}
              />
            </div>
          </div>

          {/* Second Applicant Contact and Employment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="secondMobile">Mobile No</Label>
              <Input
                id="secondMobile"
                value={secondApplicant.telephone.mobile}
                onChange={(e: any) => setSecondApplicant({
                  ...secondApplicant, 
                  telephone: {...secondApplicant.telephone, mobile: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="secondEmail">Email</Label>
              <Input
                id="secondEmail"
                type="email"
                value={secondApplicant.telephone.email}
                onChange={(e: any) => setSecondApplicant({
                  ...secondApplicant, 
                  telephone: {...secondApplicant.telephone, email: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="secondOccupation">Occupation</Label>
              <Input
                id="secondOccupation"
                value={secondApplicant.occupation}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, occupation: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="secondEmployer">Employer</Label>
              <Input
                id="secondEmployer"
                value={secondApplicant.employer}
                onChange={(e: any) => setSecondApplicant({...secondApplicant, employer: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Third Applicant */}
      <Card>
        <CardHeader>
          <CardDescription>Third Applicant Information (Optional)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="thirdFullName">Full Names</Label>
              <Input
                id="thirdFullName"
                value={thirdApplicant.fullName}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, fullName: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdIdNumber">ID/No</Label>
              <Input
                id="thirdIdNumber"
                value={thirdApplicant.idNumber}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, idNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdPassportNumber">Passport Number</Label>
              <Input
                id="thirdPassportNumber"
                value={thirdApplicant.passportNumber}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, passportNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdNationality">Nationality</Label>
              <Input
                id="thirdNationality"
                value={thirdApplicant.nationality}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, nationality: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdPinNumber">Pin Number</Label>
              <Input
                id="thirdPinNumber"
                value={thirdApplicant.pinNumber}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, pinNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdDateOfBirth">Date of Birth</Label>
              <Input
                id="thirdDateOfBirth"
                type="date"
                value={thirdApplicant.dateOfBirth}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, dateOfBirth: e.target.value})}
              />
            </div>
          </div>

          {/* Third Applicant Contact and Employment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="thirdMobile">Mobile No</Label>
              <Input
                id="thirdMobile"
                value={thirdApplicant.telephone.mobile}
                onChange={(e: any) => setThirdApplicant({
                  ...thirdApplicant, 
                  telephone: {...thirdApplicant.telephone, mobile: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="thirdEmail">Email</Label>
              <Input
                id="thirdEmail"
                type="email"
                value={thirdApplicant.telephone.email}
                onChange={(e: any) => setThirdApplicant({
                  ...thirdApplicant, 
                  telephone: {...thirdApplicant.telephone, email: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="thirdOccupation">Occupation</Label>
              <Input
                id="thirdOccupation"
                value={thirdApplicant.occupation}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, occupation: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="thirdEmployer">Employer</Label>
              <Input
                id="thirdEmployer"
                value={thirdApplicant.employer}
                onChange={(e: any) => setThirdApplicant({...thirdApplicant, employer: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Other Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>Other Account Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasOtherAccounts"
              checked={hasOtherAccounts}
              onCheckedChange={(checked: any) => setHasOtherAccounts(checked)}
            />
            <Label htmlFor="hasOtherAccounts">
              Do you have any other Account(s) with Thamani Sacco or any other Financial Institution?
            </Label>
          </div>

          {hasOtherAccounts && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="account1Number">Account Number</Label>
                  <Input
                    id="account1Number"
                    value={otherAccounts[0].accountNumber}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[0].accountNumber = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="account1Bank">Bank</Label>
                  <Input
                    id="account1Bank"
                    value={otherAccounts[0].bank}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[0].bank = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="account1Branch">Branch</Label>
                  <Input
                    id="account1Branch"
                    value={otherAccounts[0].branch}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[0].branch = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="account2Number">Account Number</Label>
                  <Input
                    id="account2Number"
                    value={otherAccounts[1].accountNumber}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[1].accountNumber = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="account2Bank">Bank</Label>
                  <Input
                    id="account2Bank"
                    value={otherAccounts[1].bank}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[1].bank = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="account2Branch">Branch</Label>
                  <Input
                    id="account2Branch"
                    value={otherAccounts[1].branch}
                    onChange={(e: any) => {
                      const updated = [...otherAccounts]
                      updated[1].branch = e.target.value
                      setOtherAccounts(updated)
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button text="Back" variant="outline" onClick={onBack} />
        <Button text="Continue" onClick={handleSubmit} />
      </div>
    </div>
  )
}
