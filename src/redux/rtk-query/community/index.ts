import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  process.env.ENV === 'development' ? process.env.DEV_URL : process.env.PRO_URL;
export const communityApi = createApi({
  reducerPath: 'communityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/community/`,
  }),

  endpoints: (builder) => ({
    communityApproval: builder.mutation({
      query: (body) => ({
        url: 'approve-community',
        method: 'POST',
        body: body,
      }),
    }),

    
  }),
});

export const {
useCommunityApprovalMutation
} = communityApi;
