import React from 'react';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <li className="event-item">
      <span>{event.name}</span> - <span>{event.date}</span> -{' '}
      <span>{event.location}</span>
    </li>
  );
};

export default EventItem;
