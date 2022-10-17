import React, { useState, useEffect } from 'react';
import Message from './Message.jsx';



const MessageList = () => {


    const [items, setItems] = useState([{ id: 1, text: 'text3', author: "I\'m" }, { id: 2, text: 'text4', author: "Bot" }]);
    const [messageText, setMessageText] = useState();

    const addMessage = (event) => {
        const idMessage = items.length
        setItems([...items, { id: idMessage, text: messageText, author: "I\'m" }])
        setMessageText('')


    };

    const writeMessage = (event) => {
        setMessageText(event.target.value)
    };

    useEffect(() => {
        const lenghtItems = items.length

        if (items[lenghtItems - 1].author != "Bot") {
            const idMessage = items.length
            setTimeout(
                () => setItems([...items, { id: idMessage, text: "я бот пока", author: "Bot" }]), 1000
            )
        }

    }, [items])



    return (
        <div className='main'>
            <div className='messages'>
                {items.map((item, index) => (
                    <div key={index}><Message text={item.text} author={item.author} /></div>
                ))}

            </div>
            <div className='sendmessage'>
                <input type="text" id="mess" value={messageText} onChange={writeMessage} ></input>
                <button onClick={addMessage}>Ответить</button>
                </div>

        </div>
    )

}

export default MessageList;

