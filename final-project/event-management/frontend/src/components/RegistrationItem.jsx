import React from 'react';
import './RegistrationItem.css';

const RegistrationItem = ({ registration }) => {
  return (
    <li className="registration-item">
      <span>User ID: {registration.userId}</span> -{' '}
      <span>Event ID: {registration.eventId}</span>
    </li>
  );
};

export default RegistrationItem;
