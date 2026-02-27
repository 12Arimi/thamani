'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PersonalAccountHolderClusterProps {
  onNext: (data: any) => void
  onBack: () => void
}

export function PersonalAccountHolderCluster({ onNext, onBack }: PersonalAccountHolderClusterProps) {
  const [personalInfo, setPersonalInfo] = useState({
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
    employerPostalAddress: '',
    nextOfKin: {
      name: '',
      relationship: '',
      idNumber: '',
      address: '',
      telephone: ''
    }
  })

  const handleSubmit = () => {
    onNext(personalInfo)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>1.2 Personal Account Holder</CardTitle>
          <CardDescription>First Applicant Information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="fullName">Full Names</Label>
              <Input
                id="fullName"
                value={personalInfo.fullName}
                onChange={(e: any) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="idNumber">ID/No</Label>
              <Input
                id="idNumber"
                value={personalInfo.idNumber}
                onChange={(e: any) => setPersonalInfo({...personalInfo, idNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="passportNumber">Passport Number</Label>
              <Input
                id="passportNumber"
                value={personalInfo.passportNumber}
                onChange={(e: any) => setPersonalInfo({...personalInfo, passportNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={personalInfo.nationality}
                onChange={(e: any) => setPersonalInfo({...personalInfo, nationality: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="pinNumber">Pin Number</Label>
              <Input
                id="pinNumber"
                value={personalInfo.pinNumber}
                onChange={(e: any) => setPersonalInfo({...personalInfo, pinNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e: any) => setPersonalInfo({...personalInfo, dateOfBirth: e.target.value})}
              />
            </div>
          </div>

          {/* Birth Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="birthDistrict">District (Birth)</Label>
              <Input
                id="birthDistrict"
                value={personalInfo.district}
                onChange={(e: any) => setPersonalInfo({...personalInfo, district: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="birthLocation">Location (Birth)</Label>
              <Input
                id="birthLocation"
                value={personalInfo.location}
                onChange={(e: any) => setPersonalInfo({...personalInfo, location: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="birthSubLocation">Sub Location (Birth)</Label>
              <Input
                id="birthSubLocation"
                value={personalInfo.subLocation}
                onChange={(e: any) => setPersonalInfo({...personalInfo, subLocation: e.target.value})}
              />
            </div>
          </div>

          {/* Current Residence */}
          <div>
            <h3 className="text-lg font-medium mb-4">Current Residence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="county">County</Label>
                <Input
                  id="county"
                  value={personalInfo.currentResidence.county}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, county: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="residenceDistrict">District</Label>
                <Input
                  id="residenceDistrict"
                  value={personalInfo.currentResidence.district}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, district: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="division">Division</Label>
                <Input
                  id="division"
                  value={personalInfo.currentResidence.division}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, division: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="residenceLocation">Location</Label>
                <Input
                  id="residenceLocation"
                  value={personalInfo.currentResidence.location}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, location: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="residenceSubLocation">Sub Location</Label>
                <Input
                  id="residenceSubLocation"
                  value={personalInfo.currentResidence.subLocation}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, subLocation: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="village">Village/Township</Label>
                <Input
                  id="village"
                  value={personalInfo.currentResidence.villageTownship}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    currentResidence: {...personalInfo.currentResidence, villageTownship: e.target.value}
                  })}
                />
              </div>
            </div>
          </div>

          {/* Address and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={personalInfo.address.address}
                onChange={(e: any) => setPersonalInfo({
                  ...personalInfo, 
                  address: {...personalInfo.address, address: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="code">Code</Label>
              <Input
                id="code"
                value={personalInfo.address.code}
                onChange={(e: any) => setPersonalInfo({
                  ...personalInfo, 
                  address: {...personalInfo.address, code: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="officeTel">Office Telephone</Label>
              <Input
                id="officeTel"
                value={personalInfo.telephone.office}
                onChange={(e: any) => setPersonalInfo({
                  ...personalInfo, 
                  telephone: {...personalInfo.telephone, office: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="mobileTel">Mobile No</Label>
              <Input
                id="mobileTel"
                value={personalInfo.telephone.mobile}
                onChange={(e: any) => setPersonalInfo({
                  ...personalInfo, 
                  telephone: {...personalInfo.telephone, mobile: e.target.value}
                })}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.telephone.email}
                onChange={(e: any) => setPersonalInfo({
                  ...personalInfo, 
                  telephone: {...personalInfo.telephone, email: e.target.value}
                })}
              />
            </div>
          </div>

          {/* Employment Details */}
          <div>
            <h3 className="text-lg font-medium mb-4">Employment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  value={personalInfo.occupation}
                  onChange={(e: any) => setPersonalInfo({...personalInfo, occupation: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="employer">Employer</Label>
                <Input
                  id="employer"
                  value={personalInfo.employer}
                  onChange={(e: any) => setPersonalInfo({...personalInfo, employer: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="employerEmail">Employer Email</Label>
                <Input
                  id="employerEmail"
                  type="email"
                  value={personalInfo.employerEmail}
                  onChange={(e: any) => setPersonalInfo({...personalInfo, employerEmail: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="employmentLocation">Location of Employment</Label>
                <Input
                  id="employmentLocation"
                  value={personalInfo.locationOfEmployment}
                  onChange={(e: any) => setPersonalInfo({...personalInfo, locationOfEmployment: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="employerAddress">Employer's Postal Address</Label>
                <Input
                  id="employerAddress"
                  value={personalInfo.employerPostalAddress}
                  onChange={(e: any) => setPersonalInfo({...personalInfo, employerPostalAddress: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Next of Kin */}
          <div>
            <h3 className="text-lg font-medium mb-4">Next of Kin/Nominee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="kinName">Next of Kin/Nominee</Label>
                <Input
                  id="kinName"
                  value={personalInfo.nextOfKin.name}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    nextOfKin: {...personalInfo.nextOfKin, name: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="kinRelationship">Relationship</Label>
                <Input
                  id="kinRelationship"
                  value={personalInfo.nextOfKin.relationship}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    nextOfKin: {...personalInfo.nextOfKin, relationship: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="kinId">Next of Kin ID No</Label>
                <Input
                  id="kinId"
                  value={personalInfo.nextOfKin.idNumber}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    nextOfKin: {...personalInfo.nextOfKin, idNumber: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="kinTel">Tel No</Label>
                <Input
                  id="kinTel"
                  value={personalInfo.nextOfKin.telephone}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    nextOfKin: {...personalInfo.nextOfKin, telephone: e.target.value}
                  })}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="kinAddress">Address</Label>
                <Input
                  id="kinAddress"
                  value={personalInfo.nextOfKin.address}
                  onChange={(e: any) => setPersonalInfo({
                    ...personalInfo, 
                    nextOfKin: {...personalInfo.nextOfKin, address: e.target.value}
                  })}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button text="Back" variant="outline" onClick={onBack} />
        <Button text="Continue" onClick={handleSubmit} />
      </div>
    </div>
  )
}
