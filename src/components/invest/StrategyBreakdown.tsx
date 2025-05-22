
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface Strategy {
  id: string;
  name: string;
  type: string;
  allocation: number;
  currentYield: number;
  risk: string;
  description: string;
}

interface StrategyBreakdownProps {
  strategies: Strategy[];
}

const StrategyBreakdown = ({ strategies }: StrategyBreakdownProps) => {
  const COLORS = ['#045DE9', '#35A29F', '#FFC20E', '#D946EF'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={strategies}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="allocation"
              label={renderCustomizedLabel}
            >
              {strategies.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name, props) => [`${value}%`, props.payload.name]}
              contentStyle={{
                borderRadius: '4px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-4">
        {strategies.map((strategy, index) => (
          <div key={strategy.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span>{strategy.name}</span>
            </div>
            <div className="font-medium">{strategy.currentYield}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyBreakdown;
