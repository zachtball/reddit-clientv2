import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userApi: any = createApi({
  reducerPath: 'user2',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/user/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  endpoints: (builder: any) => ({
    getMy: builder.query({
      query: (detail: string) => detail,
    }),
  }),
});

const { useGetMyQuery } = userApi;

export { useGetMyQuery };
