
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Check } from 'lucide-react';

interface CheckoutStep {
  id: string;
  name: string;
}

interface CheckoutStepsProps {
  steps: CheckoutStep[];
  currentStep: string;
  completedSteps?: string[];
}

const CheckoutSteps = ({ 
  steps, 
  currentStep,
  completedSteps = [] 
}: CheckoutStepsProps) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;
  
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <Progress value={progress} className="h-2 mb-4" />
      
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);
          const isPast = index < currentStepIndex;
          
          return (
            <div 
              key={step.id} 
              className={`flex flex-col items-center relative text-sm ${
                isActive ? 'text-kelo-blue font-medium' : 
                isCompleted || isPast ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center mb-2
                ${isActive ? 'bg-kelo-blue text-white' : 
                  isCompleted || isPast ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}
              `}>
                {isCompleted || isPast ? (
                  <Check className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </div>
              
              <span className="text-center max-w-[80px] sm:max-w-none">
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutSteps;
