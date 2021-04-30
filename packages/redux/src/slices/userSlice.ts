import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '@zachtball/reddit-types';

export const userActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
};

interface IinitialState {
  name?: string;
  id?: number;
  username?: string;
}

const initialState: IinitialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: { payload: IUser }) => action.payload,
  },
});

const { actions, reducer } = userSlice;
const { setUser } = actions;
export default { actions, reducer, setUser };
