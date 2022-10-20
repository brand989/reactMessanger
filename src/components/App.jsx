import React, { useState, useEffect } from 'react';
import '../App.scss'
import Message from './Message/Message';
import MessageList from './MessageList/MessageList';
import SendMessage from './SendMessage/SendMessage';



const App = () => {


    const [items, setItems] = useState([{ id: 1, text: 'text3', author: "I\'m" }, { id: 2, text: 'text4', author: "robot" }]);
    const [messageText, setMessageText] = useState();

    const addMessage = () => {
        const idMessage = items.length
        setItems([...items, { id: idMessage, text: messageText, author: "I\'m" }])
        setMessageText('')

    };

    const writeMessage = (event) => {
        setMessageText(event.target.value)
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
        <main className="main">
            <MessageList messages={items}/>
            <SendMessage writeMessage ={writeMessage} addMessage={addMessage} messageText={messageText}/>
        </main>
    )
};


export default App;