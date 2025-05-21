
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CreditScoreDisplay from '@/components/user/CreditScoreDisplay';
import TransactionSummary from '@/components/user/TransactionSummary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const UserCreditReview = () => {
  const navigate = useNavigate();
  
  // Mock data for the credit review
  const [loading, setLoading] = useState(true);
  const [creditScore, setCreditScore] = useState({
    score: 720,
    maxScore: 850,
    status: 'good' as 'excellent' | 'good' | 'fair' | 'poor',
  });
  
  // Mock transaction data
  const [transactions, setTransactions] = useState([
    {
      type: 'income' as 'income' | 'expense',
      amount: 85000,
      category: 'Salary',
      date: '15 May 2025',
      description: 'Monthly Salary',
    },
    {
      type: 'expense' as 'income' | 'expense',
      amount: 25000,
      category: 'Rent',
      date: '05 May 2025',
      description: 'Monthly Rent',
    },
    {
      type: 'expense' as 'income' | 'expense',
      amount: 12000,
      category: 'Utilities',
      date: '10 May 2025',
      description: 'Electricity & Water',
    },
    {
      type: 'expense' as 'income' | 'expense',
      amount: 18000,
      category: 'Groceries',
      date: '12 May 2025',
      description: 'Supermarket',
    },
    {
      type: 'income' as 'income' | 'expense',
      amount: 15000,
      category: 'Freelance',
      date: '18 May 2025',
      description: 'Web Design Project',
    },
    {
      type: 'expense' as 'income' | 'expense',
      amount: 8000,
      category: 'Transportation',
      date: '22 May 2025',
      description: 'Fuel',
    },
  ]);

  // Form state for additional information
  const [formData, setFormData] = useState({
    billingAddress: '',
    city: '',
    mpesaNumber: '',
    standingOrderDay: '5',
  });
  
  // Calculate income and expense totals
  const incomeTotal = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const expenseTotal = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
      
      toast({
        title: "Credit Analysis Complete",
        description: "We've analyzed your financial information.",
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    // In a real app, you would submit this additional information
    console.log('Submitting additional info:', formData);
    
    toast({
      title: "Information Saved",
      description: "Your credit application is complete.",
    });
    
    // Redirect to checkout or dashboard
    navigate('/checkout');
  };
  
  return (
    <div className="min-h-screen bg-kelo-background">
      <Navbar />
      
      <div className="kelo-container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Credit Score Results</h1>
          <p className="text-gray-600 mb-8">
            Based on the financial information you provided, we've analyzed your creditworthiness.
          </p>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-kelo-blue border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-lg font-medium">Analyzing your financial data...</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CreditScoreDisplay 
                  score={creditScore.score}
                  maxScore={creditScore.maxScore}
                  status={creditScore.status}
                />
                <TransactionSummary
                  transactions={transactions}
                  incomeTotal={incomeTotal}
                  expenseTotal={expenseTotal}
                />
              </div>
              
              {/* Additional information form */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>
                    Please provide the following details to complete your credit application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="billingAddress">Billing Address</Label>
                        <Input 
                          id="billingAddress" 
                          name="billingAddress" 
                          placeholder="123 Main St" 
                          value={formData.billingAddress} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          placeholder="Nairobi" 
                          value={formData.city} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="mpesaNumber">M-Pesa Phone Number</Label>
                        <Input 
                          id="mpesaNumber" 
                          name="mpesaNumber" 
                          placeholder="+254 7XX XXX XXX" 
                          value={formData.mpesaNumber} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="standingOrderDay">Preferred Standing Order Day</Label>
                        <select 
                          id="standingOrderDay" 
                          name="standingOrderDay" 
                          value={formData.standingOrderDay} 
                          onChange={(e) => setFormData(prev => ({...prev, standingOrderDay: e.target.value}))}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          {Array.from({length: 28}, (_, i) => i + 1).map(day => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                          This is the day of each month when automatic payments will be processed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      onClick={handleSubmit}
                      className="bg-kelo-blue hover:bg-kelo-blue/90 px-8"
                    >
                      Complete & Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Risk factors and tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Factors Affecting Your Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-3">Positive Factors</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>Consistent income deposits over the past 3 months</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>Healthy ratio of income to expenses</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span>No overdrawn accounts or returned payments</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-3">Areas to Improve</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          </div>
                          <span>High spending on non-essential categories</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          </div>
                          <span>Limited savings activity</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          </div>
                          <span>Irregular income pattern in past months</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCreditReview;
