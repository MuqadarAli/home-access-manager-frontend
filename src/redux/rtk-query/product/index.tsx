import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = import.meta.env.VITE_ENV === 'development'
//   ? import.meta.env.VITE_DEV_URL
//   : import.meta.env.VITE_PRO_URL;
const baseUrl = 'https://api.homeaccessmanager.com';
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/product/`,
  }),

  tagTypes: ['product'],

  endpoints: (builder) => ({
    productApprovalByAdmin: builder.mutation({
      query: (body) => ({
        url: 'approval',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['product'],
    }),

    productDisableByAdmin: builder.mutation({
      query: (body) => ({
        url: 'disable',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['product'],
    }),

    getPendingProductsForCommunity: builder.query({
      query: (community_id) => ({
        url: `pending/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),

    getApprovedProductsForCommunity: builder.query({
      query: (community_id) => ({
        url: `approved/${community_id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
  }),
});

export const {
  useGetApprovedProductsForCommunityQuery,
  useGetPendingProductsForCommunityQuery,
  useProductApprovalByAdminMutation,
  useProductDisableByAdminMutation,
} = productApi;
