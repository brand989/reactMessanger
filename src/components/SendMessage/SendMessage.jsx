import React, { useState, useEffect } from 'react';
import Message from '../Message/Message.jsx';



const SendMessage = (props) => {


    return (
            <div className='sendmessage'>
                <input type="text" id="mess" value={props.messageText} onChange={props.writeMessage} ></input>
                <button onClick={props.addMessage}>Ответить</button>
            </div>

    )

}

export default SendMessage;