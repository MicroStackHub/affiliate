import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ProfilePage from './Profile/ProfilePage';
import Analytics from './Analytics/Analytics';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, changeType, icon }) => {
  const { isDarkMode, colorScheme } = useTheme();

  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-600 dark:text-green-400';
    if (changeType === 'negative') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-600 dark:text-blue-400';
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'purple': return 'text-purple-600 dark:text-purple-400';
      case 'red': return 'text-red-600 dark:text-red-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-md transition-all duration-200 p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mt-1`}>{value}</p>
          <p className={`text-sm ${getChangeColor()} mt-1`}>{change}</p>
        </div>
        <div className={`${getAccentColor()} opacity-80`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface ActivityCardProps {
  title: string;
  description: string;
  time: string;
  type: 'order' | 'payment' | 'profile' | 'security';
  status?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, time, type, status }) => {
  const { isDarkMode } = useTheme();

  const getTypeIcon = () => {
    switch (type) {
      case 'order':
        return (
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
            </svg>
          </div>
        );
      case 'payment':
        return (
          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
        );
      case 'profile':
        return (
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        );
      case 'security':
        return (
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4 hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start space-x-3">
        {getTypeIcon()}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</p>
            {status && (
              <span className={`px-2 py-1 text-xs rounded-full ${status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                {status}
              </span>
            )}
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{description}</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>{time}</p>
        </div>
      </div>
    </div>
  );
};

interface QuickActionButtonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ title, description, icon, onClick, variant = 'secondary' }) => {
  const { isDarkMode, colorScheme } = useTheme();

  const getButtonClasses = () => {
    if (variant === 'primary') {
      switch (colorScheme) {
        case 'blue': return 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl';
        case 'green': return 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl';
        case 'purple': return 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl';
        case 'red': return 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl';
        default: return 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl';
      }
    }
    return `${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'} border shadow-sm hover:shadow-md`;
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonClasses()} rounded-xl p-6 text-left transition-all duration-200 w-full group`}
    >
      <div className="flex items-center space-x-4">
        <div className={`${variant === 'primary' ? 'text-white opacity-90' : isDarkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:scale-110 transition-transform duration-200`}>
          {icon}
        </div>
        <div>
          <h3 className={`font-semibold ${variant === 'primary' ? 'text-white' : isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`text-sm ${variant === 'primary' ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{description}</p>
        </div>
      </div>
    </button>
  );
};

// Main component with routing state
const AccountPage: React.FC = () => {
  const { isDarkMode, toggleTheme, colorScheme, setColorScheme } = useTheme();
  const [currentView, setCurrentView] = useState<'overview' | 'profile' | 'analytics'>('overview');
  const [profileSection, setProfileSection] = useState('basic');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // This would typically come from your auth context or user state
  const userRole: 'customer' | 'affiliate' | 'admin' = 'affiliate'; // Sample role

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleNavigateToProfile = (section: string = 'basic') => {
    setProfileSection(section);
    setCurrentView('profile');
    showNotificationMessage(`Navigating to profile ${section} section`);
  };

    const handleNavigateToAnalytics = () => {
        setCurrentView('analytics');
        showNotificationMessage('Navigating to analytics dashboard');
    };


  const handleQuickAction = (action: string) => {
    if (action === 'Update Profile') {
      handleNavigateToProfile();
      return;
    }
    showNotificationMessage(`${action} initiated successfully`);
    console.log(`Quick action: ${action}`);
  };

  // Listen for custom events from sidebar
  useEffect(() => {
    const handleProfileNavigation = (event: any) => {
      const section = event.detail;
      handleNavigateToProfile(section);
    };

    window.addEventListener('navigateToProfile', handleProfileNavigation);
    return () => window.removeEventListener('navigateToProfile', handleProfileNavigation);
  }, []);

  const statsData = [
    {
      title: 'Total Orders',
      value: 142,
      change: '+12% from last month',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
        </svg>
      )
    },
    {
      title: 'Total Spent',
      value: '$12,840',
      change: '+8% from last month',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      )
    },
    {
      title: 'Wishlist Items',
      value: 24,
      change: '+3 this week',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      title: 'Reward Points',
      value: '2,840',
      change: '+120 this month',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    }
  ];

  const recentActivities = [
    {
      title: 'Order #ORD-2024-001 Delivered',
      description: 'MacBook Pro 16" and accessories successfully delivered',
      time: '2 hours ago',
      type: 'order' as const,
      status: 'Completed'
    },
    {
      title: 'Payment Method Updated',
      description: 'Added new Visa card ending in 4532',
      time: '1 day ago',
      type: 'payment' as const,
      status: 'Completed'
    },
    {
      title: 'Profile Information Updated',
      description: 'Updated contact information and preferences',
      time: '3 days ago',
      type: 'profile' as const,
      status: 'Completed'
    },
    {
      title: 'Security Alert',
      description: 'New login from Chrome on Windows',
      time: '5 days ago',
      type: 'security' as const,
      status: 'Verified'
    }
  ];

  // Render Profile Page
  if (currentView === 'profile') {
    return (
      <ProfilePage 
        initialSection={profileSection}
        onBack={() => setCurrentView('overview')}
        userRole={userRole}
      />
    );
  }

    // Render Analytics Page
    if (currentView === 'analytics') {
        return (
            <Analytics
                userRole={userRole}
                onBack={() => setCurrentView('overview')}
            />
        );
    }

  // Render Account Overview
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 opacity-100">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>{notificationMessage}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Account</h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                Welcome back, John! Manage your account and preferences.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                  </svg>
                )}
              </button>

              {/* Color Scheme Selector */}
              <div className="flex space-x-1">
                {(['blue', 'green', 'purple', 'red'] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setColorScheme(color)}
                    className={`w-6 h-6 rounded-full transition-all duration-200 ${
                      colorScheme === color ? 'ring-2 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900' : 'hover:scale-110'
                    } ${
                      color === 'blue' ? 'bg-blue-500 ring-blue-500' :
                      color === 'green' ? 'bg-green-500 ring-green-500' :
                      color === 'purple' ? 'bg-purple-500 ring-purple-500' :
                      'bg-red-500 ring-red-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickActionButton
                  title="Update Profile"
                  description="Edit your personal information and preferences"
                  variant="primary"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  }
                  onClick={() => handleQuickAction('Update Profile')}
                />
                 <QuickActionButton
                                    title="View Analytics"
                                    description="Explore your account analytics and insights"
                                    icon={
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 3h18v2H3V3zm3 4h12v2H6V7zm5 4h2v6h-2v-6zM17 11h2v6h-2v-6zM6 11h2v6H6v-6z" />
                                        </svg>
                                    }
                                    onClick={handleNavigateToAnalytics}
                                />
                <QuickActionButton
                  title="View Orders"
                  description="Track your recent orders and purchases"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
                    </svg>
                  }
                  onClick={() => handleQuickAction('View Orders')}
                />
                <QuickActionButton
                  title="Manage Addresses"
                  description="Add or edit your shipping addresses"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  }
                  onClick={() => handleQuickAction('Manage Addresses')}
                />
                <QuickActionButton
                  title="Payment Methods"
                  description="Manage your saved payment methods"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  }
                  onClick={() => handleQuickAction('Payment Methods')}
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h2>
                <button className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} font-medium`}>
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Account Info */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full border-4 border-blue-500"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Premium Member</p>
                  <div className="flex items-center mt-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>5.0</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Profile Completion</span>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>85%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Account Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Verified</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone Verified</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Enable 2FA</span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">Setup</button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
              <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: 'Download Invoice', icon: '📄', action: 'Download Invoice' },
                  { name: 'Contact Support', icon: '💬', action: 'Contact Support' },
                  { name: 'Privacy Settings', icon: '🔒', action: 'Privacy Settings' },
                  { name: 'Export Data', icon: '📊', action: 'Export Data' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(link.action)}
                    className={`w-full text-left px-3 py-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors flex items-center space-x-3`}
                  >
                    <span>{link.icon}</span>
                    <span className="text-sm">{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;