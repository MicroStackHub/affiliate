
import React from 'react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Purchase Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your spending patterns and shopping behavior
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Total Spent This Month
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$0.00</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Orders This Month
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Average Order Value
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$0.00</p>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No data available
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Start making purchases to see your analytics data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
