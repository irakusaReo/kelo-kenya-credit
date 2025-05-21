
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface SettlementData {
  month: string;
  amount: number;
}

interface SettlementChartProps {
  data: SettlementData[];
}

const SettlementChart = ({ data }: SettlementChartProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Settlement History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              tickFormatter={(value) => `KES ${value / 1000}k`}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <Tooltip 
              formatter={(value: number) => [`KES ${value.toLocaleString()}`, 'Amount']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar dataKey="amount" fill="#045DE9" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SettlementChart;
