// import baseQueryWithReauth from '@apps/config/baseQueryWithReauth'
import baseQueryWithReauth from '@apps/config/baseQuery'
// import { statusCodeEnum } from '@enums/statusCodeEnum'
import type { ResponseType } from '@globalTypes/globalTypes'
import { createApi } from '@reduxjs/toolkit/query/react'
// import { notification } from 'antd'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['userApi'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: 'users',
        method: 'GET',
        params
      }),
      transformResponse: (response: ResponseType<any>) => {
        return {
          data: response.data,
          pagination: response.pagination
        }
      },
      providesTags: ['userApi']
    }),
    getDetail: build.query({
      query: (id: string) => ({
        url: `users/${id}`,
        method: 'GET'
      }),
      transformResponse: (response: ResponseType<any>) => {
        return response.data
      },
      providesTags: ['userApi']
    })
    // updateUser: build.mutation({
    //   query: (payload) => ({
    //     url: `users/${payload.id}`,
    //     method: 'PUT',
    //     body: payload
    //   }),
    //   transformResponse: (response: ResponseType<any>) => {
    //     if (response.statusCode === statusCodeEnum.SUCCESS) {
    //       // notification.success({
    //       //   message: 'Lưu thay đổi thành công!'
    //       // })
    //     }

    //     return response
    //   }
    // })
  })
})

export const {
  useGetUsersQuery, useGetDetailQuery
  // useUpdateUserMutation
} =
  userApi
