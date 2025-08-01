import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import ChartContainer from './ChartContainer';

const ConversionChart: React.FC = () => {
  const { theme } = useTheme();

  const data = [
    { day: 'Mon', conversions: 45, clicks: 850 },
    { day: 'Tue', conversions: 52, clicks: 920 },
    { day: 'Wed', conversions: 38, clicks: 780 },
    { day: 'Thu', conversions: 61, clicks: 1100 },
    { day: 'Fri', conversions: 73, clicks: 1200 },
    { day: 'Sat', conversions: 89, clicks: 1450 },
    { day: 'Sun', conversions: 67, clicks: 1250 },
  ];

  const [timeRange, setTimeRange] = useState('7d');
  
  // Filter data based on selected time range
  const filteredData = data;
  
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
        <span className="text-sm text-gray-600 dark:text-gray-400">Conversions</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="text-sm text-gray-600 dark:text-gray-400">Clicks</span>
      </div>
    </div>
  );

  return (
    <ChartContainer title="Conversion Rate" actions={actions}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="conversionsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} 
            />
            <XAxis 
              dataKey="day" 
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
            <Area
              type="monotone"
              dataKey="clicks"
              stackId="1"
              stroke="#3b82f6"
              fill="url(#clicksGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="conversions"
              stackId="2"
              stroke="#f97316"
              fill="url(#conversionsGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {legend}
    </ChartContainer>
  );
};

export default ConversionChart;