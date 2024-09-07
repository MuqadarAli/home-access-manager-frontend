import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const baseUrl =
//   import.meta.env.VITE_ENV === 'development'
//     ? import.meta.env.VITE_DEV_URL
//     : import.meta.env.VITE_PRO_URL;
const baseUrl = 'https://api.homeaccessmanager.com';
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

    verifyToken: builder.mutation({
      query: (token) => ({
        url: 'verify-token',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),

    adminLogin: builder.mutation({
      query: (body) => ({
        url: 'admin-login',
        method: 'POST',
        body: body,
      }),
    }),

    superAdminChangePass: builder.mutation({
      query: (body) => ({
        url: 'super-admin-change-password',
        method: 'PATCH',
        body: body,
      }),
    }),

    adminChangePass: builder.mutation({
      query: (body) => ({
        url: 'admin-change-password',
        method: 'PATCH',
        body: body,
      }),
    }),

    adminForgotPass: builder.mutation({
      query: (body) => ({
        url: 'admin/forgot-password',
        method: 'POST',
        body: body,
      }),
    }),

    adminResetPass: builder.mutation({
      query: (body) => ({
        url: 'admin/reset-password',
        method: 'POST',
        body: body,
      }),
    }),

    superAdminForgotPass: builder.mutation({
      query: (body) => ({
        url: 'super-admin/forgot-password',
        method: 'POST',
        body: body,
      }),
    }),

    superAdminResetPass: builder.mutation({
      query: (body) => ({
        url: 'super-admin/reset-password',
        method: 'POST',
        body: body,
      }),
    }),

    superAdminUpdateProfile: builder.mutation({
      query: (body) => ({
        url: 'super-admin-update-profile',
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
});

export const {
  useSuperAdminLoginMutation,
  useAdminLoginMutation,
  useVerifyTokenMutation,
  useSuperAdminChangePassMutation,
  useAdminChangePassMutation,
  useSuperAdminUpdateProfileMutation,
  useAdminForgotPassMutation,
  useAdminResetPassMutation,
  useSuperAdminForgotPassMutation,
  useSuperAdminResetPassMutation,
} = authApi;
