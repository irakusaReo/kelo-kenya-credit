
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Complete KYC',
    description: 'Create your Kelo account and complete a simple KYC process using your Kenyan ID.',
  },
  {
    number: '02',
    title: 'Get Credit Approval',
    description: 'Our system instantly evaluates your eligibility for BNPL services.',
  },
  {
    number: '03',
    title: 'Shop at Partner Merchants',
    description: 'Browse our network of partner stores and select Kelo as your payment method.',
  },
  {
    number: '04',
    title: 'Pay in Installments',
    description: 'Make convenient repayments through M-Pesa according to your chosen schedule.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-kelo-background">
      <div className="kelo-container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Kelo Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started with Kelo is simple, secure, and designed for both shoppers and merchants in Kenya.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className={`md:col-start-${index % 2 === 0 ? '1' : '2'} md:row-start-1`}>
                  <div className={`relative md:${index % 2 === 0 ? 'text-right' : 'text-left'} animate-fade-up`} style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Number indicator */}
                    <div className="absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-kelo-blue text-white md:left-1/2 md:-ml-4">
                      {step.number}
                    </div>
                    
                    <div className="rounded-lg bg-white p-6 shadow-md md:mx-4">
                      <h3 className="text-xl font-semibold text-kelo-text">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* This is an empty div to maintain the grid layout */}
                <div className={`md:col-start-${index % 2 === 0 ? '2' : '1'} md:row-start-1`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/register">
            <Button size="lg" className="bg-kelo-blue hover:bg-kelo-blue/90">
              Get Started with Kelo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
