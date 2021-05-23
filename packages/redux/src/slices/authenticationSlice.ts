import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userActionTypes = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_AUTHENTICATION_LOADING: 'SET_AUTHENTICATION_LOADING',
  SET_TOKEN: 'SET_TOKEN',
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState: { authenticated: false, isLoading: true, token: '' },
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setAuthenticationLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default authenticationSlice;
