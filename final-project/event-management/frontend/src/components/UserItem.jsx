import React from 'react';
import './UserItem.css';

const UserItem = ({ user }) => {
  return (
    <li className="user-item">
      <span>{user.username}</span> - <span>{user.email}</span>
    </li>
  );
};

export default UserItem;
