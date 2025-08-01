
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isSidebarCollapsed, isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className={`${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      } relative z-10`}>
        {/* Navbar */}
        <Navbar />
        
        {/* Page Content */}
        <main className="container-custom py-6 lg:py-8">
          <div>
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Backdrop */}
      {!isSidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"></div>
      )}

      {/* Floating Elements */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
        <div className="glass p-3 rounded-2xl">
          <div className={`w-3 h-3 rounded-full ${
            isDarkMode ? 'bg-green-400' : 'bg-green-500'
          }`}></div>
        </div>
      </div>

      {/* Theme Indicator */}
      <div className="fixed top-20 right-6 z-40 hidden xl:block">
        <div className="glass p-2 rounded-xl">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
