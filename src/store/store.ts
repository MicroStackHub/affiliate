
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import bankReducer from './slices/bankSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    bank: bankReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
