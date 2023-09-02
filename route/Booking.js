const express = require('express');
const router = express.Router();
const {getAllBookings,newBooking,getBookingById,updateBookingById,deleteBookingById,getAvailableTimes} = require('../logic/Booking');

// GET all bookings
router.get('/', getAllBookings);

//GET booking by ID
router.get('/:id', getBookingById); 

// POST a new booking
router.post('/', newBooking);

// PUT (update) a booking by ID
router.put('/:id', updateBookingById);

// DELETE a booking by ID
router.delete('/:id', deleteBookingById);

// get Available hours
router.get('/get/availableTimes', getAvailableTimes);

module.exports =router;
