
import React from 'react';

const TrackPackage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Track Package
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your package delivery status in real-time
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter Tracking Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Track
            </button>
          </div>
        </div>

        <div className="text-center py-12">
          <div className="text-6xl mb-4">📍</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Enter tracking number
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your tracking number above to see the delivery status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackPackage;
