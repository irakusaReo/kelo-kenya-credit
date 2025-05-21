
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardStatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

const DashboardStatsCard = ({ 
  title, 
  value, 
  description, 
  icon 
}: DashboardStatsCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon && <div className="text-gray-500">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardStatsCard;
