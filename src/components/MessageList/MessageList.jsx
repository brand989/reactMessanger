import React, { useState } from 'react';
import Message from '../Message/Message.jsx';



const MessageList = (props) => {


    return (

        <div className='messages'>
            {props.messages.map((item, index) => (
                <><Message text={item.text} author={item.author} key={index}/></>
                
            ))}

        </div>

    )

}

export default MessageList;

