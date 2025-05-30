
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, CreditCard, TrendingUp, Users, Zap } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const Home = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Buy Now, Pay Later",
      description: "Shop today and pay in flexible installments with no hidden fees"
    },
    {
      icon: Shield,
      title: "CBK Licensed",
      description: "Fully regulated by Central Bank of Kenya for your security"
    },
    {
      icon: Zap,
      title: "Instant Approval",
      description: "Get approved in minutes with our AI-powered credit assessment"
    },
    {
      icon: TrendingUp,
      title: "Build Credit Score",
      description: "Improve your credit rating with every on-time payment"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Shop & Choose Kelo",
      description: "Browse products and select Kelo at checkout"
    },
    {
      step: "2",
      title: "Quick Approval",
      description: "Get instant credit decision in under 60 seconds"
    },
    {
      step: "3",
      title: "Pay in 4",
      description: "Split your payment into 4 easy installments"
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelo-blue to-kelo-teal text-white py-20">
        <div className="kelo-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop Today, Pay Tomorrow
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Kenya's first Web3-powered Buy Now Pay Later platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-kelo-blue hover:bg-gray-100">
                Apply for Credit
              </Button>
            </Link>
            <Link to="/invest">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-kelo-blue">
                Invest Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kelo?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-kelo-blue" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-kelo-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kelo-blue text-white">
        <div className="kelo-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of Kenyans who shop smarter with Kelo</p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-kelo-blue hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
