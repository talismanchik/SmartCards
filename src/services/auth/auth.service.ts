import { LoginArgs, MeResponse, loginResponse } from '@/services/auth/auth.types'
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
    }
  },
})

export const { useGetMeQuery, useLogInMutation } = authService
