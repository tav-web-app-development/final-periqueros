
const Registration = require('../models/Registration');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();
    res.json(registrations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const registration = await Registration.findByPk(req.params.id);
    if (registration) {
      res.json(registration);
    } else {
      res.status(404).send('Registration not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createRegistration = async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const rowsDeleted = await Registration.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Registration not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getRegistrationsByUserId = async (req, res) => {
  try {
    const registrations = await Registration.findAll({ where: { userId: req.params.userId } });
    res.json(registrations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getRegistrationsByEventId = async (req, res) => {
  try {
    const registrations = await Registration.findAll({ where: { eventId: req.params.eventId } });
    res.json(registrations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllRegistrations, getRegistrationById, createRegistration, deleteRegistration, getRegistrationsByUserId, getRegistrationsByEventId };
