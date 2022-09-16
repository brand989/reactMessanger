import React from 'react';
import Message from './Message.jsx';



class MessageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [{ id: 1, text: 'text3', author: "I\'m" }, { id: 2, text: 'text4', author: "Bot" }],
            messageText: ''
        };
    }


    addMessage = (event) => {
        const idMessage = this.state.items.length
        this.setState({ items: [...this.state.items, { id: idMessage, text: this.state.messageText, author: "I\'m" }] })
        this.setState({messageText: ''})


    };

    writeMessage = (event) => {
        this.setState({ messageText: event.target.value })
    }

    componentDidUpdate(prevProps, prevState){
        const lenghtItems = this.state.items.length

        if(lenghtItems != prevState.items.length && this.state.items[lenghtItems-1].author != "Bot" ){
            const idMessage = this.state.items.length
            setTimeout(
            () => this.setState({ items: [...this.state.items, { id: idMessage, text: "я бот пока", author: "Bot" }] }), 1000
            )
        }
        
    }


    render() {

        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}><Message text={item.text} author={item.author} /></li>
                    ))}
                    <input type="text" id="mess" value={this.state.messageText} onChange={this.writeMessage} ></input>
                    <button onClick={this.addMessage}>Ответить</button>
                </ul>
            </div>
        )
    }
}

export default MessageList;

