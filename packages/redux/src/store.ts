import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import userSlice from './slices/userSlice';
import authenticationSlice from './slices/authenticationSlice';
import { userApi } from '@zachtball/reddit-api';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authenticationSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
