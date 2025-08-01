import React, { useState } from 'react';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';

const Earnings: React.FC = () => {
  const [timeframe, setTimeframe] = useState('30days');

  const earningsStats = [
    { label: 'Total Earnings', value: '$12,534.56', change: '+12.5%', icon: '💰' },
    { label: 'This Month', value: '$3,247.89', change: '+8.2%', icon: '📅' },
    { label: 'Commission Rate', value: '8.5%', change: '+0.3%', icon: '📊' },
    { label: 'Avg Order Value', value: '$127.45', change: '-3.2%', icon: '🛒' },
  ];

  const recentEarnings = [
    { id: 1, date: '2024-01-15', product: 'Premium Software License', commission: '$45.67', rate: '15%' },
    { id: 2, date: '2024-01-14', product: 'Online Course Bundle', commission: '$23.45', rate: '12%' },
    { id: 3, date: '2024-01-13', product: 'Digital Marketing Tool', commission: '$67.89', rate: '18%' },
    { id: 4, date: '2024-01-12', product: 'Design Template Pack', commission: '$12.34', rate: '10%' },
    { id: 5, date: '2024-01-11', product: 'Productivity App', commission: '$34.56', rate: '14%' },
  ];

  const timeframes = [
    { value: '7days', label: '7 Days' },
    { value: '30days', label: '30 Days' },
    { value: '90days', label: '90 Days' },
    { value: '1year', label: '1 Year' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Earnings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your affiliate earnings and commission history
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {timeframes.map((tf) => (
              <button
                key={tf.value}
                onClick={() => setTimeframe(tf.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  timeframe === tf.value
                    ? 'text-white bg-orange-600 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earningsStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div className={`mt-2 flex items-center text-sm ${
              stat.change.startsWith('+') 
                ? 'text-green-600 dark:text-green-400' 
                 : 'text-orange-600 dark:text-orange-400'
            }`}>
              <span>{stat.change.startsWith('+') ? '↗' : '↘'}</span>
              <span className="ml-1">{stat.change}</span>
              <span className="ml-1 text-gray-500 dark:text-gray-400">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        <ConversionChart />
      </div>

      {/* Recent Earnings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Earnings</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Your latest commission transactions</p>
            </div>
            <button className="px-4 py-2 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentEarnings.map((earning) => (
                <tr key={earning.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {earning.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {earning.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                    {earning.commission}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {earning.rate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-orange-600 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Reports</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Get comprehensive earnings analytics</p>
          <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Generate Report
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="text-3xl mb-3">💳</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Request Payout</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Withdraw your available earnings</p>
          <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Request Payout
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Optimize Performance</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Get tips to increase your earnings</p>
          <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            View Tips
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earnings;