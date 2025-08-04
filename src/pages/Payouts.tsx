
import React, { useState } from 'react';
 
import PayoutDataTable from '../components/DataTable/PayoutDataTable';
import WithdrawalRequestsTab from '../components/WithdrawalRequestsTab';

const Payouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');


  const payoutStats = [
    { label: 'Available Balance', value: '₹2,456.78', icon: '💰', color: 'text-green-500 dark:text-green-400' },
    { label: 'Pending Payouts', value: '₹892.34', icon: '⏳', color: 'text-yellow-500 dark:text-yellow-400' },
    { label: 'Total Paid', value: '₹15,234.56', icon: '✅', color: 'text-blue-500 dark:text-blue-400' },
    { label: 'This Month', value: '₹1,567.89', icon: '📅', color: 'text-purple-500 dark:text-purple-400' },
  ];

  const payoutHistory = [
    { id: 1, date: '2024-01-15', amount: '₹1,234.56', method: 'PayPal', status: 'Completed', reference: 'TXN001234' },
    { id: 2, date: '2024-01-01', amount: '₹892.34', method: 'Bank Transfer', status: 'Completed', reference: 'TXN001235' },
    { id: 3, date: '2023-12-15', amount: '₹1,567.89', method: 'PayPal', status: 'Completed', reference: 'TXN001236' },
    { id: 4, date: '2023-12-01', amount: '₹734.12', method: 'Bank Transfer', status: 'Completed', reference: 'TXN001237' },
    { id: 5, date: '2023-11-15', amount: '₹2,145.67', method: 'PayPal', status: 'Completed', reference: 'TXN001238' },
  ];

  const paymentMethods = [
    { id: 1, type: 'PayPal', email: 'john@example.com', isDefault: true },
    { id: 2, type: 'Bank Transfer', account: '**** **** **** 1234', isDefault: false },
  ];

 

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'history', name: 'Payout History' },
    { id: 'methods', name: 'Bank Accounts' },
    { id: 'withdrawal', name: 'Withdrawal Requests' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payouts</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your earnings and payment preferences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm cursor-pointer relative z-10 transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-primary text-orange-primary dark:text-orange-light'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {payoutStats.map((stat, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Quick Actions</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors cursor-pointer relative z-10">
                Withdraw Funds
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer relative z-10">
                Update Payment Method
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer relative z-10">
                View Payment History
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <PayoutDataTable data={payoutHistory} />
      )}

      {activeTab === 'methods' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Bank Accounts</h3>
              <button className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors cursor-pointer relative z-10">
                Add Account
              </button>
            </div>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-shadow relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg">
                        {method.type === 'PayPal' ? '💳' : '🏦'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{method.type}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.type === 'PayPal' ? method.email : method.account}
                      </p>
                    </div>
                    {method.isDefault && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2 relative z-20">
                    <button 
                      onClick={() => console.log('Edit method:', method.id)}
                      className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium cursor-pointer transition-colors"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => console.log('Remove method:', method.id)}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium cursor-pointer transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'withdrawal' && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Withdrawal Requests</h3>
              <button className="px-4 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-hover transition-colors cursor-pointer relative z-10">
                New Request
              </button>
            </div>
            
            <WithdrawalRequestsTab />
          </div>
        </div>
      )}
    </div>
  );
};

export default Payouts;
