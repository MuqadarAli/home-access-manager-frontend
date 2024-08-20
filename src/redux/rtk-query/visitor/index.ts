import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =
//   process.env.ENV === 'development' ? process.env.DEV_URL : process.env.PRO_URL;
const baseUrl = 'http://localhost:3000';
export const visitorApi = createApi({
  reducerPath: 'visitorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/visitor/`,
  }),

  tagTypes: ['visitor'],

  endpoints: (builder) => ({
    visitorApprovalByAdmin: builder.mutation({
      query: (body) => ({
        url: 'approval',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['visitor'],
    }),

    visitorDisableByAdmin: builder.mutation({
      query: (body) => ({
        url: 'disable',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['visitor'],
    }),

    getPendingVisitorForCommunity: builder.query({
      query: (community_id) => ({
        url: `pending/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['visitor'],
    }),

    getApprovedVisitorForCommunity: builder.query({
      query: (community_id) => ({
        url: `approved/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['visitor'],
    }),
  }),
});

export const {
  useGetApprovedVisitorForCommunityQuery,
  useGetPendingVisitorForCommunityQuery,
  useVisitorApprovalByAdminMutation,
  useVisitorDisableByAdminMutation,
} = visitorApi;
