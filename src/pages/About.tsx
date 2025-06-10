
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const About = () => {
  const team = [
    {
      name: "John Kamau",
      role: "CEO & Co-Founder",
      bio: "Former Equity Bank executive with 10+ years in fintech",
      image: "/placeholder.svg"
    },
    {
      name: "Mary Wanjiku",
      role: "CTO & Co-Founder",
      bio: "Blockchain engineer, previously at Binance Africa",
      image: "/placeholder.svg"
    },
    {
      name: "David Ochieng",
      role: "Head of Risk",
      bio: "Credit risk expert, former CBK regulatory specialist",
      image: "/placeholder.svg"
    },
    {
      name: "Grace Muthoni",
      role: "Head of Product",
      bio: "UX designer with focus on financial inclusion",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Financial Inclusion",
      description: "Making credit accessible to all Kenyans, regardless of banking history"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden fees, clear terms, and honest communication always"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Leveraging Web3 technology to revolutionize African finance"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Empowering communities through responsible lending practices"
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelo-blue to-kelo-teal text-white py-16">
        <div className="kelo-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kelo</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're building the future of financial inclusion in Africa through innovative 
            Buy Now Pay Later solutions powered by Web3 technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="kelo-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To democratize access to credit for millions of Africans by combining traditional 
                financial services with cutting-edge blockchain technology.
              </p>
              <p className="text-gray-600">
                We believe everyone deserves the opportunity to improve their financial wellbeing, 
                regardless of their current banking status or credit history.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Founded in 2024</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Users Served</span>
                  <span className="font-semibold">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Credit Extended</span>
                  <span className="font-semibold">KES 2.5B+</span>
                </div>
                <div className="flex justify-between">
                  <span>Merchant Partners</span>
                  <span className="font-semibold">1,200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Default Rate</span>
                  <span className="font-semibold text-green-600">2.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-kelo-blue" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-kelo-blue text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kelo-blue text-white">
        <div className="kelo-container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us build the future of African fintech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-kelo-blue hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-kelo-blue">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
