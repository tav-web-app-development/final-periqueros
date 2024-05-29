import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import './UserList.css';
import axios from '../AxiosConfig';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
