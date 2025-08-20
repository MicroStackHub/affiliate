
import React from 'react';

const ActiveOrders: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Active Orders
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your current orders and deliveries
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🚚</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No active orders
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            You don't have any orders in progress right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrders;
