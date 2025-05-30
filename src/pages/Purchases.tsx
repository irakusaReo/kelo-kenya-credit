
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Package, Clock, CheckCircle } from 'lucide-react';

const Purchases = () => {
  const [activeTab, setActiveTab] = useState('current');

  // Mock purchase data
  const currentPurchases = [
    {
      id: 1,
      merchant: 'Carrefour',
      amount: 15650,
      date: '2025-01-15',
      status: 'active',
      remainingPayments: 2,
      nextPayment: '2025-02-15',
      nextAmount: 5217,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      merchant: 'Naivas Supermarket',
      amount: 8400,
      date: '2025-01-10',
      status: 'active',
      remainingPayments: 1,
      nextPayment: '2025-02-10',
      nextAmount: 2800,
      image: '/placeholder.svg'
    }
  ];

  const pastPurchases = [
    {
      id: 3,
      merchant: 'Jumia',
      amount: 12500,
      date: '2024-12-20',
      status: 'completed',
      completedDate: '2025-01-20',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      merchant: 'Quickmart',
      amount: 5600,
      date: '2024-12-15',
      status: 'completed',
      completedDate: '2025-01-15',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">My Purchases</h1>
        </div>
      </div>

      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {currentPurchases.length > 0 ? (
              currentPurchases.map((purchase) => (
                <Card key={purchase.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{purchase.merchant}</h3>
                            <p className="text-sm text-gray-600">
                              Purchased on {new Date(purchase.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">KES {purchase.amount.toLocaleString()}</p>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                              <Clock className="w-3 h-3 mr-1" />
                              Active
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3 mt-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Next Payment</span>
                            <span className="font-semibold">KES {purchase.nextAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-gray-600">Due Date</span>
                            <span className="text-sm font-medium">
                              {new Date(purchase.nextPayment).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Remaining Payments</span>
                            <span className="text-sm font-medium">{purchase.remainingPayments}</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full mt-3">
                          View Payment Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Active Purchases</h3>
                  <p className="text-gray-600 mb-4">You don't have any active payment plans at the moment.</p>
                  <Link to="/market">
                    <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                      Start Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastPurchases.map((purchase) => (
              <Card key={purchase.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{purchase.merchant}</h3>
                          <p className="text-sm text-gray-600">
                            Purchased on {new Date(purchase.date).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            Completed on {new Date(purchase.completedDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">KES {purchase.amount.toLocaleString()}</p>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-3">
                        View Receipt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Purchases;
