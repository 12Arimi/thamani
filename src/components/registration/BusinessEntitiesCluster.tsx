'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface BusinessEntitiesClusterProps {
  onNext: (data: any) => void
  onBack: () => void
}

export function BusinessEntitiesCluster({ onNext, onBack }: BusinessEntitiesClusterProps) {
  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    registeredUnder: '',
    registrationNumber: '',
    registrationDate: '',
    registeredOffice: '',
    address: {
      address: '',
      code: ''
    },
    telephone: {
      office: '',
      mobile: '',
      email: ''
    }
  })

  const [representatives, setRepresentatives] = useState([
    {
      fullName: '',
      idNumber: '',
      pinNumber: '',
      mobileNo: '',
      email: ''
    },
    {
      fullName: '',
      idNumber: '',
      pinNumber: '',
      mobileNo: '',
      email: ''
    },
    {
      fullName: '',
      idNumber: '',
      pinNumber: '',
      mobileNo: '',
      email: ''
    }
  ])

  const handleSubmit = () => {
    onNext({
      businessInfo,
      representatives
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Business Information */}
      <Card>
        <CardHeader>
          <CardTitle>1.5 Other Business Entities Account</CardTitle>
          <CardDescription>Business Registration Information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="businessName">Names of the Business</Label>
            <Input
              id="businessName"
              value={businessInfo.businessName}
              onChange={(e: any) => setBusinessInfo({...businessInfo, businessName: e.target.value})}
            />
          </div>

          <div>
            <Label className="text-base font-medium">Registered under</Label>
            <RadioGroup 
              value={businessInfo.registeredUnder} 
              onValueChange={(value) => setBusinessInfo({...businessInfo, registeredUnder: value})}
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
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="registrationNumber">Registration/Incorporation certificate Number</Label>
              <Input
                id="registrationNumber"
                value={businessInfo.registrationNumber}
                onChange={(e: any) => setBusinessInfo({...businessInfo, registrationNumber: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="registrationDate">Date of registration</Label>
              <Input
                id="registrationDate"
                type="date"
                value={businessInfo.registrationDate}
                onChange={(e: any) => setBusinessInfo({...businessInfo, registrationDate: e.target.value})}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="registeredOffice">Registered office</Label>
            <Input
              id="registeredOffice"
              value={businessInfo.registeredOffice}
              onChange={(e: any) => setBusinessInfo({...businessInfo, registeredOffice: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="businessAddress">Address</Label>
              <Input
                id="businessAddress"
                value={businessInfo.address.address}
                onChange={(e: any) => setBusinessInfo({
                  ...businessInfo, 
                  address: {...businessInfo.address, address: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="businessCode">Code</Label>
              <Input
                id="businessCode"
                value={businessInfo.address.code}
                onChange={(e: any) => setBusinessInfo({
                  ...businessInfo, 
                  address: {...businessInfo.address, code: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="businessOfficeTel">Office Telephone</Label>
              <Input
                id="businessOfficeTel"
                value={businessInfo.telephone.office}
                onChange={(e: any) => setBusinessInfo({
                  ...businessInfo, 
                  telephone: {...businessInfo.telephone, office: e.target.value}
                })}
              />
            </div>
            <div>
              <Label htmlFor="businessMobile">Mobile No</Label>
              <Input
                id="businessMobile"
                value={businessInfo.telephone.mobile}
                onChange={(e: any) => setBusinessInfo({
                  ...businessInfo, 
                  telephone: {...businessInfo.telephone, mobile: e.target.value}
                })}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="businessEmail">Email</Label>
              <Input
                id="businessEmail"
                type="email"
                value={businessInfo.telephone.email}
                onChange={(e: any) => setBusinessInfo({
                  ...businessInfo, 
                  telephone: {...businessInfo.telephone, email: e.target.value}
                })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Owner/Director/Representative Details */}
      <Card>
        <CardHeader>
          <CardTitle>Business Owner/Director/Representative Details</CardTitle>
          <CardDescription>Details of Business Owner Directors Representatives (Tick as applicable)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {representatives.map((rep, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium">Representative {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`rep${index + 1}FullName`}>Full Names</Label>
                  <Input
                    id={`rep${index + 1}FullName`}
                    value={rep.fullName}
                    onChange={(e: any) => {
                      const updated = [...representatives]
                      updated[index].fullName = e.target.value
                      setRepresentatives(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor={`rep${index + 1}Id`}>ID/No</Label>
                  <Input
                    id={`rep${index + 1}Id`}
                    value={rep.idNumber}
                    onChange={(e: any) => {
                      const updated = [...representatives]
                      updated[index].idNumber = e.target.value
                      setRepresentatives(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor={`rep${index + 1}Pin`}>Pin Number</Label>
                  <Input
                    id={`rep${index + 1}Pin`}
                    value={rep.pinNumber}
                    onChange={(e: any) => {
                      const updated = [...representatives]
                      updated[index].pinNumber = e.target.value
                      setRepresentatives(updated)
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor={`rep${index + 1}Mobile`}>Mobile No</Label>
                  <Input
                    id={`rep${index + 1}Mobile`}
                    value={rep.mobileNo}
                    onChange={(e: any) => {
                      const updated = [...representatives]
                      updated[index].mobileNo = e.target.value
                      setRepresentatives(updated)
                    }}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor={`rep${index + 1}Email`}>Email</Label>
                  <Input
                    id={`rep${index + 1}Email`}
                    type="email"
                    value={rep.email}
                    onChange={(e: any) => {
                      const updated = [...representatives]
                      updated[index].email = e.target.value
                      setRepresentatives(updated)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button text="Back" variant="outline" onClick={onBack} />
        <Button text="Complete Registration" onClick={handleSubmit} />
      </div>
    </div>
  )
}
