const Booking = require('../model/Booking'); // Import the Booking model
const Playground = require('../model/Playground'); // Import your Playground and Booking models
const JoinBooking = require('../model/JoinBooking'); // Import your Playground and Booking models
const User = require('../model/User'); // Import your Playground and Booking models
const { Sequelize } = require('sequelize');
const AddMethod = require('../model/AddMethod');



module.exports = {

  // GET all bookings
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.findAll({
        include: [
          {
            model: JoinBooking,
            include: [User, AddMethod,]
          },
        ],
      });
      if (!bookings || bookings.length === 0) {
        return res.status(404).json({ error: 'No bookings found' });
      }
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET booking by ID
  getBookingById: async (req, res) => {
    const bookingId = req.params.id;

    try {
      const booking = await Booking.findByPk(bookingId, {
        include: [
          {
            model: JoinBooking,
            include: [User, AddMethod,]
          }
        ],
      });

      if (!booking) {
        return res.status(404).json({ error: 'Invalid Booking' });
      }
      res.status(200).json(booking);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new booking
  newBooking: async (req, res) => {
    try {
      const { bookingDate, startDate, period, endDate, status, bookingCode, notes, playgroundId, createdBy, cancellationReasonId, cost } = req.body;

      // Create a new booking record in the database
      const newBooking = await Booking.create({
        bookingDate,
        startDate,
        period,
        endDate,
        status,
        bookingCode,
        notes,
        playgroundId,
        createdBy,
        cancellationReasonId,
        cost
      });

      res.status(201).json(newBooking);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a booking by ID
  updateBookingById: async (req, res) => {
    const bookingId = req.params.id;
    const updatedBookingFields = req.body;

    try {
      const booking = await Booking.findByPk(bookingId);

      if (booking) {
        await booking.update(updatedBookingFields);
        res.json(booking);
      } else {
        res.status(404).json({ error: 'Booking not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a booking by ID
  deleteBookingById: async (req, res) => {
    const bookingId = req.params.id;

    try {
      const booking = await Booking.findByPk(bookingId);

      if (booking) {
        await booking.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'Booking not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAvailableTimes: async (req, res) => {
    const playgroundId = req.body.playgroundId;

    const startDate = new Date(req.body.date);
    const endDate = new Date(req.body.date);

    var startTime = req.body.startTime;
    const [startHours, minutes] = startTime.split(':').map(Number);
    startDate.setHours(startHours + 3, minutes);
    console.log(startDate);
    var endTime = req.body.endTime;
    const [endHours, min] = endTime.split(':').map(Number);

    endDate.setHours(endHours + 3, min);
    console.log(startDate, endDate);
    try {

      // const playground = await Playground.findByPk(playgroundId);


      const bookings = await Booking.findAll({
        where: {
          playgroundId: playgroundId,
          startDate: {
            [Sequelize.Op.gte]: startDate,
            // [Sequelize.Op.lt]: endDate,
          },
        },
        order: [['startDate', 'ASC']],
      });
      console.log(bookings);
      const availableTimes = await calculateAvailableTimes(startDate, endDate, bookings);
      res.json(availableTimes);
    } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

}
function calculateAvailableTimes(openingTime, closingTime, bookings) {
  const availableTimes = [];
  for (const booking of bookings) {
    if (openingTime <= booking.startdate) {

      availableTimes.push({ start: openingTime.getHours(), end: booking.startDate.getHours(), period: (booking.startDate.getHours() - openingTime.getHours()) });
    }
    openingTime.setTime(booking.startdate.getTime());
  }
  if (openingTime <= closingTime) {
    availableTimes.push({ start: openingTime.getHours(), end: closingTime.getHours(), period: (closingTime.getHours() - openingTime.getHours()) });
  }
  return availableTimes;
}

const getUsersForBooking = (booking) => {
  if (booking.JoinBookings) {
    // Access users through booking.JoinBookings[i].User
    return booking.JoinBookings.map((joinBooking) => joinBooking.User);
  }
  return [];
};