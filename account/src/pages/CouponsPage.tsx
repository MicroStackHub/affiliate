
import React from 'react';

const CouponsPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Coupons & Offers
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View and manage your available coupons and special offers
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎫</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No coupons available
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check back later for exciting offers and discounts!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
            Browse Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
