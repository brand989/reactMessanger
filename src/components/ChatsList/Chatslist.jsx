import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';


const ChatsList = () => {

    const [chats, setChats] = useState([{ id: 1, name: 'Lena' }, { id: 2, name: 'Petya' }])

    const addChat = () => {
        const id = chats.length + 1
        setChats([...chats,{ id: `${id}`, name: `New Chat ${id}` }])
    }


    return (
    <Box sx={{ width: '50%', maxWidth: 150}}>
        <nav >
            <List>
                {chats.map((item, index) => (
                        <ListItem disablePadding key={index} >
                            <ListItemButton>
                            <Link to={`/chats/${item.id}`} >Чат {item.name} </Link> 
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
            <Button variant="contained" onClick={addChat}>Добавить чат</Button>
        </nav>
    </Box>
  
    )
    
};

export default ChatsList;