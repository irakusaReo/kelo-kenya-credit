
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-kelo-blue">
      <div className="kelo-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of Kenyans who are already using Kelo to shop smarter and grow their businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-col sm:flex-row">
            <Link to="/register">
              <Button size="lg" className="bg-white text-kelo-blue hover:bg-blue-50">
                Create Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/merchant">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Partner as a Merchant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
