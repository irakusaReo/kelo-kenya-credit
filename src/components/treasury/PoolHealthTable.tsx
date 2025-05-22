
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

// Mock data for pool health
const poolHealthData = [
  {
    id: 'usdc-polygon',
    name: 'USD Coin',
    symbol: 'USDC',
    tvl: 2500000,
    utilizationRate: 78,
    delinquencyRate: 1.8,
    health: 'Good',
    hasAlert: false
  },
  {
    id: 'weth-polygon',
    name: 'Wrapped Ethereum',
    symbol: 'WETH',
    tvl: 1200000,
    utilizationRate: 65,
    delinquencyRate: 2.2,
    health: 'Good',
    hasAlert: false
  },
  {
    id: 'wsol-polygon',
    name: 'Wrapped Solana',
    symbol: 'wSOL',
    tvl: 800000,
    utilizationRate: 82,
    delinquencyRate: 3.1,
    health: 'Warning',
    hasAlert: true
  },
  {
    id: 'wavax-polygon',
    name: 'Wrapped Avalanche',
    symbol: 'wAVAX',
    tvl: 650000,
    utilizationRate: 71,
    delinquencyRate: 2.5,
    health: 'Good',
    hasAlert: false
  },
  {
    id: 'wsui-polygon',
    name: 'Wrapped Sui',
    symbol: 'wSUI',
    tvl: 320000,
    utilizationRate: 60,
    delinquencyRate: 4.2,
    health: 'Warning',
    hasAlert: true
  },
  {
    id: 'wapt-polygon',
    name: 'Wrapped Aptos',
    symbol: 'wAPT',
    tvl: 180000,
    utilizationRate: 55,
    delinquencyRate: 3.8,
    health: 'Good',
    hasAlert: false
  }
];

const PoolHealthTable = () => {
  const getHealthBadge = (health: string) => {
    switch(health) {
      case 'Good':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>;
      case 'Warning':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warning</Badge>;
      case 'Critical':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Pool</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">TVL (KES)</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Utilization</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Delinquency</th>
            <th className="text-center py-4 px-3 text-sm font-medium text-gray-500">Health</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {poolHealthData.map((pool) => (
            <tr key={pool.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-3">
                <div className="flex items-center">
                  <div className="font-medium flex items-center">
                    {pool.symbol}
                    {pool.hasAlert && (
                      <AlertCircle className="h-4 w-4 ml-1 text-amber-500" />
                    )}
                  </div>
                  <div className="text-xs text-gray-500 ml-2">({pool.name})</div>
                </div>
              </td>
              <td className="py-4 px-3 text-right font-medium">
                {pool.tvl.toLocaleString()}
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium">{pool.utilizationRate}%</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div 
                    className={`h-2 rounded-full ${
                      pool.utilizationRate > 80 ? 'bg-amber-500' :
                      pool.utilizationRate > 70 ? 'bg-blue-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${pool.utilizationRate}%` }}
                  ></div>
                </div>
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium">{pool.delinquencyRate}%</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                  <div 
                    className={`h-2 rounded-full ${
                      pool.delinquencyRate > 4 ? 'bg-red-500' :
                      pool.delinquencyRate > 3 ? 'bg-amber-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${pool.delinquencyRate * 10}%` }}
                  ></div>
                </div>
              </td>
              <td className="py-4 px-3 text-center">
                {getHealthBadge(pool.health)}
              </td>
              <td className="py-4 px-3 text-right">
                <Button variant="outline" size="sm">Adjust</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoolHealthTable;
