import React from 'react';
import Analytics from '../components/Analytics/Analytics';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Detailed insights into your affiliate performance
        </p>
      </div>
      <Analytics />
    </div>
  );
};

export default AnalyticsPage;