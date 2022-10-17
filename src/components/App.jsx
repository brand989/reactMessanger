import React, { useState } from 'react';
import '../App.scss'
import Message from './Message';
import MessageList from './MessageList';



const App = () => {
    return (
        <main >
            <MessageList />
        </main>
    )
};


export default App;