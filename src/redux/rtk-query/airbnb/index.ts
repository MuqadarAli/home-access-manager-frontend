import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
export const airbnbApi = createApi({
  reducerPath: 'airbnbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/airbnb/`,
  }),

  tagTypes: ['airbnb'],

  endpoints: (builder) => ({
    airbnbApprovalByAdmin: builder.mutation({
      query: (body) => ({
        url: 'approval',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['airbnb'],
    }),

    airbnbDisableByAdmin: builder.mutation({
      query: (body) => ({
        url: 'disable',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['airbnb'],
    }),

    getPendingAirbnbForCommunity: builder.query({
      query: (community_id) => ({
        url: `pending/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['airbnb'],
    }),

    getApprovedAirbnbForCommunity: builder.query({
      query: (community_id) => ({
        url: `approved/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['airbnb'],
    }),
  }),
});

export const {
  useAirbnbApprovalByAdminMutation,
  useAirbnbDisableByAdminMutation,
  useGetApprovedAirbnbForCommunityQuery,
  useGetPendingAirbnbForCommunityQuery,
} = airbnbApi;
