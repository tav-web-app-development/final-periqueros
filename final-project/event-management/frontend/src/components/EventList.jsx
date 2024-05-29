import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';
import './EventList.css';
import axios from '../AxiosConfig';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
