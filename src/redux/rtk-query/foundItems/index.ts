import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =
//   import.meta.env.VITE_ENV === 'development'
//     ? import.meta.env.VITE_DEV_URL
//     : import.meta.env.VITE_PRO_URL;
const baseUrl = 'https://api.homeaccessmanager.com';
export const foundItemApi = createApi({
  reducerPath: 'foundItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/found-item/`,
  }),

  tagTypes: ['foundItem'],

  endpoints: (builder) => ({
    getFoundItemsForCommunity: builder.query({
      query: (community_id) => ({
        url: `${community_id}`,
        method: 'GET',
      }),
      providesTags: ['foundItem'],
    }),

    deleteFoundItem: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['foundItem'],
    }),
  }),
});

export const { useDeleteFoundItemMutation, useGetFoundItemsForCommunityQuery } =
  foundItemApi;
