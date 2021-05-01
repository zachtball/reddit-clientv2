import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authenticationSlice from './slices/authenticationSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    authenticated: authenticationSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
