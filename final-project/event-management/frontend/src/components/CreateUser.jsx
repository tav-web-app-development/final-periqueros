import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/users', { username, email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="create-user">
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
