import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@zachtball/reddit-types';

export const userActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (_, action: { payload: IUser }) => action.payload,
  },
});

const { actions, reducer } = userSlice;
const { setUser } = actions;
export default { actions, reducer, setUser };
