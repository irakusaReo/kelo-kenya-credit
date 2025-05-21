
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center section-padding bg-kelo-background">
        <div className="kelo-container max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-sm p-10">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your purchase. Your order has been placed and your payment plan has been set up.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-sm mx-auto">
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Order Reference:</span>
                <span className="font-semibold">KLO-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-semibold">M-Pesa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">First Payment:</span>
                <span className="font-semibold text-kelo-blue">Successful</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  View Payment Schedule
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
