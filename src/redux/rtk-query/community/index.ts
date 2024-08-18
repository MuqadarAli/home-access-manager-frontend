import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =
//   process.env.ENV === 'development' ? process.env.DEV_URL : process.env.PRO_URL;
const baseUrl = 'http://localhost:3000';
export const communityApi = createApi({
  reducerPath: 'communityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/community/`,
  }),

  tagTypes: ['community'],

  endpoints: (builder) => ({
    communityApproval: builder.mutation({
      query: (body) => ({
        url: 'approve-community',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['community'],
    }),

    communityRegistration: builder.mutation({
      query: (body) => ({
        url: 'register-community',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['community'],
    }),

    communityDisable: builder.mutation({
      query: (body) => ({
        url: 'disable-community',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['community'],
    }),

    getPendingCommunity: builder.query({
      query: () => ({
        url: '/pending-community',
        method: 'GET',
      }),
      providesTags: ['community'],
    }),

    getCommunityType: builder.query({
      query: () => ({
        url: '/community-types',
        method: 'GET',
      }),
      providesTags: ['community'],
    }),

    getApprovedCommunity: builder.query({
      query: () => ({
        url: '/approved-community',
        method: 'GET',
      }),
      providesTags: ['community'],
    }),
  }),
});

export const {
  useCommunityApprovalMutation,
  useCommunityRegistrationMutation,
  useGetApprovedCommunityQuery,
  useGetPendingCommunityQuery,
  useCommunityDisableMutation,
  useGetCommunityTypeQuery,
} = communityApi;
