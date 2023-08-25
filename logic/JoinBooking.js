const JoinBooking = require('../model/JoinBooking'); // Import the JoinBooking model

module.exports = {

  // GET all joinBookings
  getAllJoinBookings: async (req, res) => {
    try {
      const joinBookings = await JoinBooking.findAll();
      console.log('Retrieved joinBookings:', joinBookings); // Add this line for logging
      res.json(joinBookings);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //GET joinBooking by ID
  getJoinBookingById: async (req, res) => {
    const joinBookingId = req.params.id;

    try {
      const joinBooking = await JoinBooking.findByPk(joinBookingId);

      if (joinBooking) {
        res.json(joinBooking);
      } else {
        res.status(404).json({ error: 'JoinBooking not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new joinBooking
  newJoinBooking: async (req, res) => {
    try {
      const { userId, bookingId, addMethodId } = req.body;

      // Create a new joinBooking record in the database
      const newJoinBooking = await JoinBooking.create({
        userId,
        bookingId,
        addMethodId
      });

      res.status(201).json(newJoinBooking);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // PUT (update) a joinBooking by ID
  updateJoinBookingById: async (req, res) => {
    const joinBookingId = req.params.id;
    const updatedJoinBookingFields = req.body;

    try {
      const joinBooking = await JoinBooking.findByPk(joinBookingId);

      if (joinBooking) {
        await joinBooking.update(updatedJoinBookingFields);
        res.json(joinBooking);
      } else {
        res.status(404).json({ error: 'JoinBooking not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a joinBooking by ID
  deleteJoinBookingById: async (req, res) => {
    const joinBookingId = req.params.id;

    try {
      const joinBooking = await JoinBooking.findByPk(joinBookingId);

      if (joinBooking) {
        await joinBooking.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'JoinBooking not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}