
import React from 'react';

const OrderHistory: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Order History
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View all your past orders and purchases
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No order history
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Your past orders will appear here once you make a purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
