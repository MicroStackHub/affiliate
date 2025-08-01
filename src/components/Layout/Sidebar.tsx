
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar } = useTheme(); // theme removed as it's not used

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/earnings', label: 'Earnings', icon: '💰' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/affiliate-links', label: 'Affiliate Links', icon: '🔗' },
    { path: '/referrals', label: 'Referrals', icon: '👥' },
    { path: '/marketing-tools', label: 'Marketing Tools', icon: '🛠️' },
    { path: '/payouts', label: 'Payouts', icon: '💳' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/support', label: 'Support', icon: '🎧' },
  ];

  const { colorScheme } = useTheme();
  
  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 z-30 shadow-md ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}`}>
          <div style={{
            width: '2rem',
            height: '2rem',
            background: 'linear-gradient(to bottom right, #f97316, #ea580c)',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>A</span>
          </div>
          {!isSidebarCollapsed && (
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #f97316, #ea580c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>AFFILIATE</span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          style={{
            padding: '0.5rem',
            borderRadius: '0.5rem'
          }}
        >
          <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav style={{ marginTop: '1.5rem' }}>
        <div style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Overview
          </div>
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '#ea580c' 
                  : 'transparent',
                color: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
             
             >
               <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
               {!isSidebarCollapsed && <span>{item.label}</span>}
             </Link>
          ))}

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '1.5rem',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Management
          </div>
          {menuItems.slice(3, 7).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path 
                  ? '#ea580c' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem',
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                gap: isSidebarCollapsed ? '0' : '0.75rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
              {item.path === '/referrals' && !isSidebarCollapsed && (
                <span style={{ 
                  marginLeft: 'auto', 
                  backgroundColor: '#f97316', 
                  color: 'white', 
                  fontSize: '0.75rem', 
                  borderRadius: '9999px', 
                  paddingLeft: '0.5rem', 
                  paddingRight: '0.5rem', 
                  paddingTop: '0.25rem', 
                  paddingBottom: '0.25rem', 
                  fontWeight: 500 
                }}>12</span>
              )}
            </Link>
          ))}
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          paddingLeft: '0.75rem', 
          paddingRight: '0.75rem' 
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Account
          </div>
          {menuItems.slice(6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: location.pathname === item.path 
                  ? '#ea580c' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem',
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                gap: isSidebarCollapsed ? '0' : '0.75rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
