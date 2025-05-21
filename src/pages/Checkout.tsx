
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CartSummary from '@/components/CartSummary';
import { Progress } from '@/components/ui/progress';
import MpesaPaymentModal from '@/components/MpesaPaymentModal';

const steps = [
  { id: 'personal', name: 'Personal Information' },
  { id: 'payment', name: 'Payment Method' },
  { id: 'confirmation', name: 'Confirmation' }
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState('personal');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const stepIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((stepIndex + 1) / steps.length) * 100;
  
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);
  
  const handleNextStep = () => {
    if (currentStep === 'personal') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setIsPaymentModalOpen(true);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep === 'payment') {
      setCurrentStep('personal');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('payment');
    }
  };
  
  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setCurrentStep('confirmation');
  };
  
  const handleCompleteCheckout = () => {
    clearCart();
    navigate('/success');
  };
  
  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow section-padding bg-kelo-background">
        <div className="kelo-container max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`text-sm ${currentStep === step.id ? 'text-kelo-blue font-medium' : 'text-gray-500'}`}
                >
                  {index + 1}. {step.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === 'personal' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Enter your details for delivery and verification
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+254 7XX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Moi Avenue" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Nairobi" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" placeholder="00100" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled>
                      Back
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      className="bg-kelo-blue hover:bg-kelo-blue/90"
                    >
                      Next
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {currentStep === 'payment' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                      Choose how you want to pay for your purchase
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 border p-4 rounded-lg bg-gray-50">
                        <input 
                          type="radio" 
                          id="mpesa" 
                          name="paymentMethod" 
                          defaultChecked 
                          className="h-4 w-4 text-kelo-blue"
                        />
                        <label htmlFor="mpesa" className="flex-1 flex items-center">
                          <div className="h-8 w-10 bg-green-600 text-white rounded flex items-center justify-center font-bold mr-2">M-PESA</div>
                          <span>Pay with M-Pesa</span>
                        </label>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">M-Pesa Number</div>
                        <Input placeholder="+254 7XX XXX XXX" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      className="bg-kelo-blue hover:bg-kelo-blue/90"
                    >
                      Continue to Payment
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {currentStep === 'confirmation' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Confirmation</CardTitle>
                    <CardDescription>
                      Your payment has been processed successfully
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
                      <p className="text-gray-600 text-center mb-4">
                        Your order has been placed and your payment plan has been set up.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg w-full">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Order Reference:</span>
                          <span className="font-medium">KLO-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Method:</span>
                          <span className="font-medium">M-Pesa</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      onClick={handleCompleteCheckout}
                      className="bg-kelo-blue hover:bg-kelo-blue/90"
                    >
                      Complete Checkout
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
            
            <div>
              <div className="sticky top-24">
                <CartSummary readOnly />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <MpesaPaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Checkout;
