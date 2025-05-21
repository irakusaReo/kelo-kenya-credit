
import React, { useState } from 'react';
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PaymentMethodStepProps {
  onBack: () => void;
  onNext: () => void;
}

const PaymentMethodStep = ({ onBack, onNext }: PaymentMethodStepProps) => {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Validate the phone number on change
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    
    // Simple validation for Kenyan phone numbers
    // Should start with +254 or 0 and have 9-12 digits total
    const isValidPhone = /^(\+254|0)[0-9]{9,12}$/.test(value);
    setIsValid(isValidPhone);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Choose how you want to pay for your purchase
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={setPaymentMethod}
          className="space-y-4"
        >
          <div className={`
            flex items-center space-x-2 border p-4 rounded-lg 
            ${paymentMethod === "mpesa" ? "bg-gray-50 border-kelo-blue" : "bg-white"}
          `}>
            <RadioGroupItem value="mpesa" id="mpesa" />
            <Label htmlFor="mpesa" className="flex-1 flex items-center cursor-pointer">
              <div className="h-8 w-10 bg-green-600 text-white rounded flex items-center justify-center font-bold mr-2">M-PESA</div>
              <span>Pay with M-Pesa</span>
            </Label>
          </div>
          
          <div className={`
            flex items-center space-x-2 border p-4 rounded-lg 
            ${paymentMethod === "card" ? "bg-gray-50 border-kelo-blue" : "bg-white"}
          `}>
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1 flex items-center cursor-pointer">
              <div className="h-8 w-10 bg-blue-600 text-white rounded flex items-center justify-center font-bold mr-2">VISA</div>
              <span>Pay with Card</span>
            </Label>
          </div>
        </RadioGroup>

        {paymentMethod === "mpesa" && (
          <div className="border p-4 rounded-lg mt-4">
            <div className="text-sm text-gray-600 mb-2">M-Pesa Number</div>
            <Input 
              placeholder="+254 7XX XXX XXX" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {phoneNumber && !isValid && (
              <p className="text-xs text-red-500 mt-1">
                Please enter a valid Kenyan phone number
              </p>
            )}
          </div>
        )}

        {paymentMethod === "card" && (
          <div className="border p-4 rounded-lg mt-4 space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">Card Number</div>
              <Input placeholder="4242 4242 4242 4242" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600 mb-2">Expiry Date</div>
                <Input placeholder="MM/YY" />
              </div>
              
              <div>
                <div className="text-sm text-gray-600 mb-2">CVV</div>
                <Input placeholder="123" />
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={onNext}
          className="bg-kelo-blue hover:bg-kelo-blue/90"
          disabled={paymentMethod === "mpesa" && !isValid}
        >
          Continue to Payment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentMethodStep;
