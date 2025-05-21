
import React from 'react';

interface RepaymentBreakdownProps {
  price: number;
  months: number;
  interestRate: number;
}

const RepaymentBreakdown = ({ price, months, interestRate }: RepaymentBreakdownProps) => {
  // Calculate total interest
  const totalInterest = (price * interestRate * months) / 1200;
  const totalAmount = price + totalInterest;
  const monthlyPayment = totalAmount / months;
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Monthly payment</div>
        <div className="text-2xl font-bold text-kelo-blue">
          KES {Math.round(monthlyPayment).toLocaleString()}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Item price</span>
          <span>KES {price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Interest ({interestRate}% APR)</span>
          <span>KES {Math.round(totalInterest).toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-medium border-t pt-2 mt-2">
          <span>Total</span>
          <span>KES {Math.round(totalAmount).toLocaleString()}</span>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        *Final approval subject to credit assessment. Terms and conditions apply.
      </div>
    </div>
  );
};

export default RepaymentBreakdown;
