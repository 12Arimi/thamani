"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building2,
  Users,
  HeadphonesIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const branches = [
    {
      name: "Chuka Headquarters",
      address: "Along Chuka-Meru Highway, Chuka Town",
      phone: "+254 700 000 001",
      email: "chuka@thamanisacco.co.ke",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
      coordinates: "0.3292° S, 37.6472° E"
    },
    {
      name: "Chogoria Branch",
      address: "Chogoria Town Center, Near Catholic Church",
      phone: "+254 700 000 002",
      email: "chogoria@thamanisacco.co.ke",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM, Sat: 9:00 AM - 12:00 PM",
      coordinates: "0.4167° S, 37.6833° E"
    },
    {
      name: "Marima Branch",
      address: "Marima Shopping Center, Main Street",
      phone: "+254 700 000 003",
      email: "marima@thamanisacco.co.ke",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM, Sat: Closed",
      coordinates: "0.2833° S, 37.6000° E"
    },
    {
      name: "Kibugua Branch",
      address: "Kibugua Town, Next to Kibugua Market",
      phone: "+254 700 000 004",
      email: "kibugua@thamanisacco.co.ke",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM, Sat: 9:00 AM - 12:00 PM",
      coordinates: "0.3833° S, 37.5500° E"
    },
    {
      name: "Kathwana Branch",
      address: "Kathwana Town Center, Main Road",
      phone: "+254 700 000 005",
      email: "kathwana@thamanisacco.co.ke",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM, Sat: Closed",
      coordinates: "0.2500° S, 37.7000° E"
    },
    {
      name: "Cheera Branch",
      address: "Cheera Trading Center, Near Primary School",
      phone: "+254 700 000 006",
      email: "cheera@thamanisacco.co.ke",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM, Sat: Closed",
      coordinates: "0.3667° S, 37.5833° E"
    }
  ];

  const departments = [
    {
      name: "Customer Care",
      phone: "+254 700 000 100",
      email: "customercare@thamanisacco.co.ke",
      icon: <HeadphonesIcon size={24} />,
      description: "General inquiries and account support"
    },
    {
      name: "Loans Department",
      phone: "+254 700 000 200",
      email: "loans@thamanisacco.co.ke",
      icon: <Building2 size={24} />,
      description: "Loan applications and inquiries"
    },
    {
      name: "Member Services",
      phone: "+254 700 000 300",
      email: "members@thamanisacco.co.ke",
      icon: <Users size={24} />,
      description: "Membership registration and support"
    },
    {
      name: "Technical Support",
      phone: "+254 700 000 400",
      email: "support@thamanisacco.co.ke",
      icon: <MessageSquare size={24} />,
      description: "Mobile banking and portal support"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-sacco-dark pt-44 pb-24 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ffde21] font-bold text-xs uppercase tracking-[0.4em] mb-4">Get In Touch</p>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Contact <span className="text-[#ffde21]">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            We're here to help you with all your financial needs. Reach out to us through any of the channels below.
          </p>
          <div className="h-1 w-24 bg-[#ffde21] mt-6"></div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-full inline-block mb-4 group-hover:bg-sacco-dark group-hover:text-[#ffde21] transition-all">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-black text-[#1a3c34] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+254 700 000 000</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-full inline-block mb-4 group-hover:bg-sacco-dark group-hover:text-[#ffde21] transition-all">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-black text-[#1a3c34] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">info@thamanisacco.co.ke</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="bg-[#fdfcf7] text-[#3b93a0] p-4 rounded-full inline-block mb-4 group-hover:bg-sacco-dark group-hover:text-[#ffde21] transition-all">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-black text-[#1a3c34] mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Chuka Headquarters</p>
              <p className="text-sm text-gray-500">Along Chuka-Meru Highway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Contact <span className="text-[#3b93a0]">Departments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to the right department for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="bg-[#fdfcf7] text-[#3b93a0] p-3 rounded-xl mb-4 inline-block">
                  {dept.icon}
                </div>
                <h3 className="text-lg font-black text-[#1a3c34] mb-2">{dept.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} className="text-[#3b93a0]" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-[#3b93a0]" />
                    <span className="text-xs">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-[#fdfcf7] px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Our <span className="text-[#3b93a0]">Branches</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find a Thamani Sacco branch near you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-black text-[#1a3c34]">{branch.name}</h3>
                  <MapPin size={20} className="text-[#3b93a0] flex-shrink-0" />
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{branch.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 text-xs">{branch.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs">{branch.hours}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-sacco-dark text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] uppercase tracking-tighter mb-4">
              Send Us a <span className="text-[#3b93a0]">Message</span>
            </h2>
            <p className="text-gray-600">
              Have a question or feedback? Fill out the form below and we'll get back to you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="loan">Loan Application</option>
                  <option value="account">Account Support</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-black text-[#1a3c34] uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b93a0] transition-colors resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffde21] text-[#1a3c34] py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-sacco-dark py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-[#ffde21] uppercase tracking-tighter mb-6">
            Connect With Us
          </h3>
          <p className="text-white/80 mb-8">
            Follow us on social media for updates, financial tips, and community news
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-white/10 text-white p-4 rounded-full hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
              <Facebook size={24} />
            </a>
            <a href="#" className="bg-white/10 text-white p-4 rounded-full hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
              <Twitter size={24} />
            </a>
            <a href="#" className="bg-white/10 text-white p-4 rounded-full hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
              <Linkedin size={24} />
            </a>
            <a href="#" className="bg-white/10 text-white p-4 rounded-full hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
