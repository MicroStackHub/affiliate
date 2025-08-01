import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import ChartContainer from './ChartContainer';

const EarningsChart: React.FC = () => {
  const { theme } = useTheme();

  const data = [
    { month: 'Jan', earnings: 1200, commissions: 800 },
    { month: 'Feb', earnings: 1800, commissions: 1200 },
    { month: 'Mar', earnings: 1500, commissions: 1000 },
    { month: 'Apr', earnings: 2200, commissions: 1500 },
    { month: 'May', earnings: 2800, commissions: 1900 },
    { month: 'Jun', earnings: 3200, commissions: 2200 },
    { month: 'Jul', earnings: 2900, commissions: 2000 },
    { month: 'Aug', earnings: 3500, commissions: 2400 },
    { month: 'Sep', earnings: 4100, commissions: 2800 },
    { month: 'Oct', earnings: 3800, commissions: 2600 },
    { month: 'Nov', earnings: 4500, commissions: 3100 },
    { month: 'Dec', earnings: 5200, commissions: 3600 },
  ];

  const [timeRange, setTimeRange] = useState('7d');
  
  const filteredData = timeRange === '7d' ? data.slice(-7) : 
                      timeRange === '30d' ? data.slice(-12) : data;
  
  const actions = (
    <select 
      value={timeRange} 
      onChange={(e) => setTimeRange(e.target.value)}
      className="form-input text-sm py-1 px-2 w-auto"
    >
      <option value="7d">Last 7 days</option>
      <option value="30d">Last 30 days</option>
      <option value="all">All Time</option>
    </select>
  );
  
  const legend = (
    <div className="flex items-center justify-center mt-4 space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <span className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="text-sm text-gray-600 dark:text-gray-400">Commissions</span>
      </div>
    </div>
  );

  return (
    <ChartContainer title="Earnings Overview" actions={actions}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} 
            />
            <XAxis 
              dataKey="month" 
              stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
              fontSize={12}
            />
            <YAxis 
              stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px',
                color: theme === 'dark' ? '#ffffff' : '#000000'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="earnings" 
              stroke="#f97316" 
              strokeWidth={3}
              dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#f97316', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="commissions" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {legend}
    </ChartContainer>
  );
};

export default EarningsChart;