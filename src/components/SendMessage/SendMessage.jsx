import React, { useState, useEffect } from 'react';
import Message from '../Message/Message.jsx';
import TextField from '@mui/material/TextField';



const SendMessage = (props) => {

    const [focus, setFocus] = useState(true);

    const sendMessage = () => {
        console.log(focus)
        setFocus(true)
        props.addMessage()
        
    } 

    return (
            <div className='sendmessage'>
                <TextField id="standard-basic" label="Введите сообщение"    focused variant="standard" value={props.messageText} onChange={props.writeMessage}/>
                <button onClick={sendMessage}>Ответить</button>
            </div>

    )

}

export default SendMessage;