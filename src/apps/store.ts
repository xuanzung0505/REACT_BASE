import { configureStore } from '@reduxjs/toolkit'
import { authServiceApi } from './services/authService'
import { userApi } from './services/userApi'

export const store = configureStore({
  reducer: {
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        userApi.middleware
      )
      .concat(
        authServiceApi.middleware
      )

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
