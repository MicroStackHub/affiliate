
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ContactData {
  email: string;
  phone: string;
  alternatePhone: string;
  website: string;
  linkedin: string;
  twitter: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

const ContactDetails: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    alternatePhone: '+1 (555) 987-6543',
    website: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    address: {
      street: '123 Tech Street, Suite 100',
      city: 'San Francisco',
      state: 'California',
      zipCode: '94105',
      country: 'United States'
    }
  });

  const [editingData, setEditingData] = useState<ContactData>(contactData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditingData(contactData);
  };

  const handleSave = () => {
    setContactData(editingData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingData(contactData);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setEditingData(prev => ({
        ...prev,
        address: { ...prev.address, [addressField]: value }
      }));
    } else {
      setEditingData(prev => ({ ...prev, [field]: value }));
    }
  };

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'border-blue-500 ring-blue-500 focus:border-blue-500';
      case 'green': return 'border-green-500 ring-green-500 focus:border-green-500';
      case 'purple': return 'border-purple-500 ring-purple-500 focus:border-purple-500';
      case 'red': return 'border-red-500 ring-red-500 focus:border-red-500';
      default: return 'border-blue-500 ring-blue-500 focus:border-blue-500';
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

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Details
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              Manage your contact information and social profiles
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

      <div className="p-6 space-y-8">
        {/* Contact Information */}
        <div>
          <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.email}</p>
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Primary Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.phone}</p>
                </div>
              )}
            </div>

            {/* Alternate Phone */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Alternate Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editingData.alternatePhone}
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.alternatePhone}</p>
              )}
            </div>

            {/* Website */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Website
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={editingData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <a href={contactData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline py-2 block">
                  {contactData.website}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Social Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LinkedIn */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                LinkedIn
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={editingData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline py-2 block">
                  {contactData.linkedin}
                </a>
              )}
            </div>

            {/* Twitter */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Twitter
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={editingData.twitter}
                  onChange={(e) => handleInputChange('twitter', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <a href={contactData.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline py-2 block">
                  {contactData.twitter}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Street */}
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Street Address
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editingData.address.street}
                  onChange={(e) => handleInputChange('address.street', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.address.street}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                City
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editingData.address.city}
                  onChange={(e) => handleInputChange('address.city', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.address.city}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                State/Province
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editingData.address.state}
                  onChange={(e) => handleInputChange('address.state', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.address.state}</p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ZIP/Postal Code
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editingData.address.zipCode}
                  onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.address.zipCode}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                Country
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editingData.address.country}
                  onChange={(e) => handleInputChange('address.country', e.target.value)}
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
                />
              ) : (
                <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{contactData.address.country}</p>
              )}
            </div>
          </div>
        </div>

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

export default ContactDetails;
