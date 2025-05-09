
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-6xl">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-10"
          >
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#045DE9" />
                <stop offset="100%" stopColor="#35A29F" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="300" fill="url(#blueGradient)" />
          </svg>
        </div>
      </div>
      <div className="kelo-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-blue-50 text-kelo-blue px-4 py-1.5 rounded-full text-sm font-medium mb-5">
              Web3-Powered Buy Now, Pay Later
            </span>
          </div>
          <h1 className="animate-fade-in animate-delay-100 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient">Shop Now, Pay Later</span><br />
            <span>for Nairobi's Future</span>
          </h1>
          <p className="animate-fade-in animate-delay-200 mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Kelo provides instant credit access for consumers and small business owners in Kenya, 
            powered by blockchain technology and integrated with M-Pesa for seamless payments.
          </p>
          <div className="animate-fade-in animate-delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-kelo-blue hover:bg-kelo-blue/90 text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 animate-fade-up animate-delay-300">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Placeholder for dashboard image */}
            <div className="aspect-[16/9] bg-gradient-to-r from-blue-50 to-teal-50 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-kelo-blue/10 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-kelo-blue"></div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Kelo Dashboard Preview</h3>
                <p className="mt-2 text-sm text-gray-500">Secure, transparent credit management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
