import React from 'react';
import Message from "../Message/Message.tsx";
import './ChatBox.css'

const ChatBox: React.FC = ({ messages }) => {
  return (
    <>
      <ol className="chatBox">
        {messages.map((msg, key) => {
          <Message
            key={key}
            message={msg.message}
            author={msg.author}
            datetime={msg.datetime}
          />
        })}
      </ol>
    </>
  );
};

export default ChatBox;