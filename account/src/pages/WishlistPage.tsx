
import React from 'react';

const WishlistPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          My Wishlist
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Save items you love for later
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💝</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start adding items to your wishlist to save them for later.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
