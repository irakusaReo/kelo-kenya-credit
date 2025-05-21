
import React from 'react';
import VendorLayout from '@/components/vendor/VendorLayout';
import DashboardStatsCard from '@/components/vendor/DashboardStatsCard';
import SettlementChart from '@/components/vendor/SettlementChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, TrendingUp, TrendingDown, Users } from 'lucide-react';

const VendorAnalytics = () => {
  // Mock data for analytics
  const performanceData = [
    {
      title: 'Sales Growth',
      value: '+24%',
      description: 'vs. last quarter',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: 'BNPL Conversion',
      value: '62%',
      description: 'of eligible customers',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Avg. Order Value',
      value: 'KES 12,450',
      description: '+15% with BNPL option',
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: 'Return Rate',
      value: '3.2%',
      description: 'Decreased by 0.8%',
      icon: <TrendingDown className="h-5 w-5" />
    }
  ];

  // Mock data for settlement chart
  const settlementData = [
    { month: 'Jan', amount: 450000 },
    { month: 'Feb', amount: 520000 },
    { month: 'Mar', amount: 680000 },
    { month: 'Apr', amount: 590000 },
    { month: 'May', amount: 730000 },
    { month: 'Jun', amount: 850000 },
  ];

  // Mock data for top products
  const topProducts = [
    { name: 'Samsung Galaxy S23', sales: 32, revenue: 3840000 },
    { name: 'MacBook Pro M2', sales: 18, revenue: 3240000 },
    { name: 'Sony Headphones WH-1000XM5', sales: 45, revenue: 675000 },
    { name: 'iPad Pro 12.9"', sales: 24, revenue: 2280000 },
    { name: 'Canon EOS R5', sales: 12, revenue: 2160000 },
  ];

  return (
    <VendorLayout title="Analytics & Insights">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceData.map((item, index) => (
            <DashboardStatsCard
              key={index}
              title={item.title}
              value={item.value}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Settlement Chart - takes up 2/3 of the width */}
          <div className="lg:col-span-2">
            <SettlementChart data={settlementData} />
          </div>

          {/* Top Products - takes up 1/3 of the width */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best selling items this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sales} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-kelo-blue">
                        KES {product.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
            <CardDescription>Insights about your customer base</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Age Distribution</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>18-24</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-blue h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>25-34</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-blue h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>35-44</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-blue h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>45+</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-blue h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Nairobi</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-teal h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Mombasa</span>
                      <span>18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-teal h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Kisumu</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-teal h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Other</span>
                      <span>7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-teal h-2 rounded-full" style={{ width: '7%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Payment Method</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>BNPL</span>
                      <span>38%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-gold h-2 rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>M-Pesa</span>
                      <span>55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-gold h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Card</span>
                      <span>5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-gold h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Other</span>
                      <span>2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-kelo-gold h-2 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </VendorLayout>
  );
};

export default VendorAnalytics;
