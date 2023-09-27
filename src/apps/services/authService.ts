import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReauth from '@apps/config/baseQuery'
import type { ResponseType } from '@globalTypes/globalTypes'

export const authServiceApi = createApi({
  reducerPath: 'authServiceApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['authServiceApi'],
  endpoints: (build) => ({
    authLogin: build.mutation({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload
      }),
      transformResponse: (response: ResponseType<any>) => {
        return {
          data: response.data,
          pagination: response.pagination
        }
      }
    })
  })
})

export const { useAuthLoginMutation } = authServiceApi
