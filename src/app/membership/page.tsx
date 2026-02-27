'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  HandHeart, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Mail, 
  MapPin,
  Calculator,
  Award,
  ArrowRight
} from 'lucide-react'

export default function MembershipPage() {
  const [showAccountDialog, setShowAccountDialog] = useState(false)

  const handleAccountSelect = (accountType: string) => {
    setShowAccountDialog(false)
    // Navigate to selected account type
    window.location.href = `/membership/${accountType}`
  }
  const benefits = [
    {
      title: "Competitive Interest Rates",
      desc: "Enjoy better returns on savings and lower interest on loans compared to commercial banks.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Member Ownership",
      desc: "As a member, you're part owner of Sacco with voting rights and share dividends.",
      icon: <Users size={24} />
    },
    {
      title: "Financial Education",
      desc: "Access regular training and workshops on financial literacy and investment opportunities.",
      icon: <Award size={24} />
    },
    {
      title: "Flexible Loan Products",
      desc: "Tailored loan solutions including emergency, development, and asset financing.",
      icon: <Calculator size={24} />
    },
    {
      title: "Secure & Regulated",
      desc: "Licensed by SASRA ensuring your deposits are protected and operations are transparent.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Community Support",
      desc: "Be part of a community that supports each other's growth and financial wellbeing.",
      icon: <HandHeart size={24} />
    }
  ]

  const membershipTypes = [
    {
      type: "personal",
      title: "Personal Account",
      desc: "Perfect for personal savings and loan needs",
      features: ["Personal savings account", "Access to all loan products", "Mobile banking", "Annual dividends", "Voting rights"]
    },
    {
      type: "joint",
      title: "Joint Account",
      desc: "Ideal for couples, families, or partners",
      features: ["Joint ownership", "Shared access to funds", "Combined loan eligibility", "Family banking benefits", "Joint decision making"]
    },
    {
      type: "business",
      title: "Business Account",
      desc: "Ideal for businesses and organizations",
      features: ["Business operating account", "Trade finance solutions", "Overdraft facilities", "Corporate loans", "Dedicated relationship manager"]
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a3c34] pt-44 pb-24 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffde21] font-bold text-xs uppercase tracking-[0.4em] mb-4">Join Our Community</p>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Become a <span className="text-[#ffde21]">Member</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Join thousands of Kenyans who have chosen Thamani Sacco as their trusted financial partner for growth and prosperity.
          </p>
          <div className="h-1 w-24 bg-[#ffde21] mt-6"></div>
        </div>
      </section>

      {/* Online Registration CTA */}
      <section className="py-20 bg-[#ffde21] px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="bg-[#1a3c34] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-[#ffde21]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              ONLINE MEMBERSHIP REGISTRATION
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Complete your membership application online in minutes. No paperwork, no hassle - just fill out our secure form and get started on your financial journey with Thamani Sacco.
            </p>
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setShowAccountDialog(true)
              }}
              className="bg-[#1a3c34] text-white px-6 py-3 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all flex items-center gap-2 mx-auto"
            >
              <FileText size={16} />
              Start Registration
            </Link>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Choose Your <span className="text-[#3b93a0]">Account Type</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the account type that best suits your financial needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTypes.map((type) => (
              <div key={type.type} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-xl mb-6 group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all inline-block">
                  <Users size={32} />
                </div>
                <h3 className="text-lg font-black text-[#1a3c34] mb-3 uppercase tracking-tight">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {type.desc}
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#3b93a0] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/membership/${type.type}`}
                  className="w-full bg-[#ffde21] text-[#1a3c34] py-3 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Apply for {type.title}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Member <span className="text-[#3b93a0]">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why thousands trust Thamani Sacco for their financial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-xl mb-6 group-hover:bg-[#1a3c34] group-hover:text-[#ffde21] transition-all inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-[#1a3c34] mb-3 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
                Membership <span className="text-[#3b93a0]">Requirements</span>
              </h2>
              <p className="text-gray-600">
                Get started with these simple requirements and join our growing community
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Be 18 years and above",
                "Have a valid National ID or Passport",
                "Complete membership application form",
                "Pay registration fee of Ksh 1,000",
                "Purchase minimum shares (Ksh 10,000)",
                "Provide recent passport photo",
                "Proof of residence (utility bill or rent agreement)"
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#fdfcf7] rounded-xl">
                  <div className="bg-[#ffde21] text-[#1a3c34] w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
                How to <span className="text-[#3b93a0]">Join</span>
              </h2>
              <p className="text-gray-600">
                Simple steps to become a member of Thamani Sacco
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "1", title: "Choose Account Type", desc: "Select Personal, Joint, or Business account" },
                { step: "2", title: "Fill Application", desc: "Complete the online registration form" },
                { step: "3", title: "Submit Documents", desc: "Upload required documents" },
                { step: "4", title: "Pay Fees", desc: "Pay registration fee and minimum shares" },
                { step: "5", title: "Get Approved", desc: "Receive your account details" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-[#1a3c34] text-[#ffde21] w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a3c34] text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1a3c34] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-[#ffde21] uppercase tracking-tighter mb-6">
            Questions About Membership?
          </h3>
          <p className="text-white/80 mb-8">
            Our team is ready to help you understand benefits and guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Phone size={20} className="text-[#ffde21]" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail size={20} className="text-[#ffde21]" />
              <span>membership@thamanisacco.co.ke</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin size={20} className="text-[#ffde21]" />
              <span>Chuka HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Account Selection Dialog */}
      {showAccountDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-[#1a3c34] uppercase tracking-tighter">
                Select Account <span className="text-[#ffde21]">Type</span>
              </h3>
              <button 
                onClick={() => setShowAccountDialog(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => handleAccountSelect('personal')}
                className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-lg hover:border-[#ffde21] hover:bg-[#fdfcf7] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-lg mb-1">Personal Account</h4>
                    <p className="text-gray-600 text-sm">For individual members</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-[#ffde21] transition-colors" size={20} />
                </div>
              </button>
              
              <button 
                onClick={() => handleAccountSelect('joint')}
                className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-lg hover:border-[#ffde21] hover:bg-[#fdfcf7] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-lg mb-1">Joint Account</h4>
                    <p className="text-gray-600 text-sm">For couples, families, or partners</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-[#ffde21] transition-colors" size={20} />
                </div>
              </button>
              
              <button 
                onClick={() => handleAccountSelect('business')}
                className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-lg hover:border-[#ffde21] hover:bg-[#fdfcf7] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-lg mb-1">Business Account</h4>
                    <p className="text-gray-600 text-sm">For businesses and organizations</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-[#ffde21] transition-colors" size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
