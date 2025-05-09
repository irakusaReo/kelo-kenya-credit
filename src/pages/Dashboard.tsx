
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, ArrowRight, Clock, ShoppingBag, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  // Sample data - would come from an API in a real app
  const creditLimit = 10000;
  const availableCredit = 6500;
  const nextPaymentAmount = 1250;
  const nextPaymentDate = "May 15, 2025";
  
  // Sample upcoming payments
  const upcomingPayments = [
    { id: 1, amount: 1250, date: "May 15, 2025", status: "upcoming" },
    { id: 2, amount: 1250, date: "June 15, 2025", status: "upcoming" },
    { id: 3, amount: 1250, date: "July 15, 2025", status: "upcoming" },
  ];
  
  // Sample purchase history
  const purchaseHistory = [
    { id: 1, merchant: "Naivas Supermarket", amount: 2500, date: "April 2, 2025", status: "completed" },
    { id: 2, merchant: "Carrefour", amount: 1000, date: "March 15, 2025", status: "completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="kelo-container">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Manage your credit and payments</p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Credit Overview Card */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Credit Overview</CardTitle>
                  <CardDescription>Your available credit and limits</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  Apply for Increase
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Available Credit</p>
                        <p className="text-2xl font-bold">KSh {availableCredit.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Credit Limit</p>
                        <p className="text-xl font-semibold">KSh {creditLimit.toLocaleString()}</p>
                      </div>
                    </div>
                    <Progress 
                      value={(availableCredit / creditLimit) * 100} 
                      className="h-2 mt-2"
                    />
                    <p className="text-xs text-right mt-1 text-gray-500">
                      {Math.round((availableCredit / creditLimit) * 100)}% Available
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <p className="text-sm text-gray-500">Next Payment</p>
                      <p className="text-lg font-semibold">KSh {nextPaymentAmount.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="text-lg font-semibold">{nextPaymentDate}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full sm:hidden bg-kelo-blue hover:bg-kelo-blue/90">
                    Apply for Increase
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Card */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button className="w-full justify-between bg-kelo-blue hover:bg-kelo-blue/90">
                  <div className="flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Now
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Make Payment
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Payment Schedule
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Transactions Tabs */}
            <Card className="col-span-1 md:col-span-3">
              <CardHeader>
                <CardTitle>Your Transactions</CardTitle>
                <CardDescription>View your purchases and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming">
                  <TabsList className="mb-4">
                    <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
                    <TabsTrigger value="purchases">Purchase History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming">
                    <div className="rounded-md border">
                      <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
                        <div>
                          <p className="text-sm font-medium">Amount</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Due Date</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Status</p>
                        </div>
                      </div>
                      <div className="divide-y">
                        {upcomingPayments.map((payment) => (
                          <div key={payment.id} className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
                            <div>
                              <p className="font-medium">KSh {payment.amount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-700">{payment.date}</p>
                            </div>
                            <div>
                              <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                {payment.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="purchases">
                    <div className="rounded-md border">
                      <div className="grid gap-4 p-4 sm:grid-cols-4 sm:p-6">
                        <div>
                          <p className="text-sm font-medium">Merchant</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Amount</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Date</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Status</p>
                        </div>
                      </div>
                      <div className="divide-y">
                        {purchaseHistory.map((purchase) => (
                          <div key={purchase.id} className="grid gap-4 p-4 sm:grid-cols-4 sm:p-6">
                            <div>
                              <p className="font-medium">{purchase.merchant}</p>
                            </div>
                            <div>
                              <p className="font-medium">KSh {purchase.amount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-700">{purchase.date}</p>
                            </div>
                            <div>
                              <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                {purchase.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
