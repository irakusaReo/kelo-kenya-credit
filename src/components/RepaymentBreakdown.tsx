
import React from 'react';
import { format, addMonths, addWeeks } from 'date-fns';

interface RepaymentBreakdownProps {
  price: number;
  months?: number;
  interestRate?: number;
  frequency?: 'weekly' | 'biweekly' | 'monthly';
  totalPayments?: number;
  initialPaymentPercentage?: number;
}

const RepaymentBreakdown = ({ 
  price, 
  months = 3, 
  interestRate = 5,
  frequency = 'monthly',
  totalPayments,
  initialPaymentPercentage = 30
}: RepaymentBreakdownProps) => {
  // Calculate total interest
  const totalInterest = (price * interestRate * months) / 1200;
  const totalAmount = price + totalInterest;
  
  // Number of installments based on frequency
  const payments = totalPayments || (frequency === 'weekly' ? 12 : frequency === 'biweekly' ? 6 : 3);
  
  // Calculate initial payment
  const initialPayment = (price * initialPaymentPercentage) / 100;
  
  // Calculate remaining amount to be paid in installments
  const remainingAmount = totalAmount - initialPayment;
  const installmentAmount = remainingAmount / (payments - 1); // Subtract 1 because initial payment is separate
  
  // Generate payment schedule
  const today = new Date();
  const schedule = [
    {
      date: format(today, 'dd MMM yyyy'),
      amount: Math.round(initialPayment),
      description: 'Initial payment'
    }
  ];
  
  // Add remaining payments to schedule
  for (let i = 1; i < payments; i++) {
    let nextDate;
    if (frequency === 'weekly') {
      nextDate = addWeeks(today, i);
    } else if (frequency === 'biweekly') {
      nextDate = addWeeks(today, i * 2);
    } else {
      nextDate = addMonths(today, i);
    }
    
    schedule.push({
      date: format(nextDate, 'dd MMM yyyy'),
      amount: Math.round(installmentAmount),
      description: `Payment ${i + 1}`
    });
  }
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">
          {frequency === 'weekly' ? 'Weekly' : frequency === 'biweekly' ? 'Bi-weekly' : 'Monthly'} payment
        </div>
        <div className="text-2xl font-bold text-kelo-blue">
          KES {Math.round(installmentAmount).toLocaleString()}
        </div>
      </div>
      
      <div className="space-y-4">
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
        
        <div className="border-t pt-3 mt-3">
          <h4 className="font-medium mb-2">Payment Schedule</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {schedule.map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-white rounded">
                <div>
                  <div className="font-medium">{payment.description}</div>
                  <div className="text-xs text-gray-600">{payment.date}</div>
                </div>
                <div className={index === 0 ? "font-bold" : ""}>
                  KES {payment.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        *Final approval subject to credit assessment. Terms and conditions apply.
      </div>
    </div>
  );
};

export default RepaymentBreakdown;
