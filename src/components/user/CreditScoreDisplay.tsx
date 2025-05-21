
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CreditScoreDisplayProps {
  score: number;
  maxScore: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
}

const CreditScoreDisplay = ({ score, maxScore, status }: CreditScoreDisplayProps) => {
  // Calculate percentage for the progress circle
  const percentage = (score / maxScore) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  // Define color based on status
  const getStatusColor = () => {
    switch (status) {
      case 'excellent':
        return '#22c55e'; // green
      case 'good':
        return '#3b82f6'; // blue
      case 'fair':
        return '#f59e0b'; // amber
      case 'poor':
        return '#ef4444'; // red
      default:
        return '#3b82f6'; // default blue
    }
  };
  
  const statusColor = getStatusColor();
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center">Your Credit Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-56 h-56 flex items-center justify-center">
          {/* Background circle */}
          <svg className="absolute w-full h-full" viewBox="0 0 200 200">
            <circle 
              cx="100" 
              cy="100" 
              r={radius} 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="12"
            />
            
            {/* Progress circle */}
            <circle 
              cx="100" 
              cy="100" 
              r={radius} 
              fill="none" 
              stroke={statusColor} 
              strokeWidth="12" 
              strokeDasharray={circumference} 
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
            />
          </svg>
          
          {/* Score display */}
          <div className="text-center">
            <div className="text-4xl font-bold">{score}</div>
            <div className="text-sm text-gray-500">out of {maxScore}</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div 
            className="text-xl font-medium capitalize"
            style={{ color: statusColor }}
          >
            {status}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {status === 'excellent' && "Top tier credit score - eligible for the best rates!"}
            {status === 'good' && "Solid credit score - you qualify for most credit products."}
            {status === 'fair' && "Average credit score - some limitations may apply."}
            {status === 'poor' && "Limited credit score - we can help you improve it."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditScoreDisplay;
