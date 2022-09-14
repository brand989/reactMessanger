import React from 'react';
import { render } from 'react-dom';
import Message from './Message.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.counter = 3;
    };

    state = {
        items: ['text1', 'text2']
      };

    click = (event) => {
        this.counter++
        this.setState(this.state.items = [...this.state.items, `text${this.counter}`])
  
    };


    render() {
        return(
            <main>
            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index}><Message text={item}/></li>
                ))}
            </ul>

            <div onClick={this.click}>добавь сообщение</div>

        </main>
        )
    }
};


export default App;