import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const writeBotMessage = createAsyncThunk(
  'writeBotMessage',
  async function({chatsId,lenghtItems},thunkApi){
    const promise = await new Promise((resolve) => { setTimeout(() => {
            const data = {id:lenghtItems, text:'я робот', Chatid: chatsId, author: "robot" }
            resolve(data)
            }, 1000
          )
          })  
      return promise   
  }
)


export const messageSlice = createSlice({
  name: 'message',

  initialState: {
    messageList: [],
    err:false
  },
  reducers: {
    addMessage: (state, action) => {
    const idMessage = state.messageList.length
    state.messageList = [...state.messageList, { id: idMessage, text: action.payload.message, author: action.payload.author, Chatid: action.payload.chatsId }]
    },
    deleteChatsMessage: (state, action) => {
        state.messageList = state.messageList.filter( item => item.Chatid != action.payload)
    },

  },
  extraReducers:{
      [writeBotMessage.fulfilled]:(state,action)=>{
        state.messageList = [...state.messageList, action.payload]
      },

      [writeBotMessage.rejected]:(state)=>{
          state.err = true
      }
  }
})

export const {addMessage, deleteChatsMessage} = messageSlice.actions

export default messageSlice.reducer
