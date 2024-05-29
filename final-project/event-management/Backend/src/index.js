const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log
});

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});

const Event = sequelize.define('Event', {
  name: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false }
});

const Registration = sequelize.define('Registration', {
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  eventId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Event, key: 'id' } }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  const result = await User.destroy({ where: { id: req.params.id } });
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/events', async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

app.get('/api/events/:id', async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  const result = await Event.destroy({ where: { id: req.params.id } });
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
});

app.post('/api/registrations', async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/registrations', async (req, res) => {
  const registrations = await Registration.findAll();
  res.json(registrations);
});

app.get('/api/registrations/:id', async (req, res) => {
  const registration = await Registration.findByPk(req.params.id);
  if (registration) {
    res.json(registration);
  } else {
    res.status(404).json({ error: 'Registration not found' });
  }
});

app.delete('/api/registrations/:id', async (req, res) => {
  const result = await Registration.destroy({ where: { id: req.params.id } });
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Registration not found' });
  }
});

let server;
if (require.main === module) {
  server = app.listen(3000, async () => {
    await sequelize.sync({ force: true });
    console.log('Server is running on port 3000');
  });
}

const closeServer = async () => {
  if (server) {
    await server.close();
  }
  await sequelize.close();
};

module.exports = { app, sequelize, closeServer };
