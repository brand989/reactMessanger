import React, { useState, useEffect } from 'react';
import '../App.scss'
import ChatsList from './Chatslist/Chatslist';
import MessageList from './MessageList/MessageList';
import SendMessage from './SendMessage/SendMessage';

import CssBaseline from '@material-ui/core/CssBaseline'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import Switch from '@mui/material/Switch';
import { useTheme } from '@material-ui/core/styles';
import lightTheme, { darkTheme } from './theme.js'; 
import Box from '@mui/material/Box';



const App = () => {

    

    const theme = useTheme();


    const [items, setItems] = useState([{ id: 1, text: 'text3', author: "I\'m" }, { id: 2, text: 'text4', author: "robot" }]);
    const [chats, setChats] = useState([{ id: 1, name: 'Lena' }, { id: 2, name: 'Petya' }])
    const [checked, setChecked] = React.useState(false);
    const [newtheme, setTheme] = React.useState(false); 

    const changeTheme = () => { 
        setTheme(!newtheme); 
        setChecked(!checked); 
    } 

    const appliedTheme =  createMuiTheme(newtheme ? darkTheme : lightTheme)

    const addMessage = (message) => {
        const idMessage = items.length
        setItems([...items, { id: idMessage, text: message, author: "I\'m" }])

    };


    useEffect(() => {
        const lenghtItems = items.length

        if (items[lenghtItems - 1].author != "robot") {
            const idMessage = items.length
            setTimeout(
                () => setItems([...items, { id: idMessage, text: "я бот пока", author: "robot" }]), 1000
            )
        }

    }, [items])


    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline /> 
            <Switch
                onChange={changeTheme}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <Box className="main" color='primary'>
                <ChatsList chats={chats} />
                <MessageList messages={items} />
                <SendMessage addMessage={addMessage} />
            </Box>
        </ThemeProvider>
    )
};


export default App;