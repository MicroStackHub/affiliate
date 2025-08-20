
import React, { useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ProfilePicture: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/1.jpg');
  const [isUploading, setIsUploading] = useState(false);
  // Crop modal functionality to be implemented later
  // const [showCropModal, setShowCropModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload process
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImage(e.target?.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1500);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage('');
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
      case 'blue': return 'text-blue-600 dark:text-blue-400';
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'purple': return 'text-purple-600 dark:text-purple-400';
      case 'red': return 'text-red-600 dark:text-red-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Profile Picture
        </h2>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Upload and manage your profile photo
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Current Profile Picture */}
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <div className="relative">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
                />
              ) : (
                <div className={`w-32 h-32 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center border-4 border-gray-200 dark:border-gray-600`}>
                  <svg className={`w-12 h-12 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
              
              {isUploading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              )}

              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                John Doe
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Premium Member
              </p>
            </div>
          </div>

          {/* Upload Options */}
          <div className="flex-1">
            <div className="space-y-4">
              {/* Upload Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className={`w-full lg:w-auto px-6 py-3 ${getButtonColor()} text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span>{isUploading ? 'Uploading...' : 'Upload New Photo'}</span>
                </div>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Remove Button */}
              {profileImage && (
                <button
                  onClick={handleRemoveImage}
                  className={`w-full lg:w-auto px-6 py-3 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Remove Photo</span>
                  </div>
                </button>
              )}

              {/* Guidelines */}
              <div className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Photo Guidelines
                </h4>
                <ul className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} space-y-1`}>
                  <li>• Square images work best (1:1 ratio)</li>
                  <li>• Maximum file size: 5MB</li>
                  <li>• Supported formats: JPG, PNG, GIF</li>
                  <li>• Minimum resolution: 400x400 pixels</li>
                  <li>• Keep it professional and appropriate</li>
                </ul>
              </div>

              {/* Privacy Settings */}
              <div className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  Privacy Settings
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className={`rounded border-gray-300 ${getAccentColor().replace('text-', 'text-')} focus:ring-2 focus:ring-opacity-50`}
                    />
                    <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Show profile picture to other users
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className={`rounded border-gray-300 ${getAccentColor().replace('text-', 'text-')} focus:ring-2 focus:ring-opacity-50`}
                    />
                    <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Allow profile picture in search results
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className={`rounded border-gray-300 ${getAccentColor().replace('text-', 'text-')} focus:ring-2 focus:ring-opacity-50`}
                    />
                    <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Use profile picture for marketing materials
                    </span>
                  </label>
                </div>
              </div>

              {/* Recent Photos */}
              <div>
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  Recent Photos
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <button
                      key={i}
                      className={`aspect-square rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                        alt={`Recent photo ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
