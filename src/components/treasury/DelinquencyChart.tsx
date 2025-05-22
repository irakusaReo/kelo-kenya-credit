
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

// Mock data for delinquency rates over time
const delinquencyData = [
  { date: '2025-01', rate: 4.5, category: 'Electronics' },
  { date: '2025-02', rate: 4.2, category: 'Electronics' },
  { date: '2025-03', rate: 3.8, category: 'Electronics' },
  { date: '2025-04', rate: 3.5, category: 'Electronics' },
  { date: '2025-05', rate: 2.8, category: 'Electronics' },
  
  { date: '2025-01', rate: 3.2, category: 'Fashion' },
  { date: '2025-02', rate: 3.0, category: 'Fashion' },
  { date: '2025-03', rate: 2.8, category: 'Fashion' },
  { date: '2025-04', rate: 2.5, category: 'Fashion' },
  { date: '2025-05', rate: 2.2, category: 'Fashion' },
  
  { date: '2025-01', rate: 5.5, category: 'Furniture' },
  { date: '2025-02', rate: 5.0, category: 'Furniture' },
  { date: '2025-03', rate: 4.8, category: 'Furniture' },
  { date: '2025-04', rate: 4.2, category: 'Furniture' },
  { date: '2025-05', rate: 3.8, category: 'Furniture' },
];

const DelinquencyChart = () => {
  // Group by date to display correctly
  const groupedData = delinquencyData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = { date: item.date };
    }
    acc[item.date][item.category] = item.rate;
    return acc;
  }, {} as Record<string, any>);
  
  const chartData = Object.values(groupedData);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="date"
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            tickLine={false} 
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 8]}
          />
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Delinquency Rate']}
          />
          <ReferenceLine y={5} stroke="red" strokeDasharray="3 3" label={{ value: 'Threshold', position: 'right', fill: 'red', fontSize: 12 }} />
          <Line type="monotone" dataKey="Electronics" stroke="#045DE9" strokeWidth={2} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Fashion" stroke="#35A29F" strokeWidth={2} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Furniture" stroke="#FFC20E" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelinquencyChart;
