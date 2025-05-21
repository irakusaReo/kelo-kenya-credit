
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/stores/cartStore';
import CartSummary from '@/components/CartSummary';
import MpesaPaymentModal from '@/components/MpesaPaymentModal';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import PersonalInformationStep from '@/components/checkout/PersonalInformationStep';
import PaymentMethodStep from '@/components/checkout/PaymentMethodStep';
import ConfirmationStep from '@/components/checkout/ConfirmationStep';

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
          <CheckoutSteps steps={steps} currentStep={currentStep} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === 'personal' && (
                <PersonalInformationStep onNext={handleNextStep} />
              )}
              
              {currentStep === 'payment' && (
                <PaymentMethodStep onBack={handlePrevStep} onNext={handleNextStep} />
              )}
              
              {currentStep === 'confirmation' && (
                <ConfirmationStep onComplete={handleCompleteCheckout} />
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
