import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    showName: true,
    name: 'author'
  },
  reducers: {
    toggleShowName: (state) => {
      state.showName = !state.showName
    },
    
  },
})

export const { toggleShowName } = profileSlice.actions

export default profileSlice.reducer
