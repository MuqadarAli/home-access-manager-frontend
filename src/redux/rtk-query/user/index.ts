import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = import.meta.env.VITE_ENV === 'development'
//   ? import.meta.env.VITE_DEV_URL
//   : import.meta.env.VITE_PRO_URL;
const baseUrl = 'https://api.homeaccessmanager.com';
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/user/`,
  }),

  tagTypes: ['user'],

  endpoints: (builder) => ({
    userApprovalByAdmin: builder.mutation({
      query: (body) => ({
        url: 'approval',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['user'],
    }),

    userDisableByAdmin: builder.mutation({
      query: (body) => ({
        url: 'disable',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['user'],
    }),

    getPendingUsersForCommunity: builder.query({
      query: (community_id) => ({
        url: `pending/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),

    getApprovedUsersForCommunity: builder.query({
      query: (community_id) => ({
        url: `approved/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {
  useUserApprovalByAdminMutation,
  useGetApprovedUsersForCommunityQuery,
  useUserDisableByAdminMutation,
  useGetPendingUsersForCommunityQuery,
} = userApi;
