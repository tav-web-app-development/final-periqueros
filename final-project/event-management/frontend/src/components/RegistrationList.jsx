import axios from '../AxiosConfig';
import React, { useEffect, useState } from 'react';

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get('/registrations');
        setRegistrations(res.data);
      } catch (error) {
        console.error(error);
        setError('There was an error fetching the registrations!');
      }
    };

    fetchRegistrations();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Registrations</h1>
      <ul>
        {registrations.map(registration => (
          <li key={registration.id}>{registration.userId} - {registration.eventId}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegistrationList;
