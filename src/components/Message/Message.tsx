import React from 'react';
import send from '../../assets/sendpic.png'
import './Message.css'

interface MessageProps {
  message: string;
  author: string;
  datetime: string;
}

const Message: React.FC<MessageProps> = ({ datetime, author, message }) => {
  const date = new Date(datetime)

  return (
    <>
      <li className="message">
        <img src={send} alt={author} className="send" />
        <span className="time">{date.toLocaleTimeString('en-US', { hour12: false })}</span>
        <p className="author">{author}<span> написал:</span></p>
        <p className="text">{message}</p>
      </li>
    </>
  );
};

export default Message;