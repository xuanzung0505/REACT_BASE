import { logout, setCredentials } from '@apps/slices/authSlice'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import {
  fetchBaseQuery
} from '@reduxjs/toolkit/query'
// import { notification } from 'antd'
import { PATH_API } from '@utils/constants'
import {
  clearUserLocalStorage,
  readAccessToken,
  saveAccessToken,
  saveRefreshToken
} from '@utils/localStorage'
// import type { AuthType } from '@globalTypes/globalTypes'
import type { RootState } from '../store'
import { endLoading, startLoading } from '@apps/slices/loadingSlice'

// notification.config({
//   top: 80,
//   duration: 3
// })

// create a new mutex

const baseQueryNotAuth = fetchBaseQuery({
  baseUrl: PATH_API
})

const baseQuery = fetchBaseQuery({
  baseUrl: PATH_API,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = readAccessToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // await mutex.waitForUnlock()
  api.dispatch(startLoading())
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = await baseQuery(args, api, extraOptions)
  api.dispatch(endLoading())
  const { accessToken, refreshToken } = (
    api.getState() as RootState
  ).auth

  if (result.error?.status) {
    switch (result.error.status) {
    case 400:
      // notification.error({
      //   message: 'Bad request'
      // })
      break
    case 401:
      // try to get a new token
      if (accessToken && refreshToken) {
        const refreshResult = await baseQueryNotAuth(
          {
            url: '/auth/refresh-token',
            method: 'POST',
            body: { token: refreshToken }
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          const refreshResultData = refreshResult.data as { accessToken: string, refreshToken: string }
          // reset accessToken in localStorage
          saveAccessToken(refreshResultData.accessToken)
          saveRefreshToken(refreshResultData.refreshToken)

          // reset accessToken in redux
          api.dispatch(setCredentials(refreshResultData))

          // retry the initial queryresult = await baseQuery(args, api, extraOptions)
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
          saveAccessToken('')
          saveRefreshToken('')
          clearUserLocalStorage()
        }
      } else {
        api.dispatch(logout())
      }
      break
    }
  }
  return result
}
export default baseQueryWithReauth
