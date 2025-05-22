
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TreasuryStatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const TreasuryStatsCard = ({ 
  title, 
  value, 
  description, 
  icon,
  variant = 'default'
}: TreasuryStatsCardProps) => {
  
  const getIconBgColor = () => {
    switch(variant) {
      case 'success': return 'bg-green-100 text-green-600';
      case 'warning': return 'bg-amber-100 text-amber-600';
      case 'danger': return 'bg-red-100 text-red-600';
      default: return 'bg-blue-100 text-kelo-blue';
    }
  };
  
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && (
            <div className={`p-2 rounded-full ${getIconBgColor()}`}>
              {icon}
            </div>
          )}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default TreasuryStatsCard;
