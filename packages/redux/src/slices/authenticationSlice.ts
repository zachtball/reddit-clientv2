import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userActionTypes = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_AUTHENTICATION_LOADING: 'SET_AUTHENTICATION_LOADING',
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: { authenticated: false, isLoading: false },
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setAuthenticationLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer } = authenticationSlice;
export default { actions, reducer };
