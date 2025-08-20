
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isSidebarCollapsed, isDarkMode, isMobileSidebarOpen, toggleMobileSidebar } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar toggleMobileSidebar={toggleMobileSidebar} />

      {/* Desktop Layout */}
      <div className="flex pt-14 sm:pt-16">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:w-64 lg:fixed lg:inset-y-0 lg:pt-16 lg:z-20">
          <Sidebar />
        </div>

        {/* Main Content - Full width on mobile, adjusted on desktop */}
        <main className="flex-1 lg:pl-64 transition-all duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 overflow-hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 backdrop-blur-sm transition-opacity" 
            onClick={toggleMobileSidebar}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl z-50 transition-transform duration-300 ease-in-out">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
