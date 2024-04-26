import { BASE_URL } from '@/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    headers.set('User-Agent', 'request');
    return headers;
  }
});

export const apiService = createApi({
  baseQuery,
  tagTypes: ['GET_POST_ENGAGEMENTS'],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({})
});
