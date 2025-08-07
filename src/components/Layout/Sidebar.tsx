import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar, toggleMobileSidebar } = useTheme();

  // Overview section items
  const overviewItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/earnings', label: 'Earnings', icon: '💰' },
    { path: '/analytics', label: 'Analytics', icon: '📈', hidden: true },
    { path: '/referrals', label: 'Referrals', icon: '👥' },
  ];

  // Management section items  
  const managementItems = [
    { path: '/affiliate-links', label: 'Affiliate Links', icon: '🔗' },
  ];

  // Account section items
  const bankIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 10h18M9 21V8m6 13V8m-9 4H3m18 0h-3M12 3L2 8h20L12 3z" />
    </svg>
  );

  const privacyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
    </svg>
  );

  const feedbackIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M7 8h10M7 12h6m-6 4h8m1-14H5a2 2 0 00-2 2v14l4-4h11a2 2 0 002-2V5a2 2 0 00-2-2z" />
    </svg>
  );

  const accountItems = [
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: "/bank-accounts", label: "Bank Accounts", icon: bankIcon },
    { path: '/payouts', label: 'Payouts', icon: '💳' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/privacy-policy', label: 'Privacy Policy', icon: privacyIcon },
    { path: '/feedback', label: 'Feedback', icon: feedbackIcon },
  ];

  const isActiveItem = (itemPath: string) => {
    return location.pathname === itemPath || (itemPath === '/dashboard' && location.pathname === '/');
  };

  const handleItemClick = () => {
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      toggleMobileSidebar();
    }
  };

  return (
    <div className={`
      h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
      transition-all duration-300 ease-in-out
      w-64
      lg:relative lg:block
      shadow-lg
    `}>

      {/* Mobile Header with Close Button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-orange-600 dark:text-orange-400">Bonzicart</h2>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Sidebar Content */}
      <nav className="h-full overflow-y-auto">
        {/* Overview Section */}
        <div className="py-2">
          {overviewItems.map((item) => (
            !item.hidden && (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleItemClick}
                className={`
                  flex items-center px-4 py-3 mx-2 my-1 rounded-lg
                  transition-all duration-200 ease-in-out
                  hover:bg-orange-50 dark:hover:bg-gray-800
                  ${isActiveItem(item.path) 
                    ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500' 
                    : 'text-gray-700 dark:text-gray-300'
                  }
                  ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}
                `}
                title={isSidebarCollapsed ? item.label : ''}
              >
                <span className="text-xl mr-3">
                  {item.icon}
                </span>
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            )
          ))}
        </div>

        {/* Management Section */}
        <div className="py-2 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Management
          </div>
          {managementItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleItemClick}
              className={`
                flex items-center px-4 py-3 mx-2 my-1 rounded-lg
                transition-all duration-200 ease-in-out
                hover:bg-orange-50 dark:hover:bg-gray-800
                ${isActiveItem(item.path) 
                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500' 
                  : 'text-gray-700 dark:text-gray-300'
                }
              `}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="font-medium text-sm whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Account Section */}
        <div className="py-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Account
          </div>
          {accountItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleItemClick}
              className={`
                flex items-center px-4 py-3 mx-2 my-1 rounded-lg
                transition-all duration-200 ease-in-out
                hover:bg-orange-50 dark:hover:bg-gray-800
                ${isActiveItem(item.path) 
                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500' 
                  : 'text-gray-700 dark:text-gray-300'
                }
                justify-start
              `}
              title={item.label}
            >
              <span className="text-xl mr-3">
                {typeof item.icon === 'string' ? item.icon : <span className="flex items-center">{item.icon}</span>}
              </span>
              <span className="font-medium text-sm whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;