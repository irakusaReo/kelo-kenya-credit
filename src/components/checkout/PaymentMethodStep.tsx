
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PaymentMethodStepProps {
  onBack: () => void;
  onNext: () => void;
}

const PaymentMethodStep = ({ onBack, onNext }: PaymentMethodStepProps) => {
  return (
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
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={onNext}
          className="bg-kelo-blue hover:bg-kelo-blue/90"
        >
          Continue to Payment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentMethodStep;
