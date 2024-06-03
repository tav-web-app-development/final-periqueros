
const express = require('express');
const { getAllRegistrations, getRegistrationById, createRegistration, deleteRegistration, getRegistrationsByUserId, getRegistrationsByEventId } = require('../controllers/registrationController');

const router = express.Router();

router.get('/', getAllRegistrations);
router.get('/:id', getRegistrationById);
router.post('/', createRegistration);
router.delete('/:id', deleteRegistration);
router.get('/user/:userId', getRegistrationsByUserId);
router.get('/event/:eventId', getRegistrationsByEventId);

module.exports = router;
