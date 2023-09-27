import { authServiceApi } from '@apps/services/authService'
import type { AuthType } from '@globalTypes/globalTypes'
import type { userType } from '@globalTypes/userType'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import { googleLogout } from '@react-oauth/google'
// import { notification } from 'antd'

import {
  clearUserLocalStorage,
  readAccessToken,
  readRefreshToken,
  readUserLocalStorage,
  saveAccessToken,
  saveRefreshToken,
  saveUserLocalStorage
} from '@utils/localStorage'

const authSliceReducer = createSlice({
  name: 'auth',
  initialState: {
    user: readUserLocalStorage(),
    accessToken: readAccessToken(),
    refreshToken: readRefreshToken()
  } satisfies AuthType,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { accessToken, refreshToken }
      }: PayloadAction<{ accessToken?: string, refreshToken?: string }>
    ) => {
      if (accessToken) {
        state.accessToken = accessToken
      }
      if (refreshToken) {
        state.refreshToken = refreshToken
      }
    },
    logout: (state) => {
      // googleLogout()
      state.user = null
      state.accessToken = null
      state.refreshToken = null
      clearUserLocalStorage()
      saveAccessToken('')
      saveRefreshToken('')
      // notification.success({
      //   message: 'Logout successfully!'
      // })
    }
  },

  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    builder.addMatcher(
      authServiceApi.endpoints.authLogin.matchFulfilled,
      (state, { payload }: { payload: { data: { accessToken: string, refreshToken: string } } }) => {
        saveAccessToken(payload.data.accessToken)
        saveRefreshToken(payload.data.refreshToken)
        saveUserLocalStorage(payload.data as userType)
        state.user = payload.data as userType
      }
    )
  }
})
export const { setCredentials, logout } = authSliceReducer.actions
export default authSliceReducer.reducer
