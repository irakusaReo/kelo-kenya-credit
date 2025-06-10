
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Check, CreditCard, Smartphone } from 'lucide-react';

const CheckoutFlow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    paymentMethod: 'mpesa',
    agreedToTerms: false
  });

  const steps = [
    { id: 1, title: 'Personal Info', icon: '👤' },
    { id: 2, title: 'Payment Method', icon: '💳' },
    { id: 3, title: 'Review Order', icon: '📋' },
    { id: 4, title: 'Confirm Payment', icon: '✅' }
  ];

  const orderSummary = {
    items: [
      { name: 'Samsung Galaxy A54', price: 35000, quantity: 1 }
    ],
    subtotal: 35000,
    fee: 500,
    total: 35500,
    installmentAmount: 8875
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/consumer/loan-summary');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/cart');
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.phone && formData.email;
      case 2:
        return formData.paymentMethod;
      case 3:
        return formData.agreedToTerms;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+254 7XX XXX XXX"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">Choose Payment Method</h3>
            <div className="space-y-3">
              <Card 
                className={`cursor-pointer border-2 ${
                  formData.paymentMethod === 'mpesa' ? 'border-kelo-blue' : 'border-gray-200'
                }`}
                onClick={() => setFormData({...formData, paymentMethod: 'mpesa'})}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">M-Pesa</p>
                    <p className="text-sm text-gray-600">Pay with M-Pesa STK Push</p>
                  </div>
                  <Badge variant="secondary">Recommended</Badge>
                </CardContent>
              </Card>
              
              <Card 
                className={`cursor-pointer border-2 ${
                  formData.paymentMethod === 'card' ? 'border-kelo-blue' : 'border-gray-200'
                }`}
                onClick={() => setFormData({...formData, paymentMethod: 'card'})}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-sm text-gray-600">Pay with Visa or Mastercard</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>KES {item.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span>Processing Fee</span>
                  <span>KES {orderSummary.fee.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>KES {orderSummary.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-kelo-blue/10 p-4 rounded-lg">
              <h4 className="font-semibold text-kelo-blue mb-2">Payment Schedule</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Today</span>
                  <span>KES {orderSummary.installmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Week 2</span>
                  <span>KES {orderSummary.installmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Week 4</span>
                  <span>KES {orderSummary.installmentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Week 6</span>
                  <span>KES {orderSummary.installmentAmount.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">0% interest • No hidden fees</p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <a href="/legal/terms" className="text-kelo-blue underline">Terms of Service</a> and <a href="/legal/privacy" className="text-kelo-blue underline">Privacy Policy</a>
              </Label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-kelo-blue rounded-full flex items-center justify-center mx-auto">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Complete Payment on Your Phone</h3>
              <p className="text-gray-600">
                Check your phone for an M-Pesa payment request for KES {orderSummary.installmentAmount.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                Having trouble? Enter <strong>0000</strong> as your M-Pesa PIN or contact customer support.
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Resend Payment Request
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="kelo-container max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-kelo-blue text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 w-full mx-4 ${
                      currentStep > step.id ? 'bg-kelo-blue' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              {steps.map((step) => (
                <span key={step.id}>{step.title}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderStepContent()}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <img src="/placeholder.svg" alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="font-semibold">KES {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KES {orderSummary.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>KES {orderSummary.fee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>KES {orderSummary.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Today's Payment</p>
                    <p className="text-lg font-bold text-green-800">
                      KES {orderSummary.installmentAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600">3 more payments of same amount</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-kelo-blue hover:bg-kelo-blue/90"
            >
              {currentStep === 4 ? 'Complete Order' : 'Continue'}
              {currentStep < 4 && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutFlow;
