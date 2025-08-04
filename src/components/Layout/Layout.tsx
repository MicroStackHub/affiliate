
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

      {/* Fixed Navbar at the top */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="container-table mx-auto mt-16 mb-4 lg:mb-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
        {/* Sidebar Column */}
        <div className="border-r z-0 border-gray-200 dark:border-gray-800 lg:block hidden">
          <Sidebar />
        </div>
        
        {/* Mobile Sidebar */}
        <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
        }`}>
          <Sidebar />
        </div>
        
        {/* Main Content Column */}
        <div className="flex-1 relative z-10 flex flex-col min-h-0">
          {/* Page Content */}
          <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto">
            <div className="w-full max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {!isSidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"></div>
      )}

      {/* Floating Elements */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
        <div className="glass p-3 rounded-2xl">
          <div className={`w-3 h-3 rounded-full ${
            isDarkMode ? 'bg-green-400' : 'bg-green-500'
          }`}></div>
        </div>
      </div>

      {/* Theme Indicator
      <div className="fixed top-20 right-6 z-40 hidden xl:block">
        <div className="glass p-2 rounded-xl">
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Layout;
