
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TermsConfiguratorProps {
  productPrice: number;
  onTermsChange?: (terms: {
    frequency: 'weekly' | 'biweekly' | 'monthly';
    percentage: number;
    totalPayments: number;
    interestRate: number;
    totalAmount: number;
    installmentAmount: number;
  }) => void;
}

const TermsConfigurator = ({ productPrice, onTermsChange }: TermsConfiguratorProps) => {
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly'>('monthly');
  const [percentage, setPercentage] = useState<number>(30); // Default to 30% per installment
  
  // Calculate payment schedule
  const calculatePayments = () => {
    // Map frequency to number of installments
    const frequencyMap = {
      weekly: 8, // 8 weeks (2 months)
      biweekly: 6, // Roughly 3 months
      monthly: 3  // 3 months
    };
    
    const totalPayments = frequencyMap[frequency];
    const interestRate = 5; // 5% standard interest rate
    
    // Calculate total amount with interest
    const interest = (productPrice * interestRate / 100);
    const totalAmount = productPrice + interest;
    
    // Calculate per installment amount
    const installmentAmount = totalAmount / totalPayments;
    
    return {
      frequency,
      percentage,
      totalPayments,
      interestRate,
      totalAmount,
      installmentAmount
    };
  };
  
  useEffect(() => {
    const terms = calculatePayments();
    onTermsChange && onTermsChange(terms);
  }, [frequency, percentage, productPrice]);
  
  const terms = calculatePayments();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Terms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Payment Frequency</Label>
          <RadioGroup 
            value={frequency} 
            onValueChange={(value) => setFrequency(value as 'weekly' | 'biweekly' | 'monthly')}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly (8 payments)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="biweekly" id="biweekly" />
              <Label htmlFor="biweekly">Bi-weekly (6 payments)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly (3 payments)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label>Upfront payment percentage</Label>
            <span className="font-medium">{percentage}%</span>
          </div>
          <Slider
            defaultValue={[30]}
            max={50}
            min={10}
            step={5}
            onValueChange={(value) => setPercentage(value[0])}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>10%</span>
            <span>30%</span>
            <span>50%</span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-3">Payment Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Product price</span>
              <span>KES {productPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interest ({terms.interestRate}%)</span>
              <span>KES {Math.round(productPrice * terms.interestRate / 100).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total amount</span>
              <span className="font-medium">KES {Math.round(terms.totalAmount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Number of payments</span>
              <span>{terms.totalPayments}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t mt-2">
              <span>{frequency === 'weekly' ? 'Weekly' : frequency === 'biweekly' ? 'Bi-weekly' : 'Monthly'} payment</span>
              <span className="text-kelo-blue">KES {Math.round(terms.installmentAmount).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TermsConfigurator;
