
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface BasicInfoData {
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  occupation: string;
  company: string;
}

const BasicInformation: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    nationality: 'United States',
    occupation: 'Software Engineer',
    company: 'Tech Corp Inc.'
  });

  const [editingInfo, setEditingInfo] = useState<BasicInfoData>(basicInfo);

  const handleEdit = () => {
    setIsEditing(true);
    setEditingInfo(basicInfo);
  };

  const handleSave = () => {
    setBasicInfo(editingInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingInfo(basicInfo);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof BasicInfoData, value: string) => {
    setEditingInfo(prev => ({ ...prev, [field]: value }));
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
              Basic Information
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              Manage your personal and professional details
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

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              First Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{basicInfo.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Last Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{basicInfo.lastName}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>@{basicInfo.username}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Date of Birth
            </label>
            {isEditing ? (
              <input
                type="date"
                value={editingInfo.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {new Date(basicInfo.dateOfBirth).toLocaleDateString()}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Gender
            </label>
            {isEditing ? (
              <select
                value={editingInfo.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} capitalize`}>{basicInfo.gender}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Nationality
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{basicInfo.nationality}</p>
            )}
          </div>

          {/* Occupation */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Occupation
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.occupation}
                onChange={(e) => handleInputChange('occupation', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{basicInfo.occupation}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Company
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editingInfo.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:ring-2 focus:ring-opacity-50 ${getAccentColor()}`}
              />
            ) : (
              <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{basicInfo.company}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
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

export default BasicInformation;
