import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const SendMessage = (props) => {

    const [message, setMessage] = useState('');

    const changeMessage = (event) =>{
        setMessage(event.target.value)
       
    }

    const sendMessage = (event) => {
        event.preventDefault()
        props.addMessages(message)
        setMessage('')

    }

    return (
            <form className='sendmessage' onSubmit={sendMessage} >
                <TextField id="standard-basic" label="Введите сообщение"  inputRef={(input) => input?.focus()} variant="standard" value={message} onChange={changeMessage}/>
                <Button type="submit" variant="contained">Отправить</Button>
            </form>
    )

}

export default SendMessage;