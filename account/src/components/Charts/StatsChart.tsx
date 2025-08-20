
import React from 'react';
import ChartContainer from './ChartContainer';
import { useTheme } from '../../contexts/ThemeContext';

interface StatsData {
  label: string;
  value: number;
  color: string;
  percentage?: number;
}

interface StatsChartProps {
  data: StatsData[];
  type: 'pie' | 'doughnut' | 'bar';
  title: string;
}

const StatsChart: React.FC<StatsChartProps> = ({ data, type, title }) => {
  const { isDarkMode } = useTheme(); // colorScheme removed as it's not used
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const renderPieChart = () => {
    const radius = 80;
    const centerX = 120;
    const centerY = 120;
    let currentAngle = 0;
    
    return (
      <svg width="100%" height="100%" viewBox="0 0 240 240" className="w-full h-full">
        {data.map((item, index) => {
          const percentage = item.value / total;
          const angle = percentage * 2 * Math.PI;
          const x1 = centerX + radius * Math.cos(currentAngle);
          const y1 = centerY + radius * Math.sin(currentAngle);
          const x2 = centerX + radius * Math.cos(currentAngle + angle);
          const y2 = centerY + radius * Math.sin(currentAngle + angle);
          
          const largeArcFlag = angle > Math.PI ? 1 : 0;
          
          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ');
          
          currentAngle += angle;
          
          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          );
        })}
      </svg>
    );
  };
  
  const renderDoughnutChart = () => {
    const outerRadius = 80;
    const innerRadius = 50;
    const centerX = 120;
    const centerY = 120;
    let currentAngle = 0;
    
    return (
      <svg width="100%" height="100%" viewBox="0 0 240 240" className="w-full h-full">
        {data.map((item, index) => {
          const percentage = item.value / total;
          const angle = percentage * 2 * Math.PI;
          
          const x1Outer = centerX + outerRadius * Math.cos(currentAngle);
          const y1Outer = centerY + outerRadius * Math.sin(currentAngle);
          const x2Outer = centerX + outerRadius * Math.cos(currentAngle + angle);
          const y2Outer = centerY + outerRadius * Math.sin(currentAngle + angle);
          
          const x1Inner = centerX + innerRadius * Math.cos(currentAngle);
          const y1Inner = centerY + innerRadius * Math.sin(currentAngle);
          const x2Inner = centerX + innerRadius * Math.cos(currentAngle + angle);
          const y2Inner = centerY + innerRadius * Math.sin(currentAngle + angle);
          
          const largeArcFlag = angle > Math.PI ? 1 : 0;
          
          const pathData = [
            `M ${x1Outer} ${y1Outer}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}`,
            `L ${x2Inner} ${y2Inner}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
            'Z'
          ].join(' ');
          
          currentAngle += angle;
          
          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          );
        })}
        
        {/* Center text */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dy="0.35em"
          fontSize="24"
          fontWeight="bold"
          fill={isDarkMode ? '#ffffff' : '#1f2937'}
        >
          {total}
        </text>
      </svg>
    );
  };
  
  const renderBarChart = () => {
    const maxValue = Math.max(...data.map(d => d.value));
    const barHeight = 200 / data.length - 10;
    
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 240" className="w-full h-full">
        {data.map((item, index) => {
          const barWidth = (item.value / maxValue) * 300;
          const y = index * (barHeight + 10) + 20;
          
          return (
            <g key={index}>
              <rect
                x={80}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                className="hover:opacity-80 transition-opacity duration-200"
              />
              <text
                x={75}
                y={y + barHeight / 2}
                textAnchor="end"
                dy="0.35em"
                fontSize="12"
                fill={isDarkMode ? '#9ca3af' : '#6b7280'}
              >
                {item.label}
              </text>
              <text
                x={85 + barWidth}
                y={y + barHeight / 2}
                dy="0.35em"
                fontSize="12"
                fill={isDarkMode ? '#ffffff' : '#1f2937'}
              >
                {item.value}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };
  
  const renderChart = () => {
    switch (type) {
      case 'pie':
        return renderPieChart();
      case 'doughnut':
        return renderDoughnutChart();
      case 'bar':
        return renderBarChart();
      default:
        return renderPieChart();
    }
  };
  
  return (
    <ChartContainer title={title}>
      <div className="flex items-center justify-between h-full">
        <div className="flex-1">
          {renderChart()}
        </div>
        
        {/* Legend */}
        <div className="ml-6 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm mr-2">{item.label}</span>
              <span className="text-sm font-medium">
                {item.value} ({Math.round((item.value / total) * 100)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
};

export default StatsChart;
