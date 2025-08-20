
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrdersPage: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/orders':
        return 'My Orders';
      case '/orders/active':
        return 'Active Orders';
      case '/orders/history':
        return 'Order History';
      case '/orders/returns':
        return 'Returns & Refunds';
      case '/orders/tracking':
        return 'Track Package';
      default:
        return 'My Orders';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {getPageTitle()}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your orders and track deliveries
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No orders found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
