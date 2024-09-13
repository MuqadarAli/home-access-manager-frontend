import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  import.meta.env.VITE_ENV === 'development'
    ? import.meta.env.VITE_DEV_URL
    : import.meta.env.VITE_PRO_URL;
//--//
export const meetingApi = createApi({
  reducerPath: 'meetingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/meeting/`,
  }),
  tagTypes: ['meeting'],

  endpoints: (builder) => ({
    addMeeting: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['meeting'],
    }),

    updateMeeting: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['meeting'],
    }),

    getMeeting: builder.query({
      query: (community_id) => ({
        url: `${community_id}`,
        method: 'GET',
      }),
      providesTags: ['meeting'],
    }),

    deleteMeeting: builder.mutation({
      query: (body) => ({
        url: ``,
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: ['meeting'],
    }),
  }),
});

export const {
  useAddMeetingMutation,
  useUpdateMeetingMutation,
  useGetMeetingQuery,
  useDeleteMeetingMutation,
} = meetingApi;
