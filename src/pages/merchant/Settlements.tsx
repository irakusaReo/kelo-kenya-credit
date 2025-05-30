
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  DollarSign, 
  Download, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Calendar,
  TrendingUp
} from 'lucide-react';

const Settlements = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');

  const settlementStats = {
    pending: { amount: 125000, count: 15 },
    completed: { amount: 2450000, count: 234 },
    next_payout: { amount: 85000, date: '2024-01-20' }
  };

  const settlements = [
    {
      id: 'SET-2024-001',
      period: '2024-01-01 to 2024-01-15',
      orders: 45,
      gross_amount: 1250000,
      kelo_fee: 62500,
      net_amount: 1187500,
      status: 'completed',
      paid_date: '2024-01-16',
      payment_method: 'Bank Transfer'
    },
    {
      id: 'SET-2024-002',
      period: '2024-01-16 to 2024-01-31',
      orders: 38,
      gross_amount: 950000,
      kelo_fee: 47500,
      net_amount: 902500,
      status: 'processing',
      paid_date: null,
      payment_method: 'Bank Transfer'
    },
    {
      id: 'SET-2023-024',
      period: '2023-12-16 to 2023-12-31',
      orders: 52,
      gross_amount: 1680000,
      kelo_fee: 84000,
      net_amount: 1596000,
      status: 'completed',
      paid_date: '2024-01-02',
      payment_method: 'Bank Transfer'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'completed': { label: 'Completed', variant: 'default' as const, color: 'bg-green-500' },
      'processing': { label: 'Processing', variant: 'secondary' as const, color: 'bg-yellow-500' },
      'pending': { label: 'Pending', variant: 'outline' as const, color: 'bg-gray-500' }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const, color: 'bg-gray-500' };
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Settlements</h1>
              <p className="text-gray-600">Track your payouts and settlement history</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Payout
              </Button>
            </div>
          </div>

          {/* Settlement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Settlement</p>
                    <p className="text-2xl font-bold">KES {settlementStats.pending.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{settlementStats.pending.count} orders</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Settled</p>
                    <p className="text-2xl font-bold">KES {settlementStats.completed.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{settlementStats.completed.count} orders</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Next Payout</p>
                    <p className="text-2xl font-bold">KES {settlementStats.next_payout.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{settlementStats.next_payout.date}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settlement History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Settlement History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <TabsList className="mb-6">
                  <TabsTrigger value="this_month">This Month</TabsTrigger>
                  <TabsTrigger value="last_month">Last Month</TabsTrigger>
                  <TabsTrigger value="this_quarter">This Quarter</TabsTrigger>
                  <TabsTrigger value="all_time">All Time</TabsTrigger>
                </TabsList>
                
                <TabsContent value={selectedPeriod}>
                  <div className="space-y-4">
                    {settlements.map((settlement) => (
                      <Card key={settlement.id} className="border-l-4 border-l-kelo-blue">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                {getStatusIcon(settlement.status)}
                                <span className="font-semibold">{settlement.id}</span>
                                <Badge variant={getStatusBadge(settlement.status).variant}>
                                  {getStatusBadge(settlement.status).label}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-gray-600 mb-3">{settlement.period}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600">Orders</p>
                                  <p className="font-semibold">{settlement.orders}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Gross Amount</p>
                                  <p className="font-semibold">KES {settlement.gross_amount.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Kelo Fee (5%)</p>
                                  <p className="font-semibold">KES {settlement.kelo_fee.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-gray-600">Net Amount</p>
                                  <p className="font-semibold text-kelo-blue">KES {settlement.net_amount.toLocaleString()}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col lg:items-end gap-2">
                              {settlement.paid_date && (
                                <p className="text-sm text-gray-600">
                                  Paid: {settlement.paid_date}
                                </p>
                              )}
                              <p className="text-sm text-gray-600">
                                via {settlement.payment_method}
                              </p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {settlements.length === 0 && (
                <div className="text-center py-12">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">No settlements found for this period</p>
                  <p className="text-sm text-gray-400">Settlements are processed bi-weekly</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Settlement Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>How Settlements Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Settlement Schedule</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Settlements are processed bi-weekly (every 15 days)</li>
                    <li>• Payouts are sent within 2-3 business days after processing</li>
                    <li>• You'll receive an email notification when settlement is complete</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Fee Structure</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Kelo charges 5% on all successful transactions</li>
                    <li>• No setup fees or monthly charges</li>
                    <li>• Bank transfer fees may apply based on your bank</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Payment Methods</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Bank transfer to your registered account</li>
                    <li>• M-Pesa payments (coming soon)</li>
                    <li>• Digital wallet integration (coming soon)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Support</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Contact support for settlement inquiries</li>
                    <li>• Settlement reports available for download</li>
                    <li>• Tax documentation provided annually</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settlements;
