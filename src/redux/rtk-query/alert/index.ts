import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
// const baseUrl = 'https://api.homeaccessmanager.com';
export const alertApi = createApi({
  reducerPath: 'alertApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/alert/`,
  }),
  tagTypes: ['alert'],

  endpoints: (builder) => ({
    getAlertsForCommunity: builder.query({
      query: (community_id) => ({
        url: `${community_id}`,
        method: 'GET',
      }),
      providesTags: ['alert'],
    }),

    deleteAlert: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['alert'],
    }),
  }),
});

export const { useGetAlertsForCommunityQuery, useDeleteAlertMutation } =
  alertApi;
