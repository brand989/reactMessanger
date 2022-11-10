import React from 'react';
import styles from './Message.js';


const Message = (props) => {

    return (
        <div style={{...styles.message, alignSelf: `${props.author}` == 'robot' ? 'flex-start' : 'flex-end', width: '50%'}}>
            <div>{props.text}</div> 
            <div style={styles.author}>{props.author}</div>
        </div>
  
    )
    
};

export default Message;