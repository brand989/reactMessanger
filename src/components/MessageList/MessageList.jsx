import React from 'react';
import Message from '../Message/Message.jsx';

import {useMatch} from "react-router-dom";




const MessageList = (props) => {

    const match = useMatch("/chats/:chatsId")
    const chatsId = match.params.chatsId

    return (

        <div className='messages'>
            {props.messages.map((item, index) => (
                item.Chatid == chatsId && <Message text={item.text} author={item.author} key={index}/>   
            ))}
        </div>

    )

}

export default MessageList;

