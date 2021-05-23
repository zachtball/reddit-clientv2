import userSlice from './slices/userSlice';
import authenticationSlice from './slices/authenticationSlice';
import { useDispatch, useSelector } from './hooks';
import { store, RootState } from './store';

const { setUser } = userSlice.actions;
const { setAuthenticated, setAuthenticationLoading, setToken } = authenticationSlice.actions;

// redux base functionality
export { useDispatch, useSelector, store, RootState };

// actions
export { setUser, setAuthenticated, setAuthenticationLoading, setToken };

//queries
export * from './queries';
