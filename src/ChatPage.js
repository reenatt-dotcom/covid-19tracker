import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import ChatRoom from './ChatRoom';
import MessageForm from './MessageForm';

const ChatPage = ({ username }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch user and message data
    fetchUserData();
    fetchMessageData();
  }, []);

  const fetchUserData = () => {
    // Simulated API call to fetch user data
    // Replace with your own implementation
    const userData = [
      { id: 1, username: 'user1', online: true },
      { id: 2, username: 'user2', online: false },
      { id: 3, username: 'user3', online: true },
      // ... more user data
    ];
    setUsers(userData);
  };

  const fetchMessageData = () => {
    // Simulated API call to fetch message data
    // Replace with your own implementation
    const messageData = [
      { id: 1, username: 'user1', message: 'Hello', timestamp: '1623350400' },
      { id: 2, username: 'user2', message: 'Hi', timestamp: '1623350405' },
      { id: 3, username: 'user1', message: 'How are you?', timestamp: '1623350410' },
      // ... more message data
    ];
    setMessages(messageData);
  };

  const handleNewMessage = (message) => {
    // Simulated API call or socket event to send the new message
    // Replace with your own implementation
    const newMessage = {
      id: messages.length + 1,
      username,
      message,
      timestamp: Date.now().toString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-page">
      <div className="sidebar">
        <h2>Users</h2>
        <UserList users={users} />
      </div>
      <div className="main-content">
        <h2>Chat Room</h2>
        <ChatRoom messages={messages} />
        <MessageForm handleNewMessage={handleNewMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
