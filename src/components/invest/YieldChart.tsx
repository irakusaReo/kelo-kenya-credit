
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, TooltipProps } from 'recharts';

interface YieldSnapshot {
  date: string;
  apy: number;
}

interface YieldChartProps {
  data: YieldSnapshot[];
  period: '7D' | '30D' | '90D' | '1Y';
}

const YieldChart = ({ data, period }: YieldChartProps) => {
  // Filter data based on period
  const filteredData = React.useMemo(() => {
    if (!data || data.length === 0) return [];
    
    const today = new Date();
    let startDate = new Date();
    
    switch(period) {
      case '7D':
        startDate.setDate(today.getDate() - 7);
        break;
      case '30D':
        startDate.setDate(today.getDate() - 30);
        break;
      case '90D':
        startDate.setDate(today.getDate() - 90);
        break;
      case '1Y':
        startDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDate.setDate(today.getDate() - 30);
    }
    
    return data.filter(item => new Date(item.date) >= startDate);
  }, [data, period]);

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{label}</p>
          <p className="text-kelo-blue font-bold">APY: {payload[0].value}%</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="date"
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`}
            domain={['dataMin - 1', 'dataMax + 1']}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="apy" 
            stroke="#045DE9" 
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldChart;
