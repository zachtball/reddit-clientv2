import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
const { setUser } = userSlice.actions;
export { setUser };
export const reducers = combineReducers({ user: userSlice.reducer });
