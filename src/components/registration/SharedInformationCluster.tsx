'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface SharedInformationClusterProps {
  onNext: (data: any) => void
}

export function SharedInformationCluster({ onNext }: SharedInformationClusterProps) {
  const [accountType, setAccountType] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [introducer, setIntroducer] = useState({
    fullName: '',
    idNumber: '',
    poBox: '',
    telephone: '',
    accountNumber: '',
    relationship: ''
  })
  const [signatureAuthority, setSignatureAuthority] = useState('')
  const [smsBanking, setSmsBanking] = useState({
    mobileNo: '',
    accountNo: '',
    registeredName: ''
  })
  const [atmServices, setAtmServices] = useState({
    cardNo: ''
  })

  const handleSubmit = () => {
    if (!accountType || !termsAccepted) return
    
    onNext({
      accountType,
      termsAccepted,
      introducer,
      signatureAuthority,
      smsBanking,
      atmServices
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Account Type Section */}
      <Card>
        <CardHeader>
          <CardTitle>1.1 Account Application</CardTitle>
          <CardDescription>
            I/We wish to open an account at Thamani Sacco Society Ltd and undertake to comply, 
            observe and be bound by the general terms & conditions and tariffs made by the Sacco.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-base font-medium">Type of Account</Label>
            <RadioGroup value={accountType} onValueChange={setAccountType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Personal Account</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="joint" id="joint" />
                <Label htmlFor="joint">Joint Account</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business Account</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to comply with the general terms & conditions and tariffs made by Thamani Sacco Society Ltd, 
              in force and as amended from time to time pertaining to such account.
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Introducer Section */}
      <Card>
        <CardHeader>
          <CardTitle>1.3 Introducer Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="introFullName">Full Names</Label>
            <Input
              id="introFullName"
              value={introducer.fullName}
              onChange={(e) => setIntroducer({...introducer, fullName: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="introId">ID/No</Label>
            <Input
              id="introId"
              value={introducer.idNumber}
              onChange={(e) => setIntroducer({...introducer, idNumber: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="introPoBox">P.O. Box</Label>
            <Input
              id="introPoBox"
              value={introducer.poBox}
              onChange={(e) => setIntroducer({...introducer, poBox: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="introTel">Telephone No</Label>
            <Input
              id="introTel"
              value={introducer.telephone}
              onChange={(e) => setIntroducer({...introducer, telephone: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="introAccount">Account No</Label>
            <Input
              id="introAccount"
              value={introducer.accountNumber}
              onChange={(e) => setIntroducer({...introducer, accountNumber: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="introRelation">Relationship</Label>
            <Input
              id="introRelation"
              value={introducer.relationship}
              onChange={(e) => setIntroducer({...introducer, relationship: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      {/* Signature Authority */}
      <Card>
        <CardHeader>
          <CardTitle>2.0 Signature Authority or Account Mandate</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={signatureAuthority} onValueChange={setSignatureAuthority}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="singly" id="singly" />
              <Label htmlFor="singly">Singly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="either" id="either" />
              <Label htmlFor="either">Either to Sign</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All of us jointly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any-two" id="any-two" />
              <Label htmlFor="any-two">Any two to sign</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* SMS Banking */}
      <Card>
        <CardHeader>
          <CardTitle>3.0 SMS Banking Service</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="smsMobile">Sms Alerts: Mobile No</Label>
            <Input
              id="smsMobile"
              value={smsBanking.mobileNo}
              onChange={(e) => setSmsBanking({...smsBanking, mobileNo: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="smsAccount">Account No</Label>
            <Input
              id="smsAccount"
              value={smsBanking.accountNo}
              onChange={(e) => setSmsBanking({...smsBanking, accountNo: e.target.value})}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="smsRegistered">Mobile Registered in the name of</Label>
            <Input
              id="smsRegistered"
              value={smsBanking.registeredName}
              onChange={(e) => setSmsBanking({...smsBanking, registeredName: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      {/* ATM Services */}
      <Card>
        <CardHeader>
          <CardTitle>4.0 ATM Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="atmCard">ATM Card No</Label>
            <Input
              id="atmCard"
              value={atmServices.cardNo}
              onChange={(e) => setAtmServices({...atmServices, cardNo: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      <Button 
        text={accountType && termsAccepted ? "Continue to Account Holder Information" : "Please complete all required fields"}
        onClick={handleSubmit}
      />
    </div>
  )
}
