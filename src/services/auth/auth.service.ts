import {
  CreateNewPasswordArgs,
  LoginArgs,
  MeResponse,
  RecoverPasswordArgs,
  SignUpArgs,
  SignUpResponse,
  UpdateProfileArgs,
  loginResponse,
} from '@/services/auth/auth.types'
import { baseApi } from '@/services/baseApi'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createNewPassword: builder.mutation<void, CreateNewPasswordArgs>({
        query: ({ token, ...args }) => ({
          body: args,
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
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
      recoverPassword: builder.mutation<void, RecoverPasswordArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/auth/recover-password',
        }),
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/auth/sign-up',
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

export const {
  useCreateNewPasswordMutation,
  useGetMeQuery,
  useLogInMutation,
  useLogOutMutation,
  useRecoverPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authService
