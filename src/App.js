import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ChatPage from './ChatPage';

const App = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <div className="app">
      {!username ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <ChatPage username={username} />
      )}
    </div>
  );
};

export default App;
