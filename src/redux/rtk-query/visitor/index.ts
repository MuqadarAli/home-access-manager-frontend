import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
//--//
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
      query: ({community_id, visitor_type}) => ({
        url: `approved/${community_id}/${visitor_type}`,
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
