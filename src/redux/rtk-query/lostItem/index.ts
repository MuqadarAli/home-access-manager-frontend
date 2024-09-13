import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
//--//
export const lostItemApi = createApi({
  reducerPath: 'lostItemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/lost-item/`,
  }),

  tagTypes: ['lostItem'],

  endpoints: (builder) => ({
    getLostItemsForCommunity: builder.query({
      query: (community_id) => ({
        url: `${community_id}`,
        method: 'GET',
      }),
      providesTags: ['lostItem'],
    }),

    deleteLostItem: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['lostItem'],
    }),
  }),
});

export const { useGetLostItemsForCommunityQuery, useDeleteLostItemMutation } =
  lostItemApi;
