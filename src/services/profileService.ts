
const API_BASE_URL = 'https://backend.glst.in/api/account';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token') || localStorage.getItem('authToken');
  console.log("Token form local storage is : ",token);
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

// Helper function to get auth headers for form data
export const getAuthHeadersFormData = () => {
  const token = localStorage.getItem('token') || localStorage.getItem('authToken');
  return {
    'Authorization': `Bearer ${token}`,
  };
};

// Helper function to handle API responses
const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    
    try {
      const errorData = await response.json();
      if (errorData.message) {
        errorMessage = errorData.message;
      } else if (errorData.error) {
        errorMessage = errorData.error;
      }
    } catch (parseError) {
      // If we can't parse the error response, use the status text
      errorMessage = response.statusText || errorMessage;
    }
    
    throw new Error(errorMessage);
  }
  
  return await response.json();
};

export interface ProfileData {
  id: number;
  first_name: string;
  last_name: string;
  gender: string | null;
  profile_image: string | null;
  email: string;
  country: string | null;
  state: string | null;
  city: string | null;
  address1: string | null;
  address2: string | null;
  pin_code: string | null;
  phone_number: string;
  alt_phone_number: string | null;
  member_since: number;
  profile_image_url: string;
  business?: UpdateBusinessDetailsData; // Add business property with proper type
  preferences?: UpdatePreferencesData; // Add preferences property with proper type
}

export interface UpdatePersonalInfoData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender?: string;
  country?: string;
  state?: string;
  city?: string;
  address1?: string;
  address2?: string;
  pin_code?: string;
  alt_phone_number?: string;
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

export interface UpdateProfileImageData {
  profile_image: string; // base64 encoded image
}

export interface ChangePasswordData {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

// API Service Functions
export const profileService = {
  // Get user profile
  getUserProfile: async (): Promise<ProfileData> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      const result = await handleApiResponse(response);
      return result.data;
    } catch (error) {
      throw new Error(`Failed to fetch profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Update personal information
  updatePersonalInfo: async (data: UpdatePersonalInfoData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/update`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data.personal;
    } catch (error) {
      throw new Error(`Failed to update personal info: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Update business details
  updateBusinessDetails: async (data: UpdateBusinessDetailsData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/business`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data.business;
    } catch (error) {
      throw new Error(`Failed to update business details: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Update preferences
  updatePreferences: async (data: UpdatePreferencesData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/preferences`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data.preferences;
    } catch (error) {
      throw new Error(`Failed to update preferences: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Update profile image
  updateProfileImage: async (data: UpdateProfileImageData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/image`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data;
    } catch (error) {
      throw new Error(`Failed to update profile image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Change password
  changePassword: async (data: ChangePasswordData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/change-password`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data;
    } catch (error) {
      throw new Error(`Failed to change password: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Update general profile (combined endpoint)
  updateProfile: async (data: any): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/account/profile/update`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      const result = await handleApiResponse(response);
      return result.data;
    } catch (error) {
      throw new Error(`Failed to update profile: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },
};
