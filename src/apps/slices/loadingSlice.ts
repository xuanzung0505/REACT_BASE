import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState: {
    loading: false
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    endLoading: (state) => {
      state.loading = false
    }
  }
})

export const { startLoading, endLoading } = loadingSlice.actions
export default loadingSlice.reducer
