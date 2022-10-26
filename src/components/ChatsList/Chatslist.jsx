import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



const ChatsList = (props) => {


    return (
    <Box sx={{ width: '50%', maxWidth: 150}}>
        <nav >
            <List>
                {props.chats.map((item, index) => (
                        <ListItem disablePadding key={index} >
                            <ListItemButton>
                            <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
           
        </nav>
    </Box>
  
    )
    
};

export default ChatsList;