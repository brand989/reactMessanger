import React, { useState, useEffect, useCallback } from 'react';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';
import {useMatch} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../../store/messages/messageSlice'


const Messanger = () => {


    const messages = useSelector((state) => state.message.messageList)
    const dispatch = useDispatch()


    const match = useMatch("/chats/:chatsId")
    const chatsId = match.params.chatsId


    const addMessages = (message) => {
        dispatch(addMessage({message:message, chatsId: chatsId, author: "i am" }))
    };

    
 
    useEffect(() => {
        const lenghtItems = messages.length
        if (messages[lenghtItems - 1].author != "robot") {
            setTimeout(
                () => dispatch(addMessage({message:'я робот', chatsId: chatsId, author: "robot" })), 1000
            )
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