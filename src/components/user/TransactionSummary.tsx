
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface Transaction {
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface TransactionSummaryProps {
  transactions: Transaction[];
  incomeTotal: number;
  expenseTotal: number;
}

const TransactionSummary = ({ 
  transactions, 
  incomeTotal, 
  expenseTotal 
}: TransactionSummaryProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Income</span>
              <ArrowDownLeft className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-xl font-bold text-green-600">
              KES {incomeTotal.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Expense</span>
              <ArrowUpRight className="h-4 w-4 text-red-600" />
            </div>
            <div className="text-xl font-bold text-red-600">
              KES {expenseTotal.toLocaleString()}
            </div>
          </div>
        </div>
        
        <h3 className="font-medium mb-3">Recent Transactions</h3>
        
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {transactions.map((transaction, index) => (
            <div 
              key={index}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                    ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}
                >
                  {transaction.type === 'income' 
                    ? <ArrowDownLeft className="h-4 w-4 text-green-600" /> 
                    : <ArrowUpRight className="h-4 w-4 text-red-600" />
                  }
                </div>
                <div>
                  <div className="font-medium text-sm">{transaction.description}</div>
                  <div className="text-xs text-gray-500">
                    {transaction.category} • {transaction.date}
                  </div>
                </div>
              </div>
              <div 
                className={`font-medium ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'} 
                KES {transaction.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionSummary;
