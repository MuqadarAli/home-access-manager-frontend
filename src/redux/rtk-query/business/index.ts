import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =
//   process.env.ENV === 'development' ? process.env.DEV_URL : process.env.PRO_URL;
const baseUrl = 'http://localhost:3000';
export const businessApi = createApi({
  reducerPath: 'businessApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/business/`,
  }),

  tagTypes: ['business'],

  endpoints: (builder) => ({
    businessApprovalByAdmin: builder.mutation({
      query: (body) => ({
        url: 'approval',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['business'],
    }),

    businessDisableByAdmin: builder.mutation({
      query: (body) => ({
        url: 'disable',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['business'],
    }),

    getPendingBusinessesForCommunity: builder.query({
      query: (community_id) => ({
        url: `pending/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['business'],
    }),

    getApprovedBusinessesForCommunity: builder.query({
      query: (community_id) => ({
        url: `approved/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['business'],
    }),
  }),
});

export const {
  useBusinessApprovalByAdminMutation,
  useBusinessDisableByAdminMutation,
  useGetApprovedBusinessesForCommunityQuery,
  useGetPendingBusinessesForCommunityQuery,
} = businessApi;
