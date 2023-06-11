import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className={`user ${user.online ? 'online' : 'offline'}`} key={user.id}>
          {user.username}
          <span className={`status ${user.online ? 'online' : 'offline'}`}>
            {user.online ? 'Online' : 'Offline'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
