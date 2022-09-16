import React from 'react';
import Message from './Message';
import MessageList from './MessageList';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.counter = 3;

    };

    state = {
        items: ['text1', 'text2']
    };

    click = (event) => {
        console.log('click')
        this.counter++
        this.setState(this.state.items = [...this.state.items, `text${this.counter}`])

    };


    render() {
        return (
            <main>
                
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}><Message text={item} /></li>
                    ))}
                </ul>

                <button onClick={this.click}>+1</button>
                <MessageList />
            </main>
        )
    }
};


export default App;