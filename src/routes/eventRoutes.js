
const express = require('express');
const { getAllEvents, getEventById, createEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
