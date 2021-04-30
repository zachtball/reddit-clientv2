import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
import authenticationSlice from './slices/authenticationSlice';

const reducers = combineReducers({ user: userSlice.reducer, authenticated: authenticationSlice.reducer });

export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
