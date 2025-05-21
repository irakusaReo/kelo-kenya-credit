
import React from 'react';
import VendorLayout from '@/components/vendor/VendorLayout';
import DashboardStatsCard from '@/components/vendor/DashboardStatsCard';
import { BarChart2, Package, Clock, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const VendorDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    {
      title: 'Total Sales',
      value: 'KES 1,248,230',
      description: '+14% from last month',
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: 'BNPL Uptake',
      value: '38%',
      description: 'Of total transactions',
      icon: <BarChart2 className="h-5 w-5" />
    },
    {
      title: 'Avg. Repayment',
      value: '28 days',
      description: 'Across all BNPL transactions',
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'Pending Payouts',
      value: 'KES 320,450',
      description: 'To be settled by 30 May 2025',
      icon: <Package className="h-5 w-5" />
    }
  ];

  return (
    <VendorLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <DashboardStatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer purchases through your store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({length: 5}).map((_, i) => (
                  <div key={i} className="flex justify-between items-center border-b pb-3">
                    <div>
                      <p className="font-medium">Order #{1000 + i}</p>
                      <p className="text-sm text-gray-500">
                        {i % 2 === 0 ? 'BNPL Payment' : 'Full Payment'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">KES {(Math.floor(Math.random() * 20) + 1) * 1000}</p>
                      <p className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Settlement Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Settlement Schedule</CardTitle>
              <CardDescription>Upcoming payouts to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({length: 3}).map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + (i + 1) * 7);
                  
                  return (
                    <div key={i} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium">{date.toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">
                          Batch #{2000 + i}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">KES {(Math.floor(Math.random() * 15) + 5) * 10000}</p>
                        <p className="text-xs text-kelo-blue">
                          {i === 0 ? 'Processing' : 'Scheduled'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorDashboard;
