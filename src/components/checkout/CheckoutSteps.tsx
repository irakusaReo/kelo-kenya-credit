
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface CheckoutStepsProps {
  steps: { id: string; name: string }[];
  currentStep: string;
}

const CheckoutSteps = ({ steps, currentStep }: CheckoutStepsProps) => {
  const stepIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((stepIndex + 1) / steps.length) * 100;
  
  return (
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
  );
};

export default CheckoutSteps;
