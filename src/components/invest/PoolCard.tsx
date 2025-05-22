
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import RiskBadge from './RiskBadge';

interface Pool {
  id: string;
  symbol: string;
  name: string;
  chain: string;
  chainId: number;
  baseAPY: number;
  bnplAPY: number;
  totalAPY: number;
  tvl: number;
  utilizationRate: number;
  riskScore: 1 | 2 | 3 | 4 | 5;
  logo: string;
  gradient: string;
}

interface PoolCardProps {
  pool: Pool;
}

const PoolCard = ({ pool }: PoolCardProps) => {
  return (
    <Link to={`/invest/pool/${pool.symbol.toLowerCase()}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
        <div 
          className="h-20 relative p-4 text-white flex items-center"
          style={{ background: pool.gradient }}
        >
          <img 
            src={pool.logo} 
            alt={pool.name} 
            className="h-12 w-12 bg-white rounded-full p-1 mr-3"
          />
          <div>
            <h3 className="font-bold text-xl">{pool.symbol}</h3>
            <p className="text-sm opacity-90">{pool.name}</p>
          </div>
          <div className="absolute top-3 right-3">
            <RiskBadge riskScore={pool.riskScore} />
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">APY</span>
            <span className="text-2xl font-bold">{pool.totalAPY}%</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Yield</span>
              <span>{pool.baseAPY}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">BNPL Yield</span>
              <span>{pool.bnplAPY}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">TVL</span>
              <span>KES {pool.tvl.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Utilization</span>
              <span>{pool.utilizationRate}%</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PoolCard;
