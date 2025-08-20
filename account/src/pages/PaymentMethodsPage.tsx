
import React from 'react';

const PaymentMethodsPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Payment Methods
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your payment methods and billing information
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Credit & Debit Cards
          </h3>
          <div className="text-center py-8">
            <div className="text-4xl mb-2">💳</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No cards added yet
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Add Card
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Digital Wallets
          </h3>
          <div className="text-center py-8">
            <div className="text-4xl mb-2">📱</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No digital wallets connected
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
