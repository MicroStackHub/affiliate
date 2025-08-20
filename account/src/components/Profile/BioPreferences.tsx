
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface PreferencesData {
  bio: string;
  interests: string[];
  language: string;
  timezone: string;
  currency: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisibility: string;
    showEmail: boolean;
    showPhone: boolean;
    allowMessages: boolean;
  };
  accessibility: {
    fontSize: string;
    highContrast: boolean;
    reducedMotion: boolean;
    screenReader: boolean;
  };
}

const BioPreferences: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();
  const [activeTab, setActiveTab] = useState('bio');
  const [preferences, setPreferences] = useState<PreferencesData>({
    bio: "Passionate software engineer with 8+ years of experience in full-stack development. I love creating innovative solutions and contributing to open-source projects. When I'm not coding, you'll find me hiking, reading tech blogs, or experimenting with new technologies.",
    interests: ['Technology', 'Programming', 'AI/ML', 'Open Source', 'Hiking', 'Photography', 'Reading'],
    language: 'English',
    timezone: 'America/New_York',
    currency: 'USD',
    notifications: {
      email: true,
      sms: true,
      push: true,
      marketing: false
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowMessages: true
    },
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      screenReader: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingPreferences, setEditingPreferences] = useState<PreferencesData>(preferences);

  const availableInterests = [
    'Technology', 'Programming', 'AI/ML', 'Open Source', 'Design', 'Photography', 
    'Hiking', 'Reading', 'Music', 'Sports', 'Travel', 'Cooking', 'Art', 'Gaming',
    'Fitness', 'Business', 'Science', 'Writing', 'Movies', 'Learning'
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setEditingPreferences(preferences);
  };

  const handleSave = () => {
    setPreferences(editingPreferences);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingPreferences(preferences);
    setIsEditing(false);
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = isEditing ? editingPreferences.interests : preferences.interests;
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];
    
    if (isEditing) {
      setEditingPreferences(prev => ({ ...prev, interests: newInterests }));
    } else {
      setPreferences(prev => ({ ...prev, interests: newInterests }));
    }
  };

  const handleNotificationChange = (key: keyof PreferencesData['notifications'], value: boolean) => {
    if (isEditing) {
      setEditingPreferences(prev => ({
        ...prev,
        notifications: { ...prev.notifications, [key]: value }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        notifications: { ...prev.notifications, [key]: value }
      }));
    }
  };

  const handlePrivacyChange = (key: keyof PreferencesData['privacy'], value: boolean | string) => {
    if (isEditing) {
      setEditingPreferences(prev => ({
        ...prev,
        privacy: { ...prev.privacy, [key]: value }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        privacy: { ...prev.privacy, [key]: value }
      }));
    }
  };

  const handleAccessibilityChange = (key: keyof PreferencesData['accessibility'], value: boolean | string) => {
    if (isEditing) {
      setEditingPreferences(prev => ({
        ...prev,
        accessibility: { ...prev.accessibility, [key]: value }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        accessibility: { ...prev.accessibility, [key]: value }
      }));
    }
  };

  const getButtonColor = () => {
    switch (colorScheme) {
      case 'blue': return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
      case 'green': return 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500';
      case 'red': return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
      default: return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
    }
  };

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-600 dark:text-blue-400 border-blue-500';
      case 'green': return 'text-green-600 dark:text-green-400 border-green-500';
      case 'purple': return 'text-purple-600 dark:text-purple-400 border-purple-500';
      case 'red': return 'text-red-600 dark:text-red-400 border-red-500';
      default: return 'text-blue-600 dark:text-blue-400 border-blue-500';
    }
  };

  const tabs = [
    { id: 'bio', name: 'Bio & Interests', icon: '👤' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'privacy', name: 'Privacy', icon: '🔒' },
    { id: 'accessibility', name: 'Accessibility', icon: '♿' }
  ];

  const currentData = isEditing ? editingPreferences : preferences;

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Bio & Preferences
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              Manage your personal bio, interests, and account preferences
            </p>
          </div>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className={`px-4 py-2 ${getButtonColor()} text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit</span>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? `${getAccentColor()} border-current`
                  : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} border-transparent hover:border-gray-300`
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {/* Bio & Interests Tab */}
        {activeTab === 'bio' && (
          <div className="space-y-6">
            {/* Bio */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={currentData.bio}
                  onChange={(e) => setEditingPreferences(prev => ({ ...prev, bio: e.target.value }))}
                  rows={4}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]}`}
                  placeholder="Tell others about yourself..."
                />
              ) : (
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  {currentData.bio}
                </p>
              )}
            </div>

            {/* Interests */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {availableInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      currentData.interests.includes(interest)
                        ? `${getButtonColor()} text-white`
                        : `${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Language */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Language
                </label>
                <select
                  value={currentData.language}
                  onChange={(e) => isEditing && setEditingPreferences(prev => ({ ...prev, language: e.target.value }))}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]} disabled:opacity-50`}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Timezone
                </label>
                <select
                  value={currentData.timezone}
                  onChange={(e) => isEditing && setEditingPreferences(prev => ({ ...prev, timezone: e.target.value }))}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]} disabled:opacity-50`}
                >
                  <option value="America/New_York">Eastern Time (EST/EDT)</option>
                  <option value="America/Chicago">Central Time (CST/CDT)</option>
                  <option value="America/Denver">Mountain Time (MST/MDT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PST/PDT)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                </select>
              </div>

              {/* Currency */}
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Currency
                </label>
                <select
                  value={currentData.currency}
                  onChange={(e) => isEditing && setEditingPreferences(prev => ({ ...prev, currency: e.target.value }))}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]} disabled:opacity-50`}
                >
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="CAD">Canadian Dollar (CAD)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            {[
              { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
              { key: 'sms', label: 'SMS Notifications', description: 'Receive updates via text message' },
              { key: 'push', label: 'Push Notifications', description: 'Receive browser/app notifications' },
              { key: 'marketing', label: 'Marketing Communications', description: 'Receive promotional offers and news' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.notifications[item.key as keyof PreferencesData['notifications']]}
                    onChange={(e) => handleNotificationChange(item.key as keyof PreferencesData['notifications'], e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            {/* Profile Visibility */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Profile Visibility
              </label>
              <select
                value={currentData.privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]}`}
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            {/* Privacy Settings */}
            {[
              { key: 'showEmail', label: 'Show Email Address', description: 'Allow others to see your email' },
              { key: 'showPhone', label: 'Show Phone Number', description: 'Allow others to see your phone number' },
              { key: 'allowMessages', label: 'Allow Messages', description: 'Allow others to send you messages' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.privacy[item.key as keyof PreferencesData['privacy']] as boolean}
                    onChange={(e) => handlePrivacyChange(item.key as keyof PreferencesData['privacy'], e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Accessibility Tab */}
        {activeTab === 'accessibility' && (
          <div className="space-y-6">
            {/* Font Size */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Font Size
              </label>
              <select
                value={currentData.accessibility.fontSize}
                onChange={(e) => handleAccessibilityChange('fontSize', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor().split(' ')[2]}`}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>

            {/* Accessibility Settings */}
            {[
              { key: 'highContrast', label: 'High Contrast', description: 'Increase contrast for better visibility' },
              { key: 'reducedMotion', label: 'Reduced Motion', description: 'Minimize animations and transitions' },
              { key: 'screenReader', label: 'Screen Reader Support', description: 'Optimize for screen reader compatibility' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.accessibility[item.key as keyof PreferencesData['accessibility']] as boolean}
                    onChange={(e) => handleAccessibilityChange(item.key as keyof PreferencesData['accessibility'], e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        )}

        {isEditing && (
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleCancel}
              className={`px-4 py-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`px-4 py-2 ${getButtonColor()} text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BioPreferences;
