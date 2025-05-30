
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Calendar, CreditCard } from 'lucide-react';

const LoanSummary = () => {
  const loanDetails = {
    orderId: 'KLO-2024-001234',
    amount: 35500,
    installmentAmount: 8875,
    nextPayment: '2024-01-15',
    status: 'approved',
    merchant: 'TechHub Kenya',
    product: 'Samsung Galaxy A54'
  };

  const paymentSchedule = [
    { date: '2024-01-01', amount: 8875, status: 'paid', description: 'Initial payment' },
    { date: '2024-01-15', amount: 8875, status: 'upcoming', description: 'Payment 2 of 4' },
    { date: '2024-01-29', amount: 8875, status: 'scheduled', description: 'Payment 3 of 4' },
    { date: '2024-02-12', amount: 8875, status: 'scheduled', description: 'Final payment' }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="kelo-container max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Your Kelo loan has been approved and your order is being processed.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID</span>
                  <span className="font-mono font-semibold">{loanDetails.orderId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Product</span>
                  <span className="font-semibold">{loanDetails.product}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Merchant</span>
                  <span>{loanDetails.merchant}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-semibold">KES {loanDetails.amount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge className="bg-green-100 text-green-800">
                    {loanDetails.status.charAt(0).toUpperCase() + loanDetails.status.slice(1)}
                  </Badge>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Payment</span>
                    <span className="font-semibold text-kelo-blue">
                      KES {loanDetails.installmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date</span>
                    <span className="font-semibold">{loanDetails.nextPayment}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Payment Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentSchedule.map((payment, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className={`w-3 h-3 rounded-full ${
                        payment.status === 'paid' ? 'bg-green-500' :
                        payment.status === 'upcoming' ? 'bg-kelo-blue' :
                        'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{payment.description}</p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">KES {payment.amount.toLocaleString()}</p>
                        <Badge 
                          variant={payment.status === 'paid' ? 'default' : 'secondary'}
                          className={payment.status === 'paid' ? 'bg-green-500' : ''}
                        >
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Payment Reminders</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    We'll send you SMS reminders 2 days before each payment is due.
                  </p>
                  <p className="text-xs text-blue-600">
                    Late payment fee: KES 500 after 7 days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link to="/dashboard">
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                Go to Dashboard
              </Button>
            </Link>
            <Link to="/market">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="outline">
                Need Help?
              </Button>
            </Link>
          </div>

          {/* Important Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Information</h4>
                  <p className="text-sm text-gray-600">
                    Your order will be processed by the merchant within 1-2 business days. 
                    You'll receive a tracking number once shipped.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Information</h4>
                  <p className="text-sm text-gray-600">
                    Payments are automatically deducted from your M-Pesa account. 
                    Ensure sufficient balance 2 days before due date.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Returns Policy</h4>
                  <p className="text-sm text-gray-600">
                    You can return items within 14 days of delivery. 
                    Contact the merchant directly for return instructions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Support</h4>
                  <p className="text-sm text-gray-600">
                    Need help? Contact us at support@kelo.co.ke or call +254 700 123 456.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoanSummary;
