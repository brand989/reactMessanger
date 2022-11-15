import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addChat, deleteChat } from '../../store/chats/chatsSlice'
import { deleteChatsMessage } from '../../store/messages/messageSlice'




const ChatsList = () => {

    const chats = useSelector((state) => state.chats.chatsList)
    const dispatch = useDispatch()
    

    const addChats = () => {
        const length = chats.length - 1 
        const id = chats[length].id + 1
        dispatch(addChat(id))
    }

    const deleteChats = (id) => {
        console.log("delete")
        dispatch(deleteChat(id))
        dispatch(deleteChatsMessage(id))
    }

    return (
    <Box sx={{ width: '70%', maxWidth: 150}}>
        <nav >
            <List>
                {chats.map((item, index) => (
                        <ListItem disablePadding key={index} >
                            <ListItemButton>
                            <Link to={`/chats/${item.id}`} >Чат {item.name} </Link> 
                            </ListItemButton>
                            <div onClick={() => deleteChats(item.id)}>Удалить чат</div>
                        </ListItem>
                    ))}
            </List>
            <Button variant="contained" onClick={addChats}>Добавить чат</Button>
        </nav>
    </Box>
  
    )
    
};

export default ChatsList;