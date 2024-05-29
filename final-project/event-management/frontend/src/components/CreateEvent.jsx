import React, { useState } from 'react';
import axios from 'axios';
import './CreateEvent.css';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/events', { name, date, location })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error creating the event!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="create-event">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
