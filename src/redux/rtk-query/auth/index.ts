import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = import.meta.env.VITE_ENV === 'development' 
//   ? import.meta.env.VITE_DEV_URL 
//   : import.meta.env.VITE_PRO_URL;
const baseUrl = 'http://localhost:3000'
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

  }),
});

export const {
  useSuperAdminLoginMutation,
  useAdminLoginMutation,
  useVerifyTokenMutation,
} = authApi;
