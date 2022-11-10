import React, { useState, useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';
import {useMatch} from "react-router-dom";



const Messanger = (props) => {

    const [items, setItems] = useState([{ id: 1, text: 'text3', author: "I\'m", Chatid: 1 }, { id: 2, text: 'text4', author: "robot", Chatid: 1 }]);
    const match = useMatch("/chats/:chatsId")
    const chatsId = match.params.chatsId


    const addMessage = (message) => {
        const idMessage = items.length
        setItems([...items, { id: idMessage, text: message, author: "I\'m", Chatid: `${chatsId}` }])
    };

    useEffect(() => {
        const lenghtItems = items.length
        if (items[lenghtItems - 1].author != "robot") {
            const idMessage = items.length
            setTimeout(
                () => setItems([...items, { id: idMessage, text: "я бот пока", author: "robot", Chatid: `${chatsId}` }]), 1000
            )
        }

    }, [items])

  

    return (

        <>
            <MessageList messages={items} />
            <SendMessage addMessage={addMessage} />
        </>
            
      

    )

}

export default Messanger;