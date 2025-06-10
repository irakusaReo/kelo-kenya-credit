
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, CreditCard, TrendingUp, Users, Zap, Star } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const Home = () => {
  const features = [
    {
      icon: CreditCard,
      title: "0% Interest Always",
      description: "Pay only a single flat KES 500 fee. No interest, no hidden charges, ever."
    },
    {
      icon: Shield,
      title: "CBK Licensed",
      description: "Fully regulated by Central Bank of Kenya for your security and peace of mind"
    },
    {
      icon: Zap,
      title: "Instant Approval",
      description: "Get approved in under 60 seconds with our AI-powered credit assessment"
    },
    {
      icon: TrendingUp,
      title: "Build Credit Score",
      description: "Improve your credit rating with every on-time payment you make"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Shop & Choose Kelo",
      description: "Browse products and select Kelo at checkout for instant credit"
    },
    {
      step: "2",
      title: "60-Second Approval",
      description: "Get instant credit decision with our advanced AI technology"
    },
    {
      step: "3",
      title: "Pay in 4 Easy Parts",
      description: "Split your payment into 4 installments over 6 weeks with 0% interest"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Small Business Owner",
      content: "Kelo helped me buy a new laptop for my business. The 0% interest made all the difference!",
      rating: 5
    },
    {
      name: "David Kiprotich",
      role: "University Student", 
      content: "Finally bought the phone I needed for my studies. The transparent pricing with no hidden fees is amazing.",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      role: "Marketing Executive",
      content: "Love how easy it is to use. The CBK regulation gives me confidence in the platform.",
      rating: 5
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelo-blue to-kelo-teal text-white py-20">
        <div className="kelo-container text-center">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shop Today, Pay Tomorrow<br />
              <span className="text-3xl md:text-5xl">With 0% Interest</span>
            </h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
              <p className="text-xl md:text-2xl font-semibold">
                Pay only KES 500 flat fee • No interest • No hidden costs
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Kenya's first Web3-powered Buy Now Pay Later platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-kelo-blue hover:bg-gray-100 px-8 py-4 text-lg">
                Apply for Credit
              </Button>
            </Link>
            <Link to="/invest">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-kelo-blue px-8 py-4 text-lg">
                Invest Now
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>CBK Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Zero Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>10,000+ Happy Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Interest Explainer */}
      <section className="py-16 bg-blue-50">
        <div className="kelo-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How is 0% Interest Sustainable?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make money through a transparent partnership model with merchants, not by charging you interest.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Single Flat Fee</h3>
                <p className="text-gray-600">Pay only KES 500 processing fee per transaction, regardless of amount</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Merchant Partnerships</h3>
                <p className="text-gray-600">Merchants pay us a small fee for increased sales and customer conversion</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Web3 Innovation</h3>
                <p className="text-gray-600">Blockchain technology reduces our operational costs, savings we pass to you</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-600" />
              Important: Late Payment Policy
            </h4>
            <p className="text-sm text-yellow-800">
              If payment is more than 7 days late, a one-time late fee of KES 500 applies. 
              We'll always notify you before any charges and work with you to find a solution.
            </p>
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
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kelo-blue text-white">
        <div className="kelo-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Kenyans who shop smarter with Kelo's 0% interest BNPL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-kelo-blue hover:bg-gray-100 px-8 py-4 text-lg">
                Get Started Now
              </Button>
            </Link>
            <Link to="/consumer/catalog">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-kelo-blue px-8 py-4 text-lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
