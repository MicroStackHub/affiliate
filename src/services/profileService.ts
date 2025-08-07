
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token') || localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

// Helper function to get auth headers for form data
const getAuthHeadersFormData = () => {
  const token = localStorage.getItem('token') || localStorage.getItem('authToken');
  return {
    'Authorization': `Bearer ${token}`,
  };
};

export interface ProfileData {
  id: string;
  personal: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    profile_image?: string;
    date_joined: string;
    last_login: string;
  };
  business: {
    company_name: string;
    website: string;
    tax_id: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    industry: string;
    company_size: string;
  };
  preferences: {
    language: string;
    timezone: string;
    currency: string;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
    theme: string;
    dashboard_widgets: string[];
  };
  affiliate: {
    status: string;
    level: string;
    commission_rate: number;
    referral_code: string;
    default_link: string;
    total_earnings: number;
    total_referrals: number;
  };
}

export interface UpdatePersonalInfoData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  profile_image?: string;
}

export interface UpdateBusinessDetailsData {
  company_name: string;
  website: string;
  tax_id: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  industry: string;
  company_size: string;
}

export interface UpdatePreferencesData {
  language: string;
  timezone: string;
  currency: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  theme: string;
  dashboard_widgets: string[];
}

export interface ChangePasswordData {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

export interface UpdateProfileImageData {
  profile_image: string; // base64 encoded image
}

// API Service Functions
export const profileService = {
  // Get user profile
  getUserProfile: async (): Promise<ProfileData> => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data.profile;
  },

  // Update personal information
  updatePersonalInfo: async (data: UpdatePersonalInfoData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/profile/personal`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update personal info: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data.personal;
  },

  // Update business details
  updateBusinessDetails: async (data: UpdateBusinessDetailsData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/profile/business`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update business details: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data.business;
  },

  // Update preferences
  updatePreferences: async (data: UpdatePreferencesData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/profile/preferences`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update preferences: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data.preferences;
  },

  // Update profile image
  updateProfileImage: async (data: UpdateProfileImageData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/profile/image`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update profile image: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  },

  // Change password
  changePassword: async (data: ChangePasswordData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/account/profile/change-password`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to change password: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  },

  // Update general profile (combined endpoint)
  updateProfile: async (data: any): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/account/profile/update`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update profile: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  },
};
