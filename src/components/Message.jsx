import React from 'react';


const Message = ({text, author}) => {

    return <div className='message'>{author}:{text}</div>;
};

export default Message;