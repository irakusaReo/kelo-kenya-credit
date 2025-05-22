
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface RiskBadgeProps {
  riskScore: 1 | 2 | 3 | 4 | 5;
}

const RiskBadge = ({ riskScore }: RiskBadgeProps) => {
  const getRiskLabel = (score: number): string => {
    switch (score) {
      case 1: return 'Very Low Risk';
      case 2: return 'Low Risk';
      case 3: return 'Medium Risk';
      case 4: return 'High Risk';
      case 5: return 'Very High Risk';
      default: return 'Unknown Risk';
    }
  };
  
  const getRiskColor = (score: number): string => {
    switch (score) {
      case 1: return 'bg-teal-500';
      case 2: return 'bg-blue-500';
      case 3: return 'bg-kelo-blue';
      case 4: return 'bg-orange-500';
      case 5: return 'bg-kelo-gold';
      default: return 'bg-gray-500';
    }
  };
  
  const riskLabel = getRiskLabel(riskScore);
  const badgeColor = getRiskColor(riskScore);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div className="flex items-center">
            <div className={`text-xs font-medium rounded-full px-2.5 py-1 text-white ${badgeColor}`}>
              Risk {riskScore}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p className="font-medium">{riskLabel}</p>
          <p className="text-xs">
            {riskScore <= 2 && 'Conservative strategy with focus on capital preservation'}
            {riskScore === 3 && 'Balanced approach with moderate yield enhancement'}
            {riskScore >= 4 && 'Aggressive strategy prioritizing maximum yield'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RiskBadge;
