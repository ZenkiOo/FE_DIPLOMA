import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rlyApi = createApi({
  reducerPath: 'rlyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://netology-trainbooking.netoservices.ru/',
  }),
  endpoints: (builder) => ({
    getCitiesByName: builder.query({
      query: (value) => `routes/cities?name=${value}`,
    }),
    getLastRoutes: builder.query({
      query: () => `routes/last/`,
    }),
    getRoutes: builder.query({
      query: (params) => `routes?${params}`,
    }),
    // getRoute: builder.query({
    //   query: (id) => `routes/${ id }/seats?${params}`,
    // }),
    getRoute: builder.query({
      query: (id) => `routes/${id}/seats`,
    }),
  }),
});

export const {
  useLazyGetCitiesByNameQuery,
  useGetLastRoutesQuery,
  useGetRoutesQuery,
  useLazyGetRouteQuery,
  useGetRouteQuery
} = rlyApi;
