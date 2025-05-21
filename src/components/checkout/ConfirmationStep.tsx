
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ConfirmationStepProps {
  onComplete: () => void;
}

const ConfirmationStep = ({ onComplete }: ConfirmationStepProps) => {
  return (
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
          onClick={onComplete}
          className="bg-kelo-blue hover:bg-kelo-blue/90"
        >
          Complete Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConfirmationStep;
