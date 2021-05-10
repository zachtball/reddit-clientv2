import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '@zachtball/reddit-types';

export const userActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
};

export interface UserState {
  name?: string;
  id?: number;
}

const initialState: UserState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUser>) => action.payload,
  },
});

export default userSlice;
