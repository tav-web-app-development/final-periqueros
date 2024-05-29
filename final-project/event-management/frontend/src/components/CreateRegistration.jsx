import React, { useState } from 'react';
import axios from '../AxiosConfig'; 

const CreateRegistration = () => {
  const [userId, setUserId] = useState('');
  const [eventId, setEventId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/registrations', { userId, eventId })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error creating the registration!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <label>
        Event ID:
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        />
      </label>
      <button type="submit">Create Registration</button>
    </form>
  );
};

export default CreateRegistration;
