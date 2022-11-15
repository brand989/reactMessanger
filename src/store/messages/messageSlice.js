import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messageList: [{ id: 1, text: 'text25', author: "I\'m", Chatid: 1 }, { id: 2, text: 'text47', author: "robot", Chatid: 1 }]
  },
  reducers: {
    addMessage: (state, action) => {
    const idMessage = state.messageList.length
    state.messageList = [...state.messageList, { id: idMessage, text: action.payload.message, author: action.payload.author, Chatid: action.payload.chatsId }]
    },
    deleteChatsMessage: (state, action) => {
        state.messageList = state.messageList.filter( item => item.Chatid != action.payload)
    },

  }
})

export const {addMessage, deleteChatsMessage} = messageSlice.actions

export default messageSlice.reducer
