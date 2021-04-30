import { createSlice } from '@reduxjs/toolkit';

export const userActionTypes = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
};

const authenticationSlice = createSlice({
  name: 'authenticated',
  initialState: false,
  reducers: {
    setAuthenticated: (_, action: { payload: boolean }) => action.payload,
  },
});

const { actions, reducer } = authenticationSlice;
const { setAuthenticated } = actions;
export default { actions, reducer, setAuthenticated };
