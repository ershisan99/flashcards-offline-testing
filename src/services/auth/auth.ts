import { flashcardsApi } from '../base.ts'

import { LogoutArgs, User } from './types'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<User, void>({
      query: () => ({
        url: `v1/auth/me`,
      }),
      providesTags: ['me'],
    }),
    login: builder.mutation<void, LogoutArgs>({
      query: body => ({
        url: 'v1/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['me'],
    }),
  }),
})

export const { useMeQuery, useLoginMutation } = authApi
