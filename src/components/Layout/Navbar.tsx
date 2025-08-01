
import React, { useState } from 'react';
import { useTheme, useColorScheme } from '../../contexts/ThemeContext';
import { 
  SunIcon, 
  MoonIcon, 
  BellIcon, 
  UserCircleIcon,
  Bars3Icon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const { 
    isDarkMode, 
    toggleTheme, 
    toggleSidebar, 
    colorScheme, 
    setColorScheme,
    followSystemTheme,
    setFollowSystemTheme
  } = useTheme();
  const { getColorClasses } = useColorScheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const colorOptions = [
    { name: 'Orange', value: 'orange' as const, color: 'bg-orange-500' },
    { name: 'Blue', value: 'blue' as const, color: 'bg-blue-500' },
    { name: 'Green', value: 'green' as const, color: 'bg-green-500' },
    { name: 'Purple', value: 'purple' as const, color: 'bg-purple-500' },
  ];

  const notifications = [
    { id: 1, title: 'New referral bonus!', message: 'You earned $25 from John Doe', time: '2 min ago', unread: true },
    { id: 2, title: 'Payment processed', message: 'Your earnings have been transferred', time: '1 hour ago', unread: true },
    { id: 3, title: 'Welcome bonus', message: 'Complete your profile for $10 bonus', time: '2 hours ago', unread: false },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>

            {/* Page Title */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Affiliate Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back! Here's your performance overview.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Controls */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
              </button>

              {/* Theme Menu */}
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-elevation-3 border border-gray-200 dark:border-gray-700 py-3">
                  <div className="px-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Appearance Settings
                    </h3>
                  </div>
                  
                  {/* Theme Toggle */}
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setFollowSystemTheme(!followSystemTheme)}
                          className={`text-xs px-2 py-1 rounded-lg ${
                            followSystemTheme 
                              ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          Auto
                        </button>
                        <button
                          onClick={toggleTheme}
                          className={`relative w-11 h-6 rounded-full ${
                            isDarkMode 
                              ? getColorClasses('primary')
                              : 'bg-gray-300'
                          }`}
                        >
                          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full ${
                            isDarkMode ? 'translate-x-5' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Color Scheme */}
                  <div className="px-4 py-3">
                    <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                      Color Scheme
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {colorOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setColorScheme(option.value)}
                          className={`p-3 rounded-xl border-2 ${
                            colorScheme === option.value
                              ? 'border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-700'
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full ${option.color} mx-auto mb-1`} />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {option.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BellIcon className="w-5 h-5" />
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-elevation-3 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Notifications
                      </h3>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        Mark all read
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer ${
                          notification.unread ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.unread ? 'bg-blue-500' : 'bg-transparent'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-orange-primary to-orange-hover rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-elevation-3 border border-gray-200 dark:border-gray-700 py-2">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-primary to-orange-hover rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">JD</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          John Doe
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          john@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <UserCircleIcon className="w-5 h-5" />
                      <span>Profile</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <Cog6ToothIcon className="w-5 h-5" />
                      <span>Settings</span>
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 py-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                      <ArrowRightOnRectangleIcon className="w-5 h-5" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
