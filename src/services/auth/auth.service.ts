import { LoginArgs, MeResponse, UpdateProfileArgs, loginResponse } from '@/services/auth/auth.types'
import { baseApi } from '@/services/baseApi'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<MeResponse, void>({
        providesTags: ['Me'],
        query: () => ({
          url: 'v1/auth/me',
        }),
      }),
      logIn: builder.mutation<loginResponse, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/auth/login',
        }),
      }),
      logOut: builder.mutation<loginResponse, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: 'v1/auth/logout',
        }),
      }),
      updateProfile: builder.mutation<MeResponse, UpdateProfileArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'PATCH',
          url: 'v1/auth/me',
        }),
      }),
    }
  },
})

export const { useGetMeQuery, useLogInMutation, useLogOutMutation, useUpdateProfileMutation } =
  authService
