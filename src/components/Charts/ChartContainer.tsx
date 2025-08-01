import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children, className = '', actions }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {actions && (
          <div className="flex items-center space-x-2">
            {actions}
          </div>
        )}
      </div>
      <div className="h-full">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;