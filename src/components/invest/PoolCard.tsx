
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import RiskBadge from './RiskBadge';
import { Pool } from '@/types/invest';

interface PoolCardProps {
  pool: Pool;
}

const PoolCard = ({ pool }: PoolCardProps) => {
  const isComingSoon = ['sui', 'aptos', 'solana'].includes(pool.chain);
  
  return (
    <Link to={isComingSoon ? '#' : `/invest/pool/${pool.symbol.toLowerCase()}`}>
      <Card className={`h-full overflow-hidden transition-shadow duration-300 ${isComingSoon ? 'opacity-75' : 'hover:shadow-md cursor-pointer'}`}>
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
            <div className="flex gap-2 items-center">
              {isComingSoon && (
                <Badge variant="outline" className="bg-black/30 text-white border-white">
                  Coming Soon
                </Badge>
              )}
              <RiskBadge riskScore={pool.riskScore} />
            </div>
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
              <span className="text-gray-600">Chain</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex items-center">
                      <span className="capitalize">{pool.chain}</span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Native {pool.chain} Vault</p>
                    {pool.receiptToken && <p>Receipt: {pool.receiptToken}</p>}
                    {pool.bridgeProtocol && <p>Bridge: {pool.bridgeProtocol}</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PoolCard;
