const express = require('express');
const router = express.Router();
const {getAllJoinBookings,newJoinBooking,getJoinBookingById,updateJoinBookingById,deleteJoinBookingById} = require('../logic/JoinBooking');

// GET all joinBookings
router.get('/', getAllJoinBookings);

//GET joinBooking by ID
router.get('/:id', getJoinBookingById); 

// POST a new joinBooking
router.post('/', newJoinBooking);

// PUT (update) a joinBooking by ID
router.put('/:id', updateJoinBookingById);

// DELETE a joinBooking by ID
router.delete('/:id', deleteJoinBookingById);

module.exports =router;
