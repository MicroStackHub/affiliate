
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchUserProfile,
  updatePersonalInfo,
  updateBusinessDetails,
  updatePreferences,
  updateProfileImage,
  changePassword,
  clearError,
} from '../store/slices/profileSlice';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { 
    profileData, 
    loading, 
    updateLoading, 
    passwordLoading, 
    imageLoading, 
    error 
  } = useAppSelector((state) => state.profile);

  const [activeTab, setActiveTab] = useState('personal');
  const [personalForm, setPersonalForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [businessForm, setBusinessForm] = useState({
    company_name: '',
    website: '',
    tax_id: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    industry: '',
    company_size: '',
  });
  const [preferencesForm, setPreferencesForm] = useState({
    language: 'en',
    timezone: 'America/New_York',
    currency: 'USD',
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    theme: 'light',
    dashboard_widgets: ['earnings_summary', 'recent_referrals'],
  });
  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const tabs = [
    { id: 'personal', name: 'Personal Info' },
    { id: 'business', name: 'Business Details' },
    { id: 'preferences', name: 'Preferences' },
    { id: 'password', name: 'Change Password' },
  ];

  // Fetch profile data on component mount
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Update forms when profile data is loaded
  useEffect(() => {
    if (profileData) {
      setPersonalForm({
        first_name: profileData.personal.first_name || '',
        last_name: profileData.personal.last_name || '',
        email: profileData.personal.email || '',
        phone: profileData.personal.phone || '',
      });

      setBusinessForm({
        company_name: profileData.business.company_name || '',
        website: profileData.business.website || '',
        tax_id: profileData.business.tax_id || '',
        address: {
          street: profileData.business.address?.street || '',
          city: profileData.business.address?.city || '',
          state: profileData.business.address?.state || '',
          zip: profileData.business.address?.zip || '',
          country: profileData.business.address?.country || '',
        },
        industry: profileData.business.industry || '',
        company_size: profileData.business.company_size || '',
      });

      setPreferencesForm({
        language: profileData.preferences.language || 'en',
        timezone: profileData.preferences.timezone || 'America/New_York',
        currency: profileData.preferences.currency || 'USD',
        notifications: {
          email: profileData.preferences.notifications?.email || true,
          sms: profileData.preferences.notifications?.sms || false,
          push: profileData.preferences.notifications?.push || true,
        },
        theme: profileData.preferences.theme || 'light',
        dashboard_widgets: profileData.preferences.dashboard_widgets || ['earnings_summary'],
      });
    }
  }, [profileData]);

  const handlePersonalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updatePersonalInfo(personalForm)).unwrap();
      alert('Personal information updated successfully!');
    } catch (error) {
      console.error('Failed to update personal info:', error);
    }
  };

  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updateBusinessDetails(businessForm)).unwrap();
      alert('Business details updated successfully!');
    } catch (error) {
      console.error('Failed to update business details:', error);
    }
  };

  const handlePreferencesSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updatePreferences(preferencesForm)).unwrap();
      alert('Preferences updated successfully!');
    } catch (error) {
      console.error('Failed to update preferences:', error);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      alert('New passwords do not match!');
      return;
    }
    try {
      await dispatch(changePassword(passwordForm)).unwrap();
      alert('Password changed successfully!');
      setPasswordForm({
        current_password: '',
        new_password: '',
        confirm_password: '',
      });
    } catch (error) {
      console.error('Failed to change password:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        try {
          await dispatch(updateProfileImage({ profile_image: base64String })).unwrap();
          alert('Profile image updated successfully!');
        } catch (error) {
          console.error('Failed to update profile image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account information and preferences
        </p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
          <div className="flex justify-between items-center">
            <span>{error}</span>
            <button
              onClick={() => dispatch(clearError())}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600 dark:text-orange-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'personal' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
          
          {/* Profile Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Profile Image
            </label>
            <div className="flex items-center space-x-4">
              {profileData?.personal.profile_image && (
                <img
                  src={profileData.personal.profile_image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={imageLoading}
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
              {imageLoading && <span className="text-sm text-gray-500">Uploading...</span>}
            </div>
          </div>

          <form onSubmit={handlePersonalSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={personalForm.first_name}
                  onChange={(e) => setPersonalForm({...personalForm, first_name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={personalForm.last_name}
                  onChange={(e) => setPersonalForm({...personalForm, last_name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={personalForm.email}
                  onChange={(e) => setPersonalForm({...personalForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={personalForm.phone}
                  onChange={(e) => setPersonalForm({...personalForm, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={updateLoading}
              className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
            >
              {updateLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'business' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Business Details</h3>
          <form onSubmit={handleBusinessSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessForm.company_name}
                  onChange={(e) => setBusinessForm({...businessForm, company_name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={businessForm.website}
                  onChange={(e) => setBusinessForm({...businessForm, website: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tax ID
                </label>
                <input
                  type="text"
                  value={businessForm.tax_id}
                  onChange={(e) => setBusinessForm({...businessForm, tax_id: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Street
                  </label>
                  <input
                    type="text"
                    value={businessForm.address.street}
                    onChange={(e) => setBusinessForm({
                      ...businessForm, 
                      address: {...businessForm.address, street: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={businessForm.address.city}
                    onChange={(e) => setBusinessForm({
                      ...businessForm, 
                      address: {...businessForm.address, city: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={businessForm.address.state}
                    onChange={(e) => setBusinessForm({
                      ...businessForm, 
                      address: {...businessForm.address, state: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={businessForm.address.zip}
                    onChange={(e) => setBusinessForm({
                      ...businessForm, 
                      address: {...businessForm.address, zip: e.target.value}
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  value={businessForm.industry}
                  onChange={(e) => setBusinessForm({...businessForm, industry: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={updateLoading}
              className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
            >
              {updateLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'preferences' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Preferences</h3>
          <form onSubmit={handlePreferencesSubmit}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receive email updates about your account</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferencesForm({
                    ...preferencesForm,
                    notifications: {
                      ...preferencesForm.notifications,
                      email: !preferencesForm.notifications.email
                    }
                  })}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent focus:outline-none ${
                    preferencesForm.notifications.email ? 'bg-orange-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${
                    preferencesForm.notifications.email ? 'translate-x-5' : 'translate-x-0'
                  }`}></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">SMS Notifications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receive SMS updates</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreferencesForm({
                    ...preferencesForm,
                    notifications: {
                      ...preferencesForm.notifications,
                      sms: !preferencesForm.notifications.sms
                    }
                  })}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent focus:outline-none ${
                    preferencesForm.notifications.sms ? 'bg-orange-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${
                    preferencesForm.notifications.sms ? 'translate-x-5' : 'translate-x-0'
                  }`}></span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Language
                  </label>
                  <select
                    value={preferencesForm.language}
                    onChange={(e) => setPreferencesForm({...preferencesForm, language: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Currency
                  </label>
                  <select
                    value={preferencesForm.currency}
                    onChange={(e) => setPreferencesForm({...preferencesForm, currency: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={updateLoading}
              className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
            >
              {updateLoading ? 'Saving...' : 'Save Preferences'}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'password' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Change Password</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordForm.current_password}
                  onChange={(e) => setPasswordForm({...passwordForm, current_password: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.new_password}
                  onChange={(e) => setPasswordForm({...passwordForm, new_password: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.confirm_password}
                  onChange={(e) => setPasswordForm({...passwordForm, confirm_password: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={passwordLoading}
              className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
            >
              {passwordLoading ? 'Changing...' : 'Change Password'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
