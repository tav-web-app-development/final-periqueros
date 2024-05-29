import React from 'react';
import Header from './components/Header';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import RegistrationList from './components/RegistrationList';
import CreateRegistration from './components/CreateRegistration';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateEvent />
      <EventList />
      <CreateUser />
      <UserList />
      <CreateRegistration />
      <RegistrationList />
    </div>
  );
}

export default App;
