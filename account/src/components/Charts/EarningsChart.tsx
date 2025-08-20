import React, { useState } from 'react';
import ChartContainer from './ChartContainer';
import { useTheme } from '../../contexts/ThemeContext';

interface EarningsData {
  month: string;
  earnings: number;
  commissions: number;
  bonuses: number;
}

interface EarningsChartProps {
  data: EarningsData[];
  userRole: 'customer' | 'affiliate' | 'admin';
}

const EarningsChart: React.FC<EarningsChartProps> = ({ data, userRole }) => {
  const { isDarkMode } = useTheme(); // theme removed as it's not used
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [timeRange, setTimeRange] = useState<'6m' | '1y' | 'all'>('6m');

  const maxValue = Math.max(...data.map(d => d.earnings + d.commissions + d.bonuses));

  const getFilteredData = () => {
    switch (timeRange) {
      case '6m':
        return data.slice(-6);
      case '1y':
        return data.slice(-12);
      default:
        return data;
    }
  };

  const filteredData = getFilteredData();

  const renderChart = () => {
    const width = 600;
    const height = 250;
    const padding = 60;

    if (chartType === 'line') {
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + (height - 2 * padding) * ratio}
              x2={width - padding}
              y2={padding + (height - 2 * padding) * ratio}
              stroke={isDarkMode ? '#374151' : '#e5e7eb'}
              strokeWidth="1"
            />
          ))}

          {/* Earnings line */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            points={filteredData.map((d, i) => {
              const x = padding + (i / (filteredData.length - 1)) * (width - 2 * padding);
              const y = height - padding - (d.earnings / maxValue) * (height - 2 * padding);
              return `${x},${y}`;
            }).join(' ')}
          />

          {/* Commission line (for affiliates) */}
          {userRole !== 'customer' && (
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="5,5"
              points={filteredData.map((d, i) => {
                const x = padding + (i / (filteredData.length - 1)) * (width - 2 * padding);
                const y = height - padding - (d.commissions / maxValue) * (height - 2 * padding);
                return `${x},${y}`;
              }).join(' ')}
            />
          )}

          {/* Data points */}
          {filteredData.map((d, i) => {
            const x = padding + (i / (filteredData.length - 1)) * (width - 2 * padding);
            const y = height - padding - (d.earnings / maxValue) * (height - 2 * padding);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#3b82f6"
                className="hover:r-6 transition-all duration-200"
              />
            );
          })}

          {/* Month labels */}
          {filteredData.map((d, i) => {
            const x = padding + (i / (filteredData.length - 1)) * (width - 2 * padding);
            return (
              <text
                key={i}
                x={x}
                y={height - 20}
                textAnchor="middle"
                fontSize="12"
                fill={isDarkMode ? '#9ca3af' : '#6b7280'}
              >
                {d.month}
              </text>
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
            <text
              key={ratio}
              x={padding - 10}
              y={padding + (height - 2 * padding) * ratio + 5}
              textAnchor="end"
              fontSize="12"
              fill={isDarkMode ? '#9ca3af' : '#6b7280'}
            >
              ${Math.round(maxValue * (1 - ratio))}
            </text>
          ))}
        </svg>
      );
    } else {
      // Bar chart
      const barWidth = (width - 2 * padding) / filteredData.length * 0.8;
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + (height - 2 * padding) * ratio}
              x2={width - padding}
              y2={padding + (height - 2 * padding) * ratio}
              stroke={isDarkMode ? '#374151' : '#e5e7eb'}
              strokeWidth="1"
            />
          ))}

          {/* Bars */}
          {filteredData.map((d, i) => {
            const x = padding + (i / filteredData.length) * (width - 2 * padding) + barWidth * 0.1;
            const barHeight = (d.earnings / maxValue) * (height - 2 * padding);
            const y = height - padding - barHeight;

            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#3b82f6"
                className="hover:opacity-80 transition-opacity duration-200"
              />
            );
          })}

          {/* Month labels */}
          {filteredData.map((d, i) => {
            const x = padding + (i / filteredData.length) * (width - 2 * padding) + barWidth * 0.6;
            return (
              <text
                key={i}
                x={x}
                y={height - 20}
                textAnchor="middle"
                fontSize="12"
                fill={isDarkMode ? '#9ca3af' : '#6b7280'}
              >
                {d.month}
              </text>
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
            <text
              key={ratio}
              x={padding - 10}
              y={padding + (height - 2 * padding) * ratio + 5}
              textAnchor="end"
              fontSize="12"
              fill={isDarkMode ? '#9ca3af' : '#6b7280'}
            >
              ${Math.round(maxValue * (1 - ratio))}
            </text>
          ))}
        </svg>
      );
    }
  };

  const actions = (
    <>
      <select
        value={timeRange}
        onChange={(e) => setTimeRange(e.target.value as any)}
        className={`px-3 py-1 rounded text-sm ${
          isDarkMode
            ? 'bg-gray-700 text-white border-gray-600'
            : 'bg-white text-gray-900 border-gray-300'
        } border`}
      >
        <option value="6m">6 Months</option>
        <option value="1y">1 Year</option>
        <option value="all">All Time</option>
      </select>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value as any)}
        className={`px-3 py-1 rounded text-sm ${
          isDarkMode
            ? 'bg-gray-700 text-white border-gray-600'
            : 'bg-white text-gray-900 border-gray-300'
        } border`}
      >
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>
    </>
  );

  return (
    <ChartContainer 
      title={userRole === 'customer' ? 'Purchase History' : 'Earnings Overview'} 
      actions={actions}
    >
      {renderChart()}

      {/* Legend */}
      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
          <span className="text-sm">
            {userRole === 'customer' ? 'Purchases' : 'Earnings'}
          </span>
        </div>
        {userRole !== 'customer' && (
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-green-500 border-dashed border-t mr-2"></div>
            <span className="text-sm">Commissions</span>
          </div>
        )}
      </div>
    </ChartContainer>
  );
};

export default EarningsChart;