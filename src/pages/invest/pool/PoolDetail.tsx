
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import YieldChart from '@/components/invest/YieldChart';
import RiskBadge from '@/components/invest/RiskBadge';
import StrategyBreakdown from '@/components/invest/StrategyBreakdown';
import DepositModal from '@/components/invest/DepositModal';
import WithdrawModal from '@/components/invest/WithdrawModal';
import { pools } from '@/data/invest/pools';
import { strategies } from '@/data/invest/strategies';
import { historicalReturns } from '@/data/invest/historicalReturns';
import { Pool } from '@/types/invest';

const PoolDetail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  
  // Find pool data by symbol
  const poolId = symbol ? `${symbol.toLowerCase()}-polygon` : '';
  const pool = pools.find(p => p.id === poolId) as Pool | undefined;
  const poolStrategies = strategies[poolId as keyof typeof strategies] || [];
  const returns = historicalReturns[poolId as keyof typeof historicalReturns];
  
  // Time period for chart
  const [timePeriod, setTimePeriod] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');
  
  if (!pool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow section-padding bg-kelo-background">
          <div className="kelo-container max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Pool Not Found</h1>
            <p className="mb-6">The pool you are looking for does not exist.</p>
            <Link to="/invest">
              <Button>Return to Pools</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow section-padding bg-kelo-background">
        <div className="kelo-container max-w-7xl mx-auto">
          <Link to="/invest" className="inline-flex items-center text-gray-600 hover:text-kelo-blue mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to pools
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div className="flex items-center">
              <img src={pool.logo} alt={pool.name} className="w-12 h-12 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">{pool.name} Pool</h1>
                <div className="flex items-center mt-1">
                  <span className="text-gray-600 mr-4">Risk Level:</span>
                  <RiskBadge riskScore={pool.riskScore} />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIsWithdrawModalOpen(true)}>
                Withdraw
              </Button>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90" 
                onClick={() => setIsDepositModalOpen(true)}
              >
                Deposit
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm mb-2">Total APY</h3>
              <div className="text-3xl font-bold mb-1">{pool.totalAPY}%</div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">Base: {pool.baseAPY}%</span>
                <span className="mx-2">•</span>
                <span>BNPL: {pool.bnplAPY}%</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm mb-2">Total Value Locked</h3>
              <div className="text-3xl font-bold mb-1">KES {pool.tvl.toLocaleString()}</div>
              <div className="text-sm text-gray-600">
                Utilization: {pool.utilizationRate}%
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm mb-2">Your Position</h3>
              <div className="text-3xl font-bold mb-1">KES 0</div>
              <div className="text-sm text-gray-600">
                Connect wallet to view your position
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Historical Performance</h2>
                  <div className="flex bg-gray-100 rounded-md p-1">
                    {['7D', '30D', '90D', '1Y'].map((period) => (
                      <button
                        key={period}
                        className={`px-3 py-1 rounded-md text-sm ${
                          timePeriod === period 
                            ? 'bg-white shadow-sm font-medium' 
                            : 'text-gray-600'
                        }`}
                        onClick={() => setTimePeriod(period as any)}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <YieldChart 
                  data={returns?.daily || []} 
                  period={timePeriod}
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                <h2 className="text-xl font-semibold mb-6">Strategy Breakdown</h2>
                <StrategyBreakdown strategies={poolStrategies} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <DepositModal 
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        pool={pool}
      />
      
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        pool={pool}
      />
    </div>
  );
};

export default PoolDetail;
