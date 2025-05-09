
import React from 'react';
import { Shield, CreditCard, ArrowDownUp, Clock } from 'lucide-react';

const features = [
  {
    name: 'Instant Credit Approval',
    description: 'Get approved in minutes with our smart credit assessment system tailored for Kenyan consumers and businesses.',
    icon: Clock,
    color: 'bg-blue-100 text-kelo-blue',
  },
  {
    name: 'Blockchain Security',
    description: 'Your credit agreements are secured on blockchain, ensuring transparency and immutability of all transactions.',
    icon: Shield,
    color: 'bg-teal-100 text-kelo-teal',
  },
  {
    name: 'M-Pesa Integration',
    description: 'Seamless payments through Kenya's most popular mobile money platform, making repayments convenient.',
    icon: CreditCard,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Flexible Installments',
    description: 'Choose payment schedules that work for your cash flow, with transparent terms and no hidden fees.',
    icon: ArrowDownUp,
    color: 'bg-amber-100 text-amber-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="kelo-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Kelo</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform combines the best of financial technology with local payment solutions to offer credit that works for Kenyans.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature.name} className="animate-fade-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-center">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
