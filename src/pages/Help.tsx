
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, FileText, Search, Clock } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const Help = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "+254 700 123 456",
      available: "Mon-Fri 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions via email",
      action: "support@kelo.co.ke",
      available: "Response within 4 hours"
    }
  ];

  const commonIssues = [
    {
      title: "Payment Failed",
      description: "What to do if your payment doesn't go through",
      link: "#"
    },
    {
      title: "Account Issues",
      description: "Problems logging in or accessing your account",
      link: "#"
    },
    {
      title: "Credit Limit",
      description: "How to increase your credit limit",
      link: "#"
    },
    {
      title: "Merchant Problems",
      description: "Issues with orders from merchant partners",
      link: "#"
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelo-blue to-kelo-teal text-white py-16">
        <div className="kelo-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help & Support</h1>
          <p className="text-xl opacity-90 mb-8">
            We're here to help you 24/7
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search for help articles..." 
              className="pl-10 bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-kelo-blue" />
                    </div>
                    <h3 className="font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Clock size={16} className="mr-1" />
                      {option.available}
                    </div>
                    <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{issue.title}</h3>
                  <p className="text-gray-600 text-sm">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-kelo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Find answers to frequently asked questions
                </p>
                <Link to="/faq">
                  <Button variant="outline" className="w-full">
                    View FAQ
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-kelo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Terms of Service</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read our terms and conditions
                </p>
                <Link to="/legal/terms">
                  <Button variant="outline" className="w-full">
                    View Terms
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-kelo-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how we protect your data
                </p>
                <Link to="/legal/privacy">
                  <Button variant="outline" className="w-full">
                    View Privacy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Send Us Feedback</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message"
                    className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kelo-blue focus:border-transparent"
                    placeholder="Describe your issue or feedback..."
                  />
                </div>
                <Button type="submit" className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;
