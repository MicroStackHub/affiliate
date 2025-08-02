
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar } = useTheme(); // theme removed as it's not used
 
  
  // Overview section items
  const overviewItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/earnings', label: 'Earnings', icon: '💰' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
  ];
  
  // Management section items
  const managementItems = [
    { path: '/affiliate-links', label: 'Affiliate Links', icon: '🔗' },
    { path: '/referrals', label: 'Referrals', icon: '👥' },
   
  ];
  
  // Account section items
  const accountItems = [
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/payouts', label: 'Payouts', icon: '💳' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/support', label: 'Support', icon: '🎧' },
  ];

  const { colorScheme } = useTheme();
  
  return (
    <div className={`h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 z-30 ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>

      {/* Menu Items */}
      <nav style={{ marginTop: '1rem' }}>
        <div style={{ paddingLeft: '0', paddingRight: '0' }}>
       
          {overviewItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
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
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start'
              }}
              title={isSidebarCollapsed ? item.label : ''}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
             >
               <span style={{ fontSize: '1.25rem', marginRight: isSidebarCollapsed ? '0' : '0.75rem' }}>{item.icon}</span>
               {!isSidebarCollapsed && <span>{item.label}</span>}
             </Link>
          ))}

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '0',
            padding: isSidebarCollapsed ? '0' : '0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0',
            display: isSidebarCollapsed ? 'none' : 'block',
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb'
          }}>
            Management
          </div>
          {managementItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
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
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                cursor: 'pointer',
                width: '100%'
              }}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span style={{ fontSize: '1.25rem', marginRight: isSidebarCollapsed ? '0' : '0.75rem' }}>{item.icon}</span>
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
          marginTop: '0', 
          paddingLeft: '0', 
          paddingRight: '0' 
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0',
            display: isSidebarCollapsed ? 'none' : 'block',
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb'
          }}>
            Account
          </div>
          {accountItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
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
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                cursor: 'pointer',
                width: '100%'
              }}
              title={isSidebarCollapsed ? item.label : ''}
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
