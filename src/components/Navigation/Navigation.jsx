import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { Outlet, Link, 
    useLocation } from "react-router-dom";



import ChatsList from '../Chatslist/Chatslist';


const Navigation = (props) => {

    const [chats, setChats] = useState([{ id: 1, name: 'Lena' }, { id: 2, name: 'Petya' }])
    const location = useLocation()
    

    return (
        
        <Box className="main" color='primary'>
            <Link to="/">Главная</Link>
            <div>---</div>
            <Link to="profile">Profile</Link>
            <ChatsList chats={chats} />
            <Outlet /> 
            { location.pathname == '/' && <div>Выберите чат</div> }
         </Box>
  
    )
    
};

export default Navigation;