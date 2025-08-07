import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar, toggleMobileSidebar } = useTheme(); // theme removed as it's not used


  // Overview section items
  const overviewItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/earnings', label: 'Earnings', icon: '💰' },
    { path: '/analytics', label: 'Analytics', icon: '📈' ,hidden:true },
    { path: '/referrals', label: 'Referrals', icon: '👥' },
  ];

  // Management section items
  const managementItems = [
    { path: '/affiliate-links', label: 'Affiliate Links', icon: '🔗' },
  ];

  // Account section items
  const bankicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M3 10h18M9 21V8m6 13V8m-9 4H3m18 0h-3M12 3L2 8h20L12 3z" />
  </svg>

  const privacyicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
  </svg>

  const feedBackIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M7 8h10M7 12h6m-6 4h8m1-14H5a2 2 0 00-2 2v14l4-4h11a2 2 0 002-2V5a2 2 0 00-2-2z" />
  </svg>


  const accountItems = [
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: "/bank-accounts", label: "Bank Accounts", icon: bankicon },
    { path: '/payouts', label: 'Payouts', icon: '💳' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/privacy-policy', label: 'Privacy Policy', icon: privacyicon },
    { path: '/feedback', label: 'Feedback', icon: feedBackIcon },

  ];



  return (
    <div className={`h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 z-30 ${
      // Desktop behavior
      'lg:' + (isSidebarCollapsed ? 'w-16' : 'w-64')
    } ${
      // Mobile behavior - always full width when visible
      'w-full lg:w-auto'
    }`}>

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

      {/* Menu Items */}
      <nav style={{ marginTop: '1rem' }} className="lg:mt-4">
        <div style={{ paddingLeft: '0', paddingRight: '0' }}>

          {overviewItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display:item.hidden ? "none":"flex",
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '#fff5f2' 
                  : 'transparent',
                color: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '#F15A2B' 
                  : '#64748b',
                borderLeft: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '4px solid #F15A2B'
                  : '4px solid transparent',
                cursor: 'pointer',
                width: '100%',
                justifyContent: 'flex-start'
              }}
              onClick={() => {
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 1024) {
                  toggleMobileSidebar();
                }
              }}
              title=""

              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"


             >
               <span style={{ fontSize: '1.25rem', marginRight: isSidebarCollapsed ? '0' : '0.75rem' }}>{item.icon}</span>
               {!isSidebarCollapsed && <span>{item.label}</span>}
             </Link>
          ))}

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
           // color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '0',
            padding: isSidebarCollapsed ? '0' : '0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0',
            display: 'block',
           // backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb',

          }} className="text-sm text-center bg-gray-100   font-medium text-gray-600 dark:bg-black hidden">
            Management
          </div>
          {managementItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
               // display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path 
                  ? '#fff5f2' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? '#F15A2B' 
                  : '#374151',
                borderLeft: location.pathname === item.path 
                  ? '3px solid #F15A2B' 
                  : '3px solid transparent',
                justifyContent: 'flex-start',
                cursor: 'pointer',
                width: '100%'
              }}
              title=""
             className='hidden'
            >
              <span style={{ fontSize: isSidebarCollapsed ? '1rem' : '1.25rem', marginRight: isSidebarCollapsed ? '0' : '0.75rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span className="text-sm sm:text-base">{item.label}</span>}
              {item.path === '/referrals' && !isSidebarCollapsed && (
                <span style={{ 
                  marginLeft: 'auto', 
                  backgroundColor: '#f97316', 
                  color: 'white', 
                  fontSize: '0.65rem', 
                  borderRadius: '9999px', 
                  paddingLeft: '0.4rem', 
                  paddingRight: '0.4rem', 
                  paddingTop: '0.2rem', 
                  paddingBottom: '0.2rem', 
                  fontWeight: 500
                }}>12</span>
              )}
            </Link>
          ))}
        </div>

        <div style={{ 
          marginTop: '0', 
          paddingLeft: '0', 
          paddingRight: '0' 
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            //color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0',
            display: 'block',
           // backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb'
          }} className="text-sm text-center bg-gray-100   font-medium text-gray-600 dark:bg-black">
            Account
          </div>
          {accountItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path 
                  ? '#fff5f2' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? '#F15A2B' 
                  : '#374151',
                borderLeft: location.pathname === item.path 
                  ? '3px solid #F15A2B' 
                  : '3px solid transparent',
                justifyContent: 'flex-start',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => {
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 1024) {
                  toggleMobileSidebar();
                }
              }}
              title=""
            >
              <span style={{ fontSize: '1.25rem', marginRight: isSidebarCollapsed ? '0' : '0.75rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;