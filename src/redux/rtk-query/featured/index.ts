import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
// const baseUrl = 'https://api.homeaccessmanager.com';
export const featuredApi = createApi({
  reducerPath: 'featuredApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/featured/`,
  }),
  tagTypes: ['featured'],

  endpoints: (builder) => ({
    addFeatured: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['featured'],
    }),

    updateFeatured: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['featured'],
    }),

    getFeatured: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['featured'],
    }),

    deleteFeatured: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['featured'],
    }),
  }),
});

export const {
  useAddFeaturedMutation,
  useUpdateFeaturedMutation,
  useGetFeaturedQuery,
  useDeleteFeaturedMutation,
} = featuredApi;
