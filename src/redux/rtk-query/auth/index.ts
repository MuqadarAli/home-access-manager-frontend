import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  process.env.ENV === 'development' ? process.env.DEV_URL : process.env.PRO_URL;
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth/`,
  }),

  endpoints: (builder) => ({
    superAdminLogin: builder.mutation({
      query: (body) => ({
        url: 'super-admin-login',
        method: 'POST',
        body: body,
      }),
    }),
    adminLogin: builder.mutation({
      query: (body) => ({
        url: 'admin-login',
        method: 'POST',
        body: body,
      }),
    }),
    verifyToken: builder.mutation({
      query: (token) => ({
        url: 'verify-token',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    communityRegistration: builder.mutation({
      query: (body) => ({
        url: 'register-community',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useSuperAdminLoginMutation,
  useAdminLoginMutation,
  useVerifyTokenMutation,
  useCommunityRegistrationMutation,
} = authApi;
