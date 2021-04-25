import axios from 'axios';

export const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const httpInit = (token: string): void => {
  http.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });
};

export default http;
