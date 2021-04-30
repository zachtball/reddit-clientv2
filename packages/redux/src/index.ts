import userSlice from './slices/userSlice';
import authenticationSlice from './slices/authenticationSlice';
import { useDispatch, useSelector } from './hooks';
import { store } from './store';

const { setUser } = userSlice.actions;
const { setAuthenticated } = authenticationSlice.actions;

// redux base functionality
export { useDispatch, useSelector, store };

// actions
export { setUser, setAuthenticated };
