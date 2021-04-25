import axios, { AxiosPromise } from 'axios';

const myRedirectUri = 'http://localhost:3000/auth-redirect';

export const getToken = (code: string): AxiosPromise => {
  return axios.post(`/api/user/authenticate`, {
    code,
    redirect_uri: myRedirectUri,
  });
};
