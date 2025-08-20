
import React from 'react';

const NotificationsPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Notification Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage how you receive notifications
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Email Notifications
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700 dark:text-gray-300">Order updates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700 dark:text-gray-300">Promotional emails</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Weekly newsletter</span>
            </label>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            SMS Notifications
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700 dark:text-gray-300">Delivery updates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Special offers</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
