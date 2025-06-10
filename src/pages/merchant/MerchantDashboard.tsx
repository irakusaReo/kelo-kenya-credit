
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  TrendingUp, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Package,
  Clock,
  AlertCircle,
  Eye
} from 'lucide-react';

const MerchantDashboard = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: 'KES 2,450,000',
      change: '+12.5%',
      icon: DollarSign,
      trend: 'up'
    },
    {
      title: 'BNPL Orders',
      value: '1,234',
      change: '+18.2%',
      icon: ShoppingCart,
      trend: 'up'
    },
    {
      title: 'Total Customers',
      value: '856',
      change: '+7.3%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Avg Order Value',
      value: 'KES 15,680',
      change: '+3.1%',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  const recentOrders = [
    {
      id: 'KLO-001234',
      customer: 'John Kamau',
      product: 'Samsung Galaxy A54',
      amount: 35000,
      paymentType: 'BNPL',
      status: 'pending_shipment',
      date: '2024-01-15'
    },
    {
      id: 'KLO-001235',
      customer: 'Mary Wanjiku',
      product: 'iPhone 13',
      amount: 85000,
      paymentType: 'Full Payment',
      status: 'shipped',
      date: '2024-01-14'
    },
    {
      id: 'KLO-001236',
      customer: 'David Ochieng',
      product: 'MacBook Air',
      amount: 120000,
      paymentType: 'BNPL',
      status: 'processing',
      date: '2024-01-14'
    }
  ];

  const pendingActions = [
    {
      type: 'shipment',
      count: 12,
      description: 'Orders pending shipment',
      urgency: 'high'
    },
    {
      type: 'inventory',
      count: 5,
      description: 'Low stock items',
      urgency: 'medium'
    },
    {
      type: 'settlement',
      count: 1,
      description: 'Settlement ready',
      urgency: 'low'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'pending_shipment': { label: 'Pending Shipment', variant: 'default' as const },
      'shipped': { label: 'Shipped', variant: 'secondary' as const },
      'processing': { label: 'Processing', variant: 'outline' as const },
      'delivered': { label: 'Delivered', variant: 'default' as const }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const };
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Merchant Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className={`text-sm ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-kelo-blue/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-kelo-blue" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{order.id}</span>
                            <Badge variant="outline">{order.paymentType}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-sm font-medium">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">KES {order.amount.toLocaleString()}</p>
                          <Badge variant={getStatusBadge(order.status).variant}>
                            {getStatusBadge(order.status).label}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Actions */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Action Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingActions.map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          action.urgency === 'high' ? 'bg-red-500' :
                          action.urgency === 'medium' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`} />
                        <div>
                          <p className="font-medium">{action.count}</p>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Add New Product
                  </Button>
                  <Button className="w-full" variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    Settlement History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sales Chart and Performance */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="bnpl">BNPL Performance</TabsTrigger>
                    <TabsTrigger value="products">Top Products</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-2xl font-bold text-kelo-blue">78%</p>
                        <p className="text-sm text-gray-600">BNPL Conversion Rate</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-2xl font-bold text-green-600">KES 485K</p>
                        <p className="text-sm text-gray-600">This Month's Revenue</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">142</p>
                        <p className="text-sm text-gray-600">New Customers</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bnpl" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>BNPL Orders This Month</span>
                        <span className="font-semibold">1,234</span>
                      </div>
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>Average BNPL Order Value</span>
                        <span className="font-semibold">KES 28,500</span>
                      </div>
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <span>Customer Repeat Rate</span>
                        <span className="font-semibold">64%</span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="products" className="mt-6">
                    <div className="space-y-3">
                      {[
                        { name: 'Samsung Galaxy A54', sales: 89, revenue: 'KES 3.1M' },
                        { name: 'iPhone 13', sales: 67, revenue: 'KES 5.7M' },
                        { name: 'MacBook Air', sales: 23, revenue: 'KES 2.8M' }
                      ].map((product, index) => (
                        <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.sales} units sold</p>
                          </div>
                          <p className="font-semibold">{product.revenue}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MerchantDashboard;
