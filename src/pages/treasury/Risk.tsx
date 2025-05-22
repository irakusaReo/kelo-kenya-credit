
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TreasuryLayout from '@/components/treasury/TreasuryLayout';
import RiskParametersTable from '@/components/treasury/RiskParametersTable';
import DelinquencyChart from '@/components/treasury/DelinquencyChart';
import RiskSimulator from '@/components/treasury/RiskSimulator';

const TreasuryRisk = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TreasuryLayout title="Risk Management">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Delinquency Rates</h2>
                <DelinquencyChart />
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Current</div>
                    <div className="text-xl font-bold text-green-600">2.8%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">30-Day Avg</div>
                    <div className="text-xl font-bold">3.2%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Threshold</div>
                    <div className="text-xl font-bold text-kelo-blue">5.0%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Risk Alerts</h2>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start">
                    <div className="p-1 bg-yellow-100 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">wSUI Pool Utilization High</p>
                      <p className="text-xs text-gray-600">Currently at 82%, approaching 85% threshold</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Oracle Price Delay</p>
                      <p className="text-xs text-gray-600">AVAX price feed delayed by >10 minutes</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md flex items-start">
                    <div className="p-1 bg-blue-100 rounded-full mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Strategy Yield Below Target</p>
                      <p className="text-xs text-gray-600">T-Bill strategy 0.2% below expected yield</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Risk Parameters</h2>
            <Tabs defaultValue="global">
              <TabsList className="mb-6">
                <TabsTrigger value="global">Global</TabsTrigger>
                <TabsTrigger value="usdc">USDC</TabsTrigger>
                <TabsTrigger value="weth">WETH</TabsTrigger>
                <TabsTrigger value="wsol">wSOL</TabsTrigger>
                <TabsTrigger value="wavax">wAVAX</TabsTrigger>
              </TabsList>
              <RiskParametersTable />
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Risk Simulation</h2>
            <RiskSimulator />
          </CardContent>
        </Card>
      </TreasuryLayout>
      <Footer />
    </div>
  );
};

export default TreasuryRisk;
