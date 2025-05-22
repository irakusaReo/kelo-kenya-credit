
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, TooltipProps } from 'recharts';

// Mock data for pool utilization
const utilizationData = [
  { name: 'USDC', current: 78, target: 80 },
  { name: 'WETH', current: 65, target: 75 },
  { name: 'wSOL', current: 82, target: 80 },
  { name: 'wAVAX', current: 71, target: 75 },
  { name: 'wSUI', current: 60, target: 70 },
  { name: 'wAPT', current: 55, target: 70 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
        <p className="font-medium">{label}</p>
        <div className="mt-1">
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const UtilizationChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={utilizationData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            tickLine={false} 
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="current" name="Current Utilization" fill="#045DE9" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" name="Target Utilization" fill="#35A29F" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UtilizationChart;
