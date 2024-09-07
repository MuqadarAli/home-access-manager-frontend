import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =
//   import.meta.env.VITE_ENV === 'development'
//     ? import.meta.env.VITE_DEV_URL
//     : import.meta.env.VITE_PRO_URL;
const baseUrl = 'https://api.homeaccessmanager.com';
export const communityLeaderApi = createApi({
  reducerPath: 'communityLeaderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/community-leader/`,
  }),
  tagTypes: ['community-leader'],

  endpoints: (builder) => ({
    addCommunityLeader: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['community-leader'],
    }),

    updateCommunityLeader: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['community-leader'],
    }),

    getCommunityLeader: builder.query({
      query: (community_id) => ({
        url: `/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['community-leader'],
    }),

    deleteCommunityLeader: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['community-leader'],
    }),
  }),
});

export const {
  useAddCommunityLeaderMutation,
  useUpdateCommunityLeaderMutation,
  useGetCommunityLeaderQuery,
  useDeleteCommunityLeaderMutation,
} = communityLeaderApi;
