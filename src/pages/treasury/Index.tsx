
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TreasuryLayout from '@/components/treasury/TreasuryLayout';
import TreasuryStatsCard from '@/components/treasury/TreasuryStatsCard';
import PoolHealthTable from '@/components/treasury/PoolHealthTable';
import UtilizationChart from '@/components/treasury/UtilizationChart';
import RepaymentInflow from '@/components/treasury/RepaymentInflow';
import { CreditCard, Banknote, TrendingUp, AlertTriangle } from 'lucide-react';

const TreasuryDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TreasuryLayout title="Treasury Dashboard">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <TreasuryStatsCard
            title="Total TVL"
            value="KES 5,850,000"
            description="+12.4% from last month"
            icon={<Banknote className="h-5 w-5" />}
          />
          <TreasuryStatsCard
            title="Active Loans"
            value="8,452"
            description="21% utilizing BNPL"
            icon={<CreditCard className="h-5 w-5" />}
          />
          <TreasuryStatsCard
            title="Average Yield"
            value="13.5%"
            description="2.2% above target"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <TreasuryStatsCard
            title="Risk Score"
            value="Low"
            description="All metrics within threshold"
            icon={<AlertTriangle className="h-5 w-5" />}
            variant="success"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Pool Utilization</h2>
                <UtilizationChart />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Vendor Repayment Inflow</h2>
                <RepaymentInflow />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Pool Health Monitoring</h2>
              <Tabs defaultValue="all" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="all">All Pools</TabsTrigger>
                  <TabsTrigger value="alerts">With Alerts</TabsTrigger>
                  <TabsTrigger value="stable">Stable Coins</TabsTrigger>
                  <TabsTrigger value="crypto">Crypto</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <PoolHealthTable />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Strategy Performance</h2>
              <div className="space-y-4">
                {['Money Market', 'T-Bill Token', 'BNPL Interest'].map((strategy) => (
                  <div key={strategy} className="flex justify-between border-b pb-4">
                    <div>
                      <div className="font-medium">{strategy}</div>
                      <div className="text-sm text-gray-600">Last rebalance: May 19, 2025</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-kelo-blue">
                        {strategy === 'Money Market' ? '4.2%' : 
                         strategy === 'T-Bill Token' ? '5.1%' : '8.2%'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {strategy === 'Money Market' ? '+0.3%' : 
                         strategy === 'T-Bill Token' ? '-0.2%' : '+1.1%'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { event: 'Pool Rebalance', pool: 'USDC', date: 'May 21, 2025', time: '14:32' },
                  { event: 'Strategy Adjustment', pool: 'WETH', date: 'May 20, 2025', time: '09:15' },
                  { event: 'Emergency Withdrawal', pool: 'wSUI', date: 'May 18, 2025', time: '22:45' },
                  { event: 'Parameter Update', pool: 'wSOL', date: 'May 17, 2025', time: '11:20' },
                  { event: 'Yield Distribution', pool: 'All Pools', date: 'May 15, 2025', time: '00:00' },
                ].map((activity, index) => (
                  <div key={index} className="flex justify-between border-b pb-4 last:border-b-0">
                    <div>
                      <div className="font-medium">{activity.event}</div>
                      <div className="text-sm text-gray-600">{activity.pool} Pool</div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      {activity.date} at {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TreasuryLayout>
      <Footer />
    </div>
  );
};

export default TreasuryDashboard;
