import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rlyApi = createApi({
  reducerPath: 'rlyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://netology-trainbooking.netoservices.ru/',
  }),
  endpoints: (builder) => ({
    getLastRoutes: builder.query({
      query: () => `routes/last/`,
    }),
    getCitiesByName: builder.query({
      query: (value) => `routes/cities?name=${value}`,
    }),
  }),
});

export const { useGetLastRoutesQuery, useGetCitiesByNameQuery, useLazyGetCitiesByNameQuery } = rlyApi;
