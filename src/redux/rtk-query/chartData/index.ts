import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
//--//
export const chartDataApi = createApi({
  reducerPath: 'chartDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/chart-data/`,
  }),

  endpoints: (builder) => ({
    getChartCardDataForCommunity: builder.query({
      query: (community_id) => ({
        url: `card-data/${community_id}`,
        method: 'GET',
      }),
    }),
    getChartCardDatForSAdmin: builder.query({
      query: () => ({
        url: `super-admin/card-data`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetChartCardDataForCommunityQuery,
  useGetChartCardDatForSAdminQuery,
} = chartDataApi;
