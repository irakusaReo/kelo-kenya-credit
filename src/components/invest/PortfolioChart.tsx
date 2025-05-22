
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, TooltipProps } from 'recharts';

// Mock data for demonstration
const mockData = {
  '7D': [
    { date: '2025-05-15', value: 55800 },
    { date: '2025-05-16', value: 56200 },
    { date: '2025-05-17', value: 56300 },
    { date: '2025-05-18', value: 56700 },
    { date: '2025-05-19', value: 57100 },
    { date: '2025-05-20', value: 57500 },
    { date: '2025-05-21', value: 58750 },
  ],
  '1M': Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2025, 4, i + 1).toISOString().slice(0, 10),
    value: 50000 + Math.random() * 10000
  })),
  '3M': Array.from({ length: 90 }, (_, i) => ({
    date: new Date(2025, 2, i + 1).toISOString().slice(0, 10),
    value: 45000 + Math.random() * 15000
  })),
  'ALL': Array.from({ length: 180 }, (_, i) => ({
    date: new Date(2024, 11, i + 1).toISOString().slice(0, 10),
    value: 40000 + Math.random() * 20000
  })),
};

const PortfolioChart = () => {
  const [timeframe, setTimeframe] = useState<'7D' | '1M' | '3M' | 'ALL'>('7D');
  const data = mockData[timeframe];
  
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{label}</p>
          <p className="text-kelo-blue font-bold">KES {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="inline-flex bg-gray-100 rounded-md p-1">
          {(['7D', '1M', '3M', 'ALL'] as const).map((period) => (
            <button
              key={period}
              className={`px-3 py-1 rounded-md text-sm ${
                timeframe === period 
                  ? 'bg-white shadow-sm font-medium' 
                  : 'text-gray-600'
              }`}
              onClick={() => setTimeframe(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date"
              tickFormatter={(date) => {
                if (timeframe === '7D') {
                  return new Date(date).toLocaleDateString(undefined, { weekday: 'short' });
                }
                return new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
              }}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickFormatter={(value) => `KES ${value / 1000}k`}
              domain={['dataMin - 1000', 'dataMax + 1000']}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#045DE9" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;
