
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PortfolioSummaryProps {
  totalValue: number;
  totalYield: number;
  yieldPercentage: number;
  positionCount: number;
}

const PortfolioSummary = ({ 
  totalValue, 
  totalYield, 
  yieldPercentage, 
  positionCount 
}: PortfolioSummaryProps) => {
  const isPositive = yieldPercentage >= 0;
  
  return (
    <>
      <Card className="p-6">
        <h3 className="text-sm text-gray-500 mb-2">Total Portfolio Value</h3>
        <div className="text-3xl font-bold">KES {totalValue.toLocaleString()}</div>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-sm text-gray-500 mb-2">Total Yield Earned</h3>
        <div className="text-3xl font-bold">KES {totalYield.toLocaleString()}</div>
        <div className={`flex items-center text-sm mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          <span>{isPositive ? '+' : ''}{yieldPercentage}% overall</span>
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-sm text-gray-500 mb-2">Active Positions</h3>
        <div className="text-3xl font-bold">{positionCount}</div>
        <div className="text-sm text-gray-500 mt-1">
          Across {positionCount} pool{positionCount !== 1 ? 's' : ''}
        </div>
      </Card>
    </>
  );
};

export default PortfolioSummary;
