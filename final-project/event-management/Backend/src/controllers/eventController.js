
const Event = require('../models/Event');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send('Event not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const rowsDeleted = await Event.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Event not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllEvents, getEventById, createEvent, deleteEvent };
