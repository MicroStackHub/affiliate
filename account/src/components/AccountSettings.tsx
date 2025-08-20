import React, { useState } from 'react';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button 
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

interface ToggleSettingProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({ 
  label, 
  description, 
  defaultChecked = false,
  onChange 
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-start justify-between py-2">
      <div>
        <label htmlFor={`toggle-${label}`} className="font-medium text-gray-700">{label}</label>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <button 
        role="switch"
        aria-checked={checked}
        id={`toggle-${label}`}
        onClick={handleChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} 
        />
      </button>
    </div>
  );
};

const AccountSettings: React.FC = () => {
  const [notificationCount] = useState(3); // setNotificationCount removed as it's not used

  const handleToggleNotifications = (checked: boolean) => {
    // In a real app, this would update user preferences in the backend
    console.log(`Email notifications ${checked ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="account-settings-container mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
          <div className="relative">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <SettingsSection title="Notifications" defaultOpen={true}>
            <div className="space-y-3">
              <ToggleSetting 
                label="Email Notifications" 
                description="Receive order updates and promotional offers"
                defaultChecked={true}
                onChange={handleToggleNotifications}
              />
              <ToggleSetting 
                label="SMS Notifications" 
                description="Get text messages for order status changes"
                defaultChecked={false}
              />
              <ToggleSetting 
                label="Push Notifications" 
                description="Receive alerts on your device"
                defaultChecked={true}
              />
            </div>
          </SettingsSection>
          
          <SettingsSection title="Privacy">
            <div className="space-y-3">
              <ToggleSetting 
                label="Profile Visibility" 
                description="Allow other users to see your profile"
                defaultChecked={true}
              />
              <ToggleSetting 
                label="Activity Tracking" 
                description="Allow us to collect usage data to improve your experience"
                defaultChecked={true}
              />
            </div>
          </SettingsSection>
          
          <SettingsSection title="Security">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 mb-3">Add an extra layer of security to your account</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150">
                  Enable 2FA
                </button>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <h3 className="font-medium text-gray-700 mb-2">Password</h3>
                <p className="text-sm text-gray-500 mb-3">Last changed 3 months ago</p>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-150">
                  Change Password
                </button>
              </div>
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;