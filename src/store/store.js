import storage from 'redux-persist/lib/storage'

import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import {combineReducers} from "redux";

import { profileSlice } from './profile/profileSlice'
import { messageSlice } from './messages/messageSlice'
import { chatsSlice } from './chats/chatsSlice'



const persistConfig = {
    key: 'root',
    storage
}


const reducer = combineReducers({
    messege: messageSlice.reducer,
    chats: chatsSlice.reducer
  });

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
reducer: {
    profile: profileSlice.reducer,
    messageAndChats: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
}
})

export default store
export let persistor = persistStore(store)