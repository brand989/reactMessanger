import React, { useState, useEffect, useCallback } from 'react';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';
import {useMatch} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, writeBotMessage } from '../../store/messages/messageSlice'


const Messanger = () => {


    const messages = useSelector((state) => state.messageAndChats.messege.messageList)
    const dispatch = useDispatch()

    const match = useMatch("/chats/:chatsId")
    const chatsId = match.params.chatsId


    const addMessages = (message) => {
        dispatch(addMessage({message:message, chatsId: chatsId, author: "i am" }))
    };

    
 
    useEffect(() => {
        if(messages.length){
            const lenghtItems = messages.length
            if (messages[lenghtItems - 1].author != "robot") {
            dispatch(writeBotMessage({chatsId, lenghtItems}))
            }
        }
        
    }, [messages])

  

    return (
        <>
            <MessageList messages={messages} />
            <SendMessage addMessages={addMessages} />
        </>
    )

}

export default Messanger;