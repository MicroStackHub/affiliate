
import React from 'react';

const AddressesPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          My Addresses
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your shipping and billing addresses
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Shipping Addresses
          </h3>
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🏠</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No shipping addresses added
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Add Address
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Billing Addresses
          </h3>
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🏢</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No billing addresses added
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesPage;
