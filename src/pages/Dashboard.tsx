import React, { useEffect } from 'react';
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
import { stats, recentReferrals } from '../constants/dashboardcontants';
import { replace, useLocation, useNavigate } from 'react-router-dom';


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
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUpIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mr-1" />
            )}
            <span className={`text-xs sm:text-sm font-medium ${
              trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
            }`}>
              {change}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${getColorClasses('primary')} bg-opacity-10`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${getColorClasses('text')}`} />
        </div>
      </div>
    </div>
  );}

const Dashboard: React.FC = () => {

   const location = useLocation();
   const navigate = useNavigate();
   const queryParams = new URLSearchParams(location.search);
   const token = queryParams.get("token");

   useEffect(()=>{
        if(token){
          localStorage.setItem("token",token);
          console.log("token is set in the local storage")
          navigate(location.pathname,{replace:true});
        }
   },[token,navigate,location.pathname])
  

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
      <div className="card hidden">
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
      <div className="card hidden">
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
 