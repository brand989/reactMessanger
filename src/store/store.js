import { configureStore } from '@reduxjs/toolkit'
import { profileSlice } from './profile/profileSlice'
import { messageSlice } from './messages/messageSlice'
import { chatsSlice } from './chats/chatsSlice'

export default configureStore({
reducer: {
    profile: profileSlice.reducer,
    message: messageSlice.reducer,
    chats: chatsSlice.reducer,
}
})

