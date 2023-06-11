import React from 'react';

const ChatRoom = ({ messages }) => {
  return (
    <div className="chat-room">
      {messages.map((message) => (
        <div className="message" key={message.id}>
          <span className="username">{message.username}: </span>
          <span className="message-text">{message.message}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
