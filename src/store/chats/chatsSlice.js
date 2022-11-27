import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    chatsList: [{ id: 1, name: 'Lena' }, { id: 2, name: 'Petya' }]
  },
  reducers: {
    addChat: (state, action) => {
        const id = state.chatsList.length + 1
        state.chatsList = [...state.chatsList,{ id: action.payload, name: `New Chat ${action.payload}` }]
    },
    deleteChat: (state, action) => {
        state.chatsList = state.chatsList.filter( item => item.id != action.payload )
    }

  }
})

export const {addChat, deleteChat } = chatsSlice.actions

export default chatsSlice.reducer