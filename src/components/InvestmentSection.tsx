
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Layers, PiggyBank, TrendingUp } from 'lucide-react';
import { pools } from '@/data/invest/pools';
import { Pool } from '@/types/invest';

const InvestmentSection = () => {
  // Get top 3 pools by APY
  const topPools = [...pools]
    .sort((a, b) => b.totalAPY - a.totalAPY)
    .slice(0, 3);
  
  return (
    <section className="section-padding bg-kelo-background">
      <div className="kelo-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Earn Yield with Kelo</h2>
          <p className="mt-4 text-lg text-gray-600">
            Supply crypto to Kelo's native chain vaults and earn competitive returns while funding the BNPL ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-kelo-blue/10 p-4 rounded-full mb-4">
              <PiggyBank className="h-8 w-8 text-kelo-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Friction-free Deposits</h3>
            <p className="text-gray-600">
              Deposit your native tokens directly without wrapping - no extra gas fees
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-kelo-blue/10 p-4 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-kelo-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Multi-source Yield</h3>
            <p className="text-gray-600">
              Earn from both native chain staking and BNPL interest payments
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-kelo-blue/10 p-4 rounded-full mb-4">
              <Layers className="h-8 w-8 text-kelo-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Omnichain Architecture</h3>
            <p className="text-gray-600">
              Capital stays on its home chain, minimizing bridge risk and maximizing efficiency
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Top Yielding Pools</h3>
            <Link to="/invest" className="text-kelo-blue font-medium flex items-center hover:underline">
              View all pools <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3 font-medium">Pool</th>
                  <th className="pb-3 font-medium">Chain</th>
                  <th className="pb-3 font-medium text-right">APY</th>
                  <th className="pb-3 font-medium text-right">TVL</th>
                </tr>
              </thead>
              <tbody>
                {topPools.map((pool) => (
                  <tr key={pool.id} className="border-b last:border-0">
                    <td className="py-3">
                      <div className="flex items-center">
                        <img 
                          src={pool.logo} 
                          alt={pool.name} 
                          className="w-8 h-8 mr-3 rounded-full" 
                        />
                        <div>
                          <div className="font-medium">{pool.symbol}</div>
                          <div className="text-sm text-gray-500">{pool.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 capitalize">{pool.chain}</td>
                    <td className="py-3 text-right font-medium text-kelo-blue">
                      {pool.totalAPY}%
                    </td>
                    <td className="py-3 text-right">
                      KES {pool.tvl.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/invest">
            <Button size="lg" className="bg-kelo-blue hover:bg-kelo-blue/90">
              Start Investing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
