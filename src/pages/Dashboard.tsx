import React from 'react';
import { useTheme, useColorScheme } from '../contexts/ThemeContext';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  LinkIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';
import ReferralCard from '../components/ReferralCard';
import ActionButton from '../components/ActionButton';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
}

// Reusable StatCard component
const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon }) => {
  const { getColorClasses } = useColorScheme();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 text-orange-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
            }`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-2xl ${getColorClasses('primary')} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${getColorClasses('text')}`} />
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Earnings',
      value: '$2,847.52',
      change: '+12.5%',
      trend: 'up' as const,
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Active Referrals',
      value: '156',
      change: '+8.2%',
      trend: 'up' as const,
      icon: UserGroupIcon,
    },
    {
      title: 'Clicks This Month',
      value: '1,247',
      change: '-3.1%',
      trend: 'down' as const,
      icon: CursorArrowRaysIcon,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.8%',
      trend: 'up' as const,
      icon: ChartBarIcon,
    },
  ];

  const recentReferrals = [
    { id: 1, name: 'John Smith', email: 'john@example.com', earnings: '$25.00', date: 'Today' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', earnings: '$15.50', date: 'Yesterday' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', earnings: '$32.75', date: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', earnings: '$18.25', date: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here's what's happening with your affiliate program.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={stat.title}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Earnings Chart */}
        <div>
          <EarningsChart />
        </div>

        {/* Conversion Chart */}
        <div>
          <ConversionChart />
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Referrals</h3>
          <button className="btn-ghost text-sm py-2 px-3">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {recentReferrals.map((referral) => (
            <ReferralCard
              key={referral.id}
              name={referral.name}
              email={referral.email}
              earnings={referral.earnings}
              date={referral.date}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <ActionButton icon={LinkIcon} label="Generate Link" />
          <ActionButton icon={UserGroupIcon} label="Invite Friends" />
          <ActionButton icon={ChartBarIcon} label="View Analytics" />
          <ActionButton icon={EyeIcon} label="Track Performance" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 