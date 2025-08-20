
import React, { useState } from 'react';
import DataTable, { Column } from '../DataTable/DataTable';
import EarningsChart from '../Charts/EarningsChart';
import StatsChart from '../Charts/StatsChart';
import { useTheme } from '../../contexts/ThemeContext';

// Sample data interfaces
interface Transaction {
  id: string;
  date: string;
  type: string;
  amount: number;
  status: string;
  description: string;
  commission?: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  lastActive: string;
  totalEarnings?: number;
}

interface AnalyticsProps {
  userRole: 'customer' | 'affiliate' | 'admin';
  onBack?: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ userRole, onBack }) => {
  const { isDarkMode, colorScheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'users' | 'reports'>('overview');

  // Sample data for different user roles
  // Using underscore prefix to indicate intentionally unused variables in map functions
  const sampleTransactions: Transaction[] = [
    {
      id: 'TXN001',
      date: '2024-01-15',
      type: userRole === 'customer' ? 'Purchase' : 'Commission',
      amount: userRole === 'customer' ? 299.99 : 59.99,
      status: 'Completed',
      description: userRole === 'customer' ? 'Product Purchase - Premium Plan' : 'Affiliate Commission - Premium Plan Sale',
      commission: userRole !== 'customer' ? 59.99 : undefined
    },
    {
      id: 'TXN002',
      date: '2024-01-10',
      type: userRole === 'customer' ? 'Purchase' : 'Bonus',
      amount: userRole === 'customer' ? 149.99 : 25.00,
      status: 'Completed',
      description: userRole === 'customer' ? 'Product Purchase - Basic Plan' : 'Performance Bonus',
      commission: userRole !== 'customer' ? 25.00 : undefined
    },
    {
      id: 'TXN003',
      date: '2024-01-05',
      type: userRole === 'customer' ? 'Refund' : 'Commission',
      amount: userRole === 'customer' ? -99.99 : 19.99,
      status: userRole === 'customer' ? 'Processed' : 'Pending',
      description: userRole === 'customer' ? 'Refund - Starter Plan' : 'Affiliate Commission - Starter Plan Sale',
      commission: userRole !== 'customer' ? 19.99 : undefined
    },
    {
      id: 'TXN004',
      date: '2024-01-01',
      type: userRole === 'customer' ? 'Purchase' : 'Commission',
      amount: userRole === 'customer' ? 499.99 : 99.99,
      status: 'Completed',
      description: userRole === 'customer' ? 'Product Purchase - Enterprise Plan' : 'Affiliate Commission - Enterprise Plan Sale',
      commission: userRole !== 'customer' ? 99.99 : undefined
    }
  ];

  const sampleUsers: User[] = userRole === 'admin' ? [
    {
      id: 'USR001',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Affiliate',
      status: 'Active',
      joinDate: '2023-06-15',
      lastActive: '2024-01-15',
      totalEarnings: 2456.78
    },
    {
      id: 'USR002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Customer',
      status: 'Active',
      joinDate: '2023-08-20',
      lastActive: '2024-01-14',
      totalEarnings: 0
    },
    {
      id: 'USR003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Affiliate',
      status: 'Inactive',
      joinDate: '2023-04-10',
      lastActive: '2023-12-20',
      totalEarnings: 1234.56
    }
  ] : [];

  const sampleEarningsData = [
    { month: 'Jul', earnings: 1200, commissions: 240, bonuses: 50 },
    { month: 'Aug', earnings: 1400, commissions: 280, bonuses: 75 },
    { month: 'Sep', earnings: 1100, commissions: 220, bonuses: 25 },
    { month: 'Oct', earnings: 1600, commissions: 320, bonuses: 100 },
    { month: 'Nov', earnings: 1800, commissions: 360, bonuses: 125 },
    { month: 'Dec', earnings: 2200, commissions: 440, bonuses: 150 }
  ];

  // Column definitions for different data types
  const transactionColumns: Column[] = [
    {
      key: 'id',
      label: 'Transaction ID',
      sortable: true,
      filterable: true
    },
    {
      key: 'date',
      label: 'Date',
      sortable: true,
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
      filterable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Purchase' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
          value === 'Commission' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
            value === 'Bonus' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
          }`}>
          {value}
        </span>
      )
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (value: number) => (
        <span className={value < 0 ? 'text-red-500' : 'text-green-500'}>
          ${Math.abs(value).toFixed(2)}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
          }`}>
          {value}
        </span>
      )
    },
    {
      key: 'description',
      label: 'Description',
      width: '300px'
    }
  ];

  const userColumns: Column[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      filterable: true
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      filterable: true
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      filterable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Admin' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
          value === 'Affiliate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
            'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
          }`}>
          {value}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
          }`}>
          {value}
        </span>
      )
    },
    {
      key: 'joinDate',
      label: 'Join Date',
      sortable: true,
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'totalEarnings',
      label: 'Total Earnings',
      sortable: true,
      render: (value: number) => (
        <span className="font-medium">${value?.toFixed(2) || '0.00'}</span>
      )
    }
  ];

  // Stats data based on user role
  const getStatsData = () => {
    if (userRole === 'customer') {
      return [
        { label: 'Premium Plans', value: 3, color: '#3b82f6' },
        { label: 'Basic Plans', value: 5, color: '#10b981' },
        { label: 'Starter Plans', value: 2, color: '#f59e0b' }
      ];
    } else if (userRole === 'affiliate') {
      return [
        { label: 'Direct Sales', value: 45, color: '#3b82f6' },
        { label: 'Referral Sales', value: 32, color: '#10b981' },
        { label: 'Bonus Sales', value: 18, color: '#f59e0b' }
      ];
    } else {
      return [
        { label: 'Active Users', value: 1250, color: '#3b82f6' },
        { label: 'Affiliates', value: 350, color: '#10b981' },
        { label: 'Customers', value: 900, color: '#f59e0b' }
      ];
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'transactions', label: 'Transactions', icon: '💳' },
    ...(userRole === 'admin' ? [{ id: 'users', label: 'Users', icon: '👥' }] : []),
    { id: 'reports', label: 'Reports', icon: '📈' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 border`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${colorScheme === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                    colorScheme === 'green' ? 'bg-green-100 dark:bg-green-900' :
                      colorScheme === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
                        'bg-red-100 dark:bg-red-900'
                    }`}>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {userRole === 'customer' ? 'Total Spent' : 'Total Earnings'}
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      ${userRole === 'customer' ? '849.97' : '4,567.89'}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 border`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${colorScheme === 'blue' ? 'bg-green-100 dark:bg-green-900' :
                    colorScheme === 'green' ? 'bg-blue-100 dark:bg-blue-900' :
                      colorScheme === 'purple' ? 'bg-green-100 dark:bg-green-900' :
                        'bg-green-100 dark:bg-green-900'
                    }`}>
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {userRole === 'customer' ? 'Orders' : 'This Month'}
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {userRole === 'customer' ? '12' : '$890.50'}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 border`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${colorScheme === 'blue' ? 'bg-purple-100 dark:bg-purple-900' :
                    colorScheme === 'green' ? 'bg-purple-100 dark:bg-purple-900' :
                      colorScheme === 'purple' ? 'bg-blue-100 dark:bg-blue-900' :
                        'bg-purple-100 dark:bg-purple-900'
                    }`}>
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {userRole === 'customer' ? 'Loyalty Points' : userRole === 'affiliate' ? 'Referrals' : 'Active Users'}
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {userRole === 'customer' ? '2,340' : userRole === 'affiliate' ? '47' : '1,250'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EarningsChart data={sampleEarningsData} userRole={userRole} />
              <StatsChart
                data={getStatsData()}
                type="doughnut"
                title={userRole === 'customer' ? 'Purchase Breakdown' : userRole === 'affiliate' ? 'Sales Breakdown' : 'User Distribution'}
              />
            </div>
          </div>
        );

      case 'transactions':
        return (
          <DataTable
            data={sampleTransactions}
            columns={transactionColumns}
            title="Transaction History"
            actions={(_row) => (
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                <button className="text-green-600 hover:text-green-800 text-sm">Download</button>
              </div>
            )}
          />
        );

      case 'users':
        return userRole === 'admin' ? (
          <DataTable
            data={sampleUsers}
            columns={userColumns}
            title="User Management"
            actions={(_row) => (
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Suspend</button>
              </div>
            )}
          />
        ) : null;

      case 'reports':
        return (
          <div className="space-y-6">
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 border`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Generate Reports
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className={`p-4 border-2 border-dashed rounded-lg transition-colors ${isDarkMode
                  ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white'
                  : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-gray-900'
                  }`}>
                  <div className="text-center">
                    <span className="text-2xl">📊</span>
                    <p className={`mt-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Sales Report
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Monthly sales summary
                    </p>
                  </div>
                </button>

                <button className={`p-4 border-2 border-dashed rounded-lg transition-colors ${isDarkMode
                  ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white'
                  : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-gray-900'
                  }`}>
                  <div className="text-center">
                    <span className="text-2xl">💳</span>
                    <p className={`mt-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Transaction Report
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Detailed transaction history
                    </p>
                  </div>
                </button>

                {userRole === 'admin' && (
                  <button className={`p-4 border-2 border-dashed rounded-lg transition-colors ${isDarkMode
                    ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white'
                    : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-gray-900'
                    }`}>
                    <div className="text-center">
                      <span className="text-2xl">👥</span>
                      <p className={`mt-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        User Report
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        User analytics and insights
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {onBack && (
        <button
          onClick={onBack}
          className={`mb-4 flex items-center px-3 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      )}
      {/* Tab Navigation */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border`}>
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                ? `border-${colorScheme}-500 text-${colorScheme}-600 ${isDarkMode ? `dark:text-${colorScheme}-400` : ''}`
                : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
                }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Analytics;
