import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const contentApi: any = createApi({
  reducerPath: 'content',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/content/',
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
    getContent: builder.query({
      query: (detail: string) => detail,
    }),
  }),
});

export const { useGetContentQuery } = contentApi;
