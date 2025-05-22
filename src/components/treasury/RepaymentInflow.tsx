
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Mock data for repayment inflow
const inflowData = [
  { date: '05/15', amount: 125000 },
  { date: '05/16', amount: 98000 },
  { date: '05/17', amount: 115000 },
  { date: '05/18', amount: 142000 },
  { date: '05/19', amount: 130000 },
  { date: '05/20', amount: 95000 },
  { date: '05/21', amount: 155000 },
];

const RepaymentInflow = () => {
  const total = inflowData.reduce((sum, item) => sum + item.amount, 0);
  const average = total / inflowData.length;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-sm text-gray-500">7-Day Total</div>
          <div className="text-xl font-bold">KES {total.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Daily Average</div>
          <div className="text-xl font-bold">KES {Math.round(average).toLocaleString()}</div>
        </div>
      </div>
      
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <LineChart
            data={inflowData}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickFormatter={(value) => `${value / 1000}k`}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value: number) => [`KES ${value.toLocaleString()}`, 'Amount']}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#FFC20E" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RepaymentInflow;
