import React from 'react';
import Message from "../Message/Message.tsx";
import './ChatBox.css'

interface MessageItem {
    message: string;
    author: string;
    datetime: string;
}

interface ChatBoxProps {
  messages: MessageItem[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <>
      <ol className="chatBox">
        {messages.map((msg: MessageItem, key: number) => (
          <Message
            key={key}
            message={msg.message}
            author={msg.author}
            datetime={msg.datetime}
          />
        ))}
      </ol>
    </>
  );
};

export default ChatBox;