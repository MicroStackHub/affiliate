
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { 
  bankService,
  type BankAccount,
  type BankListResponse,
  type AddBankAccountData,
  type EditBankAccountData,
  type SetDefaultBankData,
  type DeleteBankAccountData
} from '../../services/bankService';

interface BankState {
  accounts: BankAccount[];
  loading: boolean;
  addLoading: boolean;
  editLoading: boolean;
  deleteLoading: boolean;
  setDefaultLoading: boolean;
  error: string | null;
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  } | null;
}

const initialState: BankState = {
  accounts: [],
  loading: false,
  addLoading: false,
  editLoading: false,
  deleteLoading: false,
  setDefaultLoading: false,
  error: null,
  pagination: null,
};

// Async thunks for API calls
export const fetchBankAccounts = createAsyncThunk(
  'bank/fetchBankAccounts',
  async (page: number = 1, { rejectWithValue }) => {
    try {
      const response = await bankService.getBankAccounts(page);
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch bank accounts');
    }
  }
);

export const addBankAccount = createAsyncThunk(
  'bank/addBankAccount',
  async (data: AddBankAccountData, { rejectWithValue, dispatch }) => {
    try {
      const result = await bankService.addBankAccount(data);
      // Refetch the bank accounts to get updated list
      dispatch(fetchBankAccounts(1));
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to add bank account');
    }
  }
);

export const editBankAccount = createAsyncThunk(
  'bank/editBankAccount',
  async (data: EditBankAccountData, { rejectWithValue, dispatch }) => {
    try {
      const result = await bankService.editBankAccount(data);
      // Refetch the bank accounts to get updated list
      dispatch(fetchBankAccounts(1));
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to edit bank account');
    }
  }
);

export const setDefaultBankAccount = createAsyncThunk(
  'bank/setDefaultBankAccount',
  async (data: SetDefaultBankData, { rejectWithValue, dispatch }) => {
    try {
      const result = await bankService.setDefaultBank(data);
      // Refetch the bank accounts to get updated list
      dispatch(fetchBankAccounts(1));
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to set default bank account');
    }
  }
);

export const deleteBankAccount = createAsyncThunk(
  'bank/deleteBankAccount',
  async (data: DeleteBankAccountData, { rejectWithValue, dispatch }) => {
    try {
      const result = await bankService.deleteBankAccount(data);
      // Refetch the bank accounts to get updated list
      dispatch(fetchBankAccounts(1));
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to delete bank account');
    }
  }
);

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch bank accounts
    builder
      .addCase(fetchBankAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBankAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload.data.data;
        state.pagination = {
          current_page: action.payload.data.current_page,
          last_page: action.payload.data.last_page,
          per_page: action.payload.data.per_page,
          total: action.payload.data.total,
          from: action.payload.data.from,
          to: action.payload.data.to,
        };
        state.error = null;
      })
      .addCase(fetchBankAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Add bank account
    builder
      .addCase(addBankAccount.pending, (state) => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(addBankAccount.fulfilled, (state) => {
        state.addLoading = false;
        state.error = null;
      })
      .addCase(addBankAccount.rejected, (state, action) => {
        state.addLoading = false;
        state.error = action.payload as string;
      });

    // Edit bank account
    builder
      .addCase(editBankAccount.pending, (state) => {
        state.editLoading = true;
        state.error = null;
      })
      .addCase(editBankAccount.fulfilled, (state) => {
        state.editLoading = false;
        state.error = null;
      })
      .addCase(editBankAccount.rejected, (state, action) => {
        state.editLoading = false;
        state.error = action.payload as string;
      });

    // Set default bank account
    builder
      .addCase(setDefaultBankAccount.pending, (state) => {
        state.setDefaultLoading = true;
        state.error = null;
      })
      .addCase(setDefaultBankAccount.fulfilled, (state) => {
        state.setDefaultLoading = false;
        state.error = null;
      })
      .addCase(setDefaultBankAccount.rejected, (state, action) => {
        state.setDefaultLoading = false;
        state.error = action.payload as string;
      });

    // Delete bank account
    builder
      .addCase(deleteBankAccount.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
      })
      .addCase(deleteBankAccount.fulfilled, (state) => {
        state.deleteLoading = false;
        state.error = null;
      })
      .addCase(deleteBankAccount.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setLoading } = bankSlice.actions;
export default bankSlice.reducer;
