
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { sidebarConfig } from '../../config/sidebarConfig';
import type { MenuItem } from '../../config/sidebarConfig';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

interface SidebarItemProps extends MenuItem {
  isCollapsed: boolean;
}

const SidebarHeading: React.FC<{ text: string; isCollapsed: boolean }> = ({ text, isCollapsed }) => {
  const { isDarkMode } = useTheme();

  if (isCollapsed) return null;

  return (
    <div className={`px-4 py-3 mt-6 mb-2 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} first:border-t-0 first:mt-0`}>
      {text}
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  isActive = false,
  isCollapsed,
  onClick,
  hasSubMenu = false,
  subMenuItems = [],
  badge
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { isDarkMode, colorScheme } = useTheme();

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSubMenu && !isCollapsed) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  const handleItemClick = (e: React.MouseEvent) => {
    if (hasSubMenu && !isCollapsed) {
      toggleSubMenu(e);
    } else if (onClick) {
      onClick();
    }
    if (hasSubMenu && !isCollapsed) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  const getActiveColor = () => {
    if (isDarkMode) {
      switch (colorScheme) {
        case 'blue': return 'bg-blue-600 text-white shadow-lg border-l-4 border-blue-400';
        case 'green': return 'bg-green-600 text-white shadow-lg border-l-4 border-green-400';
        case 'purple': return 'bg-purple-600 text-white shadow-lg border-l-4 border-purple-400';
        case 'red': return 'bg-red-600 text-white shadow-lg border-l-4 border-red-400';
        default: return 'bg-blue-600 text-white shadow-lg border-l-4 border-blue-400';
      }
    } else {
      switch (colorScheme) {
        case 'blue': return 'bg-blue-50 text-blue-800 shadow-sm border-l-4 border-blue-500';
        case 'green': return 'bg-green-50 text-green-800 shadow-sm border-l-4 border-green-500';
        case 'purple': return 'bg-purple-50 text-purple-800 shadow-sm border-l-4 border-purple-500';
        case 'red': return 'bg-red-50 text-red-800 shadow-sm border-l-4 border-red-500';
        default: return 'bg-blue-50 text-blue-800 shadow-sm border-l-4 border-blue-500';
      }
    }
  };

  return (
    <div className="mb-1 group relative">
      <div
        onClick={handleItemClick}
        className={`flex items-center ${isCollapsed ? 'justify-center px-3' : 'px-4'} py-3 mx-2 rounded-lg cursor-pointer transition-all duration-200 ${isActive
          ? getActiveColor()
          : isDarkMode
            ? 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-sm'
            : 'text-gray-700 hover:bg-gray-100 hover:shadow-sm'}`}
      >
        <div className={`flex-shrink-0 ${isActive ? '' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {icon}
        </div>
        {!isCollapsed && (
          <div className="ml-3 flex-grow flex justify-between items-center">
            <span className="font-medium text-sm">
              {text}
            </span>
            <div className="flex items-center space-x-2">
              {badge && (
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  badge === 'New' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  isActive ? 'bg-white/20 text-white' :
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  {badge}
                </span>
              )}
              {hasSubMenu && (
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''} ${
                    isActive ? 'text-white/80' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tooltip for collapsed mode */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 top-0 z-50 w-auto p-2 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200 shadow-lg'}`}>
            {text}
            {badge && <span className="ml-2 text-xs opacity-75">• {badge}</span>}
          </div>
        </div>
      )}

      {/* Submenu */}
      {hasSubMenu && !isCollapsed && isSubMenuOpen && (
        <div className={`mx-4 mt-1 space-y-1 rounded-md overflow-hidden ${isDarkMode ? 'text-gray-300 bg-gray-800/50' : 'text-gray-600 bg-gray-50'} border-l-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pl-4 py-2`}>
          {subMenuItems.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className={`py-2 px-3 block text-sm cursor-pointer transition-colors rounded-md ${isDarkMode ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-100 hover:text-gray-900'}`}
              onClick={item.onClick}
            >
              <div className="flex items-center">
                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                {item.text}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const { isDarkMode, colorScheme } = useTheme();

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'purple': return 'text-purple-500';
      case 'red': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const renderSidebarItems = () => {
    return sidebarConfig.map((item) => {
      if (item.type === 'heading') {
        return (
          <SidebarHeading 
            key={item.id} 
            text={item.text} 
            isCollapsed={isCollapsed} 
          />
        );
      }
      
      return (
        <SidebarItem
          key={item.id}
          {...item}
          isCollapsed={isCollapsed}
        />
      );
    });
  };

  return (
    <div
      className={`sidebar h-screen fixed left-0 top-0 z-30 transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} ${isCollapsed ? 'w-16' : 'w-64'} border-r shadow-xl`}
    >
      {/* Logo/Header */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-4'} h-16 ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} border-b`}>
        <div className="flex items-center">
          <div className={`flex-shrink-0 p-2 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <svg className={`w-6 h-6 ${getAccentColor()}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <span className={`text-xl font-bold tracking-wide ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                BonziCart
              </span>
              <div className={`text-xs ${getAccentColor()} font-medium`}>
                Account Hub
              </div>
            </div>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'} focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all ${isCollapsed ? 'hidden lg:block' : ''}`}
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`${isCollapsed ? 'p-2' : 'p-0'} overflow-y-auto h-[calc(100vh-4rem)] scrollbar-hide`}>
        <div className="py-4">
          {renderSidebarItems()}
        </div>
      </div>

      {/* Footer (only when not collapsed) */}
      {!isCollapsed && (
        <div className={`absolute bottom-0 left-0 right-0 p-4 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
          <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-center`}>
            © 2025 BonziCart
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
