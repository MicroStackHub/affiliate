
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { 
  profileService, 
  type ProfileData, 
  type UpdatePersonalInfoData, 
  type UpdateBusinessDetailsData, 
  type UpdatePreferencesData,
  type UpdateProfileImageData,
  type ChangePasswordData
} from '../../services/profileService';

interface User {
  id: number;
  name: string;
  email: string;
  profileImage?: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  gender?: string;
  country?: string;
  state?: string;
  city?: string;
  address1?: string;
  address2?: string;
  pin_code?: string;
  alt_phone_number?: string;
  member_since: number;
  profile_image_url: string;
  business?: any; // Add business property
  preferences?: any; // Add preferences property
}

interface ProfileState {
  user: User | null;
  profileData: ProfileData | null;
  loading: boolean;
  error: string | null;
  updateLoading: boolean;
  passwordLoading: boolean;
  imageLoading: boolean;
}

const initialState: ProfileState = {
  user: null,
  profileData: null,
  loading: false,
  error: null,
  updateLoading: false,
  passwordLoading: false,
  imageLoading: false,
};

// Async thunks for API calls
export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const profileData = await profileService.getUserProfile();
      return profileData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch profile');
    }
  }
);

export const updatePersonalInfo = createAsyncThunk(
  'profile/updatePersonalInfo',
  async (data: UpdatePersonalInfoData, { rejectWithValue }) => {
    try {
      const updatedData = await profileService.updatePersonalInfo(data);
      return updatedData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update personal info');
    }
  }
);

export const updateBusinessDetails = createAsyncThunk(
  'profile/updateBusinessDetails',
  async (data: UpdateBusinessDetailsData, { rejectWithValue }) => {
    try {
      const updatedData = await profileService.updateBusinessDetails(data);
      return updatedData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update business details');
    }
  }
);

export const updatePreferences = createAsyncThunk(
  'profile/updatePreferences',
  async (data: UpdatePreferencesData, { rejectWithValue }) => {
    try {
      const updatedData = await profileService.updatePreferences(data);
      return updatedData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update preferences');
    }
  }
);

export const updateProfileImage = createAsyncThunk(
  'profile/updateProfileImage',
  async (data: UpdateProfileImageData, { rejectWithValue }) => {
    try {
      const result = await profileService.updateProfileImage(data);
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update profile image');
    }
  }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (data: ChangePasswordData, { rejectWithValue }) => {
    try {
      const result = await profileService.changePassword(data);
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to change password');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data: any, { rejectWithValue }) => {
    try {
      const result = await profileService.updateProfile(data);
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update profile');
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.profileData = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch user profile
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
        state.user = {
          id: action.payload.id,
          name: `${action.payload.first_name} ${action.payload.last_name}`,
          email: action.payload.email,
          profileImage: action.payload.profile_image || undefined,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          phone_number: action.payload.phone_number,
          gender: action.payload.gender || undefined,

          country: action.payload.country || undefined,
          state: action.payload.state || undefined,
          city: action.payload.city || undefined,
          address1: action.payload.address1 || undefined,
          address2: action.payload.address2 || undefined,
          pin_code: action.payload.pin_code || undefined,
          alt_phone_number: action.payload.alt_phone_number || undefined,
          member_since: action.payload.member_since,
          profile_image_url: action.payload.profile_image_url,
        };
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Update personal info
    builder
      .addCase(updatePersonalInfo.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updatePersonalInfo.fulfilled, (state, action) => {
        state.updateLoading = false;
        if (state.profileData) {
          // Update the profile data with new values
          Object.assign(state.profileData, action.payload);
          if (state.user) {
            state.user = {
              ...state.user,
              name: `${action.payload.first_name} ${action.payload.last_name}`,
              email: action.payload.email,
              profileImage: action.payload.profile_image,
              first_name: action.payload.first_name,
              last_name: action.payload.last_name,
              phone_number: action.payload.phone_number,
              gender: action.payload.gender,
              country: action.payload.country,
              state: action.payload.state,
              city: action.payload.city,
              address1: action.payload.address1,
              address2: action.payload.address2,
              pin_code: action.payload.pin_code,
              alt_phone_number: action.payload.alt_phone_number,
            };
          }
        }
        state.error = null;
      })
      .addCase(updatePersonalInfo.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload as string;
      });

    // Update business details
    builder
      .addCase(updateBusinessDetails.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateBusinessDetails.fulfilled, (state, action) => {
        state.updateLoading = false;
        if (state.profileData && action.payload) {
          state.profileData.business = action.payload;
          if (state.user) {
            state.user = {
              ...state.user,
              business: action.payload,
            };
          }
        }
        state.error = null;
      })
      .addCase(updateBusinessDetails.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload as string;
      });

    // Update preferences
    builder
      .addCase(updatePreferences.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updatePreferences.fulfilled, (state, action) => {
        state.updateLoading = false;
        if (state.profileData && action.payload) {
          state.profileData.preferences = action.payload;
          if (state.user) {
            state.user = {
              ...state.user,
              preferences: action.payload,
            };
          }
        }
        state.error = null;
      })
      .addCase(updatePreferences.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload as string;
      });

    // Update profile image
    builder
      .addCase(updateProfileImage.pending, (state) => {
        state.imageLoading = true;
        state.error = null;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.imageLoading = false;
        if (state.profileData && action.payload.profile_image) {
          state.profileData.profile_image = action.payload.profile_image;
          state.profileData.profile_image_url = action.payload.profile_image_url || action.payload.profile_image;
          if (state.user) {
            state.user = {
              ...state.user,
              profileImage: action.payload.profile_image,
              profile_image_url: action.payload.profile_image_url || action.payload.profile_image,
            };
          }
        }
        state.error = null;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.imageLoading = false;
        state.error = action.payload as string;
      });

    // Change password
    builder
      .addCase(changePassword.pending, (state) => {
        state.passwordLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.passwordLoading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.passwordLoading = false;
        state.error = action.payload as string;
      });

    // Update profile (general)
    builder
      .addCase(updateProfile.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updateLoading = false;
        state.error = null;
        // Handle successful profile update
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setLoading,
  setUser,
  setError,
  clearError,
  clearUser,
} = profileSlice.actions;

export default profileSlice.reducer;
