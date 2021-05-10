import http from './http';
import { AxiosPromise } from 'axios';

export const getMe = (): AxiosPromise => {
  return http.get('api/user/me');
};

export const getMySubreddits = (): AxiosPromise => {
  return http.get('api/user/subreddits');
};
